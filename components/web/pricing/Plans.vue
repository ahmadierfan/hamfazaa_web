<template>
    <section class="pt-28 w-full bg-gray-50 pb-12 px-4 md:px-8">
        <div class="max-w-6xl mx-auto text-center mb-10">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2 py-8">
                ابزاری حرفه ای برای رشد کسب و کار
            </h2>
            <p class="text-gray-600">پلن خود را انتخاب کن و همین الان رایگان امتحان کن</p>

            <div class="mt-6 flex justify-center items-center gap-3">
                <span :class="!isAnnual ? 'text-blue-600 font-semibold' : 'text-gray-500'">ماهانه</span>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="isAnnual" class="sr-only peer" />
                    <div class="w-14 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
            after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all
            peer-checked:bg-blue-600"></div>
                </label>
                <span :class="isAnnual ? 'text-blue-600 font-semibold' : 'text-gray-500'">سالانه (۳۰٪ تخفیف)</span>
            </div>
        </div>

        <!-- پلن‌ها -->
        <div class="grid gap-6 md:grid-cols-4 max-w-7xl mx-auto pb-28">
            <div v-for="(plan, index) in plans" :key="plan.name"
                class="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
                :class="getPlanCardClass(plan.name)">

                <div
                    class="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 hover:opacity-100 transition-opacity duration-300 z-0">
                </div>

                <div v-if="plan.name === 'استاندارد'"
                    class="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 pt-4 rounded-full text-sm font-bold shadow-lg z-10 rotate-12">
                    پیشنهاد شروع
                </div>

                <div class="relative z-1">
                    <h3 class="text-2xl font-bold mb-1 text-gray-800">{{ plan.name }}</h3>
                    <p class="text-gray-500 mb-4">{{ plan.description }}</p>

                    <div class="mb-6">
                        <template v-if="isAnnual && plan.name !== 'سازمانی'">
                            <p class="text-gray-400 line-through text-sm">
                                {{ plan.price.toLocaleString('fa-IR') }} تومان / ماه
                            </p>
                            <p class="text-3xl font-bold text-blue-600">
                                {{ discountedPrice(plan.price).toLocaleString('fa-IR') }} تومان / ماه
                            </p>
                            <p class="text-green-600 text-sm">
                                صرفه‌جویی {{ (plan.price - discountedPrice(plan.price)).toLocaleString('fa-IR') }} تومان
                            </p>
                        </template>
                        <template v-else-if="plan.name !== 'سازمانی'">
                            <p class="text-3xl font-bold text-blue-600">
                                {{ plan.price.toLocaleString('fa-IR') }} تومان / ماه
                            </p>
                        </template>
                        <template v-else>
                            <p class="text-3xl font-bold text-gray-700">
                                قیمت: توافقی
                            </p>
                        </template>
                    </div>

                    <button
                        class="w-full py-3 rounded-xl transition-all duration-300 font-semibold relative overflow-hidden group mb-6"
                        :class="getButtonClass(plan.name)" @click="handlePlanAction(plan.name)">
                        <span class="relative z-10">{{ plan.button }}</span>
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </button>

                    <!-- لیست ویژگی‌ها با نمایش محدود -->
                    <ul class="text-right space-y-2 text-gray-700">
                        <!-- نمایش ویژگی‌ها بر اساس وضعیت توسعه یافته یا نه -->
                        <li v-for="(f, idx) in getVisibleFeatures(plan)" :key="idx"
                            class="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1"
                            :class="{ 'opacity-100': idx < 5 || isPlanExpanded(plan.name), 'opacity-100': idx >= 5 && isPlanExpanded(plan.name) }">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 shrink-0" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="text-sm">{{ f }}</span>
                        </li>

                        <!-- دکمه نمایش بیشتر/کمتر -->
                        <li v-if="plan.features.length > 5" class="pt-3 border-t border-gray-100">
                            <button @click="toggleShowMore(plan.name)"
                                class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center justify-center gap-2 transition-colors w-full py-2 rounded-lg hover:bg-blue-50">
                                <span>{{ isPlanExpanded(plan.name) ? 'نمایش کمتر' : `مشاهده ${plan.features.length - 5}
                                    ویژگی دیگر`
                                    }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 transition-transform duration-300"
                                    :class="{ 'rotate-180': isPlanExpanded(plan.name) }" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isAnnual = ref(false);
const expandedPlans = ref([]); // لیست پلن‌هایی که ویژگی‌های کاملشان نمایش داده می‌شود
const test = ref(true);

const discountedPrice = (price) => Math.round(price * 0.7);

const handlePlanAction = (planName) => {
    if (planName === 'سازمانی') {
        window.open('tel:+982100000000', '_self');
    } else {
        console.log("خرید پلن", planName);
    }
};

const getPlanCardClass = (planName) => {
    switch (planName) {
        case 'استاندارد':
            return 'border-2 border-yellow-400 shadow-lg scale-105';
        case 'سازمانی':
            return 'border-2 border-purple-500 shadow-xl';
        default:
            return 'border border-gray-200';
    }
};

const getButtonClass = (planName) => {
    switch (planName) {
        case 'استاندارد':
            return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 shadow-lg';
        case 'سازمانی':
            return 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg';
        default:
            return 'bg-blue-600 text-white hover:bg-blue-700';
    }
};

// بررسی آیا پلن در حالت توسعه یافته است
const isPlanExpanded = (planName) => {
    return expandedPlans.value.includes(planName);
};

// نمایش ویژگی‌های قابل مشاهده برای هر پلن
const getVisibleFeatures = (plan) => {
    if (isPlanExpanded(plan.name)) {
        return plan.features;
    }
    return plan.features.slice(0, 5); // فقط ۵ ویژگی اول نمایش داده می‌شود
};

// نمایش/مخفی کردن ویژگی‌های بیشتر
const toggleShowMore = (planName) => {
    const index = expandedPlans.value.indexOf(planName);
    if (index > -1) {
        expandedPlans.value.splice(index, 1);
    } else {
        expandedPlans.value.push(planName);
    }
};

const plans = [
    {
        id: 1,
        name: "پایه",
        description: "برای شروع با ابزارهای مدیریت کسب‌وکار",
        price: 680000,
        button: "شروع کن",
        features: [
            "تعداد کاربران: ۳",
            "اپلیکیشن تکنسین",
            "ثبت پذیرش",
            "پرداخت آنلاین و نقدی",
            "ثبت فاکتور",
            "خدمات دهی بر اساس محدوده جغرافیایی",
            "مالی و تسویه حساب",
            "سیستم ثبت ایرادات هوشمند",
            "ارسال پیامک",
            "ارسال نوتیفیکیشن",
            "باشگاه مشتریان",
            "مدیریت خدمات",
            "ارتباط با مشتریان",
            "تیکتینگ",
            "مدیریت دلایل لغو",
            "امکان تعریف درصد اجرت برای هر تکنسین",
            "تعریف مبلغ ضمانت برای تکنسین",
            "سیستم کیف پول",
            "تعریف قطعه برای هر خدمت",
            "محاسبه قیمت ها در اپ تکنسین",
            "امکان تعریف پذیرش طلایی و بازگشتی",
            "سیستم گارانتی",
            "مرخصی تکنسین ها",
            "امکان ثبت سرنخ",
            "تعریف انواع محدودیت ها برای تکنسین",
        ],
    },
    {
        id: 2,
        name: "استاندارد",
        description: "پیشنهاد ویژه ما برای شروع کار با تمام امکانات ضروری",
        price: 890000,
        button: "پرداخت و ویژه",
        features: [
            "تعداد کاربران: ۱۲",
            "تمام امکانات پایه",
            "ویجت رزرو آنلاین",
            "سیستم امتیاز دهی تکنسین ها",
            "مدیریت پیشرفته نظرات",
            "کتابچه قیمت تصویری",
            "ردیابی GPS کارمندان",
            "ویجت استخدام",
            "پشتیبانی اولویت دار",
            "آموزش رایگان",
        ],
    },
    {
        id: 3,
        name: "پیشرفته",
        description: "برای کسب‌وکارهای بزرگ‌تر با پشتیبانی ویژه",
        price: 1250000,
        button: "شروع کن",
        features: [
            "تعداد کاربران: ۲۰",
            "تمام امکانات استاندارد",
            "داشبورد آنالیز کسب و کار",
            "کاربران اضافی با هزینه جداگانه",
            "چت بات هوش مصنوعی برای وبسایت شما",
            "پشتیبانی تلفنی ویژه",
            "وبسایت رایگان در پلن یکساله",
            "سی آر ام فروش",
            "آنالیز پیشرفته عملکرد",
        ],
    },
    {
        id: 4,
        name: "سازمانی",
        description: "راه‌حل اختصاصی برای سازمان‌ها و شرکت‌های بزرگ با قابلیت‌های سفارشی",
        price: 0,
        button: "تماس با ما",
        features: [
            "سیستم کاملاً سفارشی‌سازی شده",
            "پشتیبانی ۲۴/۷ اختصاصی",
            "ادغام با نرم‌افزارهای موجود",
            "سرورهای اختصاصی",
            "تعداد کاربران نامحدود",
            "امنیت پیشرفته سازمانی",
            "گزارش‌های تحلیلی سفارشی",
            "آموزش تیم اختصاصی",
            "قابلیت توسعه بر اساس نیازهای شما",
            "پشتیبانی از چندین شعبه",
        ],
    },
];

const allOptions = [
    {
        name: "ویژگی شماره ۱",
    }
];

onMounted(() => {
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const el = document.querySelector("#tableheader");
        if (el) {
            const isDesktop = window.innerWidth > 768;
            if (isDesktop && scrollY > 715) {
                el.style.position = "fixed";
                el.style.top = "55px";
                el.style.left = '2%';
                el.style.right = '2%';
                el.style.width = '96%';
                el.style.zIndex = "10";
            } else if (isDesktop) {
                el.style.position = "sticky";
                el.style.top = "0px";
                el.style.left = "";
                el.style.width = "";
            }
        }
    });
});
</script>

<style scoped>
table th,
table td {
    border-left: 1px solid #e5e7eb;
}

table th:last-child,
table td:last-child {
    border-left: none;
}

/* افکت‌های اضافی برای تعامل بهتر */
.hover-lift {
    transition: all 0.3s ease;
}

.hover-lift:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* انیمیشن برای نمایش ویژگی‌ها */
.fade-in {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>