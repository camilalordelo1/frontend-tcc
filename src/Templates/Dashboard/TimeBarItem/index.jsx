import './styles.css'

export const TimeBarItem = (props) => {
    const { hour } = props;
    return(
        <div className="time-bar-item">
            <p> {hour} </p> 
        </div>
    )
}