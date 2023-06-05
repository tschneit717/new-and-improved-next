
import { Accent } from '../Accent'
import styles from './Hero.module.css'
import { type HeroProps } from './Hero.interface'

export default function Hero({ text, subtext, image }: HeroProps): JSX.Element {
  return (
    <div className={styles.hero}>
      <div className={styles.copy}>
        <h2>
          <Accent color='light' text={text} />
        </h2>
        <h3>{subtext}</h3>
      </div>
      {/* <div className={styles.background}> */}
        {/* 3d background goes here */}
      {/* </div> */}
    </div>
  )
}
