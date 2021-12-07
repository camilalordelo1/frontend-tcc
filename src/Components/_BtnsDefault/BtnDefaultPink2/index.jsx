import './styles.css'

export const BtnDefaultPink2 = ({type, value, ...rest}) => {	
	return(
		<input
			className="btnPinkP2"
			type={type}
			value={value} 
			{...rest}
		/>
	)
}