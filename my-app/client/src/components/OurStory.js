import styles from "./OurStory.module.css"

const OurStory = ({ children, imageLink}) => {

    return (
        <div className={styles.trainingCardContainer}>
                {children}
        </div>
        
        
       
    )
}

export default OurStory;