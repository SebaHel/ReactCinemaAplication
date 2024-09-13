import { useState, useEffect } from "react";

import classes from './DayCard.module.css'

function DayCard(){
    const [date, setDate] = useState([]);

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
        for (let i = 0; i < 7; i++){
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
    return (
        <div className={classes.dayContainer}>
            {date.map((item, index) => (
                <div key={index} className={classes.dayCard}>
                    <p>{item.day}</p>
                </div>
            ))}
        </div>
    )


}
export default DayCard