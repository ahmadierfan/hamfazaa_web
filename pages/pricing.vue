<template>
    <div
        class="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

        <!-- المان‌های گرافیکی -->
        <div
            class="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float">
        </div>
        <div
            class="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-delayed">
        </div>
        <div
            class="absolute bottom-0 left-1/2 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow">
        </div>

        <!-- خطوط تزئینی -->
        <div
            class="absolute top-20 left-10 w-px h-64 bg-gradient-to-b from-transparent via-orange-300 to-transparent opacity-30">
        </div>
        <div
            class="absolute bottom-20 right-10 w-64 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-30">
        </div>

        <div class="relative max-w-7xl mx-auto">
            <!-- هدر صفحه -->
            <div class="text-center mb-16 animate-fade-in">
                <div
                    class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                </div>
                <h1 class="text-4xl  text-gray-900 mb-4">
                    انتخاب <span class="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">پلن
                        مناسب</span>
                </h1>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    پلن‌های متنوع همفضا برای کسب‌وکارهای مختلف
                    <br>
                    <span class="text-orange-600 ">۲ ماه تست رایگان</span>
                </p>

                <!-- انتخابگر نوع پلن -->
                <div class="mt-8 flex justify-center">
                    <div
                        class="bg-white/80 backdrop-blur-sm rounded-xl p-1.5 shadow-lg border border-orange-100 inline-flex">
                        <button v-for="(period, index) in billingPeriods" :key="index"
                            @click="selectedPeriod = period.value" :class="[
                                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                                selectedPeriod === period.value
                                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-orange-50'
                            ]">
                            {{ period.label }}
                        </button>
                    </div>
                </div>
            </div>

            <!-- کارت‌های قیمت‌گذاری -->
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
                <!-- پلن آزمایشی رایگان -->
                <div class="relative group animate-fade-in-up" style="animation-delay: 0.1s">
                    <div
                        class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                        class="relative bg-white rounded-2xl p-8 shadow-xl border border-blue-100 h-full flex flex-col">
                        <div class="flex items-center justify-between mb-6">
                            <div>
                                <h3 class="text-2xl  text-gray-900">آزمایشی</h3>
                                <p class="text-blue-600  mt-1">رایگان</p>
                            </div>
                            <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>

                        <div class="mb-6">
                            <div class="text-3xl  text-gray-900 mb-2">رایگان</div>
                            <p class="text-gray-600 text-sm">۷ روز آزمایشی</p>
                        </div>

                        <div class="space-y-3 mb-8 flex-grow">
                            <div class="flex items-center space-x-3 space-x-reverse">
                                <div
                                    class="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span class="text-gray-700 text-sm">تا ۵ کاربر</span>
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
                                <span class="text-gray-700 text-sm">۱ اتاق</span>
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
                                <span class="text-gray-700 text-sm">پشتیبانی VIP</span>
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
                                <span class="text-gray-700 text-sm">گزارش‌گیری پیشرفته</span>
                            </div>
                        </div>

                        <NuxtLink :to="getTrialPlanLink()"
                            class="text-center w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl  hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:scale-105">
                            شروع آزمایشی رایگان
                        </NuxtLink>
                    </div>
                </div>

                <!-- پلن‌های پولی -->
                <div v-for="(plan, index) in paidPlans" :key="plan.pk_plan" class="relative group animate-fade-in-up"
                    :style="`animation-delay: ${0.2 + index * 0.1}s`">
                    <div
                        class="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                        class="relative bg-white rounded-2xl p-8 shadow-xl border border-orange-100 h-full flex flex-col">
                        <!-- تخفیف ویژه -->
                        <div v-if="getDiscount(plan)" class="absolute -top-3 right-6">
                            <div
                                class="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs  px-3 py-1 rounded-full shadow-lg">
                                {{ getDiscount(plan) }}% تخفیف
                            </div>
                        </div>

                        <div class="flex items-center justify-between mb-6">
                            <div>
                                <h3 class="text-2xl  text-gray-900">{{ plan.plan }}</h3>
                                <p class="text-orange-600  mt-1">{{ plan.subtitle }}</p>
                            </div>
                            <div class="w-12 hidden h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                                <div v-html="plan.icon"></div>
                            </div>
                        </div>

                        <div class="mb-6">
                            <div class="text-3xl  text-gray-900 mb-2">
                                {{ formatPrice(getPlanPrice(plan)) }}
                                <span class="text-lg text-gray-600"> تومان</span>
                            </div>
                            <p class="text-gray-600 text-sm">
                                ماهانه
                            </p>

                            <!-- نمایش قیمت اصلی در صورت تخفیف -->
                            <div v-if="hasDiscount(plan)" class="mt-1">
                                <span class="text-gray-400 text-sm line-through">
                                    {{ formatPrice(getOriginalPrice(plan)) }} تومان
                                </span>
                                <span class="text-green-600 text-sm font-medium mr-1">
                                    {{ getDiscount(plan) }}% صرفه‌جویی
                                </span>
                            </div>
                        </div>

                        <div class="space-y-3 mb-8 flex-grow">
                            <div class="flex items-center space-x-3 space-x-reverse">
                                <div
                                    class="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span class="text-gray-700 text-sm">تا {{ plan.maxusers }} کاربر</span>
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
                                <span class="text-gray-700 text-sm">
                                    {{ plan.max_room === 0 ? 'اتاق نامحدود' : `${plan.max_room} اتاق` }}
                                </span>
                            </div>

                            <!-- ویژگی‌های اختصاصی -->
                            <div v-for="(option, optionIndex) in getPlanOptions(plan)" :key="optionIndex"
                                class="flex items-center space-x-3 space-x-reverse">
                                <div
                                    class="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span class="text-gray-700 text-sm">{{ option }}</span>
                            </div>
                        </div>

                        <NuxtLink :to="getPlanLink(plan)"
                            class="w-full text-center py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl  hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 transform hover:scale-105">
                            انتخاب پلن
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- بخش پلن سفارشی -->
            <div class="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-8 shadow-xl mb-16 animate-fade-in-up"
                style="animation-delay: 0.6s">
                <div class="flex flex-col md:flex-row items-center justify-between">
                    <div class="text-white text-center md:text-right mb-6 md:mb-0 md:mr-8">
                        <h3 class="text-2xl  mb-3">پلن مورد نظرتان را پیدا نکردید؟</h3>
                        <p class="text-purple-100 text-lg">
                            ما پلن‌های سفارشی متناسب با نیازهای خاص کسب‌وکار شما طراحی می‌کنیم
                        </p>
                    </div>
                    <div class="flex-shrink-0">
                        <a href="/contact"
                            class="bg-white text-purple-600  px-8 py-4 rounded-xl hover:bg-purple-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 space-x-reverse">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>تماس برای پلن سفارشی</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- بخش اطلاعات اضافی -->
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 animate-fade-in-up"
                style="animation-delay: 0.7s">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h4 class=" text-gray-900 mb-2">امنیت بالا</h4>
                        <p class="text-gray-600 text-sm">اطلاعات شما با بالاترین استانداردهای امنیتی محافظت می‌شود</p>
                    </div>
                    <div>
                        <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 class=" text-gray-900 mb-2">پشتیبانی ۲۴/۷</h4>
                        <p class="text-gray-600 text-sm">تیم پشتیبانی همیشه در کنار شماست</p>
                    </div>
                    <div>
                        <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <h4 class=" text-gray-900 mb-2">آپتایم ۹۹.۹٪</h4>
                        <p class="text-gray-600 text-sm">سیستم همیشه در دسترس و پایدار</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()

