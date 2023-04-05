import styles from "./Services.module.css";

const services = () => {
    return (
        <div>
            <div className = {styles.container}>
                <img className="img" src={require("../images/Powerlifting.jpg")}/>
                <h3>Weight training (resistance training)</h3>
                <p>

                </p>
            </div>
            <div className = {styles.container}>
                <p>

                </p>
                <img src={require("../images/runner.webp")}/>

            </div>
            <div>
                <h3> Flexibity training (Stretching, Yoga, Pilates)</h3>
                <img className="img" src={require("../images/Yoga.webp")}/>
            </div>
        </div>
    )
}

export default services;