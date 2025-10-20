<template>
    <header class="bg-orange-500 text-white shadow-md fixed top-0 left-0 right-0 z-30 h-16">
        <div class="container mx-auto px-4 h-full flex justify-between items-center">
            <!-- بخش چپ: لوگو و نام -->
            <div class="flex items-center space-x-4 space-x-reverse">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <img src="/images/logo.png" alt="لوگو" class="w-4 h-4" />
                </div>
                <div>
                    <h1 class="text-xl font-bold">همفضا</h1>
                    <p class="text-xs text-orange-100 opacity-80">پلتفرم ابری</p>
                </div>
            </div>

            <!-- بخش راست: دکمه‌های کاربر -->
            <div class="flex items-center space-x-4 space-x-reverse">
                <button @click="logOut"
                    class="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-md transition-colors flex items-center space-x-2 space-x-reverse">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>خروج</span>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const { $freeApi } = useNuxtApp()
const router = useRouter();

const logOut = () => {
    $freeApi.post('logout')
        .then(() => {
            localStorage.removeItem('jwt_token');
            router.push('/login');
        })
}
// این کامپوننت مستقل است و به استور نیاز ندارد
</script>