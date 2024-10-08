import classes from "../routes/FilmInfo.module.css"

export default function FilmLabel({film}){
    return(
        <>
            <p id={classes.filmTitle}>{film.Name}</p>
            <div className={classes.filmDescription}>
                <p>{film.Name}</p>
                <p>{film.Rating}</p>
                <p>{film.Category}</p>
                <p>From: {film.MinAge}</p>
                <p>{film.Duration} min</p>
            </div>
        </>  
    )
}