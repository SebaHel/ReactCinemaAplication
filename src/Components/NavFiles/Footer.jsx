import classes from './Footer.module.css'


export default function Footer(){
    return (
        <footer className={classes.footer}>
            <div className={classes.footerContent}>
                <div className={classes.infoSection}>
                    <h4>XYZ Cinema</h4>
                    <p>Address: 123 Movie Street, New York, NY 10001</p>
                    <p>Phone: +1 123 456 7890</p>
                    <p>Email: contact@xyzcinema.com</p>
                </div>

                <div className={classes.hoursSection}>
                    <h4>Opening Hours</h4>
                    <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
                    <p>Saturday: 10:00 AM - Midnight</p>
                    <p>Sunday: 12:00 PM - 8:00 PM</p>
                </div>

                <div className={classes.socialSection}>
                    <h4>Follow Us</h4>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
            </div>
            <div className={classes.footerBottom}>
                <p>&copy; {new Date().getFullYear()} XYZ Cinema. All rights reserved.</p>
            </div>
        </footer>
    )
}