<template>
    <div
        class="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 relative overflow-hidden">

        <!-- المان‌های گرافیکی جدید -->
        <!-- دایره‌های شناور -->
        <div class="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-30 animate-float"></div>
        <div class="absolute top-40 right-20 w-16 h-16 bg-amber-300 rounded-full opacity-40 animate-float-delayed">
        </div>
        <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-orange-300 rounded-full opacity-25 animate-float-slow">
        </div>

        <!-- اشکال هندسی -->
        <div class="absolute top-1/4 right-1/3 w-32 h-32 border-4 border-orange-200 rounded-3xl rotate-12 opacity-20">
        </div>
        <div class="absolute bottom-1/3 left-20 w-40 h-40 border-4 border-amber-200 rounded-full opacity-15"></div>

        <!-- خطوط تزئینی -->
        <div
            class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-20">
        </div>
        <div
            class="absolute bottom-0 right-0 w-1 h-64 bg-gradient-to-b from-transparent via-amber-300 to-transparent opacity-20">
        </div>

        <!-- بخش گرافیکی سمت چپ -->
        <div class="hidden md:flex w-full md:w-1/2 items-center justify-center relative">
            <div
                class="text-center text-gray-800 z-10 py-16 px-20 animate-fade-in-long bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl border border-orange-100">
                <!-- آیکون اصلی -->
                <div
                    class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                </div>

                <h2 class="text-3xl  mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    همفضا
                </h2>
                <p class="text-lg text-gray-600 mb-6 font-medium">
                    پلتفرم مدیریت اتاق‌های جلسات
                </p>

                <div class="space-y-4 text-right">
                    <div class="flex items-center space-x-3 space-x-reverse p-3 bg-orange-50 rounded-xl">
                        <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h4 class=" text-gray-800">رزرو هوشمند</h4>
                            <p class="text-sm text-gray-600">مدیریت زمان‌بندی اتاق‌ها به صورت آنلاین</p>
                        </div>
                    </div>

                    <div class="flex items-center space-x-3 space-x-reverse p-3 bg-amber-50 rounded-xl">
                        <div class="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div>
                            <h4 class=" text-gray-800">امنیت بالا</h4>
                            <p class="text-sm text-gray-600">حفظ حریم خصوصی و امنیت اطلاعات</p>
                        </div>
                    </div>

                    <div class="flex items-center space-x-3 space-x-reverse p-3 bg-orange-50 rounded-xl">
                        <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <h4 class=" text-gray-800">کاربری آسان</h4>
                            <p class="text-sm text-gray-600">تجربه کاربری ساده و روان</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- بخش فرم سمت راست -->
        <div class="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 relative z-20">
            <div
                class="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md py-10 px-8 border border-orange-100 animate-fade-in-long">
                <!-- هدر فرم -->
                <div class="text-center mb-8">
                    <div
                        class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h2 class="text-2xl  text-gray-800">ورود به همفضا</h2>
                    <p class="text-sm text-gray-600 mt-2">مدیریت حرفه‌ای فضای کار اشتراکی</p>
                </div>

                <!-- توضیحات سیستم -->
                <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
                    <div class="flex items-start space-x-3 space-x-reverse">
                        <svg class="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <p class="text-sm text-orange-800 font-medium">سیستم مدیریت اتاق‌های جلسات</p>
                            <p class="text-xs text-orange-600 mt-1">رزرو آنلاین، مدیریت زمان‌بندی و گزارش‌گیری حرفه‌ای
                            </p>
                        </div>
                    </div>
                </div>

                <!-- فرم ورود -->
                <div v-if="!otpSent">
                    <p class="text-sm text-gray-600 mb-6 text-center">
                        لطفاً شماره موبایل خود را وارد کنید
                    </p>

                    <div class="relative w-full mb-6">
                        <div
                            class="flex items-center border border-gray-300 rounded-2xl px-4 py-4 bg-white/70 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200 transition-all duration-300">
                            <svg class="w-5 h-5 text-gray-400 ml-2" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <input v-model="mobile" type="text" inputmode="numeric"
                                class="w-full text-center text-lg outline-none bg-transparent placeholder-gray-400"
                                placeholder="۰۹۱۲۳۴۵۶۷۸۹" />
                        </div>
                    </div>

                    <button :disabled="loadingStore.isLoading"
                        class="relative w-full py-4 text-white  rounded-2xl overflow-hidden transition-all duration-500 bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-lg hover:shadow-orange-200 group disabled:opacity-50 disabled:cursor-not-allowed"
                        @click="sendOtp">
                        <span class="relative z-10">ارسال کد تایید</span>
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out">
                        </div>
                    </button>

                    <div class="mt-6 text-center text-xs text-gray-500">
                        با ورود، <a href="#"
                            class="text-orange-600 hover:text-amber-600 underline transition-colors">قوانین و مقررات</a>
                        را می‌پذیرید
                    </div>
                </div>

                <!-- فرم کد تایید -->
                <div v-else>
                    <p class="text-sm text-gray-600 mb-2 text-center">
                        کد تأیید به شماره
                    </p>
                    <p class="text-sm font-medium text-gray-800 mb-6 text-center">
                        {{ mobile }}
                    </p>

                    <div class="flex flex-row justify-center gap-3 mb-6" dir="ltr">
                        <template v-for="(digit, index) in 4" :key="index">
                            <input ref="otpRefs" v-model="otpDigits[index]" type="text" maxlength="1"
                                class="w-14 h-14 text-center border-2 border-gray-300 rounded-xl text-xl  focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-200 bg-white"
                                @input="handleOtpInput($event, index)"
                                @keydown.backspace="handleBackspace($event, index)" />
                        </template>
                    </div>

                    <button :disabled="loadingStore.isLoading"
                        class="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-lg hover:shadow-orange-200 text-white rounded-2xl  transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        @click="verifyOtp">
                        تأیید و ورود
                    </button>

                    <div class="flex justify-between px-2 mt-6">
                        <button @click="resendOtp"
                            class="text-xs text-orange-600 hover:text-amber-600 transition-colors flex items-center space-x-1 space-x-reverse">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span>ارسال مجدد</span>
                        </button>
                        <button @click="editNumber"
                            class="text-xs text-gray-600 hover:text-orange-600 transition-colors flex items-center space-x-1 space-x-reverse">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            <span>ویرایش شماره</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useLoadingStore } from '@/stores/loading'

