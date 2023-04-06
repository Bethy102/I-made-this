import styles from "./TrainingCard.module.css"

const TrainingCard = ({ children, imageLink}) => {

    return (
        <div className={styles.trainingCardContainer}>
            <img src={imageLink} alt="image" />
            <div className={styles.trainingInfoWrapper}>
                {children}
                <button>Book</button>
            </div>
        </div>
       
    )
}

export default TrainingCard;