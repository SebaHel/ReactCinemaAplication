import { useState, useEffect } from "react";
import classes from './AppMainSlider.module.css'

import PulpFiction from "../assets/Images/PulpFiction.jpg";
import TheDarkNight from "../assets/Images/TheDarkKnight.jpg";
import Arrows from "./Arrows";

const FilmList = [
    {
        Name: "The Dark Knight",
        Rating: 9.0,
        img: TheDarkNight
    },
    {
        Name: "Pulp Fiction",
        Rating: 8.9,
        img: PulpFiction
    },
]

function AppMainSlider(){

    const [currentIndex, setCurrentIndex] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    

    useEffect(() => {
        const Interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % FilmList.length);
        }, 10000);

        return () => clearInterval(Interval);
    }, [FilmList.length]); 

    function onClickHandler(){
        if(buttonDisabled) return;
        setButtonDisabled(true);
    
        setCurrentIndex((prevIndex) => (prevIndex + 1) % FilmList.length);

        setTimeout(() => {
            setButtonDisabled(false);
        }, 1000);
    }


    return(
        <>
            <div className={classes.mainbody}>
                <div 
                  className={classes.slideshow} 
                  style={{ backgroundImage: `url(${FilmList[currentIndex].img})`, transition:'transform 0.8s ease-in-out'}}
                />
                <div className={classes.slideinfo}>
                    <p>{FilmList[currentIndex].Name}</p>
                    <span className="material-symbols-outlined">star</span>
                    <p>{FilmList[currentIndex].Rating}</p>
                </div>
                <Arrows onClickNextHandler={onClickHandler} onClickPrevHandler={onClickHandler} LeftclassName="leftArrowSlider" RightclassName="rightArrowSlider"/>
            </div>
        </>
    )


}

export default AppMainSlider;
