import { Footer } from '../Footer'
import { Header } from '../Header'

export default function Layout ({ title, tagline, children }) {
  return (
    <div>
      <Header title={title} tagline={tagline}></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>)
}
