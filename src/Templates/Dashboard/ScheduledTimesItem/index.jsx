import './styles.css'

export const ScheduledTimesItem = (props) => {
    const  { nameCheck, hourCheck, numberCheck } = 
    props;
    // color => pink, blue, yellow
    
    return(
    
        <>
        <div className={"scheduled-times-item"} >
            <div className="row-sche">
                <h1> {nameCheck} </h1>
                <p> {hourCheck} </p>
            </div>
            <div className="row-sche">
                <p> Consulta {numberCheck} </p>
                <div className="space">
                </div>
                <p> + </p>
            </div>
            
        </div>
        </>
    )
}