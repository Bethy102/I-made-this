import styles from "./NavigationBar.module.css"
import {useNavigate} from "react-router-dom";

const NavigationBar = () => {
    const navigate = useNavigate();

 return (
    <div class={styles.navBarContainer}>
        <h1>Brand</h1>
        <div class={styles.navLinksContainer}>
            <a href="#">ABOUT</a>
            <a href="#">EXPERIENCES</a>
            <a onClick={() => navigate ("/services")}>SERVICES</a>
            <a href="#">CONTACT</a>
            <a href="#">JOIN NOW</a>
        </div>
    </div>
 )
}

export default NavigationBar