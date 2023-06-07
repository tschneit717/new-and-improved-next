import { createClient } from 'next-sanity'
import { getReferenceData } from '../utilities/getReferenceData'
import { type DataResponseType, REFERENCE_KEYS, type ReferenceType } from '../interfaces/dataResponse.interface'

export const client = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: 'production'
})

export const getFooterContent = async (footer: ReferenceType): Promise<DataResponseType> => {
  const footerContent = await getReferenceData(REFERENCE_KEYS.FOOTER, [footer], client)
  if (footerContent[0].socialLinks) {
    const socialLinks = await getReferenceData(REFERENCE_KEYS.SOCIAL_LINK, footerContent[0].socialLinks as ReferenceType[], client)
    footerContent[0].socialLinks = socialLinks
  }
  return footerContent[0]
}
