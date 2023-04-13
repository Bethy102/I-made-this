from flask import Flask, make_response, request, jsonify, session, abort
from flask_migrate import Migrate
# from flask_restful import Api, Resource
from werkzeug.exceptions import NotFound, Unauthorized

# from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
# from app import app, db
from models import Trainer, Client, Training, db, Expertise


# Create the Flask application instance
app = Flask(__name__)
# CORS(app)

#Load the configuration from environment variables
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db' # Replace 'database.db' with the path to your database file
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

#Set up
    # generate a secrete key `python -c 'import os; print(os.urandom(16))'`
app.secret_key = 'Secret Key Here!'
#Create the SQLAlchemy instance and bind it to the app 
# db = SQLAlchemy(app)
db.init_app(app)

#Create the database migration instance and bind it to the application and the database

migrate = Migrate(app, db)
# api = Api(app)





@app.route('/')
def index():
    return "Index for Trainers/Expertise/Training/Client API"

@app.route('/trainers', methods=['GET'])
def trainers():
    trainers = Trainer.query.all()
    trainers_dicts = [t.to_dict() for t in trainers]
    return make_response(jsonify(trainers_dicts), 200)

@app.route('/trainers/<int:trainer_id>', methods =['GET'])
def trainer_detail(trainer_id):
    trainer = Trainer.query.get(trainer_id)
    return make_response(jsonify(trainer.to_dict()), 200)

@app.route('/expertises', methods=['GET'])
def expertises():
    expertises = Expertise.query.all()
    expertises_dicts = [e.to_dict() for e in expertises]
    return make_response(jsonify(expertises_dicts), 200)

@app.route('/expertises/<int:trainer_id>', methods=['GET'])
def  get_expertises (trainer_id):
    expertises = Expertise.query.get(trainer_id)
    return make_response(jsonify(expertises.to_dict()),200)


@app.route('/clients')
def clients():
    clients = Client.query.all()
    clients_dicts = [c.to_dict() for c in clients]
    return make_response(jsonify(clients_dicts), 200)

@app.route('/clients/<int:client_id>')
def client_detail(client_id):
    client = Client.query.get(client_id)
    return make_response(jsonify(client.to_dict()), 200)

@app.route('/training-types')
def training_types():
    training_types = Training.query.all()
    return make_response(jsonify(training_types.to_dict()), 200)
    # return render_template('training_types.html', training_types=training_types)

@app.route('/training-type/<int:training_type_id>')
def training_type_detail(training_type_id):
    training_type = Training.query.get(training_type_id)
    return make_response(jsonify(training_type.to_dict()),200)
    # return render_template('training_type_detail.html', training_type=training_type)

@app.route('/trainer/<int:trainer_id>/clients', methods=['GET', 'POST'])
def trainer_clients(trainer_id):
    trainer = Trainer.query.get(trainer_id)
    if request.method == 'POST':
        client_name = request.form['client_name']
        client = Client(name=client_name, trainer=trainer)
        db.session.add(client)
        db.session.commit()
        return make_response(jsonify(client.to_dict()),200)
    # return render_template('trainer_clients.html', trainer=trainer)

@app.route('/trainer/<int:training_type_id>/trainings', methods=['GET', 'POST'])
def trainer_trainings(trainer_id):
    trainer = Trainer.query.get(trainer_id)
    if request.method == 'POST':
        training_type_id = int(request.form['training_type'])
        training_type = Training.query.get(training_type_id)
        trainer.training_types.append(training_type)
        db.session.commit()

        return make_response (jsonify(training_type.to_dict()),)
    # return render_template('trainer_trainings.html', trainer=trainer, training_types=Training.query.all())













#  #1. User

# class Users(Resource):
#     def post(self):
#         form_json = request.get_json()
#         new_user = User(
#             name=form_json['name'],
#             email=form_json['email']
#             )
#         db.session.add(new_user)
#         db.session.commit()
#         session['user_id'] = new_user.id
#         response = make_response (
#             new_user.to_dict(), 201
#         )
#         return response
#     api.add_response(Users, '/users')

#     # 2. Test this route in the clientsrc/component/Authentication.js
#     # 3. Create a Login route
#         # 3.1 Create a login class that inherits from Resource
#     # 3.2 Use api.add_resource to add the '/login' path
#     # 3.3 Build out the post method
#         # 3.3.1 convert the request from json and select the user name sent form the client. 
#         # 3.3.2 Use the name to query the user with a .filter
#         # 3.3.3 If found set the user_id to the session hash
#         # 3.3.4 convert the user to_dict and send a response back to the client 
#     #3.4 Toggle the signup form to login and test the login route
# class Login(Resource):
#     def post(self):
#         user = Client.query.filter_by(name=request.get_json()['name']).first()
#         session['user_id'] = user.id
#         response = make_response(
#             user.to_dict(),
#             200
#         )
#         return response

# api.add_resource(Login, '/login')

# # 4. Create an AuthorizedSession class that inherites from Resource 
# class AuthorizedSession(Resource):
#     def get(self):
#         user = Client.query.filter_by(id=session.get('user_id')).first()
#         if user:
#             response = make_response(
#                 user.to_dict(),
#                 200
#             )
#             return response
#         else:
#             abort(401, "Unauthorized")
# api.add_resource(AuthorizedSession, '/authorized')
# # 5. Head back to client/src?app.js to restrict access to tour app!
# # 6. Logout





if __name__ == '__main__':
    app.run(port=5555, debug=True)
