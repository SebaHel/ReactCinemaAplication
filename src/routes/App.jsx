import Header from '../Components/NavFiles/Header'
import Footer from '../Components/NavFiles/Footer'
import AppMainSlider from "../Components/AppMainSlider"
import FilmCards from "../Components/FilmCards";
import DayCard from "../Components/DayCard";
import FullRepertoireSlider from "../Components/FullRepertoireSlider";
import classes from './App.module.css'

function App() {

  return (
    <>
      <Header />
      <AppMainSlider />
      <div className={classes.weeknav}>
        <p>
            Choose day which You're intrested in.
        </p>
        <DayCard />
      </div>
      <FilmCards />
      <FullRepertoireSlider />
      <Footer />
    </>
  )
}

export default App
