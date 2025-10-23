<template>
    <div>
        <!-- شرط نمایش داشبورد -->
        <div v-if="isOnboardingCompleted" class="min-h-screen bg-gray-50 p-4 sm:p-6">
            <!-- داشبورد -->
            <div class="max-w-7xl mx-auto">
                <!-- هدر داشبورد -->
                <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <h1 class="text-2xl sm:text-3xl font-bold text-gray-900">داشبورد مدیریت</h1>
                            <p class="text-gray-600 mt-2">به سیستم رزرواسیون اتاق جلسات خوش آمدید</p>
                        </div>
                        <div class="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl">
                            <span class="text-sm">فعال</span>
                        </div>
                    </div>
                </div>

                <!-- کارت‌های آمار -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                <p class="text-gray-600 text-sm">اتاق‌های فعال</p>
                                <p class="text-2xl font-bold text-gray-900">5</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                </svg>
                            </div>
                            <div>
                                <p class="text-gray-600 text-sm">کاربران فعال</p>
                                <p class="text-2xl font-bold text-gray-900">24</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p class="text-gray-600 text-sm">رزرو امروز</p>
                                <p class="text-2xl font-bold text-gray-900">8</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            </div>
                            <div>
                                <p class="text-gray-600 text-sm">لینک‌های فعال</p>
                                <p class="text-2xl font-bold text-gray-900">3</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- رزروهای اخیر -->
                <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                    <h2 class="text-xl font-bold text-gray-900 mb-4">رزروهای اخیر</h2>
                    <div class="space-y-4">
                        <div v-for="i in 3" :key="i"
                            class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <div class="flex items-center">
                                <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                                    <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="font-medium text-gray-900">اتاق جلسات اصلی</p>
                                    <p class="text-sm text-gray-600">۱۰:۰۰ - ۱۱:۳۰</p>
                                </div>
                            </div>
                            <div class="text-left">
                                <p class="font-medium text-gray-900">علی محمدی</p>
                                <p class="text-sm text-gray-600">جلسه تیم توسعه</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ویزارد onboarding -->
        <div v-else
            class="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 p-4 sm:p-6 flex items-center justify-center">
            <!-- کارت ویزارد -->
            <div class="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-4xl overflow-hidden">

                <!-- هدر ویزارد با مراحل -->
                <div class="bg-gradient-to-r from-orange-500 to-orange-600 p-6 sm:p-8 text-white">
                    <div class="text-center mb-8">
                        <div
                            class="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h1 class="text-2xl sm:text-3xl  mb-2">شروع سریع و آسان</h1>
                        <p class="text-orange-100 text-lg">تنها در ۴ مرحله ساده سیستم را فعال کنید</p>
                    </div>

                    <!-- مراحل قابل کلیک -->
                    <div class="flex justify-between relative">
                        <!-- خط اتصال -->
                        <div class="absolute top-5 left-0 right-0 h-0.5 bg-white/30 -z-10"></div>

                        <!-- مرحله ۱ -->
                        <div class="flex flex-col items-center cursor-pointer group" @click="goToStep(1)">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 mb-2 border-2 relative"
                                :class="getStepClass(1)">
                                <svg v-if="isStepCompleted(1)" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <!-- نشانگر مرحله جاری -->
                                <div v-if="currentStep === 1 && !isStepCompleted(1)"
                                    class="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white animate-pulse">
                                </div>
                            </div>
                            <span class="text-sm font-medium transition-colors text-center"
                                :class="getStepTextClass(1)">
                                تعریف اتاق
                            </span>
                        </div>

                        <!-- مرحله ۲ -->
                        <div class="flex flex-col items-center cursor-pointer group" @click="goToStep(2)">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 mb-2 border-2 relative"
                                :class="getStepClass(2)">
                                <svg v-if="isStepCompleted(2)" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                </svg>
                                <div v-if="currentStep === 2 && !isStepCompleted(2)"
                                    class="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white animate-pulse">
                                </div>
                            </div>
                            <span class="text-sm font-medium transition-colors text-center"
                                :class="getStepTextClass(2)">
                                تعریف کاربران
                            </span>
                        </div>

                        <!-- مرحله ۳ -->
                        <div class="flex flex-col items-center cursor-pointer group" @click="goToStep(3)">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 mb-2 border-2 relative"
                                :class="getStepClass(3)">
                                <svg v-if="isStepCompleted(3)" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                <div v-if="currentStep === 3 && !isStepCompleted(3)"
                                    class="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white animate-pulse">
                                </div>
                            </div>
                            <span class="text-sm font-medium transition-colors text-center"
                                :class="getStepTextClass(3)">
                                ساخت لینک
                            </span>
                        </div>

                        <!-- مرحله ۴ -->
                        <div class="flex flex-col items-center cursor-pointer group" @click="goToStep(4)">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 mb-2 border-2 relative"
                                :class="getStepClass(4)">
                                <svg v-if="isStepCompleted(4)" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <div v-if="currentStep === 4 && !isStepCompleted(4)"
                                    class="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white animate-pulse">
                                </div>
                            </div>
                            <span class="text-sm font-medium transition-colors text-center"
                                :class="getStepTextClass(4)">
                                اولین رزرو
                            </span>
                        </div>
                    </div>
                </div>

                <!-- محتوای ویزارد -->
                <div class="p-6 sm:p-8">
                    <!-- مرحله ۱: تعریف اتاق -->
                    <div v-if="currentStep === 1" class="animate-fade-in">
                        <div class="flex items-center justify-center mb-6">
                            <div
                                class="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mr-4">
                                <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div class="text-right">
                                <h2 class="text-2xl  text-gray-900">تعریف اتاق‌های جلسه</h2>
                                <div class="flex items-center mt-1">
                                    <span class="text-sm text-gray-500">وضعیت:</span>
                                    <span v-if="isStepCompleted(1)"
                                        class="mr-2 text-sm text-green-600 font-medium flex items-center">
                                        <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        تکمیل شده
                                    </span>
                                    <span v-else class="mr-2 text-sm text-yellow-600 font-medium flex items-center">
                                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        در انتظار انجام
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p class="text-gray-600 text-lg mb-6 leading-relaxed text-right">
                            ابتدا اتاق‌های قابل رزرو در سازمان خود را به سیستم اضافه کنید.
                            می‌توانید ظرفیت، ساعت کاری و محدودیت‌های هر اتاق را مشخص نمایید.
                        </p>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div class="bg-orange-50 rounded-xl p-4 text-center border border-orange-200">
                                <div
                                    class="w-12 h-12 mx-auto mb-2 bg-orange-100 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 class=" text-orange-800">ظرفیت</h3>
                                <p class="text-orange-700 text-sm mt-1">تعداد نفرات هر اتاق</p>
                            </div>

                            <div class="bg-orange-50 rounded-xl p-4 text-center border border-orange-200">
                                <div
                                    class="w-12 h-12 mx-auto mb-2 bg-orange-100 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 class=" text-orange-800">ساعت کاری</h3>
                                <p class="text-orange-700 text-sm mt-1">زمان‌های قابل رزرو</p>
                            </div>

                            <div class="bg-orange-50 rounded-xl p-4 text-center border border-orange-200">
                                <div
                                    class="w-12 h-12 mx-auto mb-2 bg-orange-100 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 class=" text-orange-800">محدودیت‌ها</h3>
                                <p class="text-orange-700 text-sm mt-1">قوانین و شرایط استفاده</p>
                            </div>
                        </div>

                        <!-- لینک مستقیم -->
                        <button @click="navigateToRooms"
                            class="w-full max-w-md mx-auto bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 space-x-reverse shadow-lg">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span class="text-lg">برای تعریف اتاق اینجا کلیک کنید</span>
                        </button>
                    </div>

                    <!-- مرحله ۲: تعریف کاربران -->
                    <div v-if="currentStep === 2" class="animate-fade-in">
                        <div class="flex items-center justify-center mb-6">
                            <div
                                class="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-4">
                                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                </svg>
                            </div>
                            <div class="text-right">
                                <h2 class="text-2xl  text-gray-900">تعریف کاربران سیستم</h2>
                                <div class="flex items-center mt-1">
                                    <span class="text-sm text-gray-500">وضعیت:</span>
                                    <span v-if="isStepCompleted(2)"
                                        class="mr-2 text-sm text-green-600 font-medium flex items-center">
                                        <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        تکمیل شده
                                    </span>
                                    <span v-else class="mr-2 text-sm text-yellow-600 font-medium flex items-center">
                                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        در انتظار انجام
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p class="text-gray-600 text-lg mb-6 leading-relaxed text-right">
                            افرادی که مجاز به رزرو اتاق هستند را به سیستم معرفی کنید.
                            می‌توانید برای هر کاربر سطح دسترسی متفاوت تعریف نمایید.
                        </p>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div class="bg-blue-50 rounded-xl p-4 text-center border border-blue-200">
                                <div
                                    class="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span class="text-blue-600  text-xl">👑</span>
                                </div>
                                <h3 class=" text-blue-800">مدیران</h3>
                                <p class="text-blue-700 text-sm mt-1">دسترسی کامل به سیستم</p>
                            </div>

                            <div class="bg-blue-50 rounded-xl p-4 text-center border border-blue-200">
                                <div
                                    class="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span class="text-blue-600  text-xl">👨‍💼</span>
                                </div>
                                <h3 class=" text-blue-800">کارمندان</h3>
                                <p class="text-blue-700 text-sm mt-1">دسترسی عادی به رزرو</p>
                            </div>

                            <div class="bg-blue-50 rounded-xl p-4 text-center border border-blue-200">
                                <div
                                    class="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span class="text-blue-600  text-xl">👥</span>
                                </div>
                                <h3 class=" text-blue-800">مهمانان</h3>
                                <p class="text-blue-700 text-sm mt-1">دسترسی محدود و موقت</p>
                            </div>
                        </div>

                        <!-- لینک مستقیم -->
                        <button @click="navigateToUsers"
                            class="w-full max-w-md mx-auto bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 space-x-reverse shadow-lg">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                            </svg>
                            <span class="text-lg">برای تعریف کاربران اینجا کلیک کنید</span>
                        </button>
                    </div>

                    <!-- مرحله ۳: ساخت لینک -->
                    <div v-if="currentStep === 3" class="animate-fade-in">
                        <div class="flex items-center justify-center mb-6">
                            <div
                                class="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mr-4">
                                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            </div>
                            <div class="text-right">
                                <h2 class="text-2xl  text-gray-900">ساخت لینک ویژه رزرو</h2>
                                <div class="flex items-center mt-1">
                                    <span class="text-sm text-gray-500">وضعیت:</span>
                                    <span v-if="isStepCompleted(3)"
                                        class="mr-2 text-sm text-green-600 font-medium flex items-center">
                                        <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        تکمیل شده
                                    </span>
                                    <span v-else class="mr-2 text-sm text-yellow-600 font-medium flex items-center">
                                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        در انتظار انجام
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p class="text-gray-600 text-lg mb-6 leading-relaxed text-right">
                            یک لینک ویژه برای رزرو اتاق ایجاد کرده و بین کاربران به اشتراک بگذارید.
                            این لینک دسترسی کنترل‌شده و امن به سیستم رزرو را فراهم می‌کند.
                        </p>

                        <div class="bg-green-50 rounded-xl p-6 mb-8 border border-green-200">
                            <div
                                class="flex flex-col sm:flex-row items-center justify-between bg-white rounded-lg p-4 border-2 border-green-300 space-y-3 sm:space-y-0">
                                <div class="flex items-center space-x-2 space-x-reverse">
                                    <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                    </div>
                                    <span
                                        class="text-green-600 font-mono text-sm ">yourcompany.com/reserve/abc123</span>
                                </div>
                                <div class="flex space-x-2 space-x-reverse">
                                    <button
                                        class="text-green-600 hover:text-green-700 transition-colors p-2 bg-green-50 rounded-lg">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- لینک مستقیم -->
                        <button @click="navigateToLinks"
                            class="w-full max-w-md mx-auto bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 space-x-reverse shadow-lg">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            <span class="text-lg">برای ساخت لینک اینجا کلیک کنید</span>
                        </button>
                    </div>

                    <!-- مرحله ۴: اولین رزرو -->
                    <div v-if="currentStep === 4" class="animate-fade-in">
                        <div class="flex items-center justify-center mb-6">
                            <div
                                class="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div class="text-right">
                                <h2 class="text-2xl  text-gray-900">انجام اولین رزرو</h2>
                                <div class="flex items-center mt-1">
                                    <span class="text-sm text-gray-500">وضعیت:</span>
                                    <span v-if="isStepCompleted(4)"
                                        class="mr-2 text-sm text-green-600 font-medium flex items-center">
                                        <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        تکمیل شده
                                    </span>
                                    <span v-else class="mr-2 text-sm text-yellow-600 font-medium flex items-center">
                                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        در انتظار انجام
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p class="text-gray-600 text-lg mb-6 leading-relaxed text-right">
                            حالا همه چیز آماده است! اولین رزرو را انجام دهید تا از صحت عملکرد سیستم اطمینان حاصل کنید.
                        </p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div class="bg-purple-50 rounded-xl p-4 text-center border border-purple-200">
                                <div
                                    class="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 class=" text-purple-800">مدت زمان</h3>
                                <p class="text-purple-700 text-sm mt-1">جلسه 30 دقیقه‌ای تستی</p>
                            </div>

                            <div class="bg-purple-50 rounded-xl p-4 text-center border border-purple-200">
                                <div
                                    class="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 class=" text-purple-800">اتاق تست</h3>
                                <p class="text-purple-700 text-sm mt-1">از اتاق ایجاد شده استفاده کنید</p>
                            </div>
                        </div>

                        <!-- لینک مستقیم -->
                        <button @click="navigateToReservation"
                            class="w-full max-w-md mx-auto bg-purple-500 hover:bg-purple-600 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 space-x-reverse shadow-lg mb-4">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span class="text-lg">برای انجام رزرو اینجا کلیک کنید</span>
                        </button>

                        <!-- دوره آزمایشی -->
                        <div class="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 text-white">
                            <div class="flex items-center justify-center space-x-2 space-x-reverse mb-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span class="">{{ daysLeft }} روز آزمایشی باقی مانده</span>
                            </div>
                            <p class="text-orange-100 text-sm">پس از اتمام دوره آزمایشی، می‌توانید سرویس را فعال نگه
                                دارید
                            </p>
                        </div>
                    </div>

                    <!-- دکمه‌های ناوبری -->
                    <div class="flex justify-between mt-8 pt-6 border-t border-gray-200">
                        <button v-if="currentStep > 1" @click="previousStep"
                            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2 space-x-reverse">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                            <span>قبلی</span>
                        </button>

                        <div v-else class="flex items-center text-gray-500 text-sm">
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>

                        <button v-if="currentStep < 4" @click="nextStep"
                            class="px-6 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 space-x-reverse">
                            <span>ادامه</span>
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button v-else @click="completeWizard"
                            class="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 space-x-reverse">
                            <span>شروع استفاده از سیستم</span>
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                        </button>
                    </div>

                    <!-- رد کردن ویزارد -->
                    <div v-if="currentStep === 1" class="text-center mt-4">
                        <button @click="skipWizard"
                            class="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200">
                            می‌خواهم بعداً انجام دهم
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'copanel'
})

