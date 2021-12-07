import ReactInputMask from 'react-input-mask'
import React from 'react'
import './styles.css'

export const InputDefault = React.forwardRef(({
	id,
	typeInput,
	labelName,
	mask,
	style,
	onChange,
	onBlur,
	...rest
}, ref) => {	
	return (
		<div className="input-filho">
			<div className="form__div">
			<ReactInputMask
				mask={mask}
				onChange={onChange}
				onBlur={onBlur}
				{...rest}
			>
				{(inputProps) => (
					<input 
						id={id}
						type={typeInput}
						className="form__input" 
						placeholder=" "
						ref={ref}
						onChange={onChange}
						onBlur={onBlur}
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