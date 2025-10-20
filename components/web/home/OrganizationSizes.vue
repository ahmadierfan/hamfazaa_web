<template>
    <section class="py-20 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
        <!-- المان‌های گرافیکی -->
        <div class="absolute top-20 right-10 w-20 h-20 bg-orange-300 rounded-full opacity-20 animate-ping"></div>
        <div class="absolute bottom-32 left-10 w-28 h-28 bg-amber-300 rounded-full opacity-30 animate-pulse"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2
                    class="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                    مناسب برای هر اندازه سازمان
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    از استارتاپ‌های کوچک تا سازمان‌های بزرگ، راه‌کاری اختصاصی برای شما
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="org in organizationSizes" :key="org.id"
                    class="group bg-white rounded-3xl shadow-xl hover:shadow-2xl p-8 transform hover:-translate-y-4 transition-all duration-500 border-2"
                    :class="org.borderColor">
                    <!-- هدر -->
                    <div class="text-center mb-8">
                        <div class="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition duration-300"
                            :class="org.iconBg">
                            <component :is="org.icon" class="w-8 h-8 text-white" />
                        </div>
                        <h3 class="text-2xl font-black mb-2" :class="org.titleColor">{{ org.title }}</h3>
                        <p class="text-gray-600">{{ org.subtitle }}</p>
                    </div>

                    <!-- ویژگی‌ها -->
                    <div class="space-y-4 mb-8">
                        <div v-for="feature in org.features" :key="feature"
                            class="flex items-center text-gray-700 group-hover:text-gray-900 transition duration-300">
                            <svg class="w-5 h-5 ml-3 text-green-500 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            {{ feature }}
                        </div>
                    </div>

                    <!-- آمار -->
                    <div
                        class="bg-gray-50 rounded-2xl p-4 text-center transform group-hover:scale-105 transition duration-300">
                        <div class="text-2xl font-black mb-1" :class="org.statColor">{{ org.stat }}</div>
                    </div>

                    <!-- دکمه CTA -->
                    <div class="w-full mt-6 py-3 rounded-xl text-center transform group-hover:scale-105 transition duration-300"
                        :class="org.buttonClass">
                        <NuxtLink to="/pricing" class="">
                            مشاهده جزییات
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- توضیح پایانی -->
            <div class="mt-16 text-center">
                <div class="bg-white rounded-3xl shadow-lg p-8 border border-orange-200 max-w-4xl mx-auto">
                    <h3 class="text-2xl font-black text-gray-900 mb-4">راه‌کار سفارشی برای سازمان شما</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">
                        تیم متخصص ما آماده ارائه راه‌حل‌های اختصاصی متناسب با نیازهای خاص سازمان شماست.
                        از مشاوره رایگان تا پیاده‌سازی کامل در کنار شما هستیم.
                    </p>
                    <button
                        class="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition duration-300">
                        درخواست مشاوره رایگان
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// آیکون‌های SVG
const StartupIcon = {
    template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>
  `
}

const BusinessIcon = {
    template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>
  `
}

const EnterpriseIcon = {
    template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>
  `
}

const organizationSizes = ref([
    {
        id: 1,
        title: ' تیم‌های کوچک',
        subtitle: '۱-۵۰ نفر',
        icon: StartupIcon,
        iconBg: 'bg-green-500',
        titleColor: 'text-green-600',
        borderColor: 'border-green-200',
        stat: 'رایگان',
        statColor: 'text-green-600',
        buttonClass: 'bg-green-500 text-white hover:bg-green-600',
        features: [
            'مدیریت حداکثر ۵ اتاق جلسه',
            '۱۰ کاربر فعال',
            'پشتیبانی ایمیلی',
            'گزارش‌های پایه',
            'رزرو آنلاین'
        ]
    },
    {
        id: 2,
        title: 'شرکت‌های متوسط',
        subtitle: '۵۰-۲۰۰ نفر',
        icon: BusinessIcon,
        iconBg: 'bg-orange-500',
        titleColor: 'text-orange-600',
        borderColor: 'border-orange-200',
        stat: 'اقتصادی',
        statColor: 'text-orange-600',
        buttonClass: 'bg-orange-500 text-white hover:bg-orange-600',
        features: [
            'مدیریت نامحدود اتاق',
            'تا ۲۰۰ کاربر',
            'پشتیبانی تلفنی',
            'گزارش‌های پیشرفته',
            'یکپارچه‌سازی تقویم'
        ]
    },
    {
        id: 3,
        title: 'سازمان‌های بزرگ',
        subtitle: '۲۰۰+ نفر',
        icon: EnterpriseIcon,
        iconBg: 'bg-purple-500',
        titleColor: 'text-purple-600',
        borderColor: 'border-purple-200',
        stat: 'سفارشی',
        statColor: 'text-purple-600',
        buttonClass: 'bg-purple-500 text-white hover:bg-purple-600',
        features: [
            'پنل مدیریت چند شعبه',
            'کاربران نامحدود',
            'پشتیبانی اختصاصی',
            'آنالیز هوشمند',
            'API کامل'
        ]
    }
])
</script>