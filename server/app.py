import os
from flask import Flask
from dotenv import load_dotenv

from models import db

# Blueprints
from account import account

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['SQLALCHEMY_DATABASE_URI']
db.init_app(app)

with app.app_context():
    db.create_all()

app.register_blueprint(account)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == "__main__":
    app.run(debug=True)