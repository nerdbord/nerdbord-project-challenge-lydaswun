import {createClient} from 'next-sanity'

export const sanityClient = createClient({
  projectId: 'dr96nfh9',
  dataset: 'production',
  apiVersion: '2021-06-07',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})
