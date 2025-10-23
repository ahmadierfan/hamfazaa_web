<template>
    <div class="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto" v-if="planData && planData.pk_order">
            <!-- کارت اصلی -->
            <div class="bg-white rounded-2xl shadow-xl border border-green-100 p-8 text-center">
                <!-- انیمیشن تیک سبز -->
                <div class="flex justify-center mb-6">
                    <div class="relative">
                        <!-- دایره بیرونی -->
                        <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                            <!-- دایره میانی -->
                            <div class="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center">
                                <!-- تیک -->
                                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    :class="{ 'animate-draw-check': showCheck }">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>

                        <!-- انیمیشن پالس -->
                        <div class="absolute inset-0 rounded-full bg-green-200 animate-ping opacity-75"
                            v-if="showPulse"></div>
                    </div>
                </div>

                <!-- عنوان و متن موفقیت -->
                <h1 class="text-3xl font-bold text-amber-600 mb-4">پرداخت موفق!</h1>
                <p class="text-gray-600 text-lg mb-2">پلن انتخابی شما با موفقیت فعال شد</p>
                <p class="text-gray-500 mb-8">از همکاری شما متشکریم</p>

                <!-- اطلاعات پلن -->
                <div class="bg-gray-50 rounded-xl p-6 mb-8 text-right">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">مشخصات پلن فعال شده</h3>

                    <div class="space-y-3">
                        <div class="flex justify-between items-center py-2">
                            <span class="text-gray-600">نام پلن:</span>
                            <span class="text-gray-900 font-semibold">{{ planData.plan }}</span>
                        </div>

                        <div class="flex justify-between items-center py-2">
                            <span class="text-gray-600">دوره:</span>
                            <span class="text-gray-900">{{ planData.plan }}</span>
                        </div>

                        <div class="flex justify-between items-center py-2">
                            <span class="text-gray-600">حداکثر کاربر:</span>
                            <span class="text-gray-900">تا {{ planData.maxusers }} نفر</span>
                        </div>

                        <div class="flex justify-between items-center py-2 border-t border-gray-200 mt-2 pt-3">
                            <span class="text-gray-800 font-semibold">مبلغ پرداختی:</span>
                            <span class="text-green-600 font-bold text-lg">{{ formatPrice(planData.totalprice) }}
                                تومان</span>
                        </div>
                    </div>
                </div>

                <!-- اطلاعات فنی -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-sm text-gray-500">
                    <div class="text-center">
                        <p>شماره تراکنش: <span class="font-mono text-gray-700">{{ planData.pk_order }}</span></p>
                    </div>
                    <div class="text-center">
                        <p>تاریخ پرداخت: <span class="font-mono text-gray-700">{{ paymentDate }}</span></p>
                    </div>
                </div>

                <!-- دکمه‌های اقدام -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink to="/copanel"
                        class="px-8 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                        رفتن به داشبورد
                    </NuxtLink>

                    <NuxtLink to="/copanel"
                        class="px-8 py-3 bg-white text-amber-600 border border-amber-600 rounded-xl font-semibold hover:bg-amber-50 transition-colors duration-200">
                        مشاهده آموزش
                    </NuxtLink>
                </div>

                <!-- اطلاعات پشتیبانی -->
                <div class="mt-8 pt-6 border-t border-gray-200">
                    <div class="flex items-center justify-center space-x-2 space-x-reverse text-sm text-gray-500">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>اطلاعات پرداخت شما با امنیت کامل ذخیره شد</span>
                    </div>
                </div>
            </div>

            <!-- کارت نکات مهم -->
            <div class="bg-white rounded-2xl shadow-lg border border-orange-100 p-6 mt-6">
                <h3 class="text-lg text-orange-800 mb-4 flex items-center justify-center space-x-2 space-x-reverse">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>نکات مهم</span>
                </h3>

                <div class="space-y-3 text-sm text-gray-600 text-right">
                    <div class="flex items-start space-x-2 space-x-reverse">
                        <svg class="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>پلن شما بلافاصله پس از پرداخت فعال شده است</span>
                    </div>

                    <div class="flex items-start space-x-2 space-x-reverse">
                        <svg class="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>در صورت هرگونه سوال با پشتیبانی تماس بگیرید</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="max-w-md mx-auto">
            <div class="bg-white rounded-2xl shadow-xl border border-red-100 p-8 text-center">
                <!-- آیکون خطا -->
                <div class="flex justify-center mb-6">
                    <div class="relative">
                        <div class="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                            <div class="w-20 h-20 bg-red-200 rounded-full flex items-center justify-center">
                                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- عنوان و متن خطا -->
                <h1 class="text-2xl font-bold text-red-600 mb-4">مشکل در تراکنش</h1>
                <p class="text-gray-600 mb-6">متأسفانه در پرداخت شما مشکلی پیش آمده است</p>

                <!-- اطلاعات خطا -->
                <div class="bg-red-50 rounded-xl p-4 mb-6 text-right">
                    <div class="space-y-2 text-sm text-red-700">
                        <div class="flex items-center justify-between">
                            <span>وضعیت:</span>
                            <span class="font-semibold">پرداخت ناموفق</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span>کد خطا:</span>
                            <span class="font-mono">{{ route.query.error || 'نامشخص' }}</span>
                        </div>
                    </div>
                </div>

                <!-- راهنمایی -->
                <div class="text-sm text-gray-500 mb-6 space-y-2">
                    <p class="flex items-center justify-center space-x-2 space-x-reverse">
                        <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>در صورت کسر وجه، مبلغ تا ۷۲ ساعت آینده به حساب شما بازمی‌گردد</span>
                    </p>
                </div>

                <!-- دکمه‌های اقدام -->
                <div class="flex flex-col sm:flex-row gap-3 justify-center">
                    <NuxtLink to="/pricing"
                        class="px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                        تلاش مجدد
                    </NuxtLink>

                    <NuxtLink to="/copanel"
                        class="px-6 py-3 bg-white text-gray-600 border border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200">
                        بازگشت به صفحه اصلی
                    </NuxtLink>
                </div>

                <!-- پشتیبانی -->
                <div class="mt-6 pt-4 border-t border-gray-200">
                    <p class="text-xs text-gray-500 mb-2">در صورت نیاز به کمک</p>
                    <a href="tel:02128427044"
                        class="text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors duration-200">
                        تماس با پشتیبانی: 02128427044-
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";

