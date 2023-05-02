import { type ContentBoxProps } from './ContentBox.interface'
import styles from './ContentBox.module.css'

export default function ContentBox ({ headline, copy, count }: ContentBoxProps): JSX.Element {
  return (
    <>
      <div className={styles.contentBox} data-count={count}>
        <div className={styles.countBox1}/>
        <div className={styles.countBox2}/>
        <h2 className={styles.h2}>{headline}</h2>
        <p>{copy}</p>
      </div>
    </>
  )
}
