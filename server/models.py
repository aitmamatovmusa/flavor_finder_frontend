from flask_sqlalchemy import SQLAlchemy

# create a db object
db = SQLAlchemy()

# define a User model
class User(db.Model):
    # define the fields and types of the user table
    id = db.Column(db.Integer, primary_key=True) # primary key
    username = db.Column(db.String(80), unique=True, nullable=False) # unique and not null
    email = db.Column(db.String(120), unique=True, nullable=False) # unique and not null
    password = db.Column(db.String(60), nullable=False) # not null
