import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import Arrows from './Arrows'
import classes from './DayCard.module.css'

function DayCard(){
    const [date, setDate] = useState([]);
    const [active, setActive] = useState(false);

    useEffect(() => {
        
        const Today = new Date();

        const month = ["Jan",'Feb', 'Mar', 'Apr', 'May', "Jun", 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        function formatDate(day){
            const currentMonth = month[day.getMonth()];
            const currentDay = String(day.getDate()).padStart(2,'0');
            return `${currentDay} ${currentMonth}`;
        }

        const next14days = [];
        for (let i = 0; i < 14; i++){
            const futureDay = new Date(Today);
            futureDay.setDate(Today.getDate() + i);
            next14days.push(
                {
                    day: formatDate(futureDay),
                    dayValue: dayNames[futureDay.getDay()]
                }
            )
        }
        setDate(next14days);



    }, []);
    function onClickActiveHandler(){
        setActive(true);
    }
    function onClickNoActiveHandler(){
        setActive(false);
    }
    return (
        <>
        <div className={classes.dayContainer}>
            {date.map((item, index) => (
                <Link to={`/repertoire/${item.dayValue}`} style={{textDecoration:"none"}}>
                <div key={index} className={`${classes.dayCard} ${active ? classes.active : ''}`}>
                    <h2>{item.dayValue}</h2>
                    <h2>{item.day}</h2>
                </div>
                </Link>
            ))}
        </div>       
        <Arrows onClickNextHandler={onClickActiveHandler} onClickPrevHandler={onClickNoActiveHandler} LeftclassName="leftArrow1" RightclassName="rightArrow1"/>
         
        </>
    )


}
export default DayCard