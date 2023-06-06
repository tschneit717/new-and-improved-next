import styles from './Form.module.css'
import { type FormProps } from './Form.interface'
import { InputField } from './Input'
import { TextAreaField } from './TextArea'
import { HoneyPot } from './HoneyPot'

Form.Input = InputField
Form.TextArea = TextAreaField
Form.HoneyPot = HoneyPot

export default function Form ({ children, onSubmit }: FormProps): JSX.Element {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