// وضعیت فعلی ویزارد
const currentStep = ref(1)
const daysLeft = ref(7)

// وضعیت تکمیل مراحل
const completedSteps = ref([])

// وضعیت نمایش داشبورد
const isOnboardingCompleted = ref(false)

// بررسی آیا مرحله تکمیل شده است
const isStepCompleted = (step) => {
    return completedSteps.value.includes(step)
}

// تابع برای دریافت کلاس هر مرحله
const getStepClass = (step) => {
    if (isStepCompleted(step)) {
        return 'bg-white text-orange-600 border-white shadow-lg'
    } else if (currentStep.value === step) {
        return 'bg-white/90 text-orange-600 border-white shadow-lg'
    } else {
        return 'bg-white/30 text-white border-white/50'
    }
}

// تابع برای دریافت کلاس متن هر مرحله
const getStepTextClass = (step) => {
    if (isStepCompleted(step)) {
        return 'text-white '
    } else if (currentStep.value === step) {
        return 'text-white '
    } else {
        return 'text-white/80'
    }
}

// توابع ناوبری
const nextStep = () => {
    if (currentStep.value < 4) {
        currentStep.value++
    }
}

const previousStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--
    }
}

const goToStep = (step) => {
    // کاربر می‌تواند به هر مرحله‌ای برود
    currentStep.value = step
}

