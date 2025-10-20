export default defineNuxtConfig({
    css: [
        '~/assets/css/global.css'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxt/icon',
        'nuxt-toast'
    ],
    icon: {
        collections: ['uil'],
    },
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'ico', href: '/images/favicon.ico' },
            ],
            meta: [
                { name: 'robots', content: 'noindex, nofollow' }
            ],
            htmlAttrs: {
                lang: 'fa',
                dir: 'rtl',
            },
            title: 'همفضا'
        },
    },
    runtimeConfig: {
        public: {
            ApiUrl: process.env.API_URL,
        }
    },

    compatibilityDate: '2025-02-06'
})