definePageMeta({ layout: "copanel" })

const route = useRoute()
const { $freeApi } = useNuxtApp()

// داده‌های حالت
const showCheck = ref(false)
const showPulse = ref(true)
const transactionId = ref('')
const paymentDate = ref('')
const planData = ref()

// اطلاعات پلن از route
const getOrderData = async () => {
    if (route.query.orderid) {
        const { data } = await $freeApi.get('order-detail', {
            params: {
                orderId: route.query.orderid,
            }
        });
        if (planData.value.pk_order) {
            planData.value = data
        }
    }
}

// انیمیشن‌ها
onMounted(() => {
    getOrderData()
    transactionId.value = 1
    paymentDate.value = getCurrentDate()

    setTimeout(() => {
        showCheck.value = true
    }, 500)

    setTimeout(() => {
        showPulse.value = false
    }, 2000)
})

// توابع کمکی
const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price)
}

const getCurrentDate = () => {
    const now = new Date()
    return now.toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}

</script>

<style scoped>
@keyframes draw-check {
    0% {
        stroke-dasharray: 50;
        stroke-dashoffset: 50;
    }

    100% {
        stroke-dasharray: 50;
        stroke-dashoffset: 0;
    }
}

.animate-draw-check {
    animation: draw-check 0.8s ease-in-out forwards;
}

.animate-ping {
    animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {

    75%,
    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}
</style>