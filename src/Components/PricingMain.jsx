import classes from './PricingMain.module.css'

function PricingMain(){
    return(
        <>
        <div className={classes.main}>
            <p id={classes.Pricing}>Ticket Pricing</p>
            <div className={classes.priceContainer}>
                <div className={classes.labels}>
                    <p>Normal Ticket</p>
                    <p>Weekend</p>
                    <p>CinemaFriday</p>
                </div>
                <div className={classes.mainSeance}>
                    <p>Week to seance</p>
                </div>
                <div className={classes.seance}>
                    <p>3 days to seance</p>
                </div>
                <div className={classes.seance}>
                    <p>2 days to seance</p>
                </div>
                <div className={classes.seance}>
                    <p>1 day to seance</p>
                </div>
                <div className={classes.seance}>
                    <p>Day of seance</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default PricingMain