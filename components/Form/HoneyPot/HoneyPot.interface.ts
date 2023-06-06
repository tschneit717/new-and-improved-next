import { type PropsWithChildren } from 'react'

export interface HoneyPotProps extends PropsWithChildren {
  name: string
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
