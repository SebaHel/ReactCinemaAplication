import classes from './Header.module.css'
import { Link } from 'react-router-dom'

export default function NavFilmCard({Filmimg, filmAge, filmName, key, filmID}){
    return(
        <Link to={`/film/${filmID}`}>
            <div key={key} className={classes.Repertoireinfo} style={{ backgroundImage: `url(${Filmimg})`}}> 
                <p key={filmName} id={classes.description}>{filmName}</p>
                <p key={Filmimg} id={classes.description}>MinAge: {filmAge}</p>
            </div>
        </Link>
    )
}