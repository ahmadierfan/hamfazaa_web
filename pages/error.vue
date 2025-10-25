<template>
    <div class="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center justify-center font-sans relative overflow-hidden"
        dir="rtl">
        <!-- تزئینات پس‌زمینه -->
        <div class="absolute top-0 left-0 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"></div>

        <div class="relative z-10 flex flex-col lg:flex-row items-center gap-12 px-6 py-12 max-w-5xl">
            <!-- بخش گرافیکی -->
            <div class="flex-1 flex justify-center">
                <div class="relative">
                    <div
                        class="w-64 h-64 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white text-8xl font-bold shadow-2xl">
                        ۴۰۴
                    </div>
                    <div class="absolute -bottom-6 right-6 text-orange-600 font-semibold text-lg">صفحه یافت نشد!</div>
                </div>
            </div>

            <!-- متن و دکمه -->
            <div class="flex-1 text-center lg:text-right">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">صفحه‌ای که دنبالش بودی پیدا نشد</h1>
                <p class="text-gray-600 text-lg mb-8 leading-relaxed">
                    ممکن است آدرس را اشتباه وارد کرده باشید یا صفحه حذف شده باشد.<br />
                    نگران نباش! می‌تونی برگردی به صفحه اصلی.
                </p>

                <NuxtLink to="/"
                    class="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-lg rounded-xl shadow-lg hover:shadow-orange-200 transition-all duration-300">
                    بازگشت به خانه
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({ layout: 'blank' })
</script>
