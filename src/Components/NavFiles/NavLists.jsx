import { useState,  useEffect} from 'react';
import Films from '../../assets/Films'
import NavFilmCard from './NavFilmCard';
import NavModal from './NavModal';
export default function NavList(){


    const [randomIndexes, setRandomIndexes] = useState([]);

    const getRandomIndexes = (arrayLength, num) => {
        const indexes = new Set();
        while (indexes.size < num) {
            const randomIndex = Math.floor(Math.random() * arrayLength);
            indexes.add(randomIndex);
        }
        return [...indexes];
    };

    useEffect(() => {
        const numOfFilms = 6;
        setRandomIndexes(getRandomIndexes(Films.length, numOfFilms));
    }, [Films]);

    return(
        <>
        <NavModal name={"KIDS"}>
            {Films.map((film) => {
                if(film.MinAge > 12){
                    return null;
                }
                return (
                    <div key={film.img}>
                        <NavFilmCard Filmimg = {film.img}  filmAge = {film.MinAge} filmName={film.Name} key={film.name} filmID={film.Id}/>
                    </div>
                )
            })}
        </NavModal>

        <NavModal name={"COMMING SOON"}>
            {randomIndexes.map((index) => {
                const film = Films[index];
                return (
                    <div key={index}>
                        <NavFilmCard Filmimg = {film.img}  filmAge = {film.MinAge} filmName={film.Name} key={film.id}/>
                    </div>
                )
            })}
        </NavModal>


        <NavModal name={"Action"}>
            {Films.filter(film => film.Category.includes('Action')).map(film => (
                <div key={film.Duration}>
                    <NavFilmCard Filmimg = {film.img}  filmAge = {film.MinAge} filmName={film.Name} key={film.Description}/>
                </div>
            ))}
        </NavModal>
        </>
    )
}