// import styles from "./Services.module.css";
import TrainingCard from "./TrainingCard";

const services = () => {
    return (
        <div>
            <TrainingCard imageLink={require("../images/Powerlifting.jpg")} trainingType={"Strength Training"}>
                <span>General Strength Training (resistance, weigth training)</span>
                <p>Monthly stength coaching is idela for individuals looking to start
                their strength journey, improve their bone health, or optimize performance.
                 1:1 in-person session 
                 Access to our online platform that displays your personalized strength plan.
                 Weekly virtual check-ins with friend and personal trainer.
                Weight training benefits:
                Increases muscle mass, endurance, and strength
                Ramps up your metabolism through increased muscle mass an so burns fat
                Increases bone density, especially vital as women age, due to the risk of osteoporosis. <br/>
                Builds good posture Strengthens joints thus reducing muscular imbalance issues.</p>
            </TrainingCard>
            <TrainingCard imageLink={require("../images/Yoga.webp")}>
            <span>Flexibity training (Stretching, Yoga, Pilates)</span>
            <p>Flexibilty is more than being able to touvh your tooes. It's about general musculoskeletal health.<br/>
                Every stetch can be either static or dynamic ans passive or active. Benefit of Fleibility training 
                Flexibility training:
                Increases range of motion
                Releases tension physically and mentally
                Supports spinal musculoskeletal health
                Improves mobility
                Reduces the risk of injury associated with other exercises and  movements
                </p>
            </TrainingCard>
            <TrainingCard imageLink={require("../images/runner.jpg")}>
            <span>Running training (Cardio, Marathon, Sprint)</span>
            <p> Monthly run coaching for new or experienced runners looking to minimize injury and optimize performance while training for a race or recreational fitness.
                1:1 virtual or live kick-off meeting.
                Access to our online platform that displays your personalized run plan.
                Weekly virtual check-ins with your physical therapist to discuss strategy & progress.
                Unlimited support from your coach to ensure accountability.
                Benefits of cardio:
                Improves cardiorespiratory and pulmonary health, measurable by a lower resting heart rate
                Reduces blood pressure
                Reduce risks of a stroke, heart disease, and eventual heart attack
                Increases circulation
                Lowers the risk of diabetes</p>

            </TrainingCard>
            <TrainingCard imageLink={require("../images/nutrition.png")}>
            <span> Hungry for Health? Nutrition </span>
            <p> Chef-crafted meals with care and love at your door . 
            All of our Wellness and Nutrition coaches are certified. 
            They work with chefs to help you create nutrition and lifestyle habits to meet your health, weight loss, 
            and performance goals through delicious foods.</p>
            </TrainingCard>

            <TrainingCard imageLink={require("../images/bodybuilding.webp")}>
            <span> bodybuilding</span>
            <p> Build muscle, get strong, gain strength lose weight, get fit, boost your performance or even compete
            Either for aestheti, career or even personal purposes, our bodybuilding program is the answer to many questions where everyone can be related .
            </p>

            </TrainingCard>
        </div>
    )
}

export default services;