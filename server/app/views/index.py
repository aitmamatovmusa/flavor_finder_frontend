from flask_cors import cross_origin
from flask import jsonify

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
