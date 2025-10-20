<template>
    <transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex lg:hidden">
            <!-- پس‌زمینه محو -->
            <div class="fixed inset-0 bg-black bg-opacity-50" @click="$emit('close')"></div>

            <!-- پنل منو -->
            <div
                class="relative w-80 bg-white h-full ml-auto transform transition-transform duration-300 ease-out shadow-2xl">
                <!-- هدر منو -->
                <div
                    class="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                            <img src="/images/logo.png" alt="لوگو" class="w-4 h-4 filter brightness-0 invert" />
                        </div>
                        <h2 class="font-bold text-lg text-gray-800">منو</h2>
                    </div>
                    <button @click="$emit('close')"
                        class="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                        <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- محتوای منو -->
                <div class="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                    <!-- صنایع -->
                    <div class="space-y-2">
                        <h3 class="font-semibold text-gray-700 text-sm uppercase tracking-wider mb-3">صنایع</h3>
                        <NuxtLink v-for="item in industriesItems" :key="item.href" :to="item.href"
                            class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-300 border-r-2 border-transparent hover:border-blue-500"
                            @click="$emit('close')">
                            <div class="w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center"
                                :class="item.iconColor">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        :d="item.icon" />
                                </svg>
                            </div>
                            <span class="font-medium text-gray-800">{{ item.title }}</span>
                        </NuxtLink>
                    </div>

                    <!-- راهکارها -->
                    <div class="space-y-2 pt-4 border-t border-gray-100">
                        <h3 class="font-semibold text-gray-700 text-sm uppercase tracking-wider mb-3">راهکارها</h3>
                        <NuxtLink v-for="item in solutionsItems" :key="item.href" :to="item.href"
                            class="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors duration-300 border-r-2 border-transparent hover:border-green-500"
                            @click="$emit('close')">
                            <div class="w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center"
                                :class="item.iconColor">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        :d="item.icon" />
                                </svg>
                            </div>
                            <span class="font-medium text-gray-800">{{ item.title }}</span>
                        </NuxtLink>
                    </div>

                    <!-- لینک‌های دیگر -->
                    <div class="space-y-2 pt-4 border-t border-gray-100">
                        <NuxtLink to="/pricing"
                            class="block p-3 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                            @click="$emit('close')">
                            تعرفه‌ها
                        </NuxtLink>
                        <NuxtLink to="/whywe"
                            class="block p-3 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                            @click="$emit('close')">
                            چرا ما؟
                        </NuxtLink>
                        <NuxtLink to="/blog"
                            class="block p-3 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                            @click="$emit('close')">
                            بلاگ
                        </NuxtLink>
                        <NuxtLink to="/contact"
                            class="block p-3 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                            @click="$emit('close')">
                            تماس با ما
                        </NuxtLink>
                    </div>
                </div>

                <!-- دکمه اقدام در موبایل -->
                <div class="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-white">
                    <NuxtLink :to="loginBtnRedirectTo"
                        class="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold text-center py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                        @click="$emit('close')">
                        {{ loginBtnText }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
defineProps({
    isOpen: Boolean
})

defineEmits(['close'])

// این داده‌ها باید از parent منتقل شوند یا import شوند
const loginBtnText = 'ورود / ثبت‌نام'
const loginBtnRedirectTo = '/login'

const industriesItems = [
    {
        title: 'صنعت برق',
        href: '/industries/electric',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        iconColor: 'from-yellow-500 to-yellow-600'
    },
    // ... سایر آیتم‌ها
]

const solutionsItems = [
    {
        title: 'مدیریت تکنسین‌ها',
        href: '/solutions/technicians',
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        iconColor: 'from-orange-500 to-orange-600'
    },
    // ... سایر آیتم‌ها
]
</script>