from flask_cors import cross_origin
from flask import jsonify, request

def index_views(app):
    from app.models import Place

    @app.route("/api/places")
    @cross_origin(supports_credentials=True)
    def places():
        raw_places = Place.query.all()
        places = []
        for place in raw_places:
            places.append(
                {
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

            if not name or not address:
                return jsonify(error="Missing required fields"), 400

        return []