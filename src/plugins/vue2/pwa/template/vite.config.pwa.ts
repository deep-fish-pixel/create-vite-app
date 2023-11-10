import { VitePWA } from 'vite-plugin-pwa'

export default () => (VitePWA({
    // mode: 'development',
    base: '/',
    registerType: 'autoUpdate',
    workbox: {
        cacheId: 'vite-app-pro',
        globPatterns: ['**/*.{js,css}'],
        navigateFallback: null,
        runtimeCaching: [
            {
                urlPattern: /api\/.*/i,
                handler: 'NetworkFirst',
                method: 'GET',
                options: {
                    networkTimeoutSeconds: 10,
                    cacheName: 'api-cache',
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            }
        ],
    },
    manifest: {
        name: 'Vite App Pro',
        short_name: 'Vite App Pro',
        theme_color: '#54d9e0',
        background_color: '#ffffff',
        icons: [
            {
                src: '/assets/icons/msapplication-icon-144x144.png',
                sizes: '144x144',
                type: 'image/png',
            },
            {
                src: '/assets/icons/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/assets/icons/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
        start_url: '/',
        display: 'standalone',
        lang: 'zh-CN',
    },
}))
