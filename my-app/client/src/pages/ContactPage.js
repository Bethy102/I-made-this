import styles from "./ContactPage.module.css"

const ContactPage = () => {
    return (
        <div>
            <div className={styles.content}>
                <img src={"../../images/contactUs.jpg"}></img>
                <span>LET'S WORK TOGETHER</span>
                    <p>We are so excited to begin working with you. If you'd like some more<br/>
                    information about the path you should take regarding fitness, wellness and <br/>
                    nuitriton, contact us and a certified personal 
                    trainer will reach out to you! <br/>
                    please contact <a style={{color: 'purple'}}>joinnow@ironfitwellness.com</a></p>
            </div>
            <form id="contactForm" action="https://formsubmit.co/7731e0b8bd4627ebf6771973e1ac458d" method='POST'>
                <div className={styles.flName}>
                    <div>
                        <label for="FirstName"></label>
                        <input type="text" placeholder="First Name" name="FirstName"/>
                    </div>
                    <div>
                        <label for="LastName"></label>
                        <input type="text" placeholder="Last Name" name="LastName"/>
                    </div>
                </div>
                <label for="email"></label>
                <input type="text" placeholder="Email Address" name="email"/>
                <label for="subject"></label>
                <input type="text" placeholder="Subject" name="subject"/>
                <label for="comment"></label><br/>
                <textarea placeholder="Your message here" rows="4" cols="100" name="comment" form="contactForm"></textarea>
                <button className={styles.modal_button} type='submit' >Submit</button>
            </form>
        </div>

    )
}

export default ContactPage;