// import styles from './AboutPage.module.css';
import OurStory from "./OurStory";

const About = () => {
    return (
        <div>
            <OurStory>

                <p>Welcome to the FITWELLNESS family, where <span style={{fontWeight:"bold"}} >we offer customized 1:1 personal training sessions both online and in person with certified trainers.</span> We are dedicated to helping 
                you achieve your fitness goals, no matter what they may be. Whether you're looking to lose weight, build muscle, or simply improve your overall health and well-being, our team of expert trainers is here to guide you every step of the way.
                We believe that fitness is not just about working out - <span style={{fontWeight:"bold"}}>it's about building a community of like-minded individuals who share your passion for health fitness and nutrition</span>.
                That's why we have created a platform that not only allows you to <span style={{fontWeight:"bold"}}>book personalized training sessions with our certified trainers but also helps you connect with other fitness enthusiasts in your area.</span> </p>
                <img src={"../../images/certified_personal_trainer.jpg"} alt="image" />
            
            </OurStory>

                
            <OurStory>
            
                <img src={"../../images/Aboutimg.jpg"} alt="image" />
                <p><span>Our trainers are highly qualified and experienced in a variety of fitness</span> disciplines, including strength training, yoga, Pilates, HIIT, and more. They will work with you to create a customized workout plan tailored 
                to your individual needs and goals. Whether you prefer to train online or in person, our trainers will be there to motivate and inspire you to reach your full potential.
                In addition to personalized training sessions, our website also allows you to connect with other fitness enthusiasts in your area. You can search for workout friends based on your location, fitness goals, and interests.
                This is a great way to stay motivated and accountable, and to build a supportive community of people who share your passion for fitness.

                So what are you waiting for? Sign up for our personalized training sessions today and start your fitness journey with us. We are committed to helping you achieve your goals and become the best version of yourself.
                Let's work together to create a healthier, happier you..</p>
            </OurStory>

        {/* <div className="story">
            <img src= {"../../images/Aboutimg.jpg"} />
                <p><span>Our trainers are highly qualified and experienced in a variety of fitness</span> disciplines, including strength training, yoga, Pilates, HIIT, and more. They will work with you to create a customized workout plan tailored 
                to your individual needs and goals. Whether you prefer to train online or in person, our trainers will be there to motivate and inspire you to reach your full potential.
                In addition to personalized training sessions, our website also allows you to connect with other fitness enthusiasts in your area. You can search for workout friends based on your location, fitness goals, and interests.
                This is a great way to stay motivated and accountable, and to build a supportive community of people who share your passion for fitness.

                So what are you waiting for? Sign up for our personalized training sessions today and start your fitness journey with us. We are committed to helping you achieve your goals and become the best version of yourself.
                Let's work together to create a healthier, happier you..</p>
    
        </div> */}
        </div> 
    )
}


export default About;