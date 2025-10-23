<template>
    <footer class="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        <!-- المان گرافیکی -->
        <div
            class="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-orange-500 rounded-full opacity-10 blur-3xl">
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- درباره ما -->
                <div class="lg:col-span-2">
                    <div class="flex items-center space-x-3 mb-6">
                        <div
                            class="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>
                        </div>
                        <span class="text-2xl ">همفضا</span>
                    </div>
                    <p class="text-gray-400 mb-6 leading-relaxed max-w-md">
                        سامانه مدیریت هوشمند فضای کار اشتراکی با قابلیت‌های پیشرفته رزرواسیون و مدیریت منابع برای
                        سازمان‌های مدرن
                    </p>
                    <div class="flex space-x-4">
                        <!-- شبکه‌های اجتماعی -->
                        <a referrerpolicy='origin' target='_blank'
                            href='https://trustseal.enamad.ir/?id=662632&Code=EoCtfOJK9W6t6ZTyxkMBhTkkha3US7Ig'><img
                                referrerpolicy='origin'
                                src='https://trustseal.enamad.ir/logo.aspx?id=662632&Code=EoCtfOJK9W6t6ZTyxkMBhTkkha3US7Ig'
                                alt='' style='cursor:pointer' code='EoCtfOJK9W6t6ZTyxkMBhTkkha3US7Ig'></a>
                    </div>
                </div>

                <!-- لینک‌های سریع -->
                <div>
                    <h4
                        class="text-lg  mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                        لینک‌های سریع
                    </h4>
                    <ul class="space-y-3">
                        <li v-for="link in quickLinks" :key="link.name">
                            <a :href="link.href"
                                class="text-gray-400 hover:text-orange-400 transition duration-300 flex items-center group">
                                <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition duration-300"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7" />
                                </svg>
                                {{ link.name }}
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- تماس با ما -->
                <div>
                    <h4
                        class="text-lg  mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                        تماس با ما
                    </h4>
                    <div class="space-y-4">
                        <a :href="contact.link" v-for="contact in contactInfo" :key="contact.type"
                            class="flex items-center text-gray-400">
                            <div class="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center ml-3">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        :d="contact.iconPath" />
                                </svg>
                            </div>
                            <span>{{ contact.value }}</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- خط جداکننده -->
            <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 text-sm">
                    © ۲۰۲۵ همفضا. تمام حقوق محفوظ است.
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
// لینک‌های شبکه‌های اجتماعی
const quickLinks = [
    { name: 'صفحه اصلی', href: '/' },
    { name: 'خدمات', href: '/#services' },
    { name: 'قیمت‌ها', href: '/#pricing' },
    { name: 'سوالات متداول', href: '/#faq' }
]

const contactInfo = [
    {
        link: 'httos://map.ir',
        type: 'آدرس',
        value: 'تهران -خیابان هنگام - ملک لو- پلاک ۱۱ ',
        iconPath: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
    },
    {
        link: 'tel:02128427044',
        type: 'تلفن',
        value: '021-28427044',
        iconPath: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
    },
    {
        link: 'mailto: info@hamfazaa.ir',
        type: 'ایمیل',
        value: 'info@hamfazaa.ir',
        iconPath: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    }
]

</script>