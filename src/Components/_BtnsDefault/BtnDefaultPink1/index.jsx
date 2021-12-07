import './styles.css'

export const BtnDefaultPink1 = ({ type, value, callback, ...rest }) => {
    return(
        <button
            className="btnPinkP1"
            type={type}
            value={value} 
            onClick={callback}
            {...rest}
        >
            {value}
        </button>
    )
}


