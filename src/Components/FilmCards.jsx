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
                            <div className={classes.Repertoireinfo} style={{ backgroundImage: `url(${film.img})`}}> 
                            </div>
                            <p className={classes.nameParagraph}>{film.Name}</p>
                        </div>

                    ))}
        </div>
        </>
    )
}

