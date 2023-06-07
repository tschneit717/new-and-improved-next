import { type SanityImageObject } from '@sanity/image-url/lib/types/types'
import { REFERENCE_KEYS } from '../../../interfaces/dataResponse.interface'
import { getReferenceData } from '../../../utilities/getReferenceData'
import { client, getFooterContent } from '../../client'
import { buildImageUrl } from '../../../utilities/buildImageUrl'

export async function getServerSideProps({ req, res }): Promise<{ props: { title: string, mobileTitle: string, tagline: string, content: string, companies: any[], image: SanityImageObject, accent: string, footer: unknown } }> {
  const data = await client.fetch('*[ _type == "page" && slug.current == "work" ]')
  const { title, mobileTitle, tagline, content, accent, companies, image, footer } = data[0]
  const referenceData = await getReferenceData(REFERENCE_KEYS.COMPANY, companies, client)
  const imageFormatted = image ? buildImageUrl(image, client) : null

  const footerContent = await getFooterContent(footer)

  return {
    props: {
      title,
      mobileTitle,
      tagline,
      content,
      companies: referenceData,
      accent: accent ?? '',
      image: imageFormatted ? imageFormatted.props : {},
      footer: footerContent ?? {}
    }
  }
}
