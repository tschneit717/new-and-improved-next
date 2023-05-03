import { type SanityClient } from 'next-sanity'

import { buildImageUrl } from './buildImageUrl'

interface entryTypes {
  _key: string
  _type: string
  children: any[]
  asset?: any
  alt?: string
}

type formatRichTextContentType = (
  client: SanityClient,
  content?: entryTypes[] | null
) => any[] | string | []

export const formatRichTextContent: formatRichTextContentType = (client, content) => {
  if (!content) return []
  if (content && !Array.isArray(content)) return content
  return content.map((entry) => {
    if (entry._type === 'block') {
      return {
        id: entry._key,
        type: 'text',
        content: entry.children.map((item: { text: any }) => item.text).join(' ')
      }
    }
    if (entry._type === 'image') {
      return buildImageUrl(entry, client)
    }
    return {}
  })
}
