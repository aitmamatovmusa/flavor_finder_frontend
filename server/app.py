import os
from flask import Flask
from flask_session import Session
from flask_bcrypt import Bcrypt
from dotenv import load_dotenv
from models import db

# Blueprints
from account import account 

load_dotenv()

bcrypt = Bcrypt()
session = Session()
app = Flask(__name__)

def create_app():
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['SQLALCHEMY_DATABASE_URI']

    db.init_app(app)
    bcrypt.init_app(app)
    session.init_app(app)

    with app.app_context():
        db.create_all()

    app.register_blueprint(account)

    return app

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)