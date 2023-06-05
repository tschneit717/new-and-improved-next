import { type SanityImageObject } from '@sanity/image-url/lib/types/types'
import { client } from '../../client'
import { buildImageUrl } from '../../../utilities/buildImageUrl'

export async function getServerSideProps({ req, res }): Promise<{ props: { title: string, mobileTitle: string, tagline: string, content: string, image: SanityImageObject, accent: string } }> {
  const data = await client.fetch('*[ _type == "page" && slug.current == "contact" ]')
  const { title, mobileTitle, tagline, content, accent, image } = data[0]
  const imageFormatted = buildImageUrl(image, client)

  return {
    props: {
      title,
      mobileTitle,
      tagline: tagline ?? '',
      content: content ?? '',
      accent: accent ?? '',
      image: imageFormatted ? imageFormatted.props : {}
    }
  }
}
