import { type SanityImageObject } from '@sanity/image-url/lib/types/types'
import { client, getFooterContent } from '../../client'
import { buildImageUrl } from '../../../utilities/buildImageUrl'
import { formatRichTextContent } from '../../../utilities/formatRichTextContent'
import { getReferenceData } from '../../../utilities/getReferenceData'
import { REFERENCE_KEYS } from '../../../interfaces/dataResponse.interface'

export async function getStaticProps({ req, res }): Promise<{ props: { title: string, mobileTitle: string, tagline: string, content: string | any[], image: SanityImageObject, accent: string, uses: any[], footer: unknown } }> {
  const data = await client.fetch('*[ _type == "page" && slug.current == "uses" ]')
  const { title, mobileTitle, tagline, content, accent, image, uses, footer } = data[0]
  const formattedContent = formatRichTextContent(client, content)
  const imageFormatted = image ? buildImageUrl(image, client) : null
  const usesFormatted = await getReferenceData(REFERENCE_KEYS.USES, uses, client)
  const footerContent = await getFooterContent(footer)

  return {
    props: {
      title,
      mobileTitle,
      tagline,
      content: formattedContent,
      accent: accent ?? '',
      image: imageFormatted ? imageFormatted.props : {},
      uses: usesFormatted ?? [],
      footer: footerContent ?? {}
    }
  }
}
