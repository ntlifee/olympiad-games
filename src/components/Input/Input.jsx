import './input.css'

const InputComponent = (props) => {
    const { placeholder, action, inputValue, inputId } = props
    return (
        <input
            id={inputId}
            value={inputValue}
            type={"text"}
            placeholder={placeholder}
            onChange={event => {
                const newValue = event.target.value
                action(newValue)
            }}
        />
    )
}

export default InputComponent