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

    const id = originalAsset ? originalAsset._id : image._key

    return {
      id: id ?? '',
      type: 'image',
      props: { src, alt: image.alt ?? '' }
    }
  } catch (e) {
    console.error(e)
  }
}
