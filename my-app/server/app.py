from flask import Flask, make_response, request, jsonify
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
# from app import app, db
from flask import render_template
from models import Trainer, Client, Training, db


# Create the Flask application instance
app = Flask(__name__)

#Load the configuration from environment variables
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db' # Replace 'database.db' with the path to your database file

#Create the SQLAlchemy instance and bind it to the app 
# db = SQLAlchemy(app)
db.init_app(app)

#Create the database migration instance and bind it to the application and the database

migrate = Migrate(app, db)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/trainers', methods=['GET'])
def trainers():
    trainers = Trainer.query.all()
    trainers_dicts = [t.to_dict() for t in trainers]
    return make_response(jsonify(trainers_dicts), 200)

@app.route('/trainers/<int:trainer_id>', methods =['GET'])
def trainer_detail(trainer_id):
    trainer = Trainer.query.get(trainer_id)
    return make_response(jsonify(trainer.to_dict()), 200)

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
    return render_template('training_types.html', training_types=training_types)

@app.route('/training-type/<int:training_type_id>')
def training_type_detail(training_type_id):
    training_type = Training.query.get(training_type_id)
    return render_template('training_type_detail.html', training_type=training_type)

@app.route('/trainer/<int:trainer_id>/clients', methods=['GET', 'POST'])
def trainer_clients(trainer_id):
    trainer = Trainer.query.get(trainer_id)
    if request.method == 'POST':
        client_name = request.form['client_name']
        client = Client(name=client_name, trainer=trainer)
        db.session.add(client)
        db.session.commit()
    return render_template('trainer_clients.html', trainer=trainer)

@app.route('/trainer/<int:training_type_id>/trainings', methods=['GET', 'POST'])
def trainer_trainings(trainer_id):
    trainer = Trainer.query.get(trainer_id)
    if request.method == 'POST':
        training_type_id = int(request.form['training_type'])
        training_type = Training.query.get(training_type_id)
        trainer.training_types.append(training_type)
        db.session.commit()
    return render_template('trainer_trainings.html', trainer=trainer, training_types=Training.query.all())





if __name__ == '__main__':
    app.run(port=5555, debug=True)
