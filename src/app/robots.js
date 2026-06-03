import { MetadataRoute } from 'next'

export default function robots() {
  const baseUrl =  'https://www.howtocontact.live'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/user/', '/api/', '/_next/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}