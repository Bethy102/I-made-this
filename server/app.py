from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
# from app import app, db
from models import Trainer, Client, Training
from flask import render_template, request
from models import Trainer, Client, Training


# Create the Flask application instance
app = Flask(__name__)

#Load the configuration from environment variables
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db' # Replace 'database.db' with the path to your database file

#Create the SQLAlchemy instance and bind it to the app 
db = SQLAlchemy(app)

#Create the database migration instance and bind it to the application and the database

migrate = Migrate(app, db)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/trainers')
def trainers():
    trainers = Trainer.query.all()
    return render_template('trainers.html', trainers=trainers)

@app.route('/clients')
def clients():
    clients = Client.query.all()
    return render_template('clients.html', clients=clients)

@app.route('/training-types')
def training_types():
    training_types = Training.query.all()
    return render_template('training_types.html', training_types=training_types)

@app.route('/trainer/<int:trainer_id>')
def trainer_detail(trainer_id):
    trainer = Trainer.query.get(trainer_id)
    return render_template('trainer_detail.html', trainer=trainer)

@app.route('/client/<int:client_id>')
def client_detail(client_id):
    client = Client.query.get(client_id)
    return render_template('client_detail.html', client=client)

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

@app.route('/client/<int:client_id>/trainings', methods=['GET', 'POST'])
def client_trainings(client_id):
    client = Client.query.get(client_id)
    if request.method == 'POST':
        training_type_id = int(request.form['training_type'])
        training_type = Training.query.get(training_type_id)
        client.training_types.append(training_type)
        db.session.commit()
    return render_template('client_trainings.html', client=client, training_types=Training.query.all())





if __name__ == '__main__':
    app.run(port=5555, debug=True)
