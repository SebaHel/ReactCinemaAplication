import AppMainSlider from "./AppMainSlider"
import FilmCards from "./FilmCards";
import classes from './AppMain.module.css'

function AppMain(){
    return(
        <>
        <AppMainSlider />
        <div className={classes.interlude}>
            <p>
                Check Repertoire
            </p>
        </div>
        <FilmCards />
    </>
    )
}

export default AppMain