import { Link } from 'react-router-dom'

import classes from './Header.module.css'
import NavList from './NavLists'
import { useState } from 'react';

export default function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false);
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const currentDayindex = new Date().getDay();
    
    const currentDayName = dayNames[currentDayindex];


    const toggleNav =() =>{
        setIsNavOpen(!isNavOpen);
    }

    return(
        

        <header className={classes.header}>
            <Link to="/" className={classes.link}><span className="material-symbols-outlined" style={{fontSize:"40px", justifyContent:'center',alignContent:'center'}}>videocam </span>CINEMA</Link>
            <button className={classes.menuIcon} onClick={toggleNav}>
              <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>
                {isNavOpen ? 'close' : 'menu'}
              </span>
            </button>
            <div className={`${classes.nav} ${isNavOpen ? classes.open : ''}`}>
                <Link to={`/repertoire/${currentDayName}`} className={classes.link}>REPERTOIRE</Link>
                <Link to="/pricing" className={classes.link}>PRICING</Link>
                <NavList />
            </div>
        </header>
    )
}