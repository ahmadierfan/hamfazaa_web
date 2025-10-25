<template>
    <section class="relative min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute inset-0">
            <!-- Animated Grid -->
            <div class="absolute inset-0 opacity-20">
                <div class="grid grid-cols-12 gap-4 h-full">
                    <div v-for="i in 12" :key="i" class="border-r border-orange-500/20 animate-grid-line"
                        :style="{ 'animation-delay': `${i * 0.1}s` }">
                    </div>
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
                        <div v-for="j in 10" :key="j"
                            class="w-1 h-1 bg-orange-400 rounded-full opacity-40 animate-dot-pulse"
                            :style="{ 'animation-delay': `${(i + j) * 0.05}s` }">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Content Section -->
                <div class="text-right">
                    <!-- Badge -->
                    <div class="inline-flex items-center bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up"
                        style="animation-delay: 0.2s">
                        <div class="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2"></div>
                        <span class="text-orange-400 text-sm font-medium">پلتفرم مدیریت فضای کار هوشمند</span>
                    </div>

                    <!-- Main Heading -->
                    <h1 class="text-5xl text-white animate-fade-in-up" style="animation-delay: 0.3s">
                        همفضا - نرم افزار
                        مدیریت فضای کار اشتراکی
                    </h1>
                    <p class="text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-in-up">
                        <span
                            class="bg-gradient-to-l from-orange-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                            اولین سامانه هوشمند
                        </span>
                        <span class="text-white">
                            مدیریت کاووسپیس در ایران
                        </span>
                    </p>

                    <!-- Description -->
                    <p class="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up"
                        style="animation-delay: 0.5s">
                        اولین سامانه جامع مدیریت
                        <span class="text-orange-400 animate-pulse-slow">فضاهای کار</span>
                        در ایران با قابلیت‌های پیشرفته رزرواسیون، مدیریت منابع و آنالیز هوشمند
                    </p>

                    <!-- Features List -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div v-for="(feature, index) in features" :key="feature.id"
                            class="flex items-center text-gray-300 group hover:text-orange-400 transition duration-300 animate-fade-in-up"
                            :style="{ 'animation-delay': `${0.6 + index * 0.1}s` }">
                            <svg class="w-5 h-5 text-orange-500 ml-3 transform group-hover:scale-110 transition duration-300"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="text-lg">{{ feature.text }}</span>
                        </div>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style="animation-delay: 0.9s">
                        <NuxtLink to="/register"
                            class="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-2xl text-lg shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-500 overflow-hidden animate-button-pulse">
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition duration-500">
                            </div>
                            <span class="relative z-10 flex items-center justify-center">
                                شروع رایگان 7 روزه
                                <svg class="w-5 h-5 mr-2 transform group-hover:translate-x-1 transition duration-300"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </NuxtLink>
                    </div>

                    <!-- Trust Badges -->
                    <div class="flex items-center justify-start space-x-8 space-x-reverse animate-fade-in-up"
                        style="animation-delay: 1s">
                        <div class="text-center">
                            <div class="text-2xl text-white mb-1 animate-count-up" data-target="20">0</div>
                            <div class="text-orange-300 text-sm">شرکت فعال</div>
                        </div>
                        <div class="w-px h-8 bg-orange-500/30"></div>
                        <div class="text-center">
                            <div class="text-2xl text-white mb-1 animate-count-up" data-target="98">0</div>
                            <div class="text-orange-300 text-sm">رضایت مشتری</div>
                        </div>
                        <div class="w-px h-8 bg-orange-500/30"></div>
                        <div class="text-center">
                            <div class="text-2xl text-white mb-1">۲۴/۷</div>
                            <div class="text-orange-300 text-sm">پشتیبانی</div>
                        </div>
                    </div>
                </div>

                <!-- Visual Section -->
                <div class="relative">
                    <!-- Main Dashboard Preview -->
                    <div
                        class="relative bg-gray-800/50 backdrop-blur-lg rounded-3xl border border-orange-500/20 p-6 shadow-2xl transform hover:scale-105 transition duration-700 animate-slide-in-right">
                        <div class="bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-2xl p-8">
                            <!-- Calendar Interface -->
                            <div class="grid grid-cols-7 gap-2 mb-4">
                                <div v-for="day in ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']" :key="day"
                                    class="text-center text-orange-400 text-sm font-medium py-2">
                                    {{ day }}
                                </div>
                                <div v-for="(day, index) in calendarDays" :key="day"
                                    class="aspect-square bg-gray-700/50 rounded-lg flex items-center justify-center text-white text-sm hover:bg-orange-500/20 transition duration-300 cursor-pointer animate-calendar-cell"
                                    :style="{ 'animation-delay': `${0.5 + index * 0.02}s` }">
                                    {{ day }}
                                </div>
                            </div>

                            <!-- Room Status -->
                            <div class="space-y-3">
                                <div v-for="(room, index) in roomStatus" :key="room.id"
                                    class="flex items-center justify-between bg-gray-700/30 rounded-xl p-3 hover:bg-orange-500/10 transition duration-300 animate-fade-in-up"
                                    :style="{ 'animation-delay': `${0.8 + index * 0.1}s` }">
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 rounded-full ml-3 animate-pulse" :class="room.statusClass">
                                        </div>
                                        <span class="text-white text-sm">{{ room.name }}</span>
                                    </div>
                                    <span class="text-orange-400 text-xs">{{ room.time }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Floating Elements -->
                        <div
                            class="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm shadow-lg animate-pulse animate-bounce-slow">
                            زنده
                        </div>
                    </div>

                    <!-- Floating Cards -->
                    <div
                        class="absolute -bottom-8 -left-8 bg-gray-800/80 backdrop-blur-lg rounded-2xl border border-orange-500/20 p-4 shadow-xl transform hover:scale-110 transition duration-500 animate-float-card-1">
                        <div class="flex items-center space-x-3 space-x-reverse">
                            <div
                                class="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <div class="text-white ">رزرو آنی</div>
                                <div class="text-orange-400 text-sm">۳۰ ثانیه‌ای</div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="absolute -top-8 -right-8 bg-gray-800/80 backdrop-blur-lg rounded-2xl border border-orange-500/20 p-4 shadow-xl transform hover:scale-110 transition duration-500 animate-float-card-2">
                        <div class="flex items-center space-x-3 space-x-reverse">
                            <div
                                class="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <div class="text-white ">امنیت بالا</div>
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
                <span class="text-sm mb-2"></span>
                <div class="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
                    <div class="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

// Animation keyframes
const animations = `
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
  @keyframes fade-in-up {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes slide-in-right {
    0% { opacity: 0; transform: translateX(50px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  @keyframes grid-line {
    0% { opacity: 0.1; }
    50% { opacity: 0.3; }
    100% { opacity: 0.1; }
  }
  @keyframes dot-pulse {
    0%, 100% { opacity: 0.2; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.2); }
  }
  @keyframes calendar-cell {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes pulse-slow {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  @keyframes float-card-1 {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(2deg); }
  }
  @keyframes float-card-2 {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(-1deg); }
  }
  @keyframes button-pulse {
    0%, 100% { transform: scale(1); box-shadow: 0 25px 50px -12px rgba(249, 115, 22, 0.25); }
    50% { transform: scale(1.02); box-shadow: 0 25px 50px -12px rgba(249, 115, 22, 0.4); }
  }
  
  .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
  .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
  .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
  .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
  .animate-slide-in-right { animation: slide-in-right 1s ease-out forwards; }
  .animate-grid-line { animation: grid-line 3s ease-in-out infinite; }
  .animate-dot-pulse { animation: dot-pulse 2s ease-in-out infinite; }
  .animate-calendar-cell { animation: calendar-cell 0.5s ease-out forwards; }
  .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
  .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
  .animate-float-card-1 { animation: float-card-1 5s ease-in-out infinite; }
  .animate-float-card-2 { animation: float-card-2 4s ease-in-out infinite 1s; }
  .animate-button-pulse { animation: button-pulse 3s ease-in-out infinite; }
`

// Add styles to head
useHead({
    style: [{
        innerHTML: animations
    }]
})

// Initialize counter animations
onMounted(() => {
    if (process.client) {
        const counters = document.querySelectorAll('.animate-count-up')
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'))
            const duration = 2000
            const step = target / (duration / 16)
            let current = 0

            const updateCounter = () => {
                current += step
                if (current < target) {
                    counter.textContent = Math.floor(current)
                    requestAnimationFrame(updateCounter)
                } else {
                    counter.textContent = target
                }
            }

            updateCounter()
        })
    }
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

/* Ensure animations work properly */
.animate-fade-in-up,
.animate-slide-in-right,
.animate-calendar-cell {
    opacity: 0;
}
</style>