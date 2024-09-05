import classes from './Header.module.css'

export default function Header(){
    return(
        <header className={classes.header}>
            <span className="material-symbols-outlined" style={{fontSize:"40px", justifyContent:'center',alignContent:'center'}}>videocam</span>
            <div className={classes.nav}>
                <p>REPERTOIRE</p>
                <p>PRICING</p>
                <p>COMING SOON</p>
                <p>KIDS</p>
                <p>EVENTS</p>
            </div>
        </header>
    )
}