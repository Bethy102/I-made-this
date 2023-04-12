from sqlalchemy import Column, Integer, String, Table, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
# from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})


# Base = declarative_base()
db = SQLAlchemy(metadata=metadata)


# Define the Trainers model
class Trainer(db.Model):

    __tablename__ = 'trainers'

    serialize_rules = ('-trainings.trainer',)

    id = db.Column(Integer, primary_key=True)
    name = db.Column(db.String)
    price = db.Column(db.Integer)
    # expertise = db.Column(db.Integer)
    platform = db.Column(db.String)
    bio= db.Column(db.String)
    image_url = db.Column(db.String)

    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())


    trainings = db.relationship('Training', backref='trainer')
    expertises = db.relationship('Expertise', backref='trainer')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'platform': self.platform,
            'price': self.price,
            'bio': self.bio,
            # 'expertises': self.expertises,
            'image_url': self.image_url,
        }


class Expertise(db.Model):

    __tablename__ = 'expertises'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    trainer_id = db.Column(db.Integer, db.ForeignKey("trainers.id"))

    def to_dict(self):
        return {
            'id': self.id,
            'type': self.name,
            'trainer_id': self.trainer_id,
        }



# Define the Trainings model
class Training(db.Model):
    __tablename__ = 'trainings'

    serialize_rules = ('-trainer.trainings', '-client.trainings', )

    id = db.Column(Integer, primary_key=True)
    type = db.Column(db.String)
    name= db.Column(db.String)

    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    trainer_id = db.Column(db.Integer, db.ForeignKey('trainers.id'))
    client_id = db.Column(db.Integer, db.ForeignKey('clients.id'))



    # trainers = db.relationship('Trainer', backref='trainings')
    # clients = db.relationship('Client', backref='trainings')

# Define the Clients model
class Client(db.Model):

    __tablename__ = 'clients'

    id = db.Column(Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    phone = db.Column(db.String)

    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    trainings = db.relationship('Training', backref='clients')



# Define the junction tables
# trainer_training_table = Table('trainer_training', Base.metadata,
#                                Column('trainer_id', Integer, ForeignKey('trainers.id')),
#                                Column('training_id', Integer, ForeignKey('trainings.id'))
#                                )

# client_training_table = Table('client_training', Base.metadata,
#                               Column('client_id', Integer, ForeignKey('clients.id')),
#                               Column('training_id', Integer, ForeignKey('trainings.id'))
#                               )