import { useParams, Link } from "react-router-dom"
import { getTime } from "../Components/RepertoireFilmList"


import Header from "../Components/NavFiles/Header"
import Footer from "../Components/NavFiles/Footer"

import Films from '../assets/Films'
import classes1 from '../Components/RepertoireFilmList.module.css'
import classes from './FilmInfo.module.css'
import FilmLabel from "../Components/FilmLabel"

function FilmInfo(){
    const { Id } = useParams(); 
    const film = Films.find(film => film.Id === parseInt(Id));

    const currentTime = new Date();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const getNextWeekDates = () => {
        const nextWeekDates = [];
        const currentDayIndex = currentTime.getDay();

        const filmDaysIndexes = film.Days.map(day => daysOfWeek.indexOf(day));

        filmDaysIndexes.forEach(dayIndex => {
            let nextDate = new Date(currentTime);
            const diff = (dayIndex - currentDayIndex + 7) % 7;
            nextDate.setDate(currentTime.getDate() + diff);
            nextWeekDates.push({
                day: daysOfWeek[dayIndex],
                date: nextDate.toLocaleDateString(),
            });
        });

        return nextWeekDates.sort((a, b) => a.date - b.date);;
    };


    return (
        <>
        <Header />
        <div className={classes.filmMain}>
            {film ? (
                <>
                    <div key={film.Id} className={classes.image}  style={{backgroundImage: `url(${film.img})`,  marginTop:' 50px'}}/>
                    <div className={classes.ContainerDescription}>
 
                        <FilmLabel film={film}/>
                        
                        <p>{film.Description}</p>
                        <div className={classes1.filmBox} id={classes.filmBox}>
                            {getNextWeekDates().map((dayInfo, index) => (
                                <div key={index} className={classes.Box}>
                                    <p id={classes.seanseDate}>{dayInfo.day} - {dayInfo.date}</p>
                                    <div className={classes.boxContainer}>
                                        {film.Hours.map((time,index) => {
                                            const sessionTime = getTime(time);

                                            if (sessionTime > currentTime  || dayInfo.day !== daysOfWeek[currentTime.getDay()]) {
                                                return (
                                                    <Link to={`/film/reservation/${film.Name.replace(/\s+/g, '')} ${time}`} id={classes.Link}>
                                                    <div key={index} className={classes1.box}>
                                                        <p className={classes1.time}>{time} - {film.EndTimes[index]}</p>
                                                        <div>
                                                            {film.AudioOptions.map((audio, index) =>(
                                                                <p key={index} className={classes1.audio}>{audio}</p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    </Link>
                                                )
                                            
                                            }else{
                                                return null;
                                            }
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </>
                ) : (
                    null
                )
            }
        </div>
        <Footer />
        </>
    )
}
export default FilmInfo