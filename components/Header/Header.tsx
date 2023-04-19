import { Nav } from '../Nav'
import { type HeaderProps } from './Header.interface'
import styles from './Header.module.css'

export default function Header ({ title, tagline, accent }: HeaderProps): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.titleSection}>
        <h1>
          <span className={styles.title}>{title}</span>
          <span className={styles.dot}>.</span>
          <span className={styles.accent}>{accent}
            <span className={styles.underscore}>_</span>
          </span>
        </h1>
        <p>{tagline}</p>
      </div>
      <Nav></Nav>
    </header>
  )
}
