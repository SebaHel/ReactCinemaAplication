import { useParams } from "react-router-dom"

import classes from './RepertoireFilmList.module.css'
import Films from '../assets/Films'

export const getTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const newTime = new Date();
    newTime.setHours(hours, minutes, 0, 0);
    return newTime;
}

export default function RepertoireFilmList(){
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const CurrentDay = new Date().getDay();
    const currentTime = new Date();
    

    const { Id } = useParams(); 

    return (
        <div className={classes.FilmContainer}>
            <div>
            {Films.map((film) => {
                const availableSeance =  film.Hours.filter((time) => {
                    const sessionTime = getTime(time);
                    return sessionTime > currentTime;
                });
                if(dayNames[CurrentDay] === Id){
                    if(availableSeance.length === 0 ){
                        return null;
                    }
                        return (
                            <div key={film.Id} className={classes.card}>
                                 <div className={classes.Repertoireinfo} style={{ backgroundImage: `url(${film.img})`}} /> 
                                 <div className={classes.content}>
                                    <p className={classes.nameParagraph} >{film.Name}</p>
                                    <p className={classes.descriptionParagraph} >{film.Description}</p>
                                    <p className={classes.descriptionParagraph} >Time: {film.Duration}</p>
                                    <p className={classes.descriptionParagraph} >Category: {film.Category}</p>
                                    <div className={classes.filmBox}>
                                        {film.Hours.map((time,index) => {
                                            const sessionTime = getTime(time);
                                            
                                            if (sessionTime > currentTime)  {
                                                return (
                                                    <div key={index} className={classes.box}>
                                                        <p className={classes.time}>{time} - {film.EndTimes[index]}</p>
                                                        <div>
                                                            {film.AudioOptions.map((audio, index) =>(
                                                                <p key={index} className={classes.audio}>{audio}</p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )
                                            }else{
                                                return null;
                                            }
                                        })}
                                    </div>
                                 </div>
                             </div>
                            )
                            
                    }
                    else if(film.Days.includes(Id)){
                        return (
                            <div key={film.Id} className={classes.card}>
                                 <div className={classes.Repertoireinfo} style={{ backgroundImage: `url(${film.img})`}} /> 
                                 <div className={classes.content}>
                                    <p className={classes.nameParagraph} >{film.Name}</p>
                                    <p className={classes.descriptionParagraph} >{film.Description}</p>
                                    <p className={classes.descriptionParagraph} >Time: {film.Duration}</p>
                                    <p className={classes.descriptionParagraph} >Category: {film.Category}</p>
                                    <div className={classes.filmBox}>
                                        {film.Hours.map((time,index) => {                                
                                                return (
                                                    <div key={index} className={classes.box}>
                                                        <p className={classes.time}>{time} - {film.EndTimes[index]}</p>
                                                        <div>
                                                            {film.AudioOptions.map((audio, index) =>(
                                                                <p key={index} className={classes.audio}>{audio}</p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )
                                        })}
                                    </div>
                                 </div>
                             </div>
                            )   
                        }
                    else{
                        return null
                    }
                
                }
                
                
                )}

            
            </div>
        </div>

    )
}