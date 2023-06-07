import { type SanityImageObject } from '@sanity/image-url/lib/types/types'
import { REFERENCE_KEYS, type ReferenceType } from '../../../interfaces/dataResponse.interface'
import { getReferenceData } from '../../../utilities/getReferenceData'
import { client } from '../../client'
import { buildImageUrl } from '../../../utilities/buildImageUrl'

export async function getServerSideProps({ req, res }): Promise<{ props: { title: string, mobileTitle: string, tagline: string, content: string, companies: any[], image: SanityImageObject, accent: string, footer: unknown } }> {
  const data = await client.fetch('*[ _type == "page" && slug.current == "work" ]')
  const { title, mobileTitle, tagline, content, accent, companies, image, footer } = data[0]
  const referenceData = await getReferenceData(REFERENCE_KEYS.COMPANY, companies, client)
  const imageFormatted = image ? buildImageUrl(image, client) : null

  const footerContent = await getReferenceData(REFERENCE_KEYS.FOOTER, [footer], client)
  if (footerContent[0].socialLinks) {
    const socialLinks = await getReferenceData(REFERENCE_KEYS.SOCIAL_LINK, footerContent[0].socialLinks as ReferenceType[], client)
    footerContent[0].socialLinks = socialLinks
  }

  return {
    props: {
      title,
      mobileTitle,
      tagline,
      content,
      companies: referenceData,
      accent: accent ?? '',
      image: imageFormatted ? imageFormatted.props : {},
      footer: footer ?? {}
    }
  }
}
