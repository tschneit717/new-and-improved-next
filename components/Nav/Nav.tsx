import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Nav.module.css'

export default function Nav (): JSX.Element {
  const router = useRouter()

  const navItems = [
    {
      title: 'home',
      path: '/'
    },
    {
      title: 'about',
      path: '/about'
    },
    {
      title: 'projects',
      path: '/projects'
    },
    {
      title: 'work',
      path: '/work'
    },
    {
      title: 'uses',
      path: '/uses'
    }
  ]
  return (
    <nav>
      <ul className={styles.navList}>
        {navItems.map(
          (navLink, index) => (
            <li className={styles.navItem} key={navLink.path}>
              <p className={styles.index}>0{index + 1}</p>
              <Link href={navLink.path} className={router.pathname === navLink.path ? styles.active : ''}>{`// ${navLink.title}`}</Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}
