import Image from 'next/image'
import { Accent } from '../Accent'
import styles from './Hero.module.css'
import { type HeroProps } from './Hero.interface'
import { Shapes } from '../Shape'

export default function Hero({ text, subtext, image }: HeroProps): JSX.Element {
  return (
    <div className={styles.hero}>
      <div className={styles.copy}>
        <h2>
          <Accent text={text} />
        </h2>
        <p>{subtext}</p>
      </div>
      <div className={styles.background}>
        {image ? <Image alt={image.alt} src={image.src} /> : <Shapes />}
      </div>
    </div>
  )
}
