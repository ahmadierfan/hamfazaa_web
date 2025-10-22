<template>
    <div class="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 py-12 px-4 sm:px-6 lg:px-8">

        <div class="max-w-4xl mx-auto">
            <!-- هدر صفحه فاکتور -->
            <div class="bg-white rounded-2xl shadow-xl border border-orange-100 p-8 mb-8">
                <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                    <div class="mb-6 lg:mb-0">
                        <h1 class="text-3xl  text-gray-900 mb-2">فاکتور خرید پلن</h1>
                        <p class="text-gray-600">جزئیات کامل پلن انتخابی شما</p>
                    </div>
                    <div class="text-left lg:text-right">
                        <div class="text-2xl  text-orange-600 mb-1">{{ formatPrice(calculatedPrice) }} تومان
                        </div>
                        <div class="text-sm text-gray-500">{{ getPeriodLabel() }}</div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- جزئیات پلن -->
                <div class="lg:col-span-2 space-y-6">
                    <!-- کارت اطلاعات پلن -->
                    <div class="bg-white rounded-2xl shadow-xl border border-orange-100 p-6">
                        <h2 class="text-xl  text-gray-900 mb-4">مشخصات پلن</h2>

                        <div class="flex items-start justify-between mb-6 pb-6 border-b border-gray-100">
                            <div>
                                <h3 class="text-2xl  text-gray-900">{{ planData.plan }}</h3>
                                <p class="text-orange-600 mt-1">{{ planData.subtitle }}</p>
                            </div>
                            <div class="text-left">
                                <div class="text-2xl  text-gray-900">{{ formatPrice(monthlyBasePrice) }} تومان
                                </div>
                                <div class="text-sm text-gray-500">{{ getPeriodLabel() }}</div>
                            </div>
                        </div>

                        <!-- ویژگی‌های پلن -->
                        <div class="space-y-4">
                            <h4 class=" text-gray-900">ویژگی‌های شامل شده:</h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div class="flex items-center space-x-3 space-x-reverse">
                                    <div
                                        class="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span class="text-gray-700">تا {{ planData.maxusers }} کاربر</span>
                                </div>
                                <div class="flex items-center space-x-3 space-x-reverse">
                                    <div
                                        class="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span class="text-gray-700">
                                        {{ planData.max_room === 0 ? 'اتاق نامحدود' : `${planData.max_room} اتاق` }}
                                    </span>
                                </div>

                                <!-- ویژگی‌های اختصاصی -->
                                <div v-for="(option, index) in planOptions" :key="index"
                                    class="flex items-center space-x-3 space-x-reverse">
                                    <div
                                        class="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span class="text-gray-700">{{ option }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- اطلاعات پرداخت -->
                    <div class="bg-white rounded-2xl shadow-xl border border-orange-100 p-6">
                        <h2 class="text-xl  text-gray-900 mb-4">جزئیات پرداخت</h2>

                        <div class="space-y-3">
                            <div class="flex justify-between items-center py-2">
                                <span class="text-gray-600">قیمت پایه (ماهیانه):</span>
                                <span class="text-gray-900">{{ formatPrice(monthlyBasePrice) }} تومان</span>
                            </div>

                            <div v-if="periodMultiplier > 1" class="flex justify-between items-center py-2">
                                <span class="text-gray-600">ضریب دوره ({{ periodMultiplier }} ماه):</span>
                                <span class="text-gray-900">× {{ periodMultiplier }}</span>
                            </div>

                            <div class="flex justify-between items-center py-3 border-t border-gray-200">
                                <span class="text-lg  text-gray-900">مبلغ قابل پرداخت:</span>
                                <span class="text-2xl  text-orange-600">{{ formatPrice(basePrice) }}
                                    تومان</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- سایدبار پرداخت -->
                <div class="space-y-6">
                    <!-- خلاصه سفارش -->
                    <div class="bg-white rounded-2xl shadow-xl border border-orange-100 p-6">
                        <h3 class="text-lg  text-gray-900 mb-4">خلاصه سفارش</h3>

                        <div class="space-y-3">
                            <div class="flex justify-between text-sm">
                                <span class="text-gray-600">پلن:</span>
                                <span class="text-gray-900">{{ planData.plan }}</span>
                            </div>
                            <div class="flex justify-between text-sm">
                                <span class="text-gray-600">دوره:</span>
                                <span class="text-gray-900">{{ getPeriodLabel() }}</span>
                            </div>
                            <div class="flex justify-between text-sm">
                                <span class="text-gray-600">تعداد کاربر:</span>
                                <span class="text-gray-900">تا {{ planData.maxusers }} نفر</span>
                            </div>
                            <div class="flex justify-between text-sm" v-if="periodMultiplier > 1">
                                <span class="text-gray-600">مدت زمان:</span>
                                <span class="text-gray-900">{{ periodMultiplier }} ماه</span>
                            </div>
                            <div class="pt-3 border-t border-gray-100">
                                <div class="flex justify-between items-center">
                                    <span class=" text-gray-900">جمع کل:</span>
                                    <span class="text-lg  text-orange-600">{{ formatPrice(calculatedPrice) }}
                                        تومان</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- دکمه پرداخت -->
                    <div class="bg-white rounded-2xl shadow-xl border border-green-100 p-6">
                        <button @click="handlePayment" :disabled="processing" :class="[
                            'w-full py-4 bg-gradient-to-r from-green-500 to-green-500 text-white rounded-xl  text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105',
                            processing ? 'opacity-50 cursor-not-allowed' : ''
                        ]">
                            <span v-if="!processing">پرداخت و فعال‌سازی</span>
                            <span v-else class="flex items-center justify-center space-x-2 space-x-reverse">
                                <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <span>در حال پرداخت...</span>
                            </span>
                        </button>

                    </div>

                    <!-- اطلاعات پشتیبانی -->
                    <div class="bg-blue-50 rounded-2xl border border-blue-200 p-4">
                        <div class="flex items-start space-x-3 space-x-reverse">
                            <div
                                class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                            </div>
                            <div>
                                <h4 class=" text-blue-900 text-sm mb-1">نیاز به کمک دارید؟</h4>
                                <p class="text-blue-700 text-xs">
                                    تیم پشتیبانی ما ۲۴/۷ آماده پاسخگویی به سوالات شماست
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";

