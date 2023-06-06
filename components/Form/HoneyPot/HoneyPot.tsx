import { type PropsWithChildren } from 'react'
import styles from './HoneyPot.module.css'
export default function HoneyPot ({ children }: PropsWithChildren): JSX.Element {
  return (
    <div className={styles.hoenyIShrunkTheKids}>
      {children}
    </div>
  )
}
