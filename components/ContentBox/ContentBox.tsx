import Img from 'next/image'
import { type ContentBoxProps } from './ContentBox.interface'
import styles from './ContentBox.module.css'
import cn from 'classnames'
import { Image } from '../Image'

type renderChildType = (child: any) => JSX.Element

export default function ContentBox({ image, headline, copy, count, minHeight = true, children }: ContentBoxProps): JSX.Element {
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
  console.log(image)
  return (
    <>
      <div className={cn([styles.contentBox, { [styles.minHeight]: minHeight }])} data-count={count}>
        {image
          ? <div>
          <Image fill={true} src={image} alt={headline}/>
        </div>
          : <></>
        }
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
