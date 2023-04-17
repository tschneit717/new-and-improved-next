import { Footer } from '../Footer'
import { Header } from '../Header'
import styles from './Layout.module.css'

export default function Layout ({ title, tagline, children, footer }): JSX.Element {
  return (
    <div>
      <Header title={title} tagline={tagline}></Header>
      <main className={styles.main}>{children}</main>
      <Footer content={footer}></Footer>
    </div>)
}
