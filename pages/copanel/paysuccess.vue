<template>
    <div class="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8"
        v-if="showPage">
        <div class="max-w-2xl mx-auto" v-if="planData">
            <!-- کارت اصلی -->
            <div
                class="bg-white rounded-2xl shadow-2xl border border-green-100 p-8 text-center relative overflow-hidden animate-fade-in">
                <!-- انیمیشن دایره تیک -->
                <div class="flex justify-center mb-6">
                    <div class="relative">
                        <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                            <div class="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center relative">
                                <svg v-if="showCheck" class="w-12 h-12 text-white animate-draw-check" fill="none"
                                    stroke="currentColor" stroke-width="4" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <div class="absolute inset-0 rounded-full bg-green-300 animate-ping opacity-70"
                            v-if="showPulse"></div>
                    </div>
                </div>

                <!-- عنوان -->
                <h1 class="text-3xl  text-green-600 mb-3">پرداخت با موفقیت انجام شد </h1>
                <p class="text-gray-600 text-lg mb-6">پلن شما با موفقیت فعال گردید</p>

                <!-- اطلاعات تراکنش -->
                <div class="bg-green-50 rounded-xl p-6 mb-8 text-right border border-green-100 shadow-inner">
                    <h3 class="text-xl  text-green-800 mb-4">جزئیات تراکنش</h3>

                    <div class="space-y-3 text-gray-700">
                        <div class="flex justify-between">
                            <span>شماره تراکنش:</span>
                            <span class=" text-gray-900">{{ planData.pk_order }}</span>
                        </div>

                        <div class="flex justify-between">
                            <span>تاریخ پرداخت:</span>
                            <span class="">{{ planData.startdate }}</span>
                        </div>

                        <div class="flex justify-between">
                            <span>مبلغ پرداختی:</span>
                            <span class=" text-green-700">{{ formatPrice(planData.totalprice) }} تومان</span>
                        </div>
                    </div>
                </div>

                <!-- مشخصات پلن -->
                <div class="bg-gradient-to-r from-green-100 to-emerald-50 rounded-xl p-6 mb-8 text-right shadow-sm">
                    <h3 class="text-xl  text-green-800 mb-4">مشخصات پلن شما</h3>
                    <div class="space-y-2 text-gray-700">
                        <div class="flex justify-between">
                            <span>نام پلن:</span>
                            <span class="">{{ planData.plan }}</span>
                        </div>

                        <div class="flex justify-between">
                            <span>تعداد کاربران:</span>
                            <span class="">{{ planData.maxusers }} نفر</span>
                        </div>

                        <div class="flex justify-between">
                            <span>دوره پرداخت:</span>
                            <span class="">{{ planData.period }}</span>
                        </div>
                    </div>
                </div>

                <!-- دکمه بازگشت -->
                <div class="flex justify-center">
                    <button @click="goToDashboard"
                        class="px-8 py-3 bg-green-600 text-white rounded-xl  hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center space-x-2 space-x-reverse">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        <span>شروع</span>
                    </button>
                </div>

                <!-- پشتیبانی -->
                <div class="mt-10 pt-6 border-t border-gray-200 text-center">
                    <p class="text-gray-500 text-sm mb-2">در صورت بروز مشکل، با پشتیبانی تماس بگیرید:</p>
                    <a href="tel:02128427044" class="text-green-700  hover:underline">28427044 - 021</a>
                </div>
            </div>
        </div>
        <div v-else class="flex flex-col items-center justify-center min-h-[70vh] text-center animate-fade-in">
            <div class="relative">
                <div class="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center shadow-inner">
                    <svg class="w-12 h-12 text-red-500" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    </svg>
                </div>
            </div>

            <h2 class="text-2xl text-red-600 mt-6 mb-2 ">مشکل در دریافت اطلاعات</h2>
            <p class="text-gray-600 max-w-sm mb-6 leading-relaxed">
                متأسفانه در بارگذاری جزئیات سفارش مشکلی پیش آمده است.
                لطفاً اتصال اینترنت خود را بررسی کرده و دوباره تلاش کنید.
            </p>

            <div class="flex space-x-4 space-x-reverse">
                <NuxtLink to="/pricing"
                    class="px-6 py-2.5 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-2 space-x-reverse">

                    <span>مشاهده پلن ها</span>
                </NuxtLink>
            </div>

            <!-- پشتیبانی -->
            <div class="mt-10 text-gray-500 text-sm">
                در صورت نیاز به راهنمایی با
                <a href="tel:02128427044" class="text-red-500 hover:underline font-medium">پشتیبانی</a>
                تماس بگیرید.
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

definePageMeta({ layout: 'copanel' })

const route = useRoute()
const { $freeApi } = useNuxtApp();
const router = useRouter()

// انیمیشن‌ها
const showPulse = ref(true)
const showCheck = ref(false)
const planData = ref()
const showPage = ref(false)

const getOrderData = async () => {
    if (route.query.orderid) {
        const { data } = await $freeApi.get('order-detail', {
            params: {
                orderId: route.query.orderid,
            }
        });
        showPage.value = true
        if (data && data.pk_order) {
            planData.value = data
        }
    }
}

onMounted(() => {
    getOrderData()

    setTimeout(() => {
        showCheck.value = true
    }, 500)
    setTimeout(() => {
        showPulse.value = false
    }, 2000)
})

const formatPrice = (price) => new Intl.NumberFormat('fa-IR').format(price)

const goToDashboard = () => router.push('/dashboard')
</script>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(15px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes draw-check {
    from {
        stroke-dasharray: 0, 100;
    }

    to {
        stroke-dasharray: 100, 0;
    }
}

.animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
}

.animate-draw-check {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: draw-check 0.8s ease-in-out forwards;
}

.animate-ping {
    animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
