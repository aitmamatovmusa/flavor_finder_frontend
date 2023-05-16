from flask import Blueprint, request, session ,jsonify
from flask_bcrypt import Bcrypt
from models import db, User

account = Blueprint("account", __name__) # create a blueprint object named account

bcrypt = Bcrypt()

# define routes for the blueprint
@account.route("/register",methods=["POST","GET"])
def register():
    if request.method == "POST":
        email = request.json["email"]
        username = request.json["username"] 
        password = request.json["password"]
        
        user_exists = User.query.filter_by(email=email).first() is not None
        if user_exists:
            return jsonify({"Error": "Already exists"}) ,409
    
        hashed_password = bcrypt.generate_password_hash(password)
        new_user = User(email=email,password=hashed_password,username=username)
        
        db.session.add(new_user)
        db.sesseion.commit()
        
        session["user_id"] = new_user.id

    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })
    
    
@account.route("/login",methods=["POST","GET"])
def login():
    if request.method == "POST":
        email = request.json["email"]
        password = request.json["password"]

        user = User.query.filter_by(email=email).first()

        if user is None:
            return jsonify({"error": "Unauthorized"}), 401

        if not bcrypt.check_password_hash(user.password, password):
            return jsonify({"error": "Unauthorized"}), 401
    
        session["user_id"] = user.id

        return jsonify({
            "id": user.id,
            "email": user.email
        })


@account.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id")
    return "200"

