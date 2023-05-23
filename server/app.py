import os
from flask import Flask
from flask_session import Session
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
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
    CORS(app, support_credentials=True)

    db.init_app(app)
    bcrypt.init_app(app)
    session.init_app(app)

    with app.app_context():
        db.create_all()

    app.register_blueprint(account)

    return app

@app.route("/api/places")
@cross_origin(supports_credentials=True)
def places():
    return []

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
