import { type SanityImageObject } from '@sanity/image-url/lib/types/types'
import { client } from '../../client'
import { buildImageUrl } from '../../../utilities/buildImageUrl'

export async function getServerSideProps({ req, res }): Promise<{ props: { title: string, mobileTitle: string, tagline: string, content: string, image: SanityImageObject, accent: string, footer: unknown } }> {
  const data = await client.fetch('*[ _type == "project" && slug.current == "projects" ]')
  const { title, mobileTitle, tagline, content, accent, image, footer } = data[0]
  const imageFormatted = image ? buildImageUrl(image, client) : null

  return {
    props: {
      title,
      mobileTitle,
      tagline,
      content,
      accent: accent ?? '',
      image: imageFormatted ? imageFormatted.props : {},
      footer: footer ?? {}
    }
  }
}
