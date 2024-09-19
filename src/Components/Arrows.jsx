import classes from './Arrows.module.css'

export default function Arrows({onClickNextHandler, onClickPrevHandler}){
    return (
        <>
        <button className={classes.leftArrow} onClick={onClickPrevHandler}><span className="material-symbols-outlined" style={{fontSize:'40px'}}>keyboard_arrow_left</span></button>
        <button className={classes.rightArrow} onClick={onClickNextHandler}><span className="material-symbols-outlined" style={{fontSize:'40px'}}>keyboard_arrow_right</span></button>
        </>
    )
}