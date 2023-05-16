from flask import Blueprint, request, session, redirect ,jsonify
from flask_bcrypt import Bycrypt
from models import db, User
# create a blueprint object named account
account = Blueprint("account", __name__)

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
    
        hashed_password = bycrypt.generate_password_hash(password)
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
        user = request.form["login_form"]
        session["user"] = user
    
    return redirect("/") 