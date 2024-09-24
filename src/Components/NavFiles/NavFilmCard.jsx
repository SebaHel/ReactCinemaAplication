import classes from './Header.module.css'

export default function NavFilmCard({Filmimg, filmAge, filmName, key}){
    return(
        <div key={key} className={classes.Repertoireinfo} style={{ backgroundImage: `url(${Filmimg})`}}> 
            <p key={filmName} id={classes.description}>{filmName}</p>
            <p key={Filmimg} id={classes.description}>MinAge: {filmAge}</p>
        </div>
    )
}