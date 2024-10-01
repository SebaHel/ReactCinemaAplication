import { useParams } from "react-router-dom"

import classes from './RepertoireFilmList.module.css'
import Films from '../assets/Films'
import RepertoireModal from "./RepertoireModal";

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
            {Films.map((film,Filmindex) => {
                const availableSeance =  film.Hours.filter((time) => {
                    const sessionTime = getTime(time);
                    return sessionTime > currentTime;
                });
                if(dayNames[CurrentDay] === Id ){
                    if(availableSeance.length === 0 ){
                        return null;
                    }
                        return (
                            <RepertoireModal film={film} key={Filmindex}>
                                {film.Hours.map((time,index) => {
                                        const sessionTime = getTime(time);
                                        
                                        if (sessionTime > currentTime)  {
                                            return (
                                                <div key={index} className={classes.box}>
                                                    <p className={classes.time}>{time} - {film.EndTimes[index]}</p>
                                                    <div>
                                                        {film.AudioOptions.map((audio, audioIndex) =>(
                                                            <p key={audioIndex} className={classes.audio}>{audio}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            )
                                        }else{
                                            return null;
                                        }
                                    })}
                            </RepertoireModal>
                            )
                            
                    }
                    else if(film.Days.includes(Id)){
                        return (
                            <RepertoireModal film={film} key={film.id}>
                                        {film.Hours.map((time,index) => {                                
                                                return (
                                                    <div key={index} className={classes.box}>
                                                        <p className={classes.time}>{time} - {film.EndTimes[index]}</p>
                                                        <div>
                                                            {film.AudioOptions.map((audio, audioIndex) =>(
                                                                <p key={audioIndex} className={classes.audio}>{audio}</p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )
                                        })}
                               </RepertoireModal>
                            )   
                        }
                    else{
                        return null
                    }
                
                })}

            
            </div>

    )
}