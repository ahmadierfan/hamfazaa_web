<template>
    <div class="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-red-100 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto">
            <!-- کارت اصلی -->
            <div class="bg-white rounded-2xl shadow-xl border border-red-100 p-8 text-center">
                <!-- انیمیشن علامت ضربدر -->
                <div class="flex justify-center mb-6">
                    <div class="relative">
                        <!-- دایره بیرونی -->
                        <div class="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                            <!-- دایره میانی -->
                            <div class="w-20 h-20 bg-red-200 rounded-full flex items-center justify-center">
                                <!-- علامت ضربدر -->
                                <div class="relative w-12 h-12">
                                    <div class="absolute top-1/2 left-1/2 w-full h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-45"
                                        :class="{ 'animate-draw-line-1': showLines }"></div>
                                    <div class="absolute top-1/2 left-1/2 w-full h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 -rotate-45"
                                        :class="{ 'animate-draw-line-2': showLines }"></div>
                                </div>
                            </div>
                        </div>

                        <!-- انیمیشن پالس -->
                        <div class="absolute inset-0 rounded-full bg-red-200 animate-ping opacity-75" v-if="showPulse">
                        </div>
                    </div>
                </div>

                <!-- عنوان و متن خطا -->
                <h1 class="text-3xl font-bold text-red-600 mb-4">پرداخت ناموفق!</h1>
                <p class="text-gray-600 text-lg mb-2">متاسفانه پرداخت شما با مشکل مواجه شد</p>
                <p class="text-red-500 font-semibold mb-2">{{ errorMessage }}</p>
                <p class="text-gray-500 mb-8">لطفاً مجدداً اقدام به پرداخت نمایید</p>

                <!-- اطلاعات تراکنش -->
                <div class="bg-gray-50 rounded-xl p-6 mb-8 text-right">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">اطلاعات تراکنش</h3>

                    <div class="space-y-3">
                        <div class="flex justify-between items-center py-2">
                            <span class="text-gray-600">تاریخ و زمان:</span>
                            <span class="text-gray-900">{{ paymentDate }}</span>
                        </div>
                    </div>
                </div>

                <!-- دلایل احتمالی -->
                <div class="bg-orange-50 rounded-xl p-6 mb-8 text-right border border-orange-200">
                    <h3 class="text-lg font-bold text-orange-800 mb-4">دلایل احتمالی</h3>

                    <div class="space-y-3 text-sm text-orange-700">
                        <div class="flex items-start space-x-2 space-x-reverse">
                            <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>عدم موجودی کافی در حساب بانکی</span>
                        </div>

                        <div class="flex items-start space-x-2 space-x-reverse">
                            <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>مشکل در ارتباط با درگاه پرداخت</span>
                        </div>

                        <div class="flex items-start space-x-2 space-x-reverse">
                            <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>اطلاعات کارت بانکی نادرست</span>
                        </div>
                    </div>
                </div>

                <!-- دکمه رفتن به تعرفه ها -->
                <div class="flex justify-center">
                    <button @click="goToPlans"
                        class="px-8 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 space-x-reverse">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span>بازگشت به صفحه تعرفه‌ها</span>
                    </button>
                </div>

                <!-- اطلاعات پشتیبانی -->
                <div class="mt-8 pt-6 border-t border-gray-200">
                    <div class="flex flex-col items-center space-y-2">
                        <a href="tel:02128427044"
                            class="flex items-center space-x-2 space-x-reverse text-sm text-blue-600">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>پشتیبانی: 28427044</span>
                        </a>
                        <p class="text-xs text-gray-500">در صورت تکرار مشکل با پشتیبانی تماس بگیرید</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";

definePageMeta({ layout: "copanel" })

const route = useRoute()
const router = useRouter()

// داده‌های حالت
const showLines = ref(false)
const showPulse = ref(true)
const transactionId = ref('')
const paymentDate = ref('')
const errorMessage = ref('')

// اطلاعات از route
const calculatedPrice = ref(route.query.amount ? parseInt(route.query.amount) : 0)

// شبیه‌سازی شماره تراکنش و تاریخ
transactionId.value = 'TX-' + Date.now().toString().slice(-8)
paymentDate.value = new Date().toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
})

// پیام خطا از route یا پیش‌فرض
errorMessage.value = route.query.error || 'خطا در برقراری ارتباط با درگاه پرداخت'

// انیمیشن‌ها
onMounted(() => {
    setTimeout(() => {
        showLines.value = true
    }, 300)

    setTimeout(() => {
        showPulse.value = false
    }, 2000)
})

// توابع کمکی
const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price)
}

// navigation
const goToPlans = () => {
    router.push('/plans')
}
</script>

<style scoped>
@keyframes draw-line-1 {
    0% {
        width: 0;
    }

    100% {
        width: 100%;
    }
}

@keyframes draw-line-2 {
    0% {
        width: 0;
    }

    50% {
        width: 0;
    }

    100% {
        width: 100%;
    }
}

@keyframes ping {

    75%,
    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}

.animate-draw-line-1 {
    animation: draw-line-1 0.6s ease-out forwards;
}

.animate-draw-line-2 {
    animation: draw-line-2 0.6s ease-out forwards;
}

.animate-ping {
    animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>