<template>
    <div class="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 flex font-sans" dir="rtl">

        <!-- بخش چپ -->
        <div class="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-orange-500 to-amber-500">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div class="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div class="relative z-10 w-full p-16 flex flex-col justify-center">
                <div class="mb-16">
                    <div class="flex items-center gap-3 mb-8">
                        <div class="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                            </svg>
                        </div>
                        <h1 class="text-4xl text-white">همفضا</h1>
                    </div>

                    <h2 class="text-2xl text-white mb-3 leading-relaxed">
                        پلتفرم ابری مدیریت<br />
                        فضاهای کار اشتراکی
                    </h2>
                    <p class="text-white/80 text-base leading-relaxed">
                        مدیریت حرفه‌ای اعضا، رزرواسیون‌ها و مالی در یک پلتفرم یکپارچه
                    </p>
                </div>

                <!-- ویژگی‌ها -->
                <div class="space-y-6">
                    <div class="flex items-start gap-4" v-for="(item, i) in features" :key="i">
                        <div
                            class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-white mb-1">{{ item.title }}</h3>
                            <p class="text-white/70 text-sm">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- بخش راست -->
        <div class="flex-1 flex mt-10 justify-center p-6">
            <div class="w-full max-w-md">

                <!-- هدر موبایل -->
                <div class="lg:hidden text-center mb-10">
                    <div class="inline-flex items-center gap-3 mb-3">
                        <div
                            class="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                            </svg>
                        </div>
                        <h1 class="text-3xl text-gray-800">همفضا</h1>
                    </div>
                    <p class="text-sm text-gray-600">پلتفرم ابری مدیریت فضای کار</p>
                </div>

                <!-- فرم ورود -->
                <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

                    <div class="mb-8">
                        <h2 class="text-2xl text-gray-800 mb-2">ورود به پنل</h2>
                        <p class="text-sm text-gray-500">لطفاً شماره موبایل خود را وارد کنید</p>
                    </div>

                    <!-- فرم شماره موبایل -->
                    <div v-if="!otpSent">
                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-700 mb-2">شماره موبایل</label>
                            <div class="relative">
                                <input v-model="mobile" type="text" inputmode="numeric"
                                    class="w-full px-4 py-3.5 text-lg border-2 border-gray-200 rounded-xl outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-200 text-center font-medium"
                                    placeholder="۰۹۱۲۳۴۵۶۷۸۹" @input="mobile = toEnglishDigits(mobile)"
                                    @keypress.enter="sendOtp" />
                            </div>
                        </div>

                        <button :disabled="loadingStore.isLoading"
                            class="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            @click="sendOtp">
                            ارسال کد تایید
                        </button>
                    </div>

                    <!-- فرم کد تایید -->
                    <div v-else>
                        <button @click="editNumber"
                            class="mb-6 text-sm text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-1.5">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7" />
                            </svg>
                            ویرایش شماره
                        </button>

                        <div class="mb-8">
                            <p class="text-sm text-gray-600 mb-1">کد تایید به شماره زیر ارسال شد:</p>
                            <p class="text-base text-gray-800">{{ mobile }}</p>
                        </div>

                        <div class="flex justify-center gap-3 mb-8" dir="ltr">
                            <input v-for="(digit, index) in 4" :key="index" ref="otpRefs" v-model="otpDigits[index]"
                                type="text" maxlength="1" inputmode="numeric"
                                class="w-14 h-14 text-center border-2 border-gray-200 rounded-xl text-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200"
                                @input="handleOtpInput($event, index)"
                                @keydown.backspace="handleBackspace($event, index)" />
                        </div>

                        <button :disabled="loadingStore.isLoading"
                            class="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
                            @click="verifyOtp">
                            تایید و ورود
                        </button>

                        <button @click="resendOtp"
                            class="w-full text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors">
                            ارسال مجدد کد
                        </button>
                    </div>
                </div>

                <!-- فوتر -->
                <p class="text-center text-xs text-gray-500 mt-6">
                    با ورود به سیستم،
                    <a href="#" class="text-orange-600 hover:underline">قوانین و مقررات</a>
                    را می‌پذیرید
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useLoadingStore } from '@/stores/loading'

const toast = useToast()
definePageMeta({ layout: 'blank' })
const { $freeApi, $updateAuthHeader } = useNuxtApp()
const router = useRouter()
const route = useRoute()
const loadingStore = useLoadingStore()

const mobile = ref('')
const otpSent = ref(false)
const otpDigits = ref(['', '', '', ''])
const otpRefs = ref([])

const features = [
    { title: 'مدیریت یکپارچه', desc: 'کنترل کامل اعضا، رزروها و پرداخت‌ها' },
    { title: 'دسترسی ابری', desc: 'مدیریت از هر مکان، هر زمان' },
    { title: 'گزارش‌گیری هوشمند', desc: 'تحلیل و بررسی عملکرد به صورت لحظه‌ای' }
]

// 🔹 تبدیل اعداد فارسی و عربی به انگلیسی
const toEnglishDigits = (str) => {
    return str
        .replace(/[۰-۹]/g, d => String.fromCharCode(d.charCodeAt(0) - 1728)) // فارسی
        .replace(/[٠-٩]/g, d => String.fromCharCode(d.charCodeAt(0) - 1632)) // عربی
}

const sendOtp = async () => {
    mobile.value = toEnglishDigits(mobile.value)
    if (/^09\d{9}$/.test(mobile.value)) {
        if (route.query.i) {
            await $freeApi.post('auth/user-otp', { sendedto: mobile.value })
            otpSent.value = true
            nextTick(() => otpRefs.value[0]?.focus())
        } else {
            toast.error({ title: 'خطا!', message: 'خطای شرکت' })
        }
    } else {
        toast.error({ title: 'خطا!', message: 'شماره موبایل را صحیح وارد نمایید' })
    }
}

const handleOtpInput = (e, index) => {
    const value = toEnglishDigits(e.target.value).replace(/\D/g, '')
    otpDigits.value[index] = value
    if (value && index < otpRefs.value.length - 1) otpRefs.value[index + 1]?.focus()
    if (otpDigits.value.join('').length === 4) verifyOtp()
}

const handleBackspace = (e, index) => {
    if (!otpDigits.value[index] && index > 0) otpRefs.value[index - 1]?.focus()
}

const verifyOtp = async () => {
    const code = toEnglishDigits(otpDigits.value.join(''))
    if (code.length === 4) {
        const res = await $freeApi.post('auth/user-verify-otp', {
            sendedto: mobile.value,
            verificationcode: code,
            companyId: route.query.i
        })
        const token = res.data.token
        const user = res.data.user
        localStorage.setItem('jwt_token', token)
        localStorage.setItem('user_mobile', user.mobile)
        $updateAuthHeader(token)
        router.push('/userpanel')
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
</script>
