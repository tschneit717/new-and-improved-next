import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import styles from './Nav.module.css'
import { useState } from 'react'

export default function Nav(): JSX.Element {
  const router = useRouter()
  const [isHidden, toggleIsHidden] = useState(true)

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
      <button className={styles.mobileButton} onClick={toggleIsHidden.bind(this, !isHidden)} />
      <ul className={cn(styles.navList, { [styles.hidden]: isHidden })}>
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
