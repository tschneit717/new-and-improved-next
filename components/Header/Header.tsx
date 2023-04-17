import { Logo } from '../Logo'
import { Nav } from '../Nav'
import { type HeaderProps } from './Header.interface'
import styles from './Header.module.css'

export default function Header ({ title, tagline }: HeaderProps): JSX.Element {
  return (
    <header className={styles.header}>
      <Logo></Logo>
      <h1>{title}</h1>
      <p>{tagline}</p>
      <Nav></Nav>
    </header>
  )
}
