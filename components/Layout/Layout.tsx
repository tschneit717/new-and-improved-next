import { Footer } from '../Footer'
import { Header } from '../Header'
import { Hero } from '../Hero'
import { type LayoutProps } from './Layout.interface'
import styles from './Layout.module.css'

export default function Layout({ title, tagline, accent, children, footer, hero }: LayoutProps): JSX.Element {
  return (
    <div>
      <Header title={title} tagline={tagline} accent={accent}></Header>
      {(hero && (hero?.text || hero?.subtext || hero?.image)) && (
        <Hero text={hero.text} subtext={hero.subtext} image={hero.image}></Hero>
      )}
      <main className={styles.main}>{children}</main>
      <Footer content={footer}></Footer>
    </div>)
}
