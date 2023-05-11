# flavor_finder
Find your place to eat

# Frontend Setup

Clone the project

```bash
git clone https://github.com/aytmamatov/flavor_finder.git
```

Go to the client folder

```bash
cd client/
```

Install all dependencies using the command

```bash
npm install
#or
yarn install
```

### Dev and Build

If you want to start development, use the following command

```bash
npm run dev
#or
yarn dev
```

If you want to build the application, use the following command

```bash
npm run build
#or
yarn build
```

# Backend Setup

This project uses Flask as the backend server. 
To get started, follow these steps:

1. Install Python 3.6 or higher on your system.
2. Clone the repository to your local machine.
3. Create a virtual environment for the project and activate it.

```bash
python3 -m venv env
source env/bin/activate  # for Linux/Mac
env\Scripts\activate  # for Windows
```

4. Install the required packages using pip.

```bash
pip install -r requirements.txt
```

5. Set the environment variables for Flask. Create a `.env` file in the project root directory and add the following:

```
FLASK_APP=app.py
FLASK_ENV=development  # or production
SQLALCHEMY_DATABASE_URI=postgresql://<username>:<password>@<host>/<database>
```

6. Run the Flask server.

```bash
flask run
```

The server will start running at http://127.0.0.1:5000/ by default. 

That's it! You should now have the Flask backend server up and running on your local machine.
