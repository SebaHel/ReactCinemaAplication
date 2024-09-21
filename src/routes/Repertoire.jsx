import classes from './Repertoire.module.css'
import Header from '../Components/NavFiles/Header'
import Footer from '../Components/NavFiles/Footer'
import DayCard from '../Components/DayCard'
import RepertoireFilmList from '../Components/RepertoireFilmList'

export default function Repertoire (){
    return (
        <>
        <Header />
        <div className={classes.RepertoireDayCard}>
            <p className={classes.paragraph}>Choose Day You're intrested In</p>
            <DayCard />
        </div>
        <RepertoireFilmList />
        <Footer />
        </>
    )
}
