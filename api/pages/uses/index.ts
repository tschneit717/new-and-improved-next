import { client } from '../../client'

export async function getServerSideProps({ req, res }): Promise<{ props: { title: string, mobileTitle: string, tagline: string, content: string, accent: string } }> {
  const data = await client.fetch('*[ _type == "page" && slug.current == "uses" ]')
  const { title, mobileTitle, tagline, content, accent } = data[0]
  return {
    props: {
      title,
      mobileTitle,
      tagline,
      content,
      accent: accent ?? ''
    }
  }
}
