import styles from './Box.module.css'

export default function BoxComponent ({ children }): JSX.Element {
  return (<div className={styles.box}>
    {children}
  </div>)
}
