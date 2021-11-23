import './styles.css'

export const BtnDefaultPink1 = (props) => {
    const { type, value } = props
    return(
        <button
            className="btnPinkP1"
            type={type}
            value={value} 
        >
            {value}
        </button>
    )
}


