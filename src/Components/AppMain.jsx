import AppMainSlider from "./AppMainSlider"
import FilmCards from "./FilmCards";
import classes from './AppMain.module.css'
import DayCard from "./DayCard";

function AppMain(){
    return(
        <>
        <AppMainSlider />
        <div className={classes.weeknav}>
            <p>
                Choose day which You're intrested in.
            </p>
          <DayCard />
        </div>
        <div className={classes.interlude}>
            <p>
                In Repertoire
            </p>
        </div>
        <FilmCards />
    </>
    )
}

export default AppMain