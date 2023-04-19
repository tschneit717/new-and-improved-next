import { client } from '../../client'

export async function getServerSideProps ({ req, res }): Promise<{ props: { title: string, tagline: string, content: string, accent: string } }> {
  const data = await client.fetch('*[ _type == "page" && slug.current == "uses" ]')
  const { title, tagline, content, accent } = data[0]
  return {
    props: {
      title,
      tagline,
      content,
      accent: accent ?? ''
    }
  }
}
