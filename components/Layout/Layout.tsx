import { Footer } from '../Footer'
import { Header } from '../Header'
import { Hero } from '../Hero'
import { type LayoutProps } from './Layout.interface'
import styles from './Layout.module.css'
import logo from './../../assets/images/ts_logo--light.png'

export default function Layout({ title, mobileTitle, tagline, accent, children, footer, hero }: LayoutProps): JSX.Element {
  return (
    <div>
      <Header logo={logo} mobileTitle={mobileTitle} title={title} tagline={tagline} accent={accent}></Header>
      {(hero && (hero?.text || hero?.image)) && (
        <Hero text={hero.text} subtext={hero.subtext} image={hero.image}></Hero>
      )}
      <main className={styles.main}>{children}</main>
      <Footer content={footer}></Footer>
    </div>)
}
