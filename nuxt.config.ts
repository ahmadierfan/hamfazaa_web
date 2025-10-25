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
    ssr: true,
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
            title: 'نرم افزار مدیریت فضای کار اشتراکی'
        },
    },
    runtimeConfig: {
        public: {
            ApiUrl: process.env.API_URL,
            ApiBaseUrl: process.env.API_BASE_URL,
        }
    },

    compatibilityDate: '2025-02-06'
})