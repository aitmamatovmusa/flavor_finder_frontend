from flask_cors import cross_origin
from flask import jsonify, request

def index_views(app):
    from app.models import Place
    from app import db

    @app.route("/api/places")
    @cross_origin(supports_credentials=True)
    def places():
        raw_places = Place.query.all()
        places = []
        for place in raw_places:
            places.append(
                {
                    "id": place.id,
                    "name": place.name,
                    "address": place.address,
                    "rating": place.rating,
                    "num_reviews": place.num_reviews,
                    "average_price": place.average_price,
                    "map_link": place.map_link,
                }
            )
        return jsonify(places)

    @app.route("/add-new-place", methods=["POST"])
    def add_new_place():
        if request.method == "POST":
            new_place = request.get_json()

            if not new_place:
                return jsonify(error="Invalid json"), 400

            name = new_place["name"]
            address = new_place["address"]
            average_price = new_place["average_price"]
            map_link = new_place["map_link"]
            form_validation = any(field is None or field == '' for field in [name, address, average_price, map_link])

            if form_validation:
                return jsonify(error="Missing required fields"), 400
            
            is_place_exist = Place.query.filter_by(name=name).first()
            if is_place_exist:
                return jsonify(error="The place already exists"), 400
                
            new_place = Place(
                name=name,
                address=address, 
                num_reviews=0,
                average_price=average_price,
                map_link=map_link
            )

            db.session.add(new_place)
            db.session.commit()
            
        return jsonify("The place has been successfully created"), 200