definePageMeta({ layout: "copanel" })

const router = useRouter()
const route = useRoute()
const { $freeApi } = useNuxtApp();

// داده‌های پلن
const planData = ref({})
const processing = ref(false)
const planDetail = ref({})

// محاسبه ضریب دوره
const periodMultiplier = computed(() => {
    switch (route.query.p) {
        case 'monthly':
            return 1
        case 'quarterly':
            return 3
        case 'annually':
            return 12
        default:
            return 1
    }
})

// قیمت پایه ماهیانه
const monthlyBasePrice = computed(() => {
    if (!planDetail.value.price) return 0

    const prices = JSON.parse(planDetail.value.price)
    let price = 0

    switch (route.query.p) {
        case 'monthly':
            price = prices[0]
            break
        case 'quarterly':
            price = prices[1]
            break
        case 'annually':
            price = prices[2]
            break
        default:
            price = prices[0]
    }

    return Math.round(price / 10) // تبدیل به تومان
})

// قیمت پایه کل (با ضرب در ضریب دوره)
const basePrice = computed(() => {
    return monthlyBasePrice.value * periodMultiplier.value
})

const discount = computed(() => {
    if (route.query.p === 'quarterly' && planDetail.value.seasonaldiscount) {
        return planDetail.value.seasonaldiscount
    } else if (route.query.p === 'annually' && planDetail.value.annuallydiscount) {
        return planDetail.value.annuallydiscount
    }
    return 0
})

const discountAmount = computed(() => {
    return Math.round((basePrice.value * discount.value) / 100)
})

const calculatedPrice = computed(() => {
    return basePrice.value - discountAmount.value
})

// ویژگی‌های پلن
const planOptions = computed(() => {
    if (!planDetail.value.options) return []
    return JSON.parse(planDetail.value.options)
})

// توابع کمکی
const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price)
}

const getPeriodLabel = () => {
    const periods = {
        monthly: 'ماهانه',
        quarterly: 'سه‌ماهه',
        annually: 'سالانه'
    }
    return periods[route.query.p] || 'ماهانه'
}

// پردازش پرداخت
const handlePayment = async () => {
    processing.value = true

    try {
        if (route.query.i && route.query.p) {
            const { data } = await $freeApi.post('pay', {
                planID: route.query.i,
                periodType: route.query.p,
            });

            // هدایت به درگاه پرداخت یا انجام عملیات بعدی
            if (data && data.payment_url) {
                window.location.href = data.payment_url;
            }
        }
    } catch (error) {
        console.error('خطا در پرداخت:', error)
        // نمایش خطا به کاربر
    } finally {
        processing.value = false
    }
}

const getOrderDetail = async (planID, periodType) => {
    try {
        const { data } = await $freeApi.get('plan-detail', {
            params: {
                planID: planID,
            }
        });

        planDetail.value = data
        planData.value = data // برای سازگاری با template
    } catch (error) {
        console.error('خطا در دریافت اطلاعات پلن:', error)
    }
}

// دریافت اطلاعات پلن
onMounted(async () => {
    if (route.query.i && route.query.p) {
        await getOrderDetail(route.query.i, route.query.p)
    }
})
</script>