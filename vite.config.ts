import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA, type VitePWAOptions } from 'vite-plugin-pwa'

const pwaOptions: Partial<VitePWAOptions> = {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    workbox: {
        cleanupOutdatedCaches: true // 清理过期的缓存
    },
    manifest: {
        name: 'My App',
        short_name: 'My App',
        description: 'My Awesome App description',
        icons: [
            {
                src: '/app/pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/app/pwa-512x512.png',
                sizes: '512x512'
            }
        ],
        start_url: '.', // 设置启动URL
        scope: '/', // 设置应用的作用域
        display: 'standalone', // 设置应用显示模式 minimal-ui | browser | fullscreen | standalone
        theme_color: '#ffffff' // 设置主题颜色
    },
    devOptions: {
        enabled: true // 开发环境也启用PWA，方便调试
    }
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), VitePWA(pwaOptions)],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src')
        }
    },
    server: {
        proxy: {
            '/bing-api': {
                target: 'https://cn.bing.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/bing-api/, '')
            }
        }
    }
})
