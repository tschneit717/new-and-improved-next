import Image from 'next/image'
import { Accent } from '../Accent'
import styles from './Hero.module.css'
import { type HeroProps } from './Hero.interface'

export default function Hero ({ text, subtext, image }: HeroProps): JSX.Element {
  return (
    <div className={styles.hero}>
      <h2>
        <Accent text={text}/>
      </h2>
      <p>{subtext}</p>
      {image ? <Image alt={image.alt} src={image.src}/> : <></>}
    </div>
  )
}
