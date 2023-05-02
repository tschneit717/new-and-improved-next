import { formatRichTextContent } from '../../../utilities/formatRichTextContent'
import { client } from '../../client'

export async function getServerSideProps({ req, res }): Promise<{ props: { title: string, mobileTitle: string, tagline: string, content: string | any[], accent: string } }> {
  const data = await client.fetch('*[ _type == "page" && slug.current  == "about" ]')
  const { title, mobileTitle, tagline, content, accent } = data[0]
  const formattedContent = formatRichTextContent(client, content)
  return {
    props: {
      title,
      mobileTitle,
      tagline,
      content: formattedContent,
      accent: accent ?? ''
    }
  }
}
