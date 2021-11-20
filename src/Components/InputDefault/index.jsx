import ReactInputMask from 'react-input-mask'
import './styles.css'

export const InputDefault = (props) => {
    // Props => id, typeInput, labelName, ?mask
    return (
        <div className="input-filho">
            <div className="form__div">
                <ReactInputMask mask={props.mask || ""} maskChar="">
                    {() => <input 
                        id={props.id}
                        type={props.typeInput} 
                        className="form__input" 
                        placeholder=" "
                    />}
                </ReactInputMask>
                <label 
                    for={props.id} 
                    className="form__label"
                > 
                    {props.labelName}
                </label>
            </div>
        </div>
    )
}