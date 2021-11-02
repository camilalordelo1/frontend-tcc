import './styles.css'

export const TitleDefault = (props) => {
    const { text } = props
    return (
        <div className="div-title">
             
            <h1 className="title-h1"> {text} </h1>
            <hr className="gradient"/> 
        </div>
    )
}