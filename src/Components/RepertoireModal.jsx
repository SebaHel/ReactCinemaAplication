import classes from './RepertoireFilmList.module.css'

export default function RepertoireModal({children, film}){
    return (
        <div key={film.Id} className={classes.card}>
             <div className={classes.Repertoireinfo} style={{ backgroundImage: `url(${film.img})`}} /> 
             <div className={classes.content}>
                <p className={classes.nameParagraph} >{film.Name}</p>
                <p className={classes.descriptionParagraph} >{film.Description}</p>
                <p className={classes.descriptionParagraph} >Time: {film.Duration}</p>
                <p className={classes.descriptionParagraph} >Category: {film.Category}</p>
                <div className={classes.filmBox}>
                    {children}
                </div>
             </div>
         </div>
         
        )
}