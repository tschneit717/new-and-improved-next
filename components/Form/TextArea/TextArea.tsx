import { type TextAreaFieldProps } from './TextArea.interface'
import styles from './TextArea.module.css'

export default function TextArea ({ label, name, placeholder, value, onChange, error, onBlur, onFocus, required = false, disabled = false }: TextAreaFieldProps): JSX.Element {
  return (
    <div className={styles.textarea}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <textarea
        className={styles.textareaField}
        name={name}
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
