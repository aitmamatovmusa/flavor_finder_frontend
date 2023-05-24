import os
from dotenv import load_dotenv
from flask import Flask
from flask_session import Session
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from app.views.index import index_views

load_dotenv()

bcrypt = Bcrypt()
session = Session()
db = SQLAlchemy()

def create_app():
    from app.account import account
    
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['SQLALCHEMY_DATABASE_URI']
    CORS(app, support_credentials=True)

    db.init_app(app)
    bcrypt.init_app(app)
    session.init_app(app)

    with app.app_context():
        db.create_all()

    app.register_blueprint(account)

    index_views(app)

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
