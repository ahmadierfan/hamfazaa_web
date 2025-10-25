<template>
    <div
        class="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-orange-100 relative overflow-hidden items-center justify-center px-4 sm:px-6">
        <!-- تزئینات شناور -->
        <div class="absolute top-10 left-10 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-float z-0"></div>
        <div
            class="absolute bottom-10 right-10 w-20 h-20 bg-amber-300 rounded-full opacity-40 animate-float-delayed z-0">
        </div>
        <div
            class="absolute top-1/3 left-1/4 w-24 h-24 border-4 border-orange-200 rounded-3xl rotate-12 opacity-20 z-0">
        </div>

        <!-- باکس محتوا -->
        <div
            class="relative z-10 text-center text-gray-800 py-10 px-6 sm:px-10 bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl border border-orange-100 animate-fade-in-long w-full max-w-md">
            <!-- آیکون بالا -->
            <div
                class="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m2-4h.01M12 18a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
            </div>

            <!-- عنوان -->
            <h2
                class="text-2xl sm:text-3xl mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                لینک دعوت شما آماده است!
            </h2>

            <p class="text-base sm:text-lg text-gray-600 mb-6 font-medium">
                این لینک را با اعضای تیم خود به اشتراک بگذارید تا به فضای کارتان بپیوندند.
            </p>

            <!-- باکس لینک -->
            <div
                class="flex flex-col sm:flex-row items-center border border-gray-300 rounded-2xl px-3 py-2 bg-white/70 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200 transition-all duration-300 mb-6">
                <input v-model="inviteLink" readonly
                    class="w-full text-gray-700 font-medium text-sm outline-none bg-transparent select-all text-center mb-3 sm:mb-0"
                    dir="ltr" />
                <button @click="copyLink"
                    class="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-xl text-sm hover:shadow-md active:scale-95 transition-all">
                    کپی
                </button>
            </div>

            <!-- پیام پایین -->
            <div class="flex justify-center mt-6">
                <div class="p-3 bg-orange-50 rounded-xl flex items-center space-x-3 space-x-reverse w-full sm:w-72">
                    <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <p class="text-gray-700 font-medium text-sm sm:text-base">به‌اشتراک‌گذاری سریع و امن</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
definePageMeta({ layout: "copanel" });

const router = useRouter();
const inviteLink = ref("https://hamfazaa.ir/userpanel/login?i=2");
const copied = ref(false);

const copyLink = async () => {
    try {
        await navigator.clipboard.writeText(inviteLink.value);
        copied.value = true;
        setTimeout(() => (copied.value = false), 2000);
    } catch {
        alert("کپی لینک انجام نشد، لطفاً دستی کپی کنید.");
    }
};
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

.animate-fade-in-long {
    animation: fade-in-long 1.2s ease-out;
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

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite;
}
</style>
