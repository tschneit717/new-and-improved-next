import styles from './Form.module.css'
import { type FormProps } from './Form.interface'
import { InputField } from './Input'
import { TextAreaField } from './TextArea'
import { HoneyPot } from './HoneyPot'

Form.Input = InputField
Form.TextArea = TextAreaField
Form.HoneyPot = HoneyPot

export default function Form ({ children, isNetlifyForm, action, onSubmit, name }: FormProps): JSX.Element {
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className={styles.form} onSubmit={onSubmit} method="POST" name={name} action={action} data-netlify={isNetlifyForm} data-netlify-honeypot={isNetlifyForm ? 'bot-field' : ''}>
      {isNetlifyForm && <input type="hidden" name="form-name" value={name} />}
      {children}
    </form>
  )
}
