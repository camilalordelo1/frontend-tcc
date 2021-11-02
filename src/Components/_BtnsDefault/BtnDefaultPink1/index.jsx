import './styles.css'

export const BtnDefaultPink1 = (props) => {
    const { type, value } = props
    return(
        <input
        className="btnPinkP1"
        type={type}
        value={value} 
        />
    )
}


