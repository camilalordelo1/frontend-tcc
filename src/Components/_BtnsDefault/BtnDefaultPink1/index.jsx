import './styles.css'

export const BtnDefaultPink1 = (props) => {
    const { type, value, callbackFunc } = props
    return(
        <button
            className="btnPinkP1"
            type={type}
            value={value} 
            onClick={callbackFunc}
        >
            {value}
        </button>
    )
}


