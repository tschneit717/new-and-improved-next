import Img from 'next/image'
import { type ContentBoxProps } from './ContentBox.interface'
import styles from './ContentBox.module.css'
import cn from 'classnames'

type renderChildType = (child: any) => JSX.Element

export default function ContentBox({ headline, copy, count, minHeight = true, children }: ContentBoxProps): JSX.Element {
  const renderChild: renderChildType = (child) => {
    if (child.type === 'text') {
      return <p key={child.id} className={styles.p}>{child.content}</p>
    }
    if (child.type === 'image') {
      return (
        <Img
          {...child.props}
          width="100"
          height="100"
          className={styles.img}
          key={child.id}
          sizes="(max-width: 800px) 100vw, 800px"
        />
      )
    }
    return <></>
  }
  return (
    <>
      <div className={cn([styles.contentBox, { [styles.minHeight]: minHeight }])} data-count={count}>
        <div className={styles.countBox1} />
        <div className={styles.countBox2} />
        <h2 className={styles.h2}>{headline}</h2>
        {copy
          ? copy.map(item => {
            return renderChild(item)
          })
          : <></>}
        {children}
      </div>
    </>
  )
}
