export const BASE_PATH = '/zane.github.io'

export const withBase = (path = '/') => {
  if (/^(?:[a-z]+:|#)/i.test(path)) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return normalized === '/' ? `${BASE_PATH}/` : `${BASE_PATH}${normalized}`
}
