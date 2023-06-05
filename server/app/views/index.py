from flask_cors import cross_origin
from flask import jsonify, request
from sqlalchemy import func

def has_any_empty_fields(fields):
    return any(field is None or field == '' for field in fields)

def index_views(app):
    from app.models import Place, Comment
    from app import db

    @app.route("/api/places")
    @cross_origin(supports_credentials=True)
    def places():
        search_value = request.args.get('search')
        raw_places = Place.query.filter(Place.name.ilike(f'%{search_value}%')).all() if search_value else Place.query.all()
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
    
    @app.route("/api/place/<id>")
    @cross_origin(supports_credentials=True)
    def place(id):
        place = Place.query.filter_by(id=id).first()

        if place:
            return jsonify({
                "id": place.id,
                "name": place.name,
                "address": place.address,
                "rating": place.rating,
                "num_reviews": place.num_reviews,
                "average_price": place.average_price,
                "map_link": place.map_link,
            })
            
        return {}

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
            is_any_empty_fields = has_any_empty_fields([name, address, average_price, map_link])

            if is_any_empty_fields:
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

    @app.route("/api/comments/<place_id>")
    @cross_origin(supports_credentials=True)
    def comments(place_id):
        raw_comments = Comment.query.filter_by(place_id=place_id).all()
        comments = []

        for comment in raw_comments:
            comments.append({
                'id': comment.id,
                'user_name': comment.user_name,
                'review': comment.review,
                'rating': comment.rating,
            })

        return comments

    @app.route("/add-new-comment", methods=["POST"])
    def add_new_comment():
        if request.method == "POST":
            new_comment = request.get_json()

            if not new_comment:
                return jsonify(error="Invalid json"), 400
            
            user_name = new_comment['user_name']
            review = new_comment['review']
            rating = new_comment['rating']
            address = new_comment['address']
            place_id = new_comment['place_id']

            is_any_empty_fields = has_any_empty_fields([user_name, review, rating, address, place_id])

            if (is_any_empty_fields):
                return jsonify(error="Missing required fields"), 400
            
            place = Place.query.filter_by(id=place_id).first()

            if not place:
                return jsonify(error="Invalid place"), 400
            
            new_comment = Comment(user_name=user_name, review=review, rating=rating, address=address, place_id=place_id)

            db.session.add(new_comment)

            comments_count = Comment.query.filter_by(place_id=place_id).count()
            comments_rating = Comment.query.with_entities(func.avg(Comment.rating).label('average')).filter_by(place_id=place_id).one().average
            rounded_comments_rating = round(comments_rating)

            place.rating = rounded_comments_rating
            place.num_reviews = comments_count

            db.session.commit()

        return jsonify("The comment has been successfully created"), 200