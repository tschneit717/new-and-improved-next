import { type TextAreaFieldProps } from './TextArea.interface'
import styles from './TextArea.module.css'

export default function TextArea ({ label, name, placeholder, value, onChange, error, onBlur, onFocus, required = false, disabled = false }: TextAreaFieldProps): JSX.Element {
  return (
    <div className={styles.textareaWrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.textarea}>
        <textarea
          rows={5}
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
        </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}
