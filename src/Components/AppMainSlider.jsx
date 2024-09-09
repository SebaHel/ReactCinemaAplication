import { useState, useEffect } from "react";
import classes from './AppMainSlider.module.css'

import PulpFiction from "../assets/Images/PulpFiction.jpg";
import TheDarkNight from "../assets/Images/TheDarkKnight.jpg";

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

    useEffect(() => {
        const Interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % FilmList.length);
        }, 10000);

        return () => clearInterval(Interval);
    }, [FilmList.length]); 

    return(
        <div className={classes.mainbody}>
            <div 
              className={classes.slideshow} 
              style={{ backgroundImage: `url(${FilmList[currentIndex].img})` }}
            >

            </div>
        </div>
    )


}

export default AppMainSlider;