const toast = useToast()

definePageMeta({ layout: 'blank' })

const { $freeApi, $updateAuthHeader } = useNuxtApp()
const router = useRouter()
const loadingStore = useLoadingStore()

const mobile = ref('')
const otpSent = ref(false)
const otpDigits = ref(['', '', '', ''])
const otpRefs = ref([])

// ✅ تابع تبدیل اعداد فارسی به انگلیسی
const toEnglishDigits = (str) => {
    return str.replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
}

const sendOtp = async () => {
    // تبدیل اعداد فارسی به انگلیسی
    mobile.value = toEnglishDigits(mobile.value)

    if (/^09\d{9}$/.test(mobile.value)) {
        await $freeApi.post('auth/send-otp', { sendedto: mobile.value })
        otpSent.value = true
        nextTick(() => otpRefs.value[0]?.focus()) // فوکوس روی اولین خانه
    } else {
        toast.error({ title: 'خطا!', message: 'شماره موبایل را صحیح وارد نمایید' })
    }
}

const handleOtpInput = (e, index) => {
    // تبدیل اعداد فارسی به انگلیسی
    const value = toEnglishDigits(e.target.value).replace(/\D/g, '') // فقط عدد
    otpDigits.value[index] = value

    if (value && index < otpRefs.value.length - 1) {
        otpRefs.value[index + 1]?.focus()
    }

    if (otpDigits.value.join('').length === 4) verifyOtp()
}

const handleBackspace = (e, index) => {
    if (!otpDigits.value[index] && index > 0) {
        otpRefs.value[index - 1]?.focus()
    }
}

const verifyOtp = async () => {
    const code = toEnglishDigits(otpDigits.value.join(''))
    if (code.length === 4) {
        const res = await $freeApi.post('auth/company-login', {
            sendedto: mobile.value,
            verificationcode: code
        })
        const token = res.data.token
        const user = res.data.user
        localStorage.setItem('jwt_token', token)
        localStorage.setItem('user_mobile', user.mobile)
        $updateAuthHeader(token)
        router.push('/copanel')
    } else {
        toast.error({ title: 'خطا!', message: 'کد ورود را صحیح وارد نمایید' })
    }
}

const resendOtp = () => {
    otpDigits.value = ['', '', '', '']
    sendOtp()
}

const editNumber = () => {
    otpSent.value = false
    otpDigits.value = ['', '', '', '']
    mobile.value = ''
}

onMounted(() => {
    if (process.client) {
        const token = localStorage.getItem('jwt_token')
        if (token)
            router.push('/copanel')
    }
})
</script>

<style scoped>
@keyframes fade-in-long {
    from {
        opacity: 0;
        transform: translateY(40px) scale(0.95);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
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

.animate-fade-in-long {
    animation: fade-in-long 1.5s ease-out;
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