from app import app, db
from models import Trainer
# from app import create_app
# app = create_app()
# app.app_context().push()

with app.app_context():


    print("Deleting data...")
    Trainer.query.delete()


    print("Creating trainers...")

    trainer1 = Trainer(name="Ella", price="$150/h", platform="In-Person-Online", 
                       bio =" a certified personal trainer with over 10 years of experience in the fitness industry. My passion for fitness and wellness has led me to help countless clients achieve their fitness goals, whether it's weight loss, building muscle, or improving their overall health. I specialize in creating personalized workout plans that are tailored to your individual needs and goals. Let's work together to help you achieve your best self!", 
                       image_url="./images/Ella.jpg")
    db.session.add(trainer1)
    db.session.commit()
    trainer2= Trainer(name="Mijo", price="$150/h", platform="In-Person-Online", 
                      bio ="My name is Mijo, and I'm a NASM-certified personal trainer with a passion for helping people transform their bodies and their lives. With over 5 years of experience in the fitness industry, I've worked with clients of all ages and fitness levels, from beginners to competitive athletes. My approach to training is holistic, combining exercise, nutrition, and mindset to help you reach your full potential. Let's work together to create a healthy and sustainable lifestyle that you'll love.", 
                      image_url="./images/Mijo.jpg")
    db.session.add(trainer2)
    db.session.commit()
    trainer3= Trainer(name="Derek", price="$200/h", platform="Online", 
                      bio ="Hey there, I'm Derek, a personal trainer and group fitness instructor with a focus on functional training and bodyweight exercises. I believe that fitness should be fun and accessible to everyone, regardless of age or ability. With over 7 years of experience in the fitness industry, I've helped hundreds of clients achieve their fitness goals through challenging and dynamic workouts. Let's work together to improve your strength, mobility, and overall fitness level.", 
                      image_url="./images/Superman.jpg")
    db.session.add(trainer3)
    db.session.commit()
    trainer4= Trainer(name="Aya", price="$120/h", platform="In-Person/Online", 
                      bio ="Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother", 
                      image_url="./images/Aya.jpg")
    db.session.add(trainer4)
    db.session.commit()
    trainer5= Trainer(name="Mayowa", price="$250/h", platform="In-Person/Online",
                       bio ="I'm Mayowa, a fitness enthusiast and certified personal trainer with a focus on high-intensity interval training (HIIT) and weightlifting. My goal as a trainer is to help you push your limits and exceed your expectations, both in and out of the gym. With over 5 years of experience in the fitness industry, I've worked with clients of all fitness levels, from beginners to advanced athletes. Let's work together to help you achieve your fitness goals and become the best version of yourself.",
                         image_url="https://ca.slack-edge.com/T02MD9XTF-U04GNQ5DA9L-e66dcc81295b-512")
    db.session.add(trainer5)
    db.session.commit()
    trainer6= Trainer(name="Teddy", price="$180/h", platform="In-Person", 
                      bio ="Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother", 
                      image_url="https://ca.slack-edge.com/T02MD9XTF-U04G3JTEM35-0990270218e8-512")
    db.session.add(trainer6)
    db.session.commit()
    trainer7= Trainer(name="Emily", price="$130/h", platform="In-Person", 
                      bio ="Hi, I'm Emily, a certified personal trainer and yoga instructor with a passion for helping people find balance and inner peace through fitness. I specialize in creating customized workout plans that combine strength training, yoga, and mindfulness techniques to help you achieve a strong, toned body and a calm, centered mind. Whether you're looking to lose weight, reduce stress, or simply improve your overall health and well-being, I'm here to support you every step of the way.", 
                      image_url="https://ca.slack-edge.com/T02MD9XTF-U04GKNL5GD7-38bed81b745d-512")
    db.session.add(trainer7)
    db.session.commit()
    trainer8= Trainer(name="Ben", price="$80/h", platform="In-Person-Online", 
                      bio ="Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother", 
                      image_url="https://ca.slack-edge.com/T02MD9XTF-U04CURNGLNR-a14ac18bd4cf-512")
    db.session.add(trainer8)
    db.session.commit()
    trainer9= Trainer(name="Galen", price="$110/h", platform="In-Person-Online", 
                      bio ="Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother", 
                      image_url="https://ca.slack-edge.com/T02MD9XTF-U04FA3F1Q23-d6b13161ddab-512")
    db.session.add(trainer9)
    db.session.commit()
    trainer10= Trainer(name="Eli", price="$150/h", platform="In-Person-Online", 
                       bio ="Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother", 
                       image_url="https://ca.slack-edge.com/T02MD9XTF-U044PM9SREF-fe48edf4d167-512")
    db.session.add(trainer10)
    db.session.commit()
    trainer11= Trainer(name="Asia", price="$100/h", platform="Online", 
                       bio ="Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother",
                        image_url="https://ca.slack-edge.com/T02MD9XTF-U04D6G6844A-f17b3f13cfd7-512")
    db.session.add(trainer11)
    db.session.commit()

    db.session.add(trainer1)
    db.session.commit()