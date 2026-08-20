export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.3nty.xyz').replace(/\/$/, '')
export const SITE_NAME = 'Trinity Adeleye | Software Developer'
export const SITE_AUTHOR = 'Trinity Adeleye'
export const SITE_DESCRIPTION =
  'Portfolio of Trinity Adeleye, a mobile, Web Developer, and Web3 developer crafting premium digital experiences and high-performance applications.'

export const absoluteUrl = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
