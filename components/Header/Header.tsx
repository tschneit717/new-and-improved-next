import Link from 'next/link'
import { Accent } from '../Accent'
import { Image } from '../Image'
import { Nav } from '../Nav'
import { type HeaderProps } from './Header.interface'
import styles from './Header.module.css'

export default function Header({ logo, title, mobileTitle, tagline, accent }: HeaderProps): JSX.Element {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.titleSection}>
       <Image src={logo} alt="logo" classes={styles.logo} fill={true} width={100} height={100} />
        <div className={styles.text}>
        <h1>
          <span className={styles.title}>{title}</span>
          <span className={styles.mobileTitle}>{mobileTitle}</span>
          <span className={styles.dot}>.</span>
          <Accent text={accent} color="secondary" />
        </h1>
        <p className={styles.tagline}>{tagline}</p>
        </div>
      </Link>
      <Nav></Nav>
    </header>
  )
}
