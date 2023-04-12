import styles from "./NavigationBar.module.css"
import {useNavigate} from "react-router-dom";

const NavigationBar = () => {
    const navigate = useNavigate();

 return (
    <div class={styles.navBarContainer}>
        <h1 onClick={() => navigate("/")}>iron FITWELL ness</h1>
        <div class={styles.navLinksContainer}>
            <a onClick={() => navigate ("about")}>ABOUT</a>
            <a onClick={() => navigate ("trainers")}> TRAINERS</a>
            <a onClick={() => navigate ("/services")}>SERVICES</a>
            <a onClick={() => navigate ("contact")}>CONTACT</a>
            <a onClick={() => navigate ("join")}>JOIN NOW</a>
            <a href="#">TEAM</a>
        </div>
    </div>
 )
}

export default NavigationBar