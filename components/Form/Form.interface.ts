import { type FormEvent, type PropsWithChildren } from 'react'

export interface FormProps extends PropsWithChildren {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  isNetlifyForm?: boolean
  name?: string
}
