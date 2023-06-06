import { type getReferenceDataType } from '../interfaces/dataResponse.interface'
import { buildImageUrl } from './buildImageUrl'

export const getReferenceData: getReferenceDataType = async (referenceName, sources, client) => {
  const result = await client.fetch(`*[_type == "${referenceName}"]`)
  return result.map(item => {
    if (item.image.asset || item.asset) {
      const lookupRef = item.image || item
      item.image = buildImageUrl(lookupRef, client, item)
    }
    return item
  })
}
