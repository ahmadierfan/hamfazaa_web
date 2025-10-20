<template>
    <section class="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <!-- المان‌های گرافیکی -->
        <div class="absolute top-32 left-1/4 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div class="absolute bottom-20 right-1/3 w-32 h-32 bg-amber-200 rounded-full opacity-30 animate-bounce"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2
                    class="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                    تیم متخصص ما
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    با تیمی از بهترین متخصصان ایرانی در حوزه فناوری اطلاعات و مدیریت کسب‌وکار
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div v-for="member in teamMembers" :key="member.id"
                    class="group text-center bg-white rounded-3xl shadow-xl hover:shadow-2xl p-6 transform hover:-translate-y-2 transition-all duration-500">
                    <!-- عکس پروفایل -->
                    <div class="relative mb-6">
                        <div
                            class="w-32 h-32 mx-auto bg-gradient-to-r from-orange-400 to-amber-400 rounded-full p-1 transform group-hover:scale-110 transition duration-500">
                            <div class="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                                <span class="text-2xl font-black text-gray-600">{{ member.initials }}</span>
                            </div>
                        </div>
                        <!-- نشان آنلاین -->
                        <div
                            class="absolute bottom-2 right-1/2 transform translate-x-8 w-4 h-4 bg-green-500 rounded-full border-2 border-white">
                        </div>
                    </div>

                    <!-- اطلاعات -->
                    <h3 class="text-xl font-black text-gray-900 mb-2">{{ member.name }}</h3>
                    <p class="text-orange-600 font-medium mb-3">{{ member.position }}</p>
                    <p class="text-gray-600 text-sm mb-4 leading-relaxed">{{ member.bio }}</p>

                    <!-- مهارت‌ها -->
                    <div class="flex flex-wrap justify-center gap-2 mb-4">
                        <span v-for="skill in member.skills" :key="skill"
                            class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                            {{ skill }}
                        </span>
                    </div>

                    <!-- شبکه‌های اجتماعی -->
                    <div class="flex justify-center space-x-3 space-x-reverse">
                        <a v-for="social in member.social" :key="social.name" :href="social.link"
                            class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition duration-300">
                            <component :is="social.icon" class="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            <!-- آمار تیم -->
            <div class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div v-for="stat in teamStats" :key="stat.id"
                        class="transform hover:scale-110 transition duration-300">
                        <div class="text-3xl font-black mb-2">{{ stat.value }}</div>
                        <div class="text-orange-100 text-sm">{{ stat.label }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// آیکون‌های SVG
const LinkedinIcon = {
    template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  `
}

const TwitterIcon = {
    template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
    </svg>
  `
}

const GithubIcon = {
    template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
    </svg>
  `
}

const teamMembers = ref([
    {
        id: 1,
        name: 'محمد رضایی',
        initials: 'م.ر',
        position: 'مدیر فنی',
        bio: '۱۰ سال تجربه در توسعه سیستم‌های ابری و معماری نرم‌افزار',
        skills: ['Cloud Architecture', 'Microservices', 'DevOps'],
        social: [
            { name: 'linkedin', icon: LinkedinIcon, link: '#' },
            { name: 'twitter', icon: TwitterIcon, link: '#' }
        ]
    },
    {
        id: 2,
        name: 'فاطمه محمدی',
        initials: 'ف.م',
        position: 'توسعه‌دهنده ارشد',
        bio: 'متخصص در توسعه front-end و تجربه کاربری با ۸ سال سابقه',
        skills: ['Vue.js', 'Nuxt', 'UI/UX'],
        social: [
            { name: 'linkedin', icon: LinkedinIcon, link: '#' },
            { name: 'github', icon: GithubIcon, link: '#' }
        ]
    },
    {
        id: 3,
        name: 'علی کریمی',
        initials: 'ع.ک',
        position: 'مدیر محصول',
        bio: 'کارشناس ارشد مدیریت فناوری اطلاعات و تحلیل بازار',
        skills: ['Product Management', 'Market Analysis', 'Agile'],
        social: [
            { name: 'linkedin', icon: LinkedinIcon, link: '#' },
            { name: 'twitter', icon: TwitterIcon, link: '#' }
        ]
    },
    {
        id: 4,
        name: 'زهرا حسینی',
        initials: 'ز.ح',
        position: 'متخصص امنیت',
        bio: 'مشاور امنیت سایبری با گواهی‌نامه‌های بین‌المللی',
        skills: ['Cybersecurity', 'Penetration Testing', 'Compliance'],
        social: [
            { name: 'linkedin', icon: LinkedinIcon, link: '#' },
            { name: 'github', icon: GithubIcon, link: '#' }
        ]
    }
])

const teamStats = ref([
    { id: 1, value: '۴۰+', label: 'سال تجربه جمعی' },
    { id: 2, value: '۱۵+', label: 'پروژه موفق' },
    { id: 3, value: '۱۰۰٪', label: 'رضایت مشتری' },
    { id: 4, value: '۲۴/۷', label: 'پشتیبانی' }
])
</script>