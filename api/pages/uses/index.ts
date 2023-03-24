import { client } from '../../client'

export async function getServerSideProps ({ req, res }) {
  const data = await client.fetch('*[ _type == "page" && slug.current == "uses" ]')
  const { title, tagline, content } = data[0]
  return {
    props: {
      title,
      tagline,
      content
    }
  }
}
