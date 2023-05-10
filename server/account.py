from flask import Blueprint, request, session, redirect

# create a blueprint object named account
account = Blueprint("account", __name__)

# define routes for the blueprint
@account.route("/register",methods=["POST","GET"])
def register():
    if request.method == "POST":
        user = request.form["register_form"]
        session["user"] = user
    
    return redirect("/") 
        
        

@account.route("/login",methods=["POST","GET"])
def login():
    if request.method == "POST":
        user = request.form["login_form"]
        session["user"] = user
    
    return redirect("/") 