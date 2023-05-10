from flask import Flask
from dotenv import load_dotenv
from account import account # import the account blueprint object

load_dotenv()

app = Flask(__name__)

# register the blueprints with the app object
app.register_blueprint(account)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == "__main__":
    app.run(debug=True)