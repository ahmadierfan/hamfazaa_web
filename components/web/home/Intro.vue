<template>
    <section class="relative min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute inset-0">
            <!-- Animated Grid -->
            <div class="absolute inset-0 opacity-20">
                <div class="grid grid-cols-12 gap-4 h-full">
                    <div v-for="i in 12" :key="i" class="border-r border-orange-500/20"></div>
                </div>
            </div>

            <!-- Floating Orbs -->
            <div
                class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full blur-3xl animate-float-slow">
            </div>
            <div
                class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-orange-400/15 to-amber-400/15 rounded-full blur-3xl animate-float-medium">
            </div>
            <div
                class="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-tr from-orange-300/10 to-amber-300/10 rounded-full blur-2xl animate-float-fast">
            </div>

            <!-- Grid Dots -->
            <div class="absolute inset-0 opacity-30">
                <div class="grid grid-cols-20 gap-8 h-full">
                    <div v-for="i in 20" :key="i" class="flex justify-around">
                        <div v-for="j in 10" :key="j" class="w-1 h-1 bg-orange-400 rounded-full opacity-40"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Content Section -->
                <div class="text-right">
                    <!-- Badge -->
                    <div
                        class="inline-flex items-center bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8">
                        <div class="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2"></div>
                        <span class="text-orange-400 text-sm font-medium">پلتفرم مدیریت فضای کار هوشمند</span>
                    </div>

                    <!-- Main Heading -->
                    <h1 class="text-5xl text-white">همفضا</h1>
                    <p class="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
                        <span
                            class="bg-gradient-to-l from-orange-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                            انقلابی در
                        </span>
                        <span class="text-white">
                            مدیریت فضای کار
                        </span>
                    </p>

                    <!-- Description -->
                    <p class="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                        اولین سامانه جامع مدیریت
                        <span class="text-orange-400 font-semibold">فضاهای کار اشتراکی</span>
                        در ایران با قابلیت‌های پیشرفته رزرواسیون، مدیریت منابع و آنالیز هوشمند
                    </p>

                    <!-- Features List -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div v-for="feature in features" :key="feature.id"
                            class="flex items-center text-gray-300 group hover:text-orange-400 transition duration-300">
                            <svg class="w-5 h-5 text-orange-500 ml-3 transform group-hover:scale-110 transition duration-300"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="text-lg">{{ feature.text }}</span>
                        </div>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 mb-12">
                        <button
                            class="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-500 overflow-hidden">
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition duration-500">
                            </div>
                            <span class="relative z-10 flex items-center justify-center">
                                شروع رایگان ۱۴ روزه
                                <svg class="w-5 h-5 mr-2 transform group-hover:translate-x-1 transition duration-300"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </button>

                        <button
                            class="group border-2 border-orange-500 text-orange-400 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-500 flex items-center justify-center">
                            <svg class="w-5 h-5 ml-2 group-hover:animate-pulse" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            مشاهده دمو زنده
                        </button>
                    </div>

                    <!-- Trust Badges -->
                    <div class="flex items-center justify-start space-x-8 space-x-reverse">
                        <div class="text-center">
                            <div class="text-2xl font-black text-white mb-1">۵۰۰+</div>
                            <div class="text-orange-300 text-sm">شرکت فعال</div>
                        </div>
                        <div class="w-px h-8 bg-orange-500/30"></div>
                        <div class="text-center">
                            <div class="text-2xl font-black text-white mb-1">۹۸٪</div>
                            <div class="text-orange-300 text-sm">رضایت مشتری</div>
                        </div>
                        <div class="w-px h-8 bg-orange-500/30"></div>
                        <div class="text-center">
                            <div class="text-2xl font-black text-white mb-1">۲۴/۷</div>
                            <div class="text-orange-300 text-sm">پشتیبانی</div>
                        </div>
                    </div>
                </div>

                <!-- Visual Section -->
                <div class="relative">
                    <!-- Main Dashboard Preview -->
                    <div
                        class="relative bg-gray-800/50 backdrop-blur-lg rounded-3xl border border-orange-500/20 p-6 shadow-2xl transform hover:scale-105 transition duration-700">
                        <div class="bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-2xl p-8">
                            <!-- Calendar Interface -->
                            <div class="grid grid-cols-7 gap-2 mb-4">
                                <div v-for="day in ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']" :key="day"
                                    class="text-center text-orange-400 text-sm font-medium py-2">
                                    {{ day }}
                                </div>
                                <div v-for="day in calendarDays" :key="day"
                                    class="aspect-square bg-gray-700/50 rounded-lg flex items-center justify-center text-white text-sm hover:bg-orange-500/20 transition duration-300 cursor-pointer">
                                    {{ day }}
                                </div>
                            </div>

                            <!-- Room Status -->
                            <div class="space-y-3">
                                <div v-for="room in roomStatus" :key="room.id"
                                    class="flex items-center justify-between bg-gray-700/30 rounded-xl p-3 hover:bg-orange-500/10 transition duration-300">
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 rounded-full ml-3" :class="room.statusClass"></div>
                                        <span class="text-white text-sm">{{ room.name }}</span>
                                    </div>
                                    <span class="text-orange-400 text-xs">{{ room.time }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Floating Elements -->
                        <div
                            class="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                            زنده
                        </div>
                    </div>

                    <!-- Floating Cards -->
                    <div
                        class="absolute -bottom-8 -left-8 bg-gray-800/80 backdrop-blur-lg rounded-2xl border border-orange-500/20 p-4 shadow-xl transform hover:scale-110 transition duration-500">
                        <div class="flex items-center space-x-3 space-x-reverse">
                            <div
                                class="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <div class="text-white font-bold">رزرو آنی</div>
                                <div class="text-orange-400 text-sm">۳۰ ثانیه‌ای</div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="absolute -top-8 -right-8 bg-gray-800/80 backdrop-blur-lg rounded-2xl border border-orange-500/20 p-4 shadow-xl transform hover:scale-110 transition duration-500">
                        <div class="flex items-center space-x-3 space-x-reverse">
                            <div
                                class="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <div class="text-white font-bold">امنیت بالا</div>
                                <div class="text-orange-400 text-sm">SSL پیشرفته</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div class="flex flex-col items-center text-orange-400">
                <span class="text-sm mb-2">کشف بیشتر</span>
                <div class="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
                    <div class="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Animation keyframes
const floatAnimation = `
  @keyframes float-slow {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(1deg); }
  }
  @keyframes float-medium {
    0%, 100% { transform: translateX(0px) translateY(0px); }
    50% { transform: translateX(10px) translateY(-15px); }
  }
  @keyframes float-fast {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(-1deg); }
  }
  .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
  .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
  .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
`

// Add styles to head
useHead({
    style: [{
        innerHTML: floatAnimation
    }]
})

const features = ref([
    { id: 1, text: 'سیستم رزرواسیون هوشمند و آنی' },
    { id: 2, text: 'مدیریت کاربران و سطوح دسترسی' },
    { id: 3, text: 'گزارش‌گیری تحلیلی پیشرفته' },
    { id: 4, text: 'همگام‌سازی با تقویم‌های مختلف' },
    { id: 5, text: 'سیستم پرداخت یکپارچه' },
    { id: 6, text: 'پشتیبانی ۲۴ ساعته' }
])

const calendarDays = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30])

const roomStatus = ref([
    { id: 1, name: 'اتاق کنفرانس A', time: '۰۸:۰۰ - ۱۰:۰۰', statusClass: 'bg-green-500' },
    { id: 2, name: 'اتاق جلسات B', time: 'آزاد', statusClass: 'bg-orange-500' },
    { id: 3, name: 'سالن اجتماعات', time: '۱۴:۰۰ - ۱۶:۰۰', statusClass: 'bg-green-500' },
    { id: 4, name: 'اتاق استراحت', time: 'آزاد', statusClass: 'bg-orange-500' }
])
</script>

<style scoped>
.grid-cols-20 {
    grid-template-columns: repeat(20, minmax(0, 1fr));
}

.backdrop-blur-lg {
    backdrop-filter: blur(16px);
}
</style>