from faker import Faker
from app import db, Trainer, Client, Training

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

fake = Faker()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db' # Replace 'database.db' with the path to your database file

db.init_app(app)
# db = SQLAlchemy(app)


# Create trainers

with app.app_context():
    for i in range(10):
        trainer = Trainer(name=fake.name())
        db.session.add(trainer)

    # Create clients
    for i in range(50):
        client = Client(name=fake.name(), contact=fake.phone_number())
        db.session.add(client)

    # Create training types
    training_types = ['Cardio', 'Strength Training', 'Yoga', 'Pilates']
    for training_type in training_types:
        db.session.add(Training(name=training_type))

    # Commit changes to the database
    db.session.commit()
