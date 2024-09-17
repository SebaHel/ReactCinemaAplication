import AppMainSlider from "./AppMainSlider"
import FilmCards from "./FilmCards";
import classes from './AppMain.module.css'
import DayCard from "./DayCard";
import FullRepertoireSlider from "./FullRepertoireSlider";

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
        <FilmCards />
        <FullRepertoireSlider />
    </>
    )
}

export default AppMain