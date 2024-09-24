import { useState } from 'react';
import Films from '../../assets/Films'
import classes from './Header.module.css'
import NavFilmCard from './NavFilmCard';
export default function NavList(){

    const [isHovered, setIsHovered] = useState(null);

    const handleMouseEnter = (state) => {
      setIsHovered(state);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(null);
    };

    return(
        <>
        <div onMouseEnter={()=> handleMouseEnter('kids')} onMouseLeave={handleMouseLeave} className={classes.hoverWrapper}>
            <p>KIDS</p>
            {isHovered === 'kids' && (
                <div className={classes.NavList}>
                    <label>MOVIES</label>
                        {Films.map((film) => {
                            if(film.MinAge > 12){
                                return null;
                            }
                            return (
                                <NavFilmCard Filmimg = {film.img}  filmAge = {film.MinAge} filmName={film.Name} key={film.id}/>
                            )
                        })}
                    <div>
                </div>
            </div>
            )}
        </div>
        <div onMouseEnter={()=> handleMouseEnter('CommingSoon')} onMouseLeave={handleMouseLeave} className={classes.hoverWrapper}>
            <p>COMMING SOON</p>
            {isHovered === 'CommingSoon' && (
                <div className={classes.NavList}>
                    <label>MOVIES</label>
                        {Films.map((film) => {
                            if(film.MinAge > 12){
                                return null;
                            }
                            return (
                                <NavFilmCard Filmimg = {film.img}  filmAge = {film.MinAge} filmName={film.Name} key={film.id}/>
                            )
                        })}
                    <div>
                </div>
            </div>
            )}
        </div>
        <div onMouseEnter={()=> handleMouseEnter('Action')} onMouseLeave={handleMouseLeave} className={classes.hoverWrapper}>
            <p>ACTION</p>
            {isHovered === 'Action' && (
                <div className={classes.NavList}>
                    <label>MOVIES</label>
                        {Films.map((film) => {
                            if(film.MinAge > 12){
                                return null;
                            }
                            return (
                                <NavFilmCard Filmimg = {film.img}  filmAge = {film.MinAge} filmName={film.Name} key={film.id}/>
                            )
                        })}
                    <div>
                </div>
            </div>
            )}
        </div>
        </>
    )
}