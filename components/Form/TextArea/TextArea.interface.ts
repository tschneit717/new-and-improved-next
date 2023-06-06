export interface TextAreaFieldProps {
  label: string
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  error?: string
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  disabled?: boolean
  required?: boolean
}
