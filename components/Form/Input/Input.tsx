import { type ChangeEvent } from 'react'
import { type InputFieldProps } from './Input.interface'
import styles from './Input.module.css'

export default function InputField ({ label, name, autocomplete = 'on', type = 'text', placeholder, value, onChange, error, onBlur, onFocus, required = false, disabled = false }: InputFieldProps): JSX.Element {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e)
  }
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.input}>
        <input
          className={styles.inputField}
          type={type}
          name={name}
          autoComplete={autocomplete}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          required={required}
          disabled={disabled}
          />
        </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}
