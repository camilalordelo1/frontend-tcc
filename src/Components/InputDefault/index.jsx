import ReactInputMask from 'react-input-mask'
import React from 'react'
import './styles.css'

export const InputDefault = React.forwardRef(({
	id,
	typeInput,
	labelName,
	mask,
	style,
	...rest
}, ref) => {
	// Props => id, typeInput, labelName, ?mask
	
	return (
		<div className="input-filho">
			<div className="form__div">
			<ReactInputMask
				mask={mask}
				{...rest}
			>
				{(inputProps) => (
					<input 
						id={id}
						type={typeInput}
						className="form__input" 
						placeholder=" "
						ref={ref}
						name={inputProps.name}
						defaultValue={inputProps.defaultValue}
						style={style}
					/>
				)}
			</ReactInputMask>
				<label 
					htmlFor={id} 
					className="form__label"
				> 
				  {labelName}
				</label>
			</div>
		</div>
	)
})