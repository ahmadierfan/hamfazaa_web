<template>
    <section id="faq" class="py-20 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
        <!-- المان‌های گرافیکی -->
        <div class="absolute top-20 left-10 w-24 h-24 bg-orange-300 rounded-full opacity-20 animate-ping"></div>
        <div class="absolute bottom-20 right-10 w-32 h-32 bg-amber-300 rounded-full opacity-30 animate-pulse"></div>

        <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2
                    class="text-4xl md:text-5xl  bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                    سوالات متداول
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    پاسخ به پرتکرارترین سوالات شما درباره سامانه همفضا
                </p>
            </div>

            <div class="space-y-6">
                <div v-for="(faq, index) in faqs" :key="faq.id"
                    class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-orange-100 transform hover:scale-[1.02]">
                    <button @click="toggleFAQ(faq.id)"
                        class="w-full px-8 py-6 text-right flex justify-between items-center hover:bg-orange-50 transition duration-300 group">
                        <span class="text-lg  text-gray-900 group-hover:text-orange-600 transition duration-300 flex-1">
                            {{ faq.question }}
                        </span>
                        <div
                            class="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center ml-4 transform group-hover:scale-110 transition duration-300">
                            <svg class="w-4 h-4 text-white transition-transform duration-500"
                                :class="{ 'rotate-180': openFAQ === faq.id }" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>

                    <transition enter-active-class="transition-all duration-500 ease-out"
                        leave-active-class="transition-all duration-300 ease-in" enter-from-class="opacity-0 max-h-0"
                        enter-to-class="opacity-100 max-h-96" leave-from-class="opacity-100 max-h-96"
                        leave-to-class="opacity-0 max-h-0">
                        <div v-show="openFAQ === faq.id" class="px-8 pb-6 border-t border-orange-100">
                            <p class="text-gray-600 leading-relaxed pt-4">
                                {{ faq.answer }}
                            </p>
                            <div v-if="faq.features" class="mt-4 space-y-2">
                                <div v-for="feature in faq.features" :key="feature"
                                    class="flex items-center text-sm text-gray-600">
                                    <svg class="w-4 h-4 text-green-500 ml-2 flex-shrink-0" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    {{ feature }}
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>

            <!-- بخش سوال جدید -->
            <div class="mt-16 text-center">
                <div
                    class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white relative overflow-hidden">
                    <div
                        class="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 transform translate-x-16 -translate-y-16">
                    </div>
                    <div
                        class="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full opacity-10 transform -translate-x-12 translate-y-12">
                    </div>

                    <div class="relative z-10">
                        <h3 class="text-2xl md:text-3xl  mb-4">سوال دیگری دارید؟</h3>
                        <p class="text-orange-100 mb-6 text-lg">
                            تیم پشتیبانی ما ۲۴/۷ آماده پاسخگویی به سوالات شماست
                        </p>
                        <div class="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="tel:+982128427044"
                                class="bg-white text-orange-600 px-8 py-3 rounded-xl  hover:scale-105 transform transition duration-300 shadow-lg">
                                تماس با پشتیبانی
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const openFAQ = ref(1)

const toggleFAQ = (id) => {
    openFAQ.value = openFAQ.value === id ? null : id
}

const faqs = ref([
    {
        id: 1,
        question: 'چگونه می‌توانم در سامانه ثبت‌نام کنم؟',
        answer: 'برای ثبت‌نام در سامانه همفضا، روی دکمه "ثبت‌نام" در منوی اصلی کلیک کنید. سپس اطلاعات شرکت، مدیر سازمان و کارکنان را وارد نمایید. پس از تایید  شماره موبایل، می‌توانید از تمامی امکانات سامانه استفاده کنید.'
    },
    {
        id: 2,
        question: 'سیستم رزرواسیون چگونه کار می‌کند؟',
        answer: 'سیستم رزرواسیون همفضا به صورت کاملاً خودکار و هوشمند عمل می‌کند:',
        features: [
            'مدیر سازمان اتاق‌ها و ساعات کاری را تعریف می‌کند',
            'کارکنان با شماره موبایل وارد می‌شوند',
            'رزرو آنی با بررسی خودکار تداخل‌ها',
            'اعلان‌های خودکار برای رزرو و یادآوری'
        ]
    },
    {
        id: 3,
        question: 'آیا می‌توانم ساعات رزرو رایگان تعریف کنم؟',
        answer: 'بله، مدیران سازمان می‌توانند برای هر کارمند ساعات رزرو رایگان در هفته تعریف کنند. برای مثال می‌توانید مشخص کنید هر کارمند ۵ ساعت در هفته می‌تواند به صورت رایگان از اتاق‌های جلسه استفاده کند.'
    },
    {
        id: 4,
        question: 'سیستم پرداخت چگونه عمل می‌کند؟',
        answer: 'سیستم پرداخت همفضا کاملاً خودکار و امن است:',
        features: [
            'هزینه‌گذاری ساعتی پس از اتمام ساعات رایگان',
            'نرخ‌های مختلف برای ساعات اوج و غیراوج',
            'پشتیبانی از درگاه‌های پرداخت ایرانی',
            'صورتحساب‌های ماهانه خودکار'
        ]
    },
])
</script>