<template>
    <nav class="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-orange-100">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center h-20">

                <!-- لوگو -->
                <div class="flex items-center space-x-4 space-x-reverse">
                    <NuxtLink to="/"
                        class="w-12 h-12 bg-gradient-to-br cursor-pointer from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300">
                        <img src="/images/logo.png" alt="همفضا" />
                    </NuxtLink>
                    <div class="hidden sm:block">
                        <NuxtLink to="/"
                            class="text-2xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent font-bold hover:opacity-90 transition-all duration-300">
                            همفضا
                        </NuxtLink>
                        <p class="text-xs text-gray-500 mt-1">پلتفرم ابری حرفه‌ای</p>
                    </div>
                </div>

                <!-- منوی دسکتاپ -->
                <div class="hidden md:block">
                    <div class="flex items-baseline space-x-2 space-x-reverse">
                        <NuxtLink to="/"
                            class="relative group px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                            :class="activeLink === 'home' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600'"
                            @click="setActive('home')">
                            <span class="flex items-center">
                                <!-- آیکون خانه -->
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 12l9-9 9 9v9a1 1 0 01-1 1h-5a1 1 0 01-1-1v-4H9v4a1 1 0 01-1 1H3z" />
                                </svg>
                                خانه
                            </span>
                        </NuxtLink>

                        <NuxtLink to="/pricing"
                            class="relative group px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                            :class="activeLink === 'pricing' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600'"
                            @click="setActive('pricing')">
                            <span class="flex items-center">
                                <!-- آیکون تعرفه‌ها (تگ قیمت) -->
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 7l10 10M7 7V3a1 1 0 011-1h3l10 10-4 4L7 7zM5 13a2 2 0 104 0 2 2 0 00-4 0z" />
                                </svg>
                                تعرفه‌ها
                            </span>
                        </NuxtLink>
                    </div>
                </div>

                <!-- دکمه ورود / ثبت‌نام -->
                <div v-if="jwt_token" class="hidden md:flex items-center space-x-3 space-x-reverse">
                    <NuxtLink to="/copanel"
                        class="relative group px-6 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-amber-600 transform hover:-translate-y-0.5 transition-all duration-300">
                        <span class="flex items-center">
                            <!-- آیکون فلش ورود -->
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14" />
                            </svg>
                            ورود به تقویم
                        </span>
                    </NuxtLink>
                </div>

                <div v-else class="hidden md:flex items-center space-x-3 space-x-reverse">
                    <NuxtLink to="/login"
                        class="px-6 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-amber-600 transform hover:-translate-y-0.5 transition-all duration-300">
                        ورود
                    </NuxtLink>
                    <NuxtLink to="/register"
                        class="px-6 py-2.5 rounded-xl text-sm font-medium border-2 border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300 transform hover:-translate-y-0.5 transition-all duration-300">
                        ثبت‌نام
                    </NuxtLink>
                </div>

                <!-- دکمه موبایل -->
                <div class="md:hidden">
                    <button @click="isOpen = !isOpen"
                        class="p-2 rounded-xl text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- منوی موبایل با انیمیشن حرفه‌ای -->
        <transition name="spring-fade">
            <div v-if="isOpen"
                class="md:hidden bg-white/95 backdrop-blur-md border-t border-orange-100 shadow-2xl rounded-b-3xl overflow-hidden">
                <div class="px-4 pt-3 pb-6 space-y-2 animate-fadeSlide">
                    <NuxtLink to="/"
                        class="flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group"
                        :class="activeLink === 'home' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'"
                        @click="handleMobileClick('home')">
                        <svg class="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 12l9-9 9 9v9a1 1 0 01-1 1h-5a1 1 0 01-1-1v-4H9v4a1 1 0 01-1 1H3z" />
                        </svg>
                        خانه
                    </NuxtLink>

                    <NuxtLink to="/pricing"
                        class="flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group"
                        :class="activeLink === 'pricing' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'"
                        @click="handleMobileClick('pricing')">
                        <svg class="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 7l10 10M7 7V3a1 1 0 011-1h3l10 10-4 4L7 7zM5 13a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                        تعرفه‌ها
                    </NuxtLink>

                    <div class="pt-4 mt-4 border-t border-orange-100 space-y-3">
                        <NuxtLink v-if="!jwt_token" to="/login"
                            class="w-full flex items-center justify-center px-4 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300"
                            @click="isOpen = false">
                            ورود به حساب
                        </NuxtLink>

                        <NuxtLink v-if="!jwt_token" to="/register"
                            class="w-full flex items-center justify-center px-4 py-3 rounded-xl text-sm font-medium border-2 border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300 transition-all duration-300"
                            @click="isOpen = false">
                            ایجاد حساب جدید
                        </NuxtLink>

                        <NuxtLink v-else to="/copanel"
                            class="w-full flex items-center justify-center px-4 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300"
                            @click="isOpen = false">
                            ورود به تقویم
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script setup>
const isOpen = ref(false)
const jwt_token = ref(null)
const activeLink = ref('home')

onMounted(() => {
    if (process.client) {
        jwt_token.value = localStorage.getItem('jwt_token')
        const currentPath = window.location.pathname
        if (currentPath.includes('pricing')) activeLink.value = 'pricing'
        else activeLink.value = 'home'
    }
})

const setActive = (link) => {
    activeLink.value = link
}

const handleMobileClick = (link) => {
    activeLink.value = link
    isOpen.value = false
}
</script>

<style scoped>
/* 🌟 انیمیشن نرم و طبیعی منوی موبایل */
@keyframes fadeSlide {
    0% {
        opacity: 0;
        transform: translateY(-20px) scale(0.98);
    }

    60% {
        opacity: 1;
        transform: translateY(4px) scale(1.02);
    }

    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.animate-fadeSlide {
    animation: fadeSlide 0.45s cubic-bezier(0.25, 1, 0.5, 1);
}

/* برای انتقال طبیعی هنگام حذف */
.spring-fade-enter-active,
.spring-fade-leave-active {
    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.spring-fade-enter-from,
.spring-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px) scale(0.98);
}
</style>
