from sqlalchemy import Column, Integer, String, Table, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from flask_sqlalchemy import SQLAlchemy

Base = declarative_base()
db = SQLAlchemy()

# Define the junction tables
trainer_training_table = Table('trainer_training', Base.metadata,
                               Column('trainer_id', Integer, ForeignKey('trainers.id')),
                               Column('training_id', Integer, ForeignKey('trainings.id'))
                               )

client_training_table = Table('client_training', Base.metadata,
                              Column('client_id', Integer, ForeignKey('clients.id')),
                              Column('training_id', Integer, ForeignKey('trainings.id'))
                              )

# Define the Trainers model
class Trainer(db.Model, Base):
    __tablename__ = 'trainers'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    trainings = relationship('Training', secondary=trainer_training_table, back_populates='trainers')

# Define the Clients model
class Client(db.Model, Base):
    __tablename__ = 'clients'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    contact = Column(String)
    trainings = relationship('Training', secondary=client_training_table, back_populates='clients')

# Define the Trainings model
class Training(db.Model, Base):
    __tablename__ = 'trainings'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    trainers = relationship('Trainer', secondary=trainer_training_table, back_populates='trainings')
    clients = relationship('Client', secondary=client_training_table, back_populates='trainings')
