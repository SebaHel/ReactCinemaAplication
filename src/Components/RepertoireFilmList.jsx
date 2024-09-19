import classes from './RepertoireFilmList.module.css'
import Films from '../assets/Films'

export default function RepertoireFilmList(){
    return (
        <div className={classes.FilmContainer}>
            <div>
            {Films.map((film) => (
                    <div key={film.Id} className={classes.card}>
                         <div className={classes.Repertoireinfo} style={{ backgroundImage: `url(${film.img})`}}> 
                         </div>
                         <div className={classes.content}>
                            <p className={classes.nameParagraph} >{film.Name}</p>
                            <p className={classes.descriptionParagraph} >{film.Description}</p>
                            <p className={classes.descriptionParagraph} >Time: {film.Duration}</p>
                            <p className={classes.descriptionParagraph} >{film.Category}</p>
                         </div>
                     </div>

                ))}
            </div>
        </div>
    )
}