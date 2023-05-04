import urlBuilder from '@sanity/image-url'
import { type SanityClient } from 'next-sanity'

type BuildImageUrlType = (image: any, client: SanityClient, originalAsset?: any) => any

export const buildImageUrl: BuildImageUrlType = (image, client, originalAsset) => {
  try {
    const src = urlBuilder(client)
      .image(image)
      .width(800)
      .fit('max')
      .auto('format')
      .url()

    console.log(`img: ${image}`)
    console.log(`src: ${src}`)
    return {
      id: originalAsset._id ?? image._key,
      type: 'image',
      props: { src, alt: image.alt ?? '' }
    }
  } catch (e) {
    console.error(e)
  }
}
