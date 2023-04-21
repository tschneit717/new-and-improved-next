import styles from './Shapes.module.css'

export default function Shapes(): JSX.Element {
  const count = 7

  return (
    <div className={styles.wrapper}>
      {[...Array(count)].map((item: string, index: number) => {
        console.log('index', index)
        return (
          <div key={item} data-width={'200px'} data-height={'300px'} className={styles.shape} data-count={index} id={`shape-${index}`}></div>
        )
      })}
    </div>
  )
}
