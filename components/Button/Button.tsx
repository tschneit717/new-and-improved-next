import cn from 'classnames'
import styles from './Button.module.css'
import { type ButtonProps } from './Button.interface'
export default function Button ({ children, disabled, classNames, size, variant, icon, iconPosition, onClick, type = 'button' }: ButtonProps): JSX.Element {
  return (
    <button className={cn(styles.button, Array.isArray(classNames) ? [...classNames] : classNames)} onClick={onClick} type={type}>
      {children}
    </button>
  )
}
