<template>
    <section id="services" class="py-20 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
        <!-- المان‌های گرافیکی -->
        <div class="absolute top-10 right-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div class="absolute bottom-10 left-10 w-48 h-48 bg-amber-200 rounded-full opacity-30 animate-bounce"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" ref="titleRef">
                <h2
                    class="text-4xl md:text-5xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                    خدمات اختصاصی
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    تمام ابزارهای مورد نیاز برای مدیریت حرفه‌ای فضای کار اشتراکی در یک پلتفرم
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(service, index) in services" :key="service.id"
                    :ref="el => { serviceCardsRefs[index] = el }"
                    class="group bg-white rounded-3xl shadow-xl hover:shadow-2xl p-8 transform hover:-translate-y-2 transition-all duration-500 border border-orange-100 relative overflow-hidden">
                    <!-- پس‌زمینه داینامیک -->
                    <div
                        class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full transform translate-x-10 -translate-y-10 opacity-10 group-hover:opacity-20 transition duration-500">
                    </div>

                    <!-- آیکون -->
                    <div
                        class="relative z-10 w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition duration-300 shadow-lg">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path v-if="service.icon === 'calendar'" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            <path v-else-if="service.icon === 'users'" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                            <path v-else-if="service.icon === 'chart'" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            <path v-else-if="service.icon === 'payment'" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path v-else-if="service.icon === 'security'" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            <path v-else-if="service.icon === 'sync'" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </div>

                    <!-- محتوا -->
                    <h3 class="text-xl text-gray-900 mb-4 group-hover:text-orange-600 transition duration-300">
                        {{ service.title }}
                    </h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        {{ service.description }}
                    </p>

                    <!-- ویژگی‌ها -->
                    <ul class="space-y-2">
                        <li v-for="(feature, featureIndex) in service.features" :key="feature"
                            :ref="el => { featureRefs[`${service.id}-${featureIndex}`] = el }"
                            class="flex items-center text-sm text-gray-600">
                            <svg class="w-4 h-4 text-green-500 ml-2 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            {{ feature }}
                        </li>
                    </ul>

                    <!-- افکت هورور -->
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-5 transition duration-500 rounded-3xl">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// رفرنس‌ها برای المان‌های مختلف
const titleRef = ref(null)
const serviceCardsRefs = ref([])
const featureRefs = ref({})

// وضعیت نمایش المان‌ها
const isTitleVisible = ref(false)
const visibleCards = ref([])
const visibleFeatures = ref([])

// داده‌های خدمات
const services = [
    {
        id: 1,
        icon: 'calendar',
        title: 'تقویم هوشمند',
        description: 'سیستم رزرواسیون پیشرفته با قابلیت همگام‌سازی و اعلان‌های خودکار',
        features: ['رزرو آنی اتاق', 'مدیریت تداخل', 'همخوانی گرافیکی با Google Calendar']
    },
    {
        id: 2,
        icon: 'users',
        title: 'مدیریت کاربران',
        description: 'تعریف سطوح دسترسی مختلف برای مدیران، کارکنان و مهمانان',
        features: ['دسترسی چندسطحی', 'مدیریت پروفایل', 'احراز هویت دو مرحله‌ای']
    },
    {
        id: 3,
        icon: 'chart',
        title: 'گزارش‌گیری تحلیلی',
        description: 'داشبوردهای تحلیلی پیشرفته برای بررسی الگوهای استفاده',
        features: ['آمار استفاده', 'گزارش‌های مالی', 'تحلیل بهره‌وری']
    },
    {
        id: 4,
        icon: 'payment',
        title: 'سیستم پرداخت',
        description: 'سیستم صورتحساب و پرداخت آنلاین برای رزروهای اضافی',
        features: ['درگاه‌های متعدد', 'صورتحساب خودکار', 'سیستم اعتباری']
    },
    {
        id: 5,
        icon: 'security',
        title: 'امنیت بالا',
        description: 'سیستم امنیتی پیشرفته با رمزنگاری داده‌ها و کنترل دسترسی',
        features: ['رمزنگاری End-to-End', 'پشتیبان‌گیری خودکار', 'مطابقت با استانداردها']
    },
    {
        id: 6,
        icon: 'sync',
        title: 'همگام‌سازی سریع',
        description: 'همگام‌سازی بلادرنگ بین تمام دستگاه‌ها و پلتفرم‌ها',
        features: ['همگام‌سازی Real-time', 'API کامل', 'پشتیبانی از Webhook']
    }
]

// تابع بررسی نمایش المان در viewport
function isElementInViewport(el) {
    if (!el) return false

    const rect = el.getBoundingClientRect()
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
        rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) * 0.15
    )
}

// تابع مدیریت اسکرول
function handleScroll() {
    // بررسی نمایش عنوان
    if (titleRef.value && isElementInViewport(titleRef.value) && !isTitleVisible.value) {
        isTitleVisible.value = true
        titleRef.value.classList.add('animate-fadeInUp')
    }

    // بررسی نمایش کارت‌ها
    serviceCardsRefs.value.forEach((card, index) => {
        if (card && isElementInViewport(card) && !visibleCards.value.includes(index)) {
            visibleCards.value.push(index)

            // افزودن کلاس‌های انیمیشن با تأخیر برای افکت آبشاری
            setTimeout(() => {
                card.classList.add('animate-fadeInUp')
                card.style.animationDelay = `${index * 0.1}s`
            }, 50)
        }
    })

    // بررسی نمایش ویژگی‌ها
    Object.keys(featureRefs.value).forEach(key => {
        const featureEl = featureRefs.value[key]
        if (featureEl && isElementInViewport(featureEl) && !visibleFeatures.value.includes(key)) {
            visibleFeatures.value.push(key)

            // افزودن کلاس انیمیشن با تأخیر
            setTimeout(() => {
                featureEl.classList.add('animate-fadeInLeft')
            }, 100)
        }
    })
}

// افزودن استایل‌های انیمیشن به head
function addAnimationStyles() {
    if (document.getElementById('scroll-animations')) return

    const style = document.createElement('style')
    style.id = 'scroll-animations'
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInLeft {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fadeInLeft {
            animation: fadeInLeft 0.5s ease-out forwards;
        }
        
        /* حالت اولیه برای المان‌های انیمیشنی */
        #services .text-center,
        #services .grid > div,
        #services .grid li {
            opacity: 0;
        }
    `
    document.head.appendChild(style)
}

// هنگامی که کامپوننت mount شد
onMounted(() => {
    addAnimationStyles()

    // بررسی اولیه موقعیت المان‌ها
    setTimeout(handleScroll, 100)

    // افزودن event listener برای اسکرول
    window.addEventListener('scroll', handleScroll)
})

// هنگامی که کامپوننت unmount شد
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>