import { type SanityImageObject } from '@sanity/image-url/lib/types/types'
import { client } from '../../client'

export async function getServerSideProps({ req, res }): Promise<{ props: { title: string, mobileTitle: string, tagline: string, content: string, image: SanityImageObject, accent: string } }> {
  const data = await client.fetch('*[ _type == "project" && slug.current == "projects" ]')
  const { title, mobileTitle, tagline, content, accent, image } = data[0]
  return {
    props: {
      title,
      mobileTitle,
      tagline,
      content,
      accent: accent ?? '',
      image: image ?? ''
    }
  }
}