// توابع ناوبری به صفحات مختلف
const navigateToRooms = () => {
    console.log('Navigate to rooms management')
    if (!completedSteps.value.includes(1)) {
        completedSteps.value.push(1)
    }
    // navigateTo('/rooms')
}

const navigateToUsers = () => {
    console.log('Navigate to users management')
    if (!completedSteps.value.includes(2)) {
        completedSteps.value.push(2)
    }
    // navigateTo('/users')
}

const navigateToLinks = () => {
    console.log('Navigate to links creation')
    if (!completedSteps.value.includes(3)) {
        completedSteps.value.push(3)
    }
    // navigateTo('/links')
}

const navigateToReservation = () => {
    console.log('Navigate to reservation')
    if (!completedSteps.value.includes(4)) {
        completedSteps.value.push(4)
    }
    // navigateTo('/reservation')
}

const completeWizard = () => {
    // ذخیره وضعیت تکمیل ویزارد
    localStorage.setItem('onboardingCompleted', 'true')
    isOnboardingCompleted.value = true
    console.log('Wizard completed - showing dashboard')
}

const skipWizard = () => {
    console.log('Wizard skipped')
    localStorage.setItem('onboardingCompleted', 'true')
    isOnboardingCompleted.value = true
}

// بررسی آیا کاربر قبلاً ویزارد را دیده است
onMounted(() => {
    const completed = localStorage.getItem('onboardingCompleted')
    if (completed) {
        isOnboardingCompleted.value = true
    }
})
</script>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>