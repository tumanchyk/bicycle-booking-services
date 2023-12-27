import style from "./Form.module.scss"
const Input = ({ id, name, type, onChange, onBlur, value, placeholder, error, touched }) => {
    return <div className={style.inputField}>
        <input className={style.input}
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder} />
        {error && touched && (
        <div className={style.inputError}>{error}</div>
      )}
    </div>
}
export default Input;