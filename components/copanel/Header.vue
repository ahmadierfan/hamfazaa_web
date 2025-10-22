<template>
    <header class="bg-orange-500 text-white shadow-md fixed top-0 left-0 right-0 z-30 h-16">
        <div class="container mx-auto px-4 h-full flex justify-between items-center">
            <!-- بخش چپ: دکمه همبرگر و لوگو -->
            <div class="flex items-center space-x-4 space-x-reverse">
                <!-- دکمه همبرگر برای موبایل -->
                <button @click="sidebarStore.openMobileSidebar()"
                    class="md:hidden p-2 rounded-lg hover:bg-orange-600 transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <div class="flex items-center space-x-4 space-x-reverse">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <img src="/images/logo.png" alt="لوگو" class="w-4 h-4" />
                    </div>
                    <div>
                        <h1 class="text-xl ">همفضا</h1>
                        <p class="text-xs text-orange-100 opacity-80">پلتفرم ابری</p>
                    </div>
                </div>
            </div>

            <!-- بخش وسط: نمایش روزهای باقی مانده -->
            <div class="flex-1 flex justify-center">
                <div v-if="subscriptionDays !== null"
                    class="bg-orange-400 px-4 py-2 rounded-lg shadow-sm flex items-center space-x-2 space-x-reverse">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="font-medium">
                        {{ subscriptionDays > 0 ? `${subscriptionDays} روز باقی مانده` : 'اشتراک منقضی شده' }}
                    </span>
                </div>
                <div v-else class="bg-orange-400 px-4 py-2 rounded-lg shadow-sm">
                    <span class="font-medium">اشتراک ماهانه</span>
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
import { ref, onMounted } from 'vue'

const { $freeApi } = useNuxtApp()
const subscriptionDays = ref(null)
const sidebarStore = useSidebarStore()

// تابع برای محاسبه روزهای باقی مانده
const calculateRemainingDays = (expiryDate) => {
    const now = new Date()
    const expiry = new Date(expiryDate)
    const diffTime = expiry - now
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
}

// دریافت اطلاعات اشتراک
const fetchSubscriptionInfo = async () => {
    try {
        const response = await $freeApi.get('user/subscription')
        const expiryDate = response.data.expiry_date
        subscriptionDays.value = calculateRemainingDays(expiryDate)
    } catch (error) {
        console.error('خطا در دریافت اطلاعات اشتراک:', error)
        subscriptionDays.value = 0
    }
}

onMounted(() => {
    //fetchSubscriptionInfo()
})

const logOut = () => {
    $freeApi.post('logout')
        .then(() => {
            localStorage.removeItem('jwt_token')
            navigateTo('/login')
        })
}
</script>