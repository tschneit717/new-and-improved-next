import cn from 'classnames'
import styles from './Button.module.css'
import { type ButtonProps } from './Button.interface'
export default function Button ({ children, disabled, classNames, size, variant, icon, iconPosition, onClick, type = 'button' }: ButtonProps): JSX.Element {
  return (
    <button
    data-variant={variant}
    className={cn(styles.button, Array.isArray(classNames) ? [...classNames] : classNames)}
    onClick={onClick}
    disabled={disabled}
    type={type}>
      <span>
        {iconPosition === 'left' && icon ? <span className={styles.icon}>{icon}</span> : null}
        {children}
        {iconPosition === 'right' && icon ? <span className={styles.icon}>{icon}</span> : null}
      </span>
    </button>
  )
}
