import { type StaticImageData } from 'next/image'
import { type PropsWithChildren } from 'react'

export interface ContentBoxProps extends PropsWithChildren {
  headline: string
  count: number
  minHeight?: boolean
  copy?: any[]
  image?: StaticImageData
}
