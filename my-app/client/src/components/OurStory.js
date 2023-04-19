import styles from "./OurStory.module.css"

const OurStory = ({ children, imageLink}) => {

    return (
        <div className={styles.trainingCardContainer}>
            <img src={imageLink} alt="image" />
            <div className={styles.trainingInfoWrapper}>
                {children}
                {/* <button>Join the Family</button> */}
            </div>
        </div>
       
    )
}

export default OurStory;