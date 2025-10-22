<template>
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <!-- المان‌های گرافیکی -->
        <div class="absolute top-10 left-10 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-32 h-32 bg-amber-200 rounded-full opacity-30 animate-bounce"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2
                    class="text-4xl md:text-5xl  bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                    چرا همفضا؟
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    مقایسه‌ای ساده بین روش‌های سنتی و راه‌کار هوشمند ما
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <!-- روش سنتی -->
                <div
                    class="bg-white rounded-3xl shadow-xl border border-red-100 p-8 transform hover:scale-105 transition duration-500">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center mr-4">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                        </div>
                        <h3 class="text-2xl  text-red-600">روش‌های سنتی</h3>
                    </div>

                    <div class="space-y-4">
                        <div v-for="problem in traditionalProblems" :key="problem.id"
                            class="flex items-start p-4 bg-red-50 rounded-xl hover:bg-red-100 transition duration-300">
                            <svg class="w-5 h-5 text-red-500 mt-0.5 ml-3 flex-shrink-0" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <div>
                                <h4 class=" text-red-700 mb-1">{{ problem.title }}</h4>
                                <p class="text-red-600 text-sm">{{ problem.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- راه‌کار مدرن -->
                <div
                    class="bg-white rounded-3xl shadow-xl border border-green-100 p-8 transform hover:scale-105 transition duration-500">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="text-2xl  text-green-600">راه‌کار همفضا</h3>
                    </div>

                    <div class="space-y-4">
                        <div v-for="solution in modernSolutions" :key="solution.id"
                            class="flex items-start p-4 bg-green-50 rounded-xl hover:bg-green-100 transition duration-300">
                            <svg class="w-5 h-5 text-green-500 mt-0.5 ml-3 flex-shrink-0" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                                <h4 class=" text-green-700 mb-1">{{ solution.title }}</h4>
                                <p class="text-green-600 text-sm">{{ solution.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- آمار مقایسه‌ای -->
            <div class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div v-for="stat in comparisonStats" :key="stat.id"
                        class="transform hover:scale-110 transition duration-300">
                        <div class="text-3xl  mb-2">{{ stat.value }}</div>
                        <div class="text-orange-100 text-sm">{{ stat.label }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const traditionalProblems = ref([
    {
        id: 1,
        title: 'اتلاف وقت در رزرو تلفنی',
        description: 'ساعت‌ها زمان برای هماهنگی و رزرو تلفنی تلف می‌شود'
    },
    {
        id: 2,
        title: 'خطاهای انسانی',
        description: 'اشتباه در ثبت رزروها و تداخل زمانی مکرر'
    },
    {
        id: 3,
        title: 'مدیریت کاغذی',
        description: 'گم شدن فرم‌ها و سوابق چاپی'
    },
    {
        id: 4,
        title: 'عدم گزارش‌گیری',
        description: 'ناتوانی در تحلیل الگوهای استفاده و بهینه‌سازی'
    }
])

const modernSolutions = ref([
    {
        id: 1,
        title: 'رزرو آنلاین ۲۴ ساعته',
        description: 'رزرو فوری در کمتر از ۳۰ ثانیه، هر زمان و هر کجا'
    },
    {
        id: 2,
        title: 'سیستم هوشمند ضد تداخل',
        description: 'پیشگیری خودکار از رزروهای تکراری و تداخل زمانی'
    },
    {
        id: 3,
        title: 'مدیریت دیجیتال کامل',
        description: 'دسترسی به تمام سوابق و گزارش‌ها در یک پنل'
    },
    {
        id: 4,
        title: 'آنالیز پیشرفته',
        description: 'گزارش‌های تحلیلی برای تصمیم‌گیری هوشمند'
    }
])

const comparisonStats = ref([
    { id: 1, value: '۸۰٪', label: 'صرفه‌جویی در زمان' },
    { id: 2, value: '۹۵٪', label: 'کاهش خطا' },
    { id: 3, value: '۶۰٪', label: 'بهبود بهره‌وری' },
    { id: 4, value: '۱۰۰٪', label: 'رضایت کاربران' }
])
</script>