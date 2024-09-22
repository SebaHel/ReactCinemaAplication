import classes from './PricingMain.module.css'
import TicketTable from './TicketTable'

function PricingMain(){
    return(
        <>
        <div className={classes.main}>
            <TicketTable price1={10} price2 ={12} price3={14} price4={16} name ="Normal Ticket"/>
            <TicketTable price1={8} price2 ={10} price3={12} price4={14} name ="Discounted Ticket"/>
            <TicketTable price1={6} price2 ={8} price3={10} price4={12} name ="Kid Ticket"/>
        </div>
        </>
    )
}
export default PricingMain