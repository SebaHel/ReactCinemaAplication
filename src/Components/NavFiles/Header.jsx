import { Link } from 'react-router-dom'

import classes from './Header.module.css'
import NavList from './NavLists'

export default function Header(){
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const currentDayindex = new Date().getDay();
    
    const currentDayName = dayNames[currentDayindex];


    return(
        

        <header className={classes.header}>
            <Link to="/" className={classes.link}><span className="material-symbols-outlined" style={{fontSize:"40px", justifyContent:'center',alignContent:'center'}}>videocam </span>CINEMA</Link>
            <div className={classes.nav}>
                <Link to={`/repertoire/${currentDayName}`} className={classes.link}>REPERTOIRE</Link>
                <Link to="/pricing" className={classes.link}>PRICING</Link>
                <NavList />
            </div>
        </header>
    )
}