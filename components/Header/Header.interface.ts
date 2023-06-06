import { type StaticImageData } from 'next/image'

export interface HeaderProps {
  logo: StaticImageData
  title: string
  mobileTitle: string
  tagline: string
  accent: string
}
