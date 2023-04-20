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
                       bio =" Ella is a certified personal trainer with over 10 years of experience in the fitness industry. Her passion for fitness and wellness has led me to help countless clients achieve their fitness goals, whether it's weight loss, building muscle, or improving their overall health. She specializes in creating personalized workout plans that are tailored to your individual needs and goals. Achieve your best self by working with Ella!", 
                       image_url="./images/Ella.jpg")
    db.session.add(trainer1)
    db.session.commit()
    trainer2= Trainer(name="Mijo", price="$150/h", platform="In-Person-Online", 
                      bio ="Mijo is a NASM-certified personal trainer with a passion for helping people transform their bodies and their lives. With over 5 years of experience in the fitness industry, she has worked with clients of all ages and fitness levels, from beginners to competitive athletes. Her approach to training is holistic, combining exercise, nutrition, and mindset to help you reach your full potential. With Mijo create a healthy and sustainable lifestyle that you'll love.", 
                      image_url="./images/Mijo.jpg")
    db.session.add(trainer2)
    db.session.commit()
    trainer3= Trainer(name="Derek", price="$200/h", platform="Online", 
                      bio ="Derek is a personal trainer and group fitness instructor with a focus on functional training and bodyweight exercises. He believes that fitness should be fun and accessible to everyone, regardless of age or ability. With over 7 years of experience in the fitness industry, He has helped hundreds of clients achieve their fitness goals through challenging and dynamic workouts. Work together with Derek to improve your strength, mobility, and overall fitness level.", 
                      image_url="./images/Superman.jpg")
    db.session.add(trainer3)
    db.session.commit()
    trainer4= Trainer(name="Aya", price="$120/h", platform="In-Person/Online", 
                      bio ="Aya is a certified personal trainer who is dedicated to helping her clients achieve their fitness goals in a safe and effective way. With over 5 years of experience, Aya is knowledgeable in a variety of training techniques and is always looking for new ways to challenge her clients. She is committed to creating a positive and supportive environment that helps her clients stay motivated and achieve long-term success.", 
                      image_url="./images/Aya.jpg")
    db.session.add(trainer4)
    db.session.commit()
    trainer5= Trainer(name="Mayowa", price="$250/h", platform="In-Person/Online",
                       bio ="Mayowa is a fitness enthusiast and certified personal trainer with a focus on high-intensity interval training (HIIT) and weightlifting. Her goal as a trainer is to help you push your limits and exceed your expectations, both in and out of the gym. With over 5 years of experience in the fitness industry, She has worked with clients of all fitness levels, from beginners to advanced athletes. Let's work together to help you achieve your fitness goals and become the best version of yourself.",
                         image_url="https://ca.slack-edge.com/T02MD9XTF-U04GNQ5DA9L-e66dcc81295b-512")
    db.session.add(trainer5)
    db.session.commit()
    trainer6= Trainer(name="Teddy", price="$180/h", platform="In-Person", 
                      bio ="Teddy is a certified personal trainer with over 10 years of experience. He believes that health is not just about physical fitness, but also about mental and emotional well-being. Teddy is passionate about helping his clients achieve their goals and will work with them every step of the way to make sure they succeed. He is dedicated to building relationships with his clients and creating personalized workout plans that fit their individual needs that promotes wellness and positivity.", 
                      image_url="https://ca.slack-edge.com/T02MD9XTF-U04G3JTEM35-0990270218e8-512")
    db.session.add(trainer6)
    db.session.commit()
    trainer7= Trainer(name="Emily", price="$130/h", platform="In-Person", 
                      bio ="Emily is a certified personal trainer and yoga instructor with a passion for helping people find balance and inner peace through fitness. She specializes in creating customized workout plans that combine strength training, yoga, and mindfulness techniques to help you achieve a strong, toned body and a calm, centered mind. Whether you're looking to lose weight, reduce stress, or simply improve your overall health and well-being.", 
                      image_url="https://ca.slack-edge.com/T02MD9XTF-U04GKNL5GD7-38bed81b745d-512")
    db.session.add(trainer7)
    db.session.commit()
    trainer8= Trainer(name="Ben", price="$80/h", platform="In-Person-Online", 
                      bio ="Ben is a certified personal trainer who understands that each client is unique and requires a customized training program to achieve their goals. With over 7 years of experience, Ben has worked with clients of all ages and fitness levels. He is committed to educating his clients on proper exercise form and nutrition, and works with them to develop a healthy and sustainable lifestyle.", 
                      image_url="https://ca.slack-edge.com/T02MD9XTF-U04CURNGLNR-a14ac18bd4cf-512")
    db.session.add(trainer8)
    db.session.commit()
    trainer9= Trainer(name="Galen", price="$110/h", platform="In-Person-Online", 
                      bio ="Galen is a certified personal trainer who believes in the power of movement and its ability to transform lives. With a background in dance and yoga, Galen incorporates his knowledge of movement and mindfulness into his training programs. He is passionate about helping his clients build strength, flexibility, and confidence, and is dedicated to creating a positive and supportive environment.", 
                      image_url="https://ca.slack-edge.com/T02MD9XTF-U04FA3F1Q23-d6b13161ddab-512")
    db.session.add(trainer9)
    db.session.commit()
    trainer10= Trainer(name="Eli", price="$150/h", platform="In-Person-Online", 
                       bio ="Eli is a certified personal trainer who is passionate about helping his clients achieve their fitness goals and improve their overall health and wellness. With over 8 years of experience, Eli is skilled in a variety of training techniques and is always learning new ways to challenge his clients. He is dedicated to building relationships with his clients and providing them with the support and motivation they need to succeed.", 
                       image_url="https://ca.slack-edge.com/T02MD9XTF-U044PM9SREF-fe48edf4d167-512")
    db.session.add(trainer10)
    db.session.commit()
    trainer11= Trainer(name="Asia", price="$120/h", platform="Online", 
                       bio ="Asia is a certified personal trainer who believes in a holistic approach to health and wellness. She is passionate about helping her clients achieve balance in their physical, mental, and emotional well-being. With a background in nutrition and mindfulness, Asia incorporates these elements into her training programs to help her clients achieve optimal health and vitality.",
                        image_url="https://ca.slack-edge.com/T02MD9XTF-U04D6G6844A-f17b3f13cfd7-512")
    db.session.add(trainer11)
    db.session.commit()

    db.session.add(trainer1)
    db.session.commit()