import classes from './PricingMain.module.css'
export default function Ticket({days, price}){
    return (
        <div className={classes.seance}>
            <div className={classes.SeanceInfo}>
                <p>{days}</p>
                <p id={classes.seanceParagraph}>to seance</p>
                <div className={classes.ticket}>
                    <p>{price} USD</p>
                    <div id={classes.dot}/>
                </div>
                <div className={classes.ticket}>
                    <p>{price + 5} USD</p>
                    <div id={classes.dot}/>
                </div>
                <div className={classes.ticket}>
                    <p>{price - 2} USD</p>
                    <div id={classes.dot}/>
                </div>
            </div>
        </div>
    )
}