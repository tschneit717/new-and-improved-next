import { buildImageUrl } from '../../../utilities/buildImageUrl'
import { formatRichTextContent } from '../../../utilities/formatRichTextContent'
import { client } from '../../client'
import { type SanityImageObject } from '@sanity/image-url/lib/types/types'

export async function getServerSideProps({ req, res }): Promise<{ props: { title: string, mobileTitle: string, tagline: string, content: string | any[], image: SanityImageObject, accent: string, footer: unknown } }> {
  const data = await client.fetch('*[ _type == "page" && slug.current == "home"]')
  const { title, mobileTitle, tagline, content, accent, image, footer } = data[0]
  const formattedContent = formatRichTextContent(client, content)
  const imageFormatted = image ? buildImageUrl(image, client) : null

  return {
    props: {
      title,
      mobileTitle,
      tagline,
      content: formattedContent,
      accent: accent ?? '',
      image: imageFormatted ? imageFormatted.props : {},
      footer: footer ?? {}
    }
  }
}
