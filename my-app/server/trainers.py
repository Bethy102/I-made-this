from app import app, db
from models import Trainer
# from app import create_app
# app = create_app()
# app.app_context().push()

with app.app_context():


    print("Deleting data...")
    Trainer.query.delete()


    print("Creating trainers...")

    trainer1 = Trainer(name="Ella", price="$150/h", platform="In-Person/Online", bio ="", image_url="./images/cooking.jpg")
    db.session.add(trainer1)
    db.session.commit()
    trainer2= Trainer(name="Mijo", price="$100/h", platform="In-Person/Online", bio ="", image_url="")
    db.session.add(trainer2)
    db.session.commit()
    trainer3= Trainer(name="Derek", price="$200/h", platform="Online", bio ="", image_url="")
    db.session.add(trainer3)
    db.session.commit()
    trainer4= Trainer(name="Mayowa", price="$120/h", platform="In-Person/Online", bio ="", image_url="")
    db.session.add(trainer4)
    db.session.commit()
    trainer5= Trainer(name="Aya", price="$100/h", platform="In-Person/Online", bio ="", image_url="")
    db.session.add(trainer5)
    db.session.commit()
    trainer6= Trainer(name="Ebony", price="$100/h", platform="In-Person/Online", bio ="", image_url="")
    db.session.add(trainer6)
    db.session.commit()
    trainer7= Trainer(name="Emily", price="$100/h", platform="In-Person/Online", bio ="", image_url="")
    db.session.add(trainer7)
    db.session.commit()
    trainer8= Trainer(name="Ben", price="$100/h", platform="In-Person/Online", bio ="", image_url="")
    db.session.add(trainer8)
    db.session.commit()
    trainer9= Trainer(name="", price="$100/h", platform="In-Person/Online", bio ="", image_url="")
    db.session.add(trainer9)
    db.session.commit()
    trainer10= Trainer(name="", price="$100/h", platform="In-Person/Online", bio ="", image_url="")
    db.session.add(trainer10)
    db.session.commit()
    trainer11= Trainer(name="Asia", price="$100/h", platform="In-Person/Online", bio ="", image_url="")
    db.session.add(trainer11)
    db.session.commit()

    db.session.add(trainer1)
    db.session.commit()