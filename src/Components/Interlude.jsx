import classes from './Interlude.module.css'

export default function interlude(props){
    return (
        <div className={classes.interlude}>
            <p>
                {props.body}
            </p>
        </div>
    )
}