definePageMeta({
    layout: 'blank',
})

const { $freeApi } = useNuxtApp()
const plans = ref([])

const selectedPeriod = ref('monthly') // monthly, quarterly, annually

// تعریف انواع پلن‌های پرداختی
const billingPeriods = [
    { label: 'ماهانه', value: 'monthly' },
    { label: 'سه‌ماهه', value: 'quarterly' },
    { label: 'سالانه', value: 'annually' }
]

onMounted(() => {
    getPricing()
})

const getPricing = async () => {
    const { data } = await $freeApi.get('plans')
    plans.value = data
}

// فیلتر کردن پلن‌های پولی (غیر آزمایشی)
const paidPlans = computed(() => {
    return plans.value.filter(plan => !plan.istrial)
})

// محاسبه قیمت بر اساس نوع پلن و تبدیل به تومان
const getPlanPrice = (plan) => {
    if (!plan.price) return 0

    const prices = JSON.parse(plan.price)
    let price = 0
    switch (selectedPeriod.value) {
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

    // تبدیل از ریال به تومان (تقسیم بر 10)
    return Math.round(price / 10)
}

// محاسبه قیمت اصلی (بدون تخفیف) و تبدیل به تومان
const getOriginalPrice = (plan) => {
    if (!plan.price) return 0

    const prices = JSON.parse(plan.price)
    // قیمت اصلی همیشه ماهانه است
    const originalPrice = prices[0] * getPeriodMultiplier()

    // تبدیل از ریال به تومان (تقسیم بر 10)
    return Math.round(originalPrice / 10)
}

// ضریب دوره پرداخت
const getPeriodMultiplier = () => {
    switch (selectedPeriod.value) {
        case 'monthly':
            return 1
        case 'quarterly':
            return 3
        case 'annually':
            return 12
        default:
            return 1
    }
}

// بررسی وجود تخفیف
const hasDiscount = (plan) => {
    return getDiscount(plan) > 0
}

// محاسبه درصد تخفیف
const getDiscount = (plan) => {
    if (selectedPeriod.value === 'quarterly' && plan.seasonaldiscount) {
        return plan.seasonaldiscount
    } else if (selectedPeriod.value === 'annually' && plan.annuallydiscount) {
        return plan.annuallydiscount
    }
    return 0
}

// فرمت کردن قیمت
const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price)
}

// دریافت ویژگی‌های پلن
const getPlanOptions = (plan) => {
    if (!plan.options) return []
    return JSON.parse(plan.options)
}

// ایجاد لینک برای پلن آزمایشی
const getTrialPlanLink = () => {
    const trialPlan = plans.value.find(plan => plan.istrial)
    if (trialPlan) {
        return `/register?plan_id=${trialPlan.pk_plan}&period=trial`
    }
    return '/register'
}

// ایجاد لینک برای پلن‌های پولی
const getPlanLink = (plan) => {
    const token = localStorage.getItem('jwt_token')
    if (token)
        return `/copanel/order?i=${plan.pk_plan}&p=${selectedPeriod.value}`
    return `/register?i=${plan.pk_plan}&p=${selectedPeriod.value}`
}
</script>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
    }
}

@keyframes float-delayed {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-15px);
    }
}

@keyframes float-slow {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-fade-in {
    animation: fade-in 1s ease-out;
}

.animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
    opacity: 0;
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite;
}

.animate-float-slow {
    animation: float-slow 10s ease-in-out infinite;
}
</style>