<template>
    <div
        class="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 relative overflow-hidden">

        <!-- المان‌های تزئینی -->
        <div class="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-30 animate-float"></div>
        <div class="absolute top-40 right-20 w-16 h-16 bg-amber-300 rounded-full opacity-40 animate-float-delayed">
        </div>
        <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-orange-300 rounded-full opacity-25 animate-float-slow">
        </div>
        <div class="absolute top-1/4 right-1/3 w-32 h-32 border-4 border-orange-200 rounded-3xl rotate-12 opacity-20">
        </div>
        <div class="absolute bottom-1/3 left-20 w-40 h-40 border-4 border-amber-200 rounded-full opacity-15"></div>

        <!-- بخش سمت چپ (توضیح گرافیکی) - حذف شده -->
        <!-- <div class="hidden md:flex w-full md:w-1/2 items-center justify-center">
            ...
        </div> -->

        <!-- بخش فرم ثبت‌نام -->
        <div class="w-full flex items-center justify-center p-6 md:p-12 relative z-20">
            <div
                class="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md py-10 px-8 border border-orange-100 animate-fade-in-long">

                <!-- هدر فرم -->
                <div class="text-center mb-8">
                    <div
                        class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path v-if="!otpSent" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 4v16m8-8H4" />
                            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h2 class="text-2xl  text-gray-800">
                        {{ !otpSent ? 'ثبت‌نام در همفضا' : 'تأیید شماره موبایل' }}
                    </h2>
                    <p class="text-sm text-gray-600 mt-2">
                        {{ !otpSent ? 'فضای کار خود را همین حالا بسازید' : 'کد تأیید برای شما ارسال شد' }}
                    </p>
                </div>

                <!-- فرم ثبت‌نام اولیه -->
                <div v-if="!otpSent" class="space-y-6">
                    <!-- نام فضا -->
                    <div>
                        <label class="block text-gray-700 font-medium mb-2 text-sm">نام فضای کار اشتراکی</label>
                        <div
                            class="flex items-center border border-gray-300 rounded-2xl px-4 py-3 bg-white/70 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200 transition-all duration-300">
                            <svg class="w-5 h-5 text-gray-400 ml-2" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 7h18M3 12h18M3 17h18" />
                            </svg>
                            <input ref="workspaceNameInput" v-model="workspaceName" type="text"
                                class="w-full text-center outline-none bg-transparent placeholder-gray-400"
                                placeholder="مثلاً دفتر مرکزی تهران" />
                        </div>
                    </div>

                    <!-- موبایل -->
                    <div>
                        <label class="block text-gray-700 font-medium mb-2 text-sm">شماره موبایل</label>
                        <div
                            class="flex items-center border border-gray-300 rounded-2xl px-4 py-3 bg-white/70 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200 transition-all duration-300">
                            <svg class="w-5 h-5 text-gray-400 ml-2" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <input v-model="mobile" type="text" inputmode="numeric"
                                class="w-full text-center outline-none bg-transparent placeholder-gray-400"
                                placeholder="۰۹۱۲۳۴۵۶۷۸۹" />
                        </div>
                    </div>

                    <!-- دکمه ارسال کد -->
                    <button
                        class="w-full py-4 text-white  rounded-2xl overflow-hidden transition-all duration-500 bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-lg hover:shadow-orange-200 group"
                        @click="sendOtp">
                        <span class="relative z-10">ثبت‌نام و دریافت کد تأیید</span>
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out">
                        </div>
                    </button>

                    <p class="text-center text-sm text-gray-600 mt-4">
                        قبلاً ثبت‌نام کرده‌اید؟
                        <NuxtLink to="/login" class="text-orange-600 hover:text-amber-600 ">وارد شوید
                        </NuxtLink>
                    </p>
                </div>

                <!-- فرم تأیید کد -->
                <div v-else>
                    <!-- اطلاعات ثبت‌نام -->
                    <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
                        <div class="space-y-2">
                            <div class="flex justify-between">
                                <span class="text-sm text-orange-800 font-medium">نام فضای کار:</span>
                                <span class="text-sm text-orange-600">{{ workspaceName }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-sm text-orange-800 font-medium">شماره موبایل:</span>
                                <span class="text-sm text-orange-600">{{ mobile }}</span>
                            </div>
                        </div>
                    </div>

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

                    <button :disabled="loading"
                        class="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-lg hover:shadow-orange-200 text-white rounded-2xl  transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        @click="verifyOtp">
                        تأیید و ساخت فضای کار
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
                            <span>ویرایش اطلاعات</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

definePageMeta({ layout: "blank" });

const { $freeApi, $updateAuthHeader } = useNuxtApp();
const router = useRouter();
const route = useRoute();

const workspaceName = ref("");
const mobile = ref("");
const otpSent = ref(false);
const otpDigits = ref(['', '', '', '']);
const otpRefs = ref([]);
const loading = ref(false);
const workspaceNameInput = ref(null);

const toast = useToast()

const toEnglishDigits = (str) => {
    if (!str) return '';
    return str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
};

const sendOtp = async () => {
    // تبدیل اعداد فارسی به انگلیسی
    mobile.value = toEnglishDigits(mobile.value);

    if (!workspaceName.value.trim()) {
        toast.error({ title: 'خطا!', message: "نام فضای کار را وارد کنید" })
        return;
    }

    if (!/^09\d{9}$/.test(mobile.value)) {
        toast.error({ title: 'خطا!', message: "شماره موبایل معتبر نیست" })
        return;
    }

    try {
        loading.value = true;
        // ارسال درخواست برای دریافت کد تأیید
        await $freeApi.post('auth/company-otp-register', {
            sendedto: mobile.value,
            name: workspaceName.value,
        });

        otpSent.value = true;

        // فوکوس روی اولین خانه کد
        nextTick(() => {
            if (otpRefs.value[0]) {
                otpRefs.value[0].focus();
            }
        });
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
};

const handleOtpInput = (e, index) => {
    // تبدیل اعداد فارسی به انگلیسی
    const value = toEnglishDigits(e.target.value).replace(/\D/g, ''); // فقط عدد
    otpDigits.value[index] = value;

    if (value && index < otpRefs.value.length - 1) {
        otpRefs.value[index + 1]?.focus();
    }

    // اگر همه خانه‌ها پر شد، خودکار تأیید کن
    if (otpDigits.value.join('').length === 4) {
        verifyOtp();
    }
};

const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && !otpDigits.value[index] && index > 0) {
        otpRefs.value[index - 1]?.focus();
    }
};

