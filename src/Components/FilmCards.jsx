import { Link } from 'react-router-dom'

import Films from '../assets/Films';
import classes from './FilmCards.module.css'
import Interlude from './Interlude';

export default function FilmCards(){
    return ( 
        <>
            <Interlude body="Recommended"/>
            <div className={classes.container}>

                    {Films.slice(9, 19).map((film) => (                 
                            <div key={film.Id} className={classes.card}>
                                <Link to={`/film/${film.Id}`}>
                                    <div className={classes.Repertoireinfo} style={{ backgroundImage: `url(${film.img})`}} /> 
                                </Link>
                                <p className={classes.nameParagraph}>{film.Name}</p>
                            </div>
                    ))}
        </div>
        </>
    )
}

