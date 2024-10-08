import { useParams, useNavigate} from "react-router-dom"
import React, { useState } from 'react';

import Footer from "../Components/NavFiles/Footer"
import Header from "../Components/NavFiles/Header"
import classes from "./Reservation.module.css"

import Films from '../assets/Films'
import FilmLabel from "../Components/FilmLabel";

function Reservation(){
    const [clickedDivs, setClickedDivs] = useState([]);
    const navigate = useNavigate();
    const { Id } = useParams(); 
    const [name,time] = Id.split(' ');
    const film = Films.find(film => film.Name.replace(/\s+/g, '') === name);

    const handleDivClick = (divId) => {
        setClickedDivs((prevClickedDivs) => {
            if (prevClickedDivs.includes(divId)) {
                return prevClickedDivs.filter(id => id !== divId);
            } else {
                return [...prevClickedDivs, divId];
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('You chosed ', clickedDivs);
        alert(`You chosed ${clickedDivs}`);
        setClickedDivs([]);
        navigate('/');
    };
    const CinemaGrid = Array.from({length: 10}, (_, rowIndex) => (
        
        <div key={rowIndex} className={classes.reservationContaineer}>
        {Array.from({ length: 16 }, (_, colIndex) => (
            <div key={colIndex} className={classes.chair}>
                <div
                onClick={() => handleDivClick((1 + colIndex).toString() + (1 +rowIndex).toString())}
                >
                    <span className="material-symbols-outlined" style={{
                        color: clickedDivs.includes((1 + colIndex).toString() + (1 +rowIndex).toString()) ? 'red' : 'lightgrey',
                         cursor: 'pointer'}}>
                    weekend
                    </span>
                </div>
            </div>
            
        ))}
        <p id={classes.label}>{rowIndex}</p>
        <p id={classes.label2}>{rowIndex}</p>
        <div className={classes.line}/>
    </div>
    ))



    return (
        <>
            <Header />
            <div className={classes.reservationBody}>
                <div className={classes.filmInfo}>
                    <FilmLabel film={film}/>
                </div>
                <div className={classes.reservationBox}>
                    <p id={classes.screen}>SCREEN</p>
                    {CinemaGrid}
                    <button onClick={handleSubmit} className={classes.submitButton}>Reserve</button>
                </div> 
            </div> 
            <Footer />
        </>
    )
}
export default Reservation