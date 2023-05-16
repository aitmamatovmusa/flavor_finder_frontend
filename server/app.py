import os
from flask import Flask,Session
from dotenv import load_dotenv
from flask_bcrypt import Bcrypt
from models import db 
from flask_sqlalchemy import SQLAlchemy

# Blueprints
from account import account 

load_dotenv()

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['SQLALCHEMY_DATABASE_URI']
db.init_app(app)
db.create_all()
bcrypt = Bcrypt(app)
server_session = Session(app)


# register the blueprints with the app object
app.register_blueprint(account)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == "__main__":
    app.run(debug=True)