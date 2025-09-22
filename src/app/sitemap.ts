import { MetadataRoute } from 'next'
import { supportedLanguages } from '@/lib/language'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lagrangeengineering.ro'
  
  // Define all static routes
  const staticRoutes = [
    '',
    '/about',
    '/contact', 
    '/portfolio',
    '/services',
    '/politica-de-confidentialitate',
    '/politica-cookies',
    '/termeni-si-conditii'
  ]
  
  // Generate sitemap entries for each language and route combination
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  // Add root redirect page
  sitemapEntries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  })
  
  // Add language-specific pages
  supportedLanguages.forEach(lang => {
    staticRoutes.forEach(route => {
      const url = `${baseUrl}/${lang}${route}`
      const priority = route === '' ? 0.9 : route === '/about' || route === '/services' ? 0.8 : 0.6
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority,
        alternates: {
          languages: Object.fromEntries(
            supportedLanguages.map(l => [l, `${baseUrl}/${l}${route}`])
          )
        }
      })
    })
  })
  
  // Add legacy routes (non-language prefixed)
  const legacyRoutes = [
    '/despre',
    '/servicii', 
    '/portofoliu',
    '/contact'
  ]
  
  legacyRoutes.forEach(route => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })
  })
  
  return sitemapEntries
}