import { Link } from 'react-router-dom'

import classes from './Header.module.css'

export default function Header(){
    return(
        <header className={classes.header}>
            <Link to="/" className={classes.link}><span className="material-symbols-outlined" style={{fontSize:"40px", justifyContent:'center',alignContent:'center'}}>videocam </span>CINEMA</Link>
            <div className={classes.nav}>
                <Link to="/repertoire" className={classes.link}>REPERTOIRE</Link>
                <Link to="/pricing" className={classes.link}>PRICING</Link>
                <p>COMING SOON</p>
                <p>KIDS</p>
                <p>EVENTS</p>
            </div>
        </header>
    )
}