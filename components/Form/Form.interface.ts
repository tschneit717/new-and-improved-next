import { type FormEvent, type PropsWithChildren } from 'react'

export interface FormProps extends PropsWithChildren {
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void> | void
  isNetlifyForm?: boolean
  name?: string
  action?: string
}
