import { useEffect } from 'react'
import { absoluteUrl, SITE_AUTHOR, SITE_DESCRIPTION, SITE_NAME } from '../site'

const setMeta = (selector, attributes, content) => {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value))
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

const SEO = ({
  title = SITE_NAME,
  description = SITE_DESCRIPTION,
  path = '/',
  type = 'website',
  image = '/3nty.png',
  structuredData,
}) => {
  useEffect(() => {
    const url = absoluteUrl(path)
    const imageUrl = absoluteUrl(image)

    document.title = title
    setMeta('meta[name="description"]', { name: 'description' }, description)
    setMeta('meta[name="author"]', { name: 'author' }, SITE_AUTHOR)
    setMeta('meta[property="og:type"]', { property: 'og:type' }, type)
    setMeta('meta[property="og:url"]', { property: 'og:url' }, url)
    setMeta('meta[property="og:title"]', { property: 'og:title' }, title)
    setMeta('meta[property="og:description"]', { property: 'og:description' }, description)
    setMeta('meta[property="og:image"]', { property: 'og:image' }, imageUrl)
    setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt' }, `${SITE_AUTHOR} portfolio`)
    setMeta('meta[name="twitter:url"]', { name: 'twitter:url' }, url)
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title)
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description)
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, imageUrl)
    setMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt' }, `${SITE_AUTHOR} portfolio`)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    let jsonLd = document.head.querySelector('script[data-page-structured-data]')
    if (structuredData) {
      if (!jsonLd) {
        jsonLd = document.createElement('script')
        jsonLd.type = 'application/ld+json'
        jsonLd.dataset.pageStructuredData = 'true'
        document.head.appendChild(jsonLd)
      }
      jsonLd.textContent = JSON.stringify(structuredData)
    } else {
      jsonLd?.remove()
    }
  }, [description, image, path, structuredData, title, type])

  return null
}

export default SEO
