import styles from "./Services.module.css";

const services = () => {
    return (
        <div>
            <div className={styles.container}>
                <h3>Weight training (resistance and strength training)</h3>
                <p> Monthly stength coaching is idela for idivudauls looking to start <br/>
                their strength journey, improve their bone health, or optimize performance.<br/>
                * 1:1 in-person session <br/>
                * Access to our online platform that displays your personalized strength plan.<br/>
                * Weekly virtual check-ins with friend and personal trainer.<br/>
                Weight training benefits:
                Increases muscle mass, endurance, and strength
                Ramps up your metabolism through increased muscle mass an so burns fat
                Increases bone density, especially vital as women age, due to the risk of osteoporosis
                Builds good posture
                Strengthens joints thus reducing muscular imbalance issues
                <img className="img" src={require("../images/Powerlifting.jpg")} alt="Power"/>

                </p>
            </div>
            <div className = {styles.container}>
                <h3>Running training </h3>
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
                Lowers the risk of diabetes

                </p>
                <img className="img" src={require("../images/runner.jpg")} alt ="Runner"/>

            </div>
            <div className={styles.container}>
                <h3> Flexibity training (Stretching, Yoga, Pilates)</h3>
                <p>Flexibilty is more than being able to touvh your tooes. It's about general musculoskeletal health.<br/>
                Every stetch can be either static or dynamic ans passive or active. Benefit of Fleibility training 
                Flexibility training:
                Increases range of motion
                Releases tension physically and mentally
                Supports spinal musculoskeletal health
                Improves mobility
                Reduces the risk of injury associated with other exercises and  movements
                </p>
                <img className="img" src={require("../images/Yoga.webp")} alt="Flex"/>
            </div>
            <div className={styles.container}>
                <h3>Hungry for Health? Chef-crafted meals with care and love at your door</h3>
                <p>All of our Wellness and Nutrition coaches are certified. They work with chefs to help you create nutrition and lifestyle habits to meet your health, weight loss, and performance goals through delicious foods. </p>
                <img className="img" src={require("../images/cooking.jpg")} alt="chefs"/>
            </div>
        </div>
    )
}

export default services;