const verifyOtp = async () => {
    const code = toEnglishDigits(otpDigits.value.join(''));
    if (code.length !== 4) {
        toast.error({ title: 'خطا!', message: 'لطفاً کد تأیید ۴ رقمی را کامل وارد کنید' })
        return;
    }

    loading.value = true;

    try {
        // ارسال اطلاعات به API برای ثبت نهایی
        const res = await $freeApi.post('auth/company-otp-register-verify', {
            name: workspaceName.value,
            sendedto: mobile.value,
            verificationcode: code,
        });

        // ذخیره توکن و اطلاعات کاربر
        const token = res.data.token;
        const user = res.data.user;
        localStorage.setItem('jwt_token', token);
        localStorage.setItem('user_mobile', user.mobile);

        $updateAuthHeader(token);
        if (route.query.i && route.query.p)
            router.push('/copanel/order?i=' + route.query.i + '&p=' + route.query.p)
        else
            router.push('/copanel')

    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
};

const resendOtp = async () => {
    otpDigits.value = ['', '', '', ''];

    try {
        await $freeApi.post('auth/company-otp-register', {
            sendedto: mobile.value,
            name: workspaceName.value,
        });
        nextTick(() => {
            if (otpRefs.value[0]) {
                otpRefs.value[0].focus();
            }
        });
    } catch (error) {
    }
};

const editNumber = () => {
    // بازگشت به مرحله اول
    otpSent.value = false;
    otpDigits.value = ['', '', '', ''];
};

// فوکوس خودکار روی فیلد نام فضای کار هنگام لود صفحه
onMounted(() => {
    nextTick(() => {
        if (workspaceNameInput.value) {
            workspaceNameInput.value.focus();
        }
    });
});
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