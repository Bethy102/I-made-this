import styles from "./MainContent.module.css";

const MainContent = () => {
    return (
        <div>
            <div className={styles.mainContainer}>
                <h2> Achieve your healthiest and most active self with
                <br/>
                the friend that you have always been looking for</h2>
            </div>
                {/* <img src={require("../images/background.jpg")} className = "img"/> */}
        </div>
    );
}

export default MainContent;