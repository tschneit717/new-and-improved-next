export interface ButtonProps {
  children: string
  onClick?: () => void
  disabled?: boolean
  classNames?: string | string[]
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'small' | 'medium' | 'large'
  icon?: string
  iconPosition?: 'left' | 'right'
  iconOnly?: boolean
}
