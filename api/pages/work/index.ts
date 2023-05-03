import { REFERENCE_KEYS } from '../../../interfaces/dataResponse.interface'
import { getReferenceData } from '../../../utilities/getReferenceData'
import { client } from '../../client'

export async function getServerSideProps({ req, res }): Promise<{ props: { title: string, mobileTitle: string, tagline: string, content: string, companies: any[], accent: string } }> {
  const data = await client.fetch('*[ _type == "page" && slug.current == "work" ]')
  const { title, mobileTitle, tagline, content, accent, companies } = data[0]
  const referenceData = await getReferenceData(REFERENCE_KEYS.COMPANY, companies, client)

  return {
    props: {
      title,
      mobileTitle,
      tagline,
      content,
      companies: referenceData,
      accent: accent ?? ''
    }
  }
}
