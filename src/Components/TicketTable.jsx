import classes from './PricingMain.module.css'
import Ticket from './Ticket'

export default function TicketTable({price1, price2, price3, price4, name}){
    return(
        <>
        <p id={classes.Pricing}>{name} Pricing</p>
            <div className={classes.priceContainer}>
                <div className={classes.labels}>
                    <p>Normal Ticket</p>
                    <p>Weekend</p>
                    <p>CinemaFriday</p>
                </div>
                <div className={classes.mainSeance}>
                    <div className={classes.SeanceInfo} style={{transform: 'translate3d(0px,20px,0px)'}}>
                        <p>Week or More</p>
                        <p id={classes.seanceParagraph}>to seance</p>
                        <div className={classes.Specialticket}>
                            <p>{price1} USD</p>
                            <div id={classes.dot}/>
                        </div>
                        <div className={classes.Specialticket}>
                            <p>{price1 + 5 } USD</p>
                            <div id={classes.dot}/>
                        </div>
                        <div className={classes.Specialticket}>
                            <p>{price1 - 2} USD</p>
                            <div id={classes.dot}/>
                        </div>
                    </div>
                </div>
                <Ticket days ="2days" price={price2}/>
                <Ticket days ="1day" price={price3}/>
                <Ticket days ="In Day" price={price4}/>
                <div className={classes.TableInfo}>
                    <p>3D Screenings: +2 USD</p>
                    <p>VIP Room: +5 USD</p>
                    <p>Premieres: +3 USD</p>
                </div>
            </div>
            </>
    )
}