import { useNavigate } from "react-router-dom";
import styles from "./TrainingCard.module.css"


const TrainingCard = ({ children, imageLink, trainingType}) => {
    const navigate = useNavigate()
    return (
        <div className={styles.trainingCardContainer}>
            <img src={imageLink} alt="Personal Trainer" />
            <div className={styles.trainingInfoWrapper}>
                {children}
                <button onClick={() => navigate(`/trainers/${trainingType}`)}>Book</button>
            </div>
        </div>
       
    )
}

export default TrainingCard;