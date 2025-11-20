/**
 * 检查是否 https 或 localhost
 */
export const isHttpsOrLocalhost: boolean = window.isSecureContext

/**
 * 检查 manifest 链接是否存在
 */
export const isExistManifest = () => document.querySelector('link[rel="manifest"]')

/**
 * 检查是否是 PWA 应用
 */
export const isPWA = () => window.matchMedia('(display-mode: standalone)').matches
