import { Logo } from '../Logo'
import { Nav } from '../Nav'

export default function Header ({ title, tagline }) {
  return (
    <header>
      <Logo></Logo>
      <h1>{title}</h1>
      <p>{tagline}</p>
      <Nav></Nav>
    </header>
  )
}
