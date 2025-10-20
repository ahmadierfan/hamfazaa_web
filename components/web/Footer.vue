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
                        <span class="text-2xl font-black">همفضا</span>
                    </div>
                    <p class="text-gray-400 mb-6 leading-relaxed max-w-md">
                        سامانه مدیریت هوشمند فضای کار اشتراکی با قابلیت‌های پیشرفته رزرواسیون و مدیریت منابع برای
                        سازمان‌های مدرن
                    </p>
                    <div class="flex space-x-4">
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
                        class="text-lg font-black mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
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
                        class="text-lg font-black mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                        تماس با ما
                    </h4>
                    <div class="space-y-4">
                        <div v-for="contact in contactInfo" :key="contact.type" class="flex items-center text-gray-400">
                            <div class="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center ml-3">
                                <component :is="contact.icon" class="w-4 h-4" />
                            </div>
                            <span>{{ contact.value }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- خط جداکننده -->
            <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 text-sm">
                    © ۲۰۲۴ همفضا. تمام حقوق محفوظ است.
                </p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <a v-for="policy in policies" :key="policy.name" :href="policy.href"
                        class="text-gray-400 hover:text-orange-400 text-sm transition duration-300">
                        {{ policy.name }}
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
// آیکون‌های SVG
const TwitterIcon = {
    template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
    </svg>
  `
}

const InstagramIcon = {
    template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z" clip-rule="evenodd"/>
    </svg>
  `
}

const LinkedinIcon = {
    template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  `
}

const LocationIcon = {
    template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  `
}

const PhoneIcon = {
    template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  `
}

const EmailIcon = {
    template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  `
}

const socialLinks = [
    { name: 'Twitter', href: '#', icon: TwitterIcon },
    { name: 'Instagram', href: '#', icon: InstagramIcon },
    { name: 'LinkedIn', href: '#', icon: LinkedinIcon }
]

const quickLinks = [
    { name: 'صفحه اصلی', href: '#' },
    { name: 'خدمات', href: '#services' },
    { name: 'قیمت‌ها', href: '#pricing' },
    { name: 'تقویم', href: '#calendar' },
    { name: 'سوالات متداول', href: '#faq' }
]

const contactInfo = [
    { type: 'آدرس', value: 'تهران، خیابان ولیعصر', icon: LocationIcon },
    { type: 'تلفن', value: '۰۲۱-۱۲۳۴۵۶۷۸', icon: PhoneIcon },
    { type: 'ایمیل', value: 'info@همفضا.ir', icon: EmailIcon }
]

const policies = [
    { name: 'حریم خصوصی', href: '#' },
    { name: 'قوانین استفاده', href: '#' },
    { name: 'سیاست بازپرداخت', href: '#' }
]
</script>