<template>
    <nav class="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-orange-100">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center h-20">
                <!-- لوگو -->
                <div class="flex items-center space-x-4 space-x-reverse">
                    <div class="flex-shrink-0">
                        <NuxtLink to="/"
                            class="w-12 h-12 bg-gradient-to-br cursor-pointer from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300">
                            <img src="/images/logo.png" alt="همفضا" />
                        </NuxtLink>
                    </div>
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
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                خانه
                            </span>
                        </NuxtLink>

                        <NuxtLink to="/pricing"
                            class="relative group px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                            :class="activeLink === 'pricing' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600'"
                            @click="setActive('pricing')">
                            <span class="flex items-center">
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
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
                        <span class="relative z-10 flex items-center">
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
                        class="relative group px-6 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-amber-600 transform hover:-translate-y-0.5 transition-all duration-300">
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

        <!-- منوی موبایل با انیمیشن -->
        <transition name="slide-fade">
            <div v-if="isOpen" class="md:hidden bg-white/95 backdrop-blur-md border-t border-orange-100 shadow-2xl">
                <div class="px-4 pt-3 pb-6 space-y-2">
                    <NuxtLink to="/"
                        class="flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group"
                        :class="activeLink === 'home' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'"
                        @click="handleMobileClick('home')">
                        <svg class="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7" />
                        </svg>
                        خانه
                    </NuxtLink>

                    <NuxtLink to="/pricing"
                        class="flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group"
                        :class="activeLink === 'pricing' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'"
                        @click="handleMobileClick('pricing')">
                        <svg class="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2" />
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
/* 🌟 انیمیشن نرم باز و بسته شدن منوی موبایل */
.slide-fade-enter-active {
    transition: all 0.4s ease;
}

.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
