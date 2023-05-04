import cn from 'classnames'
import NextImage from 'next/image'

type ImageProps = {
  src: string
  alt: string
  fill: true
  height?: number
  width?: number
  classes?: string | string[]
} | {
  src: string
  alt: string
  fill: false
  height: number
  width: number
  classes?: string | string[]
}

export default function Image({ src, alt, classes, fill = true, height, width }: ImageProps): JSX.Element {
  return (
    <div className={cn(Array.isArray(classes) ? [...classes] : classes)}>
      <NextImage
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        src={src}
        alt={alt}
      >
      </NextImage >
    </div >
  )
}
