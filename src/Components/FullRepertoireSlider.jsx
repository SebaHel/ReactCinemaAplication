import Films from '../assets/Films';
import classes from './FullRepertoireSlider.module.css'
import Interlude from './Interlude';
export default function FullRepertoireSlider(){
    return(
        <>
            <Interlude body="In Repertoire"/>
            <div className={classes.slider}>
                {Films.slice(0, 7).map((film) => (
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