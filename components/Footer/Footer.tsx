import { Image } from '../Image'
import styles from './Footer.module.css'
export default function Footer ({ content }): JSX.Element {
  const currentYear = new Date().getFullYear()
  const { text, socialLinks } = content
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>© {text} - {currentYear}</p>
        <ul className={styles.socialLinks}>
          {socialLinks.map(link => (
            <li key={link._id}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <span className={styles.imageContainer}>
                  <Image
                    src={link.image.props.src}
                    alt={link.title}
                    fill={true}/>
                </span>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
