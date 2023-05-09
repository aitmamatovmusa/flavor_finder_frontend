from flask import request
import app

@app.route("/register",methods=["POST","GET"])
def register():
    if request.method == "POST":
        user = request.form["register_form"]
        print(user)
        
    return "Hello World"

@app.route("/login",methods=["POST","GET"])
def login():
    if request.method == "POST":
        data = request.form["register_form"]
        print(data)
    
    return "Hello World"

