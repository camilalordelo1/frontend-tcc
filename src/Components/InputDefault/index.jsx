import './styles.css'

export const InputDefault = (props) => {
    // Props => id, typeInput, labelName
    return (
        <>
            <div className="input-filho">
                <div className="form__div">
                    <input 
                        id={props.id}
                        type={props.typeInput} 
                        className="form__input" 
                        placeholder=" "
                    />
                    <label 
                        for={props.id} 
                        className="form__label"
                    > 
                        {props.labelName}
                    </label>
                </div>
            </div>

        </>
    )
}