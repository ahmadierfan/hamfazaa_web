<template>
    <nav class="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-orange-100">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center h-20">
                <!-- لوگو و برند -->
                <div class="flex items-center space-x-4 space-x-reverse">
                    <div class="flex-shrink-0">
                        <NuxtLink to="/"
                            class="w-12 h-12 bg-gradient-to-br cursor-pointer from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <img src="/images/logo.png" alt="همفضا" />
                        </NuxtLink>
                    </div>
                    <div class="hidden sm:block">
                        <NuxtLink to="/"
                            class="text-2xl  bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                            همفضا
                        </NuxtLink>
                        <p class="text-xs text-gray-500 mt-1">پلتفرم ابری حرفه‌ای</p>
                    </div>
                </div>

                <!-- منوی اصلی -->
                <div class="hidden md:block">
                    <div class="flex items-baseline space-x-2 space-x-reverse">
                        <NuxtLink to="/"
                            class="relative group px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                            :class="activeLink === 'home' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600'">
                            <span class="flex items-center">
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                خانه
                            </span>
                            <span
                                class="absolute bottom-0 right-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </NuxtLink>
                        <NuxtLink to="/pricing"
                            class="relative group px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                            :class="activeLink === 'pricing' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600'">
                            <span class="flex items-center">
                                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                                تعرفه ها
                            </span>
                            <span
                                class="absolute bottom-0 right-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </NuxtLink>
                    </div>
                </div>
                <!-- دکمه‌های ورود/ثبت‌نام -->

                <div class="hidden md:flex items-center space-x-3 space-x-reverse" v-if="jwt_token">
                    <NuxtLink to="/copanel"
                        class="relative group px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-amber-600 transform hover:-translate-y-0.5">
                        <span class="relative z-10 flex items-center">
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            ورود به تقویم
                        </span>
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </NuxtLink>
                </div>
                <div class="hidden md:flex items-center space-x-3 space-x-reverse" v-else>
                    <NuxtLink to="/login"
                        class="relative group px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-amber-600 transform hover:-translate-y-0.5">
                        <span class="relative z-10 flex items-center">
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            ورود
                        </span>
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/register"
                        class="px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border-2 border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300 transform hover:-translate-y-0.5">
                        <span class="flex items-center">
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                            ثبت‌نام
                        </span>
                    </NuxtLink>
                </div>

                <!-- منوی موبایل -->
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

        <!-- منوی موبایل بازشونده -->
        <div v-if="isOpen" class="md:hidden bg-white/95 backdrop-blur-md border-t border-orange-100 shadow-2xl">
            <div class="px-4 pt-3 pb-6 space-y-2">
                <a href="#"
                    class="flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group"
                    :class="activeLink === 'home' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'">
                    <svg class="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    خانه
                    <div
                        class="mr-auto w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>
                </a>
                <a href="#"
                    class="flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group"
                    :class="activeLink === 'services' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'">
                    <svg class="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    خدمات
                    <div
                        class="mr-auto w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>
                </a>
                <a href="#"
                    class="flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group"
                    :class="activeLink === 'pricing' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'">
                    <svg class="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    قیمت‌ها
                    <div
                        class="mr-auto w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>
                </a>
                <a href="#"
                    class="flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group"
                    :class="activeLink === 'about' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'">
                    <svg class="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    درباره ما
                    <div
                        class="mr-auto w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>
                </a>
                <a href="#"
                    class="flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group"
                    :class="activeLink === 'contact' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'">
                    <svg class="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    تماس با ما
                    <div
                        class="mr-auto w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>
                </a>

                <div class="pt-4 mt-4 border-t border-orange-100 space-y-3">
                    <button
                        class="w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-amber-600 flex items-center justify-center">
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        ورود به حساب
                    </button>
                    <button
                        class="w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 border-2 border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300 flex items-center justify-center">
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        ایجاد حساب جدید
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
const jwt_token = ref()

onMounted(() => {
    if (process.client) {
        jwt_token.value = localStorage.getItem('jwt_token')
    }
})

const isOpen = ref(false)
const activeLink = ref('home')
</script>