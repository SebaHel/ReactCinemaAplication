import classes from './FullRepertoireSlider.module.css'
import { Link } from 'react-router-dom'
import { useState } from "react";
import Films from '../assets/Films';
import Interlude from './Interlude';
import Arrows from './Arrows';


export default function FullRepertoireSlider(){

    const [currentIndex, setCurrentIndex] = useState(0);

    function onClickNextHandler(){  
        if(currentIndex <= Films.length){
            setCurrentIndex((prevIndex) => (prevIndex + 1));
        }

    }
    function onClickPrevHandler(){  
        if(currentIndex >= 0){
            setCurrentIndex((prevIndex) => (prevIndex - 1) % Films.length);
        }

    }

    return(
        
        <>
            <Interlude body="In Repertoire"/>
            <div className={classes.slider}>
                {Films.map((film) => (
                    <div key={film.Id} className={classes.card}>
                        <Link to={`/film/${film.Id}`}>
                         <div className={classes.Repertoireinfo} style={{ backgroundImage: `url(${film.img})`, transform: `translateX(${700 - (300 * currentIndex)}px)`, transition: "1s"}} /> 
                         </Link>
                         <p className={classes.nameParagraph} style={{ transform: `translateX(${700 - (300 * currentIndex)}px)`, transition: "1s"}} >{film.Name}</p>
                         <p className={classes.nameParagraph} style={{ transform: `translateX(${700 - (300 * currentIndex)}px)`, transition: "1s"}} >{film.Description}</p>
                     </div>

                ))}
            </div>
            <Arrows onClickNextHandler={onClickNextHandler} onClickPrevHandler={onClickPrevHandler} LeftclassName="leftArrow" RightclassName ='rightArrow'/>
         </>
    )
}