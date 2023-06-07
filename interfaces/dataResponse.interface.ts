import { type SanityClient } from 'next-sanity'

export enum REFERENCE_KEYS {
  COMPANY = 'company',
  PROJECT = 'project',
  SOCIAL_LINK = 'socialLink',
  USES = 'uses',
  FOOTER = 'footer'
}

export interface DataResponseType {
  _createdAt?: string
  _rev?: string
  _type?: string
  description?: string
  company?: string
  text?: string
  socialLinks?: ReferenceType[] | DataResponseType[]
  _id?: string
  _updatedAt?: string
  image?: {
    asset?: {
      _type?: string
      _ref?: string
    }
    _type?: string
  }
}

export interface ReferenceType {
  _key: string
  _ref: string
  _type: string
}

export interface GetReferenceDataProps {
  referenceName: REFERENCE_KEYS
  sources: ReferenceType[]
  client: SanityClient
}

export type getReferenceDataType = (referenceName: REFERENCE_KEYS, sources: ReferenceType[], client: SanityClient) => Promise<DataResponseType[]>
