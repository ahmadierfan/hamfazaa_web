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
                <h1 class="text-4xl font-bold text-gray-900 mb-4">
                    انتخاب <span class="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">پلن
                        مناسب</span>
                </h1>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    پلن‌های متنوع همفضا برای کسب‌وکارهای مختلف
                    <br>
                    <span class="text-orange-600 ">۱۵ روز تست رایگان</span>
                </p>
            </div>

            <!-- کارت‌های قیمت‌گذاری -->
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">

                <!-- پلن Trial -->
                <div class="relative group animate-fade-in-up" style="animation-delay: 0.1s">
                    <div
                        class="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                        class="relative bg-white rounded-2xl p-8 shadow-xl border border-orange-100 h-full flex flex-col">
                        <div class="flex items-center justify-between mb-6">
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900">آزمایشی</h3>
                                <p class="text-orange-600 font-semibold mt-1">۱۵ روز رایگان</p>
                            </div>
                            <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>

                        <div class="mb-6">
                            <div class="text-3xl font-bold text-gray-900 mb-2">رایگان</div>
                            <p class="text-gray-600 text-sm">برای آشنایی با پلتفرم</p>
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
                                <span class="text-gray-700 text-sm">تمام امکانات پایه</span>
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
                                <span class="text-gray-700 text-sm">پشتیبانی آنلاین</span>
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
                                <span class="text-gray-700 text-sm">۱۰ کاربر همزمان</span>
                            </div>
                        </div>

                        <button
                            class="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 transform hover:scale-105">
                            شروع آزمایشی
                        </button>
                    </div>
                </div>

                <!-- پلن استارتاپ -->
                <div class="relative group animate-fade-in-up" style="animation-delay: 0.2s">
                    <div
                        class="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                        class="relative bg-white rounded-2xl p-8 shadow-xl border border-orange-100 h-full flex flex-col">
                        <div class="flex items-center justify-between mb-6">
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900">استارتاپ</h3>
                                <p class="text-orange-600 font-semibold mt-1">تیم‌های کوچک</p>
                            </div>
                            <div class="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                        </div>

                        <div class="mb-6">
                            <div class="text-3xl font-bold text-gray-900 mb-2">۱,۸۵۰,۰۰۰<span
                                    class="text-lg text-gray-600"> تومان</span></div>
                            <p class="text-gray-600 text-sm">ماهیانه</p>
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
                                <span class="text-gray-700 text-sm">تا ۱۰ کاربر</span>
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

                        <button
                            class="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 transform hover:scale-105">
                            شروع کنید
                        </button>
                    </div>
                </div>

                <!-- پلن حرفه‌ای -->
                <div class="relative group animate-fade-in-up" style="animation-delay: 0.3s">
                    <div
                        class="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl blur opacity-25 group-hover:opacity-35 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                        class="relative bg-white rounded-2xl p-8 shadow-xl border border-orange-100 h-full flex flex-col transform hover:scale-105 transition duration-300">
                        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span
                                class="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                                پرفروش
                            </span>
                        </div>

                        <div class="flex items-center justify-between mb-6">
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900">حرفه‌ای</h3>
                                <p class="text-orange-600 font-semibold mt-1">کسب‌وکارهای متوسط</p>
                            </div>
                            <div class="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                        </div>

                        <div class="mb-6">
                            <div class="text-3xl font-bold text-gray-900 mb-2">۳,۸۵۰,۰۰۰<span
                                    class="text-lg text-gray-600"> تومان</span></div>
                            <p class="text-gray-600 text-sm">ماهیانه</p>
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
                                <span class="text-gray-700 text-sm">تا ۲۳ کاربر</span>
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
                                <span class="text-gray-700 text-sm">پشتیبانی تلفنی</span>
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
                                <span class="text-gray-700 text-sm">API دسترسی</span>
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
                                <span class="text-gray-700 text-sm">گزارش‌های سفارشی</span>
                            </div>
                        </div>

                        <button
                            class="w-full py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-300 transition-all duration-300 transform hover:scale-105">
                            شروع کنید
                        </button>
                    </div>
                </div>

                <!-- پلن سازمانی -->
                <div class="relative group animate-fade-in-up" style="animation-delay: 0.4s">
                    <div
                        class="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                        class="relative bg-white rounded-2xl p-8 shadow-xl border border-orange-100 h-full flex flex-col">
                        <div class="flex items-center justify-between mb-6">
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900">سازمانی</h3>
                                <p class="text-orange-600 font-semibold mt-1">شرکت‌های بزرگ</p>
                            </div>
                            <div class="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                        </div>

                        <div class="mb-6">
                            <div class="text-3xl font-bold text-gray-900 mb-2">۵,۲۹۰,۰۰۰<span
                                    class="text-lg text-gray-600"> تومان</span></div>
                            <p class="text-gray-600 text-sm">ماهیانه</p>
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
                                <span class="text-gray-700 text-sm">تا ۵۵ کاربر</span>
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
                                <span class="text-gray-700 text-sm">پشتیبانی اختصاصی</span>
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
                                <span class="text-gray-700 text-sm">SSO یکپارچه</span>
                            </div>
                        </div>

                        <button
                            class="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 transform hover:scale-105">
                            شروع کنید
                        </button>
                    </div>
                </div>

                <!-- پلن سازمانی بزرگ -->
                <div class="relative group animate-fade-in-up" style="animation-delay: 0.5s">
                    <div
                        class="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                        class="relative bg-white rounded-2xl p-8 shadow-xl border border-orange-100 h-full flex flex-col">
                        <div class="flex items-center justify-between mb-6">
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900">سازمانی بزرگ</h3>
                                <p class="text-orange-600 font-semibold mt-1">شرکت‌های بسیار بزرگ</p>
                            </div>
                            <div class="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                        </div>

                        <div class="mb-6">
                            <div class="text-3xl font-bold text-gray-900 mb-2">۹,۳۵۰,۰۰۰<span
                                    class="text-lg text-gray-600"> تومان</span></div>
                            <p class="text-gray-600 text-sm">ماهیانه</p>
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
                                <span class="text-gray-700 text-sm">تا ۱۰۰ کاربر</span>
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
                                <span class="text-gray-700 text-sm">مدیر اختصاصی</span>
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
                                <span class="text-gray-700 text-sm">پشتیبانی ۲۴/۷</span>
                            </div>
                        </div>

                        <button
                            class="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 transform hover:scale-105">
                            شروع کنید
                        </button>
                    </div>
                </div>

                <!-- پلن Enterprise -->
                <div class="relative group animate-fade-in-up" style="animation-delay: 0.6s">
                    <div
                        class="absolute -inset-1 bg-gradient-to-r from-orange-700 to-amber-700 rounded-3xl blur opacity-25 group-hover:opacity-35 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                        class="relative bg-white rounded-2xl p-8 shadow-xl border border-orange-100 h-full flex flex-col">
                        <div class="flex items-center justify-between mb-6">
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900">Enterprise</h3>
                                <p class="text-orange-600 font-semibold mt-1">سازمان‌های عظیم</p>
                            </div>
                            <div
                                class="w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>

                        <div class="mb-6">
                            <div class="text-3xl font-bold text-gray-900 mb-2">۲۳,۷۰۰,۰۰۰<span
                                    class="text-lg text-gray-600"> تومان</span></div>
                            <p class="text-gray-600 text-sm">ماهیانه</p>
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
                                <span class="text-gray-700 text-sm">تا ۳۰۰ کاربر</span>
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
                                <span class="text-gray-700 text-sm">پشتیبانی اختصاصی کامل</span>
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
                                <span class="text-gray-700 text-sm">امکانات سفارشی</span>
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
                                <span class="text-gray-700 text-sm">آموزش تخصصی</span>
                            </div>
                        </div>

                        <button
                            class="w-full py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-300 transition-all duration-300 transform hover:scale-105">
                            شروع کنید
                        </button>
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
                        <h4 class="font-semibold text-gray-900 mb-2">امنیت بالا</h4>
                        <p class="text-gray-600 text-sm">اطلاعات شما با بالاترین استانداردهای امنیتی محافظت می‌شود</p>
                    </div>
                    <div>
                        <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 class="font-semibold text-gray-900 mb-2">پشتیبانی ۲۴/۷</h4>
                        <p class="text-gray-600 text-sm">تیم پشتیبانی همیشه در کنار شماست</p>
                    </div>
                    <div>
                        <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <h4 class="font-semibold text-gray-900 mb-2">آپتایم ۹۹.۹٪</h4>
                        <p class="text-gray-600 text-sm">سیستم همیشه در دسترس و پایدار</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'blank',
})

// می‌توانید توابع مربوط به دکمه‌ها را اینجا اضافه کنید
const handlePlanSelect = (planName) => {
    // منطق انتخاب پلن
    console.log(`پلن انتخاب شده: ${planName}`)
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