import './styles.css'

export const BtnDefaultPink2 = (props) => {
    const { type } = props
    const { value } = props
    return(
        <input
        className="btnPinkP2"
        type={type}
        value={value} 
        />
    )
}