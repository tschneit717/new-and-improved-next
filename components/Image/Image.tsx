import cn from 'classnames'
import NextImage from 'next/image'

export default function Image (src: string, alt: string, classes?: string | string[]): JSX.Element {
  return (
    <div className={cn(Array.isArray(classes) ? [...classes] : classes)}>
      <NextImage fill={true} src={src} alt={alt}></NextImage>
    </div>
  )
}
