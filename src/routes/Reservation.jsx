import { useParams} from "react-router-dom"
import React, { useState } from 'react';

import Footer from "../Components/NavFiles/Footer"
import Header from "../Components/NavFiles/Header"

import Films from '../assets/Films'

function Reservation(){
    const [clickedDivs, setClickedDivs] = useState([]);

    const { Id } = useParams(); 
    const [name,time] = Id.split(' ');
    const film = Films.find(film => film.Name === name);

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
        console.log('Clicked Divs:', clickedDivs);
    };

    return (
        <>
            <Header />
            <div>
                
            <div
                onClick={() => handleDivClick('div1')}
                style={{
                    backgroundColor: clickedDivs.includes('div1') ? 'red' : 'lightgray',
                    padding: '10px',
                    width: '40px',
                    marginBottom: '10px',
                    cursor: 'pointer'
                }}
            >
                Div 1
            </div>
            <div
                onClick={() => handleDivClick('div2')}
                style={{
                    backgroundColor: clickedDivs.includes('div2') ? 'red' : 'lightgray',
                    padding: '10px',
                    width: '40px',
                    marginBottom: '10px',
                    cursor: 'pointer'
                }}
            >
                Div 2
            </div>
            <div
                onClick={() => handleDivClick('div3')}
                style={{
                    backgroundColor: clickedDivs.includes('div3') ? 'red' : 'lightgray',
                    padding: '10px',
                    width: '40px',
                    marginBottom: '10px',
                    cursor: 'pointer'
                }}
            >
                Div 3
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </div>
            <Footer />
        </>
    )
}
export default Reservation