import { type InputFieldProps } from './Input.interface'
import styles from './Input.module.css'

export default function InputField ({ label, name, autocomplete = 'on', type = 'text', placeholder, value, onChange, error, onBlur, onFocus, required = false, disabled = false }: InputFieldProps): JSX.Element {
  return (
    <div className={styles.input}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.inputField}
        type={type}
        name={name}
        autoComplete={autocomplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        required={required}
        disabled={disabled}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}
