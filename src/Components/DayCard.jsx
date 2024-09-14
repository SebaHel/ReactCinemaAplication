import { useState, useEffect } from "react";

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
                {date.slice(0, 14).map((item, index) => (
                    <div key={index} className={`${classes.dayCard} ${active ? classes.active : ''}`}>
                        <h2>{item.dayValue}</h2>
                        <h2>{item.day}</h2>
                    </div>
                ))}
            </div>
            <button className={classes.leftArrow} onClick={onClickNoActiveHandler}><span className="material-symbols-outlined" style={{fontSize:'40px'}}>keyboard_arrow_left</span></button>
            <button className={classes.rightArrow} onClick={onClickActiveHandler}><span className="material-symbols-outlined" style={{fontSize:'40px'}}>keyboard_arrow_right</span></button>
        </>
    )


}
export default DayCard