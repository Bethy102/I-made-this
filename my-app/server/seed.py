from faker import Faker
from app import app
from models import db, Trainer, Client, Training, Expertise
from random import choice, randint

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

fake = Faker()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db' # Replace 'database.db' with the path to your database file

db.init_app(app)
# db = SQLAlchemy(app)

training_types = ['Cardio', 'Strength Training', 'Yoga', 'Pilates', 'Bodybuilding', 'Nutrition' ]
platforms = ["Online","In-Person"]
# Create trainers

with app.app_context():
    # Create some clients
    Trainer.query.delete()
    Training.query.delete()
    Expertise.query.delete()
    Client.query.delete()
    for i in range(33):
        client = Client(name=fake.name(), email=fake.ascii_email(), phone=fake.phone_number())
        db.session.add(client)
        db.session.commit()
    
    # Create some trainers
    for i in range(11):
        random_training_type = choice(training_types) 
        trainer = Trainer(name=fake.name(),
                          price=randint(10,100),
                          platform=choice(platforms),
                          bio=fake.paragraph(),
                          image_url=fake.image_url())
        
        db.session.add(trainer)
        db.session.commit()

    # Give each trainer some expertises
    for trainer in Trainer.query.all():
        start_index = 0
        end_index = len(training_types)
        expertises = training_types[start_index:end_index]
        for expertise in expertises:
            new_expertise = Expertise(
                name = expertise,
                trainer_id = trainer.id,
            )

            db.session.add(new_expertise)
            db.session.commit()

    # For each trainer, assign some clients
    trainers =  Trainer.query.all()
    clients = Client.query.all()
    for trainer in trainers:
        training_services = Expertise.query.filter(trainer.id == Expertise.trainer_id).all()
        number_of_clients = randint(1,3)
        for x in range(number_of_clients):
            number_of_types = randint(1,len(training_services))
            client_trainings = []
            for y in range(number_of_types):
                client_trainings.append(choice(training_types))
            random_client = choice(clients)
            random_client
            new_training = Training(
                type = choice(client_trainings),
                name = fake.sentence(),
                trainer_id =  trainer.id,
                client_id = client.id
            )

            db.session.add(new_training)
            db.session.commit()
            
    # Create clients
    

    # Create training types

    training_types = ['Cardio', 'Strength Training', 'Yoga', 'Pilates', 'Bodybuilding', 'Nutrition' ]
    random_training_type = choice(training_types) 

    # training_types.trainer = trainer 
    # training_types.training = client 


    
    
    # for training_type in training_types:
    #     db.session.add(Training(name=training_type))

    # Commit changes to the database
    db.session.commit()
