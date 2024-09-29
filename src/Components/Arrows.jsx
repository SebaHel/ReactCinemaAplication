import classes from './Arrows.module.css'

export default function Arrows({onClickNextHandler, onClickPrevHandler, LeftclassName, RightclassName}){
    return (
        <>
        <button className={classes[LeftclassName]} onClick={onClickPrevHandler}><span className="material-symbols-outlined" style={{fontSize:'40px'}}>keyboard_arrow_left</span></button>
        <button className={classes[RightclassName]} onClick={onClickNextHandler}><span className="material-symbols-outlined" style={{fontSize:'40px'}}>keyboard_arrow_right</span></button>
        </>
    )
}

