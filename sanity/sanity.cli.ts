import {createClient} from 'next-sanity'

export const sanityClient = createClient({
  projectId: 'dr96nfh9', // Twój projectId
  dataset: 'production', // Twój dataset
  apiVersion: '2021-06-07',
  token: process.env.SANITY_TOKEN, // Upewnij się, że masz ustawioną zmienną środowiskową SANITY_TOKEN
  useCdn: false,
})
