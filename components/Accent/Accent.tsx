import { type AccentProps } from './Accent.interface'
import styles from './Accent.module.css'

export default function Accent ({ text, color }: AccentProps): JSX.Element {
  return (
    <span data-color={color} className={styles.accent}>
      {text}
      <span className={styles.underscore}>_</span>
    </span>
  )
}
