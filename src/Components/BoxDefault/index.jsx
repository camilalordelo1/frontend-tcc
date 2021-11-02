import './styles.css'

export const BoxDefault = (props) => {
    const title = props.title
    const conteudo = props.conteudo
    return(
    <div className="box-default"> 
        <div className="top-box-default"> 
            <h1> {title} </h1>
        </div>

        <div className="l-form">
            {conteudo}
        </div>
    </div>
    )
}