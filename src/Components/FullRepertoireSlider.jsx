import classes from './FullRepertoireSlider.module.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import Films from '../assets/Films';
import Interlude from './Interlude';
import Arrows from './Arrows';


export default function FullRepertoireSlider(){

    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getRepertoireStyle = () => {
        if (windowWidth < 480) {
            return {
                transform: `translateX(${-300 - (141 * currentIndex)}px`
            };
        } else if (windowWidth < 769) {
            return {
                transform: `translateX(${-330 - (190 * currentIndex)}px`
            };
        } else if (windowWidth < 1025) {
            return {
                transform: `translateX(${-400 - (240 * currentIndex)}px`
            };
        } else {
            return {
                transform: `translateX(${-200 - (300 * currentIndex)}px`
            };
        }
    };

    function onClickNextHandler(){  
        if(currentIndex <= (Films.length-3)){
            setCurrentIndex((prevIndex) => (prevIndex + 1));
        }

    }
    function onClickPrevHandler(){  
        if(currentIndex >= -2){
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
                         <div className={classes.Repertoireinfo} style={{ backgroundImage: `url(${film.img})`, ...getRepertoireStyle(), transition: "1s"}} /> 
                         </Link>
                         <p className={classes.nameParagraph} style={{ ...getRepertoireStyle(), transition: "1s"}} >{film.Name}</p>
                         <p className={classes.nameParagraph} style={{ ...getRepertoireStyle(), transition: "1s"}} >{film.Description}</p>
                     </div>

                ))}
            </div>
            <Arrows onClickNextHandler={onClickNextHandler} onClickPrevHandler={onClickPrevHandler} LeftclassName="leftArrow" RightclassName ='rightArrow'/>
         </>
    )
}