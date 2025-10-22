<template>
    <div class="p-6">
        <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <!-- هدر با انتخاب اتاق -->
            <div class="bg-white shadow-sm border-b">
                <div class="mx-auto sm:px-6">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between py-6">
                        <div class="flex-1 min-w-0">
                            <h1 class="text-2xl  leading-7 text-gray-900 sm:text-3xl sm:truncate">
                                تقویم رزرو اتاق‌ها
                            </h1>
                            <p class="mt-1 text-sm text-gray-500">
                                مدیریت و مشاهده رزروهای اتاق‌های جلسه
                            </p>
                        </div>

                        <!-- انتخاب اتاق -->
                        <div class="mt-4 md:mt-0 md:ml-4">
                            <div class="flex flex-col sm:flex-row gap-4">
                                <div class="relative flex-1 min-w-[200px]">
                                    <select v-model="selectedRoom" @change="onRoomChange"
                                        class="w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 rounded-xl bg-white shadow-sm transition-all duration-200 appearance-none">
                                        <option value="">انتخاب اتاق...</option>
                                        <option v-for="room in rooms" :key="room.pk_room" :value="room.pk_room"
                                            class="py-2">
                                            {{ room.room }} (ظرفیت: {{ room.capacity }} نفر)
                                        </option>
                                    </select>
                                    <div
                                        class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
                                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- پیغام انتخاب اتاق -->
            <div v-if="!selectedRoom" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div class="text-center">
                    <div class="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-orange-100">
                        <svg class="h-12 w-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h3 class="mt-6 text-xl font-medium text-gray-900">اتاقی انتخاب نشده</h3>
                    <p class="mt-2 text-sm text-gray-500 max-w-md mx-auto">
                        لطفاً یک اتاق از لیست بالا انتخاب کنید تا رزروهای آن در تقویم نمایش داده شود.
                    </p>
                </div>
            </div>

            <!-- تقویم -->
            <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <!-- اطلاعات اتاق انتخاب شده -->
                <div class="mb-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div class="flex items-center space-x-4 space-x-reverse">
                            <div class="flex-shrink-0">
                                <div
                                    class="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white ">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h2 class="text-xl  text-gray-900">{{ selectedRoomInfo.room }}</h2>
                                <div class="flex flex-wrap gap-4 mt-1 text-sm text-gray-600">
                                    <span class="flex items-center">
                                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        ظرفیت: {{ selectedRoomInfo.capacity }} نفر
                                    </span>
                                    <span class="flex items-center">
                                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        ساعات کاری: {{ formatTime(selectedRoomInfo.starttime) }} - {{
                                            formatTime(selectedRoomInfo.endtime) }}
                                    </span>
                                    <span class="flex items-center">
                                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center gap-3">
                            <!-- دکمه بازخوانی اطلاعات -->
                            <button @click="refreshRoomData" :disabled="isRefreshing"
                                class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                                <svg v-if="isRefreshing" class="animate-spin -mr-1 ml-2 h-4 w-4 text-gray-700"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                                <svg v-else class="-mr-1 ml-2 h-4 w-4 text-gray-700" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                {{ isRefreshing ? 'در حال بارگذاری...' : 'بروزرسانی اطلاعات' }}
                            </button>

                            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                                :class="selectedRoomInfo.isactive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
                                <span class="w-2 h-2 rounded-full mr-1"
                                    :class="selectedRoomInfo.isactive ? 'bg-green-400' : 'bg-red-400'"></span>
                                {{ selectedRoomInfo.isactive ? 'فعال' : 'غیرفعال' }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- هشدار زمان گذشته -->
                <div v-if="showPastTimeWarning" class="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <div class="flex items-center">
                        <svg class="w-5 h-5 text-yellow-600 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <p class="text-yellow-800 text-sm">امکان رزرو زمان‌های گذشته وجود ندارد. لطفاً زمان آینده انتخاب
                            کنید.</p>
                    </div>
                </div>

                <!-- انتخاب کاربر -->
                <div class="mb-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div class="flex-1">
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                انتخاب کاربر برای رزرو
                            </label>

                            <!-- دراپ‌دان سفارشی -->
                            <div class="relative">
                                <!-- انتخاب‌کننده -->
                                <div @click="toggleDropdown"
                                    class="w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 rounded-xl bg-white shadow-sm transition-all duration-200 cursor-pointer flex items-center justify-between"
                                    :class="dropdownOpen ? 'ring-2 ring-orange-200 border-orange-500' : ''">
                                    <span v-if="selectedUser" class="flex items-center space-x-2 space-x-reverse">
                                        <div
                                            class="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium">
                                            {{ getInitials(selectedUserName) }}
                                        </div>
                                        <span class="text-gray-700">{{ selectedUserName }}</span>
                                    </span>
                                    <span v-else class="text-gray-400">جستجو و انتخاب کاربر...</span>

                                    <svg class="h-5 w-5 text-gray-400 transition-transform duration-200"
                                        :class="dropdownOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                                <!-- منوی دراپ‌دان -->
                                <div v-if="dropdownOpen"
                                    class="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                                    <!-- فیلد جستجو -->
                                    <div class="p-3 border-b border-gray-200">
                                        <div class="relative">
                                            <input type="text" v-model="searchQuery" @input="filterUsers"
                                                placeholder="جستجوی کاربر..."
                                                class="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                                ref="searchInput">
                                            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                                                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- لیست کاربران -->
                                    <div class="py-1">
                                        <div v-for="user in filteredUsers" :key="user.id" @click="selectUser(user)"
                                            class="flex items-center space-x-3 space-x-reverse px-3 py-2 hover:bg-orange-50 cursor-pointer transition-colors duration-150"
                                            :class="selectedUser && selectedUser.id === user.id ? 'bg-orange-100' : ''">
                                            <div class="flex-shrink-0">
                                                <div
                                                    class="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
                                                    {{ getInitials(user.name) }}
                                                </div>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate">{{ user.name }}
                                                </p>
                                                <p class="text-sm text-gray-500 truncate">{{ user.email }}</p>
                                            </div>
                                            <div v-if="selectedUser && selectedUser.id === user.id"
                                                class="flex-shrink-0">
                                                <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div v-if="filteredUsers.length === 0"
                                            class="px-3 py-4 text-center text-gray-500 text-sm">
                                            کاربری یافت نشد
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <span v-if="selectedUser" class="text-sm text-green-600 flex items-center pt-5">
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                کاربر انتخاب شده
                            </span>
                            <span v-else class="text-sm text-orange-600 flex items-center pt-5">
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                                کاربر انتخاب نشده
                            </span>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div class="p-6 calendar-wrapper">
                        <vue-cal :time="true" @cell-touchstart="onCellTouchStart" :events="filteredEvents"
                            :locale="locale" @event-create="onEventCreate" :disable-views="['years', 'year']"
                            :selected-date="selectedDate" active-view="month" :min-date="minSelectableDate"
                            @cell-click="onCellClick" @event-click="onEventClick" @event-drop="onEventDrop"
                            @event-duration-change="onEventDurationChange" @event-delete="onEventDelete"
                            @view-change="onViewChange" @ready="onCalendarReady" :editable-events="{
                                title: true,
                                drag: true,
                                resize: true,
                                delete: true,
                                create: true
                            }" class="custom-vue-cal">
                            <template #event="{ event }">
                                <div class="event-content" :class="{ 'past-event': isPastEvent(event) }">
                                    <div v-if="!isPastEvent(event)" class="event-actions">
                                        <button @click.stop="quickDeleteEvent(event)" class="delete-btn"
                                            title="حذف رزرو">
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <strong class="event-title">{{ event.title }}</strong>
                                    <small v-if="event.content" class="event-description">{{ event.content }}</small>
                                    <div class="event-meta">
                                        <span class="event-time">{{ formatEventTime(event.start) }} - {{
                                            formatEventTime(event.end) }}</span>
                                    </div>
                                </div>
                            </template>
                        </vue-cal>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal ساخت و ویرایش ایونت -->
        <div v-if="showEventModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div
                class="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100">
                <!-- هدر -->
                <div class="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl p-6 text-white">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3 space-x-reverse">
                            <div class="bg-white bg-opacity-20 p-2 rounded-xl">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg ">{{ isEditing ? 'ویرایش' : 'ساخت' }} رزرو</h3>
                                <p class="text-blue-100 text-sm mt-1">{{ formatEventDate(selectedDateForModal) }}</p>
                            </div>
                        </div>
                        <button @click="closeEventModal"
                            class="text-white hover:text-blue-100 transition-colors p-1 rounded-lg hover:bg-white hover:bg-opacity-10">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="p-6">
                    <!-- اطلاعات اصلی -->
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <div class="bg-gray-50 rounded-xl p-4">
                            <div class="flex items-center space-x-2 space-x-reverse text-sm text-gray-600 mb-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span>کاربر</span>
                            </div>
                            <p class="text-gray-900 font-medium text-sm">{{ selectedUserName || 'نامشخص' }}</p>
                        </div>

                        <div class="bg-gray-50 rounded-xl p-4">
                            <div class="flex items-center space-x-2 space-x-reverse text-sm text-gray-600 mb-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span>اتاق</span>
                            </div>
                            <p class="text-gray-900 font-medium text-sm">{{ selectedRoomInfo.room || 'نامشخص' }}</p>
                        </div>
                    </div>

                    <!-- ویرایش زمان -->
                    <div class="space-y-6">
                        <!-- زمان شروع -->
                        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <label class="block text-sm  text-blue-800 mb-3 flex items-center">
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                ساعت شروع
                            </label>
                            <div class="flex items-center justify-center space-x-3 space-x-reverse">
                                <select v-model="modalStartMinute"
                                    class="w-20 text-center bg-white border border-blue-300 rounded-lg px-3 py-3 text-lg  text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                                    <option v-for="minute in minutes" :key="`start-${minute}`" :value="minute"
                                        class="py-2">
                                        {{ minute }}
                                    </option>
                                </select>
                                <span class="text-blue-700 text-xl ">:</span>
                                <select v-model="modalStartHour"
                                    class="w-20 text-center bg-white border border-blue-300 rounded-lg px-3 py-3 text-lg  text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                                    <option v-for="hour in hours" :key="`start-${hour}`" :value="hour" class="py-2">
                                        {{ hour }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <!-- زمان پایان -->
                        <div class="bg-purple-50 border border-purple-200 rounded-xl p-4">
                            <label class="block text-sm  text-purple-800 mb-3 flex items-center">
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                ساعت پایان
                            </label>
                            <div class="flex items-center justify-center space-x-3 space-x-reverse">
                                <select v-model="modalEndMinute"
                                    class="w-20 text-center bg-white border border-purple-300 rounded-lg px-3 py-3 text-lg  text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200">
                                    <option v-for="minute in minutes" :key="`end-${minute}`" :value="minute"
                                        class="py-2">
                                        {{ minute }}
                                    </option>
                                </select>
                                <span class="text-purple-700 text-xl ">:</span>
                                <select v-model="modalEndHour"
                                    class="w-20 text-center bg-white border border-purple-300 rounded-lg px-3 py-3 text-lg  text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200">
                                    <option v-for="hour in hours" :key="`end-${hour}`" :value="hour" class="py-2">
                                        {{ hour }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <!-- نمایش زمان انتخاب شده -->
                        <div
                            class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                            <div class="text-center">
                                <p class="text-sm text-green-700 mb-2">زمان انتخاب شده</p>
                                <div
                                    class="flex items-center justify-center space-x-4 space-x-reverse text-lg  text-green-800">
                                    <span class="bg-white px-4 py-2 rounded-lg shadow-sm">
                                        {{ modalStartHour }}:{{ modalStartMinute }}
                                    </span>
                                    <span class="text-green-600">تا</span>
                                    <span class="bg-white px-4 py-2 rounded-lg shadow-sm">
                                        {{ modalEndHour }}:{{ modalEndMinute }}
                                    </span>
                                </div>
                                <p class="text-xs text-green-600 mt-2">
                                    مدت زمان: {{ calculateModalDuration() }}
                                </p>
                            </div>
                        </div>

                        <!-- خطا -->
                        <div v-if="modalTimeError" class="bg-red-50 border border-red-200 rounded-xl p-4 animate-shake">
                            <div class="flex items-center space-x-2 space-x-reverse">
                                <svg class="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                                <p class="text-red-700 text-sm">{{ modalTimeError }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- دکمه‌های action -->
                    <div class="flex gap-3 mt-8 pt-6 border-t border-gray-200">
                        <button @click="saveEvent" :disabled="!!isSaving || !!modalTimeError || !selectedUser"
                            class="flex-1 inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            <svg v-if="isSaving" class="animate-spin -mr-1 ml-2 h-5 w-5 text-white" fill="none"
                                viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4">
                                </circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            <svg v-else class="-mr-1 ml-2 h-5 w-5" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            {{ isSaving ? 'در حال ذخیره...' : (isEditing ? 'ویرایش رزرو' : 'ثبت رزرو') }}
                        </button>

                        <button v-if="isEditing" @click="deleteEventFromModal"
                            class="flex-1 inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl hover:from-red-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            <svg class="-mr-1 ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            حذف
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal تایید حذف -->
        <div v-if="showDeleteConfirm"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div class="bg-white rounded-2xl shadow-xl max-w-sm w-full">
                <div class="p-6">
                    <div class="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
                        <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>

                    <h3 class="text-lg  text-gray-900 text-center mb-2">حذف رزرو</h3>
                    <p class="text-gray-500 text-center text-sm mb-6">
                        آیا از حذف این رزرو مطمئن هستید؟ این عمل قابل بازگشت نیست.
                    </p>

                    <div class="flex gap-3">
                        <button @click="confirmDelete"
                            class="flex-1 inline-flex justify-center items-center px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
                            :disabled="isDeleting">
                            {{ isDeleting ? 'در حال حذف...' : 'بله، حذف شود' }}
                        </button>

                        <button @click="cancelDelete"
                            class="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
                            :disabled="isDeleting">
                            انصراف
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- پیام موفقیت -->
        <div v-if="showSuccessMessage" class="fixed top-4 right-4 z-50">
            <div class="bg-green-50 border border-green-200 rounded-xl shadow-lg p-4 max-w-sm">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div class="mr-3">
                        <p class="text-green-800 text-sm font-medium">{{ successMessage }}</p>
                    </div>
                    <button @click="showSuccessMessage = false" class="text-green-600 hover:text-green-800">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, onUnmounted, watch } from 'vue'
import { VueCal } from 'vue-cal'
import 'vue-cal/style'

const { $freeApi } = useNuxtApp()
const toast = useToast()

definePageMeta({
    layout: 'copanel'
})

// داده‌های اصلی
const selectedRoom = ref('')
const selectedUser = ref(null)
const rooms = ref([])
const users = ref([])
const events = ref([])
const isRefreshing = ref(false)
const showPastTimeWarning = ref(false)

// داده‌های دراپ‌دان
const dropdownOpen = ref(false)
const searchQuery = ref('')
const filteredUsers = ref([])
const searchInput = ref(null)

// تنظیمات تقویم
const locale = ref('fa')
const selectedDate = ref(new Date())

// حداقل تاریخ قابل انتخاب (زمان حال حاضر)
const minSelectableDate = ref(new Date())

// state های جدید برای مدیریت مودال
const showEventModal = ref(false)
const isEditing = ref(false)
const selectedEvent = ref(null)
const selectedDateForModal = ref(new Date())
const showDeleteConfirm = ref(false)
const isDeleting = ref(false)
const eventToDelete = ref(null)
const showSuccessMessage = ref(false)
const successMessage = ref('')

// state های مودال
const isSaving = ref(false)
const modalStartHour = ref('')
const modalStartMinute = ref('')
const modalEndHour = ref('')
const modalEndMinute = ref('')
const modalTimeError = ref('')

// لیست ساعت‌ها و دقیقه‌ها
const hours = ref(Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0')))
const minutes = ref(Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')))

// اطلاعات اتاق انتخاب شده
const selectedRoomInfo = computed(() => {
    if (!selectedRoom.value) return {}
    const room = rooms.value.find(r => r.pk_room == selectedRoom.value)
    if (!room) return {}

    return {
        ...room,
        availableDaysText: getAvailableDaysArray(room).map(day => getDayText(day)).join('، ')
    }
})

// نام کاربر انتخاب شده
const selectedUserName = computed(() => {
    return selectedUser.value ? selectedUser.value.name : ''
})

// ایونت‌های فیلتر شده بر اساس اتاق انتخاب شده
const filteredEvents = computed(() => {
    if (!selectedRoom.value) return []
    return events.value.filter(event => event.fk_room == selectedRoom.value)
})

// تماشای تغییرات زمان برای اعتبارسنجی
watch([modalStartHour, modalStartMinute, modalEndHour, modalEndMinute], () => {
    validateModalTime()
})

// تابع جدید: بررسی اینکه ایونت گذشته است یا نه
const isPastEvent = (event) => {
    const now = new Date()
    const eventEnd = new Date(event.end)
    return eventEnd < now
}

// توابع دراپ‌دان
const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value
    if (dropdownOpen.value) {
        nextTick(() => {
            searchInput.value?.focus()
            filterUsers()
        })
    }
}

const filterUsers = () => {
    if (!searchQuery.value) {
        filteredUsers.value = users.value
    } else {
        filteredUsers.value = users.value.filter(user =>
            user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    }
}

const selectUser = (user) => {
    selectedUser.value = user
    dropdownOpen.value = false
    searchQuery.value = ''
}

// بستن دراپ‌دان هنگام کلیک خارج
const handleClickOutside = (event) => {
    const dropdown = event.target.closest('.relative')
    if (!dropdown) {
        dropdownOpen.value = false
    }
}

// توابع کمکی
const getAvailableDaysArray = (room) => {
    try {
        if (Array.isArray(room.available_days)) return room.available_days
        if (typeof room.available_days === 'string') {
            const cleanString = room.available_days.replace(/\\/g, '')
            return JSON.parse(cleanString)
        }
        return []
    } catch (error) {
        return []
    }
}

const getDayText = (day) => {
    const days = {
        saturday: 'شنبه',
        sunday: 'یکشنبه',
        monday: 'دوشنبه',
        tuesday: 'سه‌شنبه',
        wednesday: 'چهارشنبه',
        thursday: 'پنجشنبه',
        friday: 'جمعه'
    }
    return days[day] || day
}

const formatTime = (timeString) => {
    if (!timeString) return ''
    return timeString.toString().substring(0, 5)
}

const formatEventTime = (dateTime) => {
    const date = new Date(dateTime)
    return date.toLocaleTimeString('fa-IR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })
}

const formatEventDate = (dateTime) => {
    const date = new Date(dateTime)
    return date.toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

// گرفتن حروف اول نام کاربر
const getInitials = (name) => {
    if (!name) return ''
    return name.split(' ').map(word => word[0]).join('').toUpperCase().substring(0, 2)
}

// بررسی اینکه زمان انتخاب شده گذشته است یا نه
const isPastTime = (dateTime) => {
    const now = new Date()
    return new Date(dateTime) < now
}

// نمایش هشدار به مدت 3 ثانیه
const showWarning = () => {
    showPastTimeWarning.value = true
    setTimeout(() => {
        showPastTimeWarning.value = false
    }, 3000)
}

// تابع بازخوانی اطلاعات اتاق
const refreshRoomData = async () => {
    if (!selectedRoom.value) return

    isRefreshing.value = true
    try {
        await getRoomRequirement()
        await loadRoomEvents()
    } catch (error) {
    } finally {
        isRefreshing.value = false
    }
}

// تابع جدید برای cell-touchstart در موبایل
const onCellTouchStart = (event) => {
    if (!selectedRoom.value || !selectedUser.value) {
        return
    }

    // بررسی اینکه آیا روی یک سلول تقویم کلیک شده
    if (event.cursor.date) {
        const clickedDate = new Date(event.cursor.date)

        // بررسی اینکه زمان انتخاب شده در گذشته نباشد
        if (isPastTime(clickedDate)) {
            showWarning()
            return
        }

        // باز کردن مودال برای ساخت ایونت جدید
        openEventModal(clickedDate)
    }
}

// توابع جدید برای مدیریت مودال
const openEventModal = (date, event = null) => {
    selectedDateForModal.value = date
    selectedEvent.value = event
    isEditing.value = !!event

    // تنظیم زمان‌های پیش‌فرض
    const now = new Date()
    const startDate = event ? new Date(event.start) : new Date(date)
    const endDate = event ? new Date(event.end) : new Date(date)

    modalStartHour.value = startDate.getHours().toString().padStart(2, '0')
    modalStartMinute.value = startDate.getMinutes().toString().padStart(2, '0')

    if (!event) {
        // برای ایونت جدید، پایان را یک ساعت بعد تنظیم می‌کنیم
        endDate.setHours(startDate.getHours() + 1)
        modalEndHour.value = endDate.getHours().toString().padStart(2, '0')
        modalEndMinute.value = '00'
    } else {
        modalEndHour.value = endDate.getHours().toString().padStart(2, '0')
        modalEndMinute.value = endDate.getMinutes().toString().padStart(2, '0')
    }

    showEventModal.value = true

    // اعتبارسنجی اولیه
    nextTick(() => {
        validateModalTime()
    })
}

const closeEventModal = () => {
    showEventModal.value = false
    selectedEvent.value = null
    isEditing.value = false
    modalTimeError.value = ''
}

const calculateModalDuration = () => {
    if (!modalStartHour.value || !modalStartMinute.value || !modalEndHour.value || !modalEndMinute.value) {
        return '۰ دقیقه'
    }

    const startMinutes = parseInt(modalStartHour.value) * 60 + parseInt(modalStartMinute.value)
    const endMinutes = parseInt(modalEndHour.value) * 60 + parseInt(modalEndMinute.value)
    const duration = endMinutes - startMinutes

    if (duration <= 0) {
        return '۰ دقیقه'
    }

    const hours = Math.floor(duration / 60)
    const minutes = duration % 60

    if (hours > 0) {
        return `${hours} ساعت و ${minutes} دقیقه`
    } else {
        return `${minutes} دقیقه`
    }
}

const validateModalTime = () => {
    // بررسی وجود مقادیر
    if (!modalStartHour.value || !modalStartMinute.value || !modalEndHour.value || !modalEndMinute.value) {
        modalTimeError.value = 'لطفاً تمام فیلدهای زمان را پر کنید'
        return
    }

    // تبدیل به عدد
    const startHour = parseInt(modalStartHour.value)
    const startMinute = parseInt(modalStartMinute.value)
    const endHour = parseInt(modalEndHour.value)
    const endMinute = parseInt(modalEndMinute.value)

    // بررسی محدوده معتبر
    if (startHour < 0 || startHour > 23 || startMinute < 0 || startMinute > 59 ||
        endHour < 0 || endHour > 23 || endMinute < 0 || endMinute > 59) {
        modalTimeError.value = 'مقادیر زمان معتبر نیستند'
        return
    }

    const startTotal = startHour * 60 + startMinute
    const endTotal = endHour * 60 + endMinute

    if (startTotal >= endTotal) {
        modalTimeError.value = 'ساعت پایان باید بعد از ساعت شروع باشد'
    } else {
        modalTimeError.value = ''
    }
}

const saveEvent = async () => {
    if (modalTimeError.value || !selectedUser.value) return

    isSaving.value = true
    try {
        // ساخت تاریخ‌های شروع و پایان
        const startDate = new Date(selectedDateForModal.value)
        const endDate = new Date(selectedDateForModal.value)

        // تنظیم ساعت و دقیقه
        startDate.setHours(parseInt(modalStartHour.value), parseInt(modalStartMinute.value), 0, 0)
        endDate.setHours(parseInt(modalEndHour.value), parseInt(modalEndMinute.value), 0, 0)

        // بررسی اینکه زمان جدید در گذشته نباشد
        if (isPastTime(startDate) || isPastTime(endDate)) {
            modalTimeError.value = 'امکان رزرو زمان‌های گذشته وجود ندارد'
            return
        }

        const eventData = {
            startdatetime: startDate.toISOString(),
            enddatetime: endDate.toISOString(),
            fk_room: selectedRoom.value,
            fk_user: selectedUser.value.id,
        }
        // اگر در حال ویرایش هستیم، ID را اضافه می‌کنیم
        if (isEditing.value && selectedEvent.value) {
            eventData.id = selectedEvent.value.id
        }

        await createUpdateEvent(eventData)

        // بروزرسانی لیست ایونت‌ها
        await loadRoomEvents()

        closeEventModal()

        // نمایش پیام موفقیت
        successMessage.value = isEditing.value ? 'رزرو با موفقیت ویرایش شد' : 'رزرو با موفقیت ثبت شد'
        showSuccessMessage.value = true
        setTimeout(() => {
            showSuccessMessage.value = false
        }, 3000)

    } catch (error) {
    } finally {
        isSaving.value = false
    }
}

const deleteEventFromModal = () => {
    if (!selectedEvent.value || isPastEvent(selectedEvent.value)) {
        return
    }
    eventToDelete.value = selectedEvent.value
    showDeleteConfirm.value = true
}

// توابع مدیریت حذف
const quickDeleteEvent = (event) => {
    if (isPastEvent(event)) {
        return
    }
    eventToDelete.value = event
    showDeleteConfirm.value = true
}

const confirmDelete = async () => {
    if (!eventToDelete.value) return

    isDeleting.value = true
    try {
        await onEventDelete(eventToDelete.value)
        showDeleteConfirm.value = false
        selectedEvent.value = null
        eventToDelete.value = null
        closeEventModal()

        // نمایش پیام موفقیت
        successMessage.value = 'رزرو با موفقیت حذف شد'
        showSuccessMessage.value = true
        setTimeout(() => {
            showSuccessMessage.value = false
        }, 3000)
    } catch (error) {
    } finally {
        isDeleting.value = false
    }
}

const cancelDelete = () => {
    showDeleteConfirm.value = false
    eventToDelete.value = null
}


// رویدادهای تقویم
const onCellClick = (date) => {
    //openEventModal(date.cursor.date)
}

const onEventClick = async (event, e) => {
    if (isPastEvent(event.event))
        return

    // باز کردن مودال برای ویرایش ایونت موجود
    openEventModal(event.event.start, event.event)
}

const onEventCreate = async (event) => {
    try {
        if (isPastTime(event.event.start) || isPastTime(event.event.end)) {
            toast.error({ title: 'خطا!', message: 'خطا۱۱' })
            return
        }

        if (!selectedUser.value) {
            toast.error({ title: 'خطا!', message: 'لطفاً ابتدا یک کاربر انتخاب کنید.' })
            return
        }

        const eventData = {
            startdatetime: event.event.start,
            enddatetime: event.event.end,
            fk_room: selectedRoom.value,
            fk_user: selectedUser.value.id
        }


        const response = await createUpdateEvent(eventData)

        if (response.success) {
            await loadRoomEvents()
        } else {
        }
    } catch (error) {
    }
}

const onEventDrop = async (event, originalEvent) => {
    if (isPastTime(event.start) || isPastTime(event.end)) {
        showWarning()
        event.start = originalEvent.start
        event.end = originalEvent.end
        return
    }

    try {
        const eventData = {
            id: event.id,
            startdatetime: event.start,
            enddatetime: event.end,
            fk_room: selectedRoom.value,
            fk_user: selectedUser.value.id
        }

        await createUpdateEvent(eventData)
    } catch (error) {
        event.start = originalEvent.start
        event.end = originalEvent.end
    }
}

const onEventDurationChange = async (event, originalEvent) => {
    if (isPastTime(event.start) || isPastTime(event.end)) {
        showWarning()
        event.start = originalEvent.start
        event.end = originalEvent.end
        return
    }

    try {
        const eventData = {
            id: event.id,
            startdatetime: event.start,
            enddatetime: event.end,
            fk_room: selectedRoom.value,
            fk_user: selectedUser.value.id
        }

        await createUpdateEvent(eventData)
    } catch (error) {
        event.start = originalEvent.start
        event.end = originalEvent.end
    }
}

const onEventDelete = async (event) => {
    try {
        if (event.id) {
            await deleteEvent(event.id)
        }

        const index = events.value.findIndex(e => e.id === event.id)
        if (index !== -1) {
            events.value.splice(index, 1)
        }

        return true
    } catch (error) {
        throw error
    }
}

const onViewChange = (view) => {
    // می‌توانید این تابع را بر اساس نیاز خود پیاده‌سازی کنید
}

const onCalendarReady = () => {
    // می‌توانید این تابع را بر اساس نیاز خود پیاده‌سازی کنید
}

const onRoomChange = () => {
    selectedUser.value = null
    dropdownOpen.value = false
    searchQuery.value = ''
    loadRoomEvents()
}

// توابع API
const createUpdateEvent = async (eventData) => {
    try {
        const response = await $freeApi.post('company-create-update-event', eventData)
        return response.data
    } catch (error) {
        throw error
    }
}

const deleteEvent = async (eventId) => {
    try {
        const response = await $freeApi.post('company-delete-event', { id: eventId })
        return response.data
    } catch (error) {
        throw error
    }
}

const loadRoomEvents = async () => {
    if (!selectedRoom.value) return

    try {
        const { data } = await $freeApi.get('company-room-events', {
            params: { room_id: selectedRoom.value }
        })

        events.value = data.map(event => {
            const startDate = new Date(event.startdatetime.replace(' ', 'T'));
            const endDate = new Date(event.enddatetime.replace(' ', 'T'));

            return {
                id: event.pk_roomevent,
                start: startDate,
                end: endDate,
                title: event.name,
                fk_room: event.fk_room,
                fk_user: event.fk_user
            }
        })
    } catch (error) {
    }
}

const getRoomRequirement = async () => {
    try {
        const { data } = await $freeApi.get('company-rooms-requirement')
        users.value = data.users
        rooms.value = data.rooms.map(room => ({
            ...room,
            parsedAvailableDays: getAvailableDaysArray(room)
        }))
    } catch (error) {
        rooms.value = []
    }
}

// مدیریت کلیدها
const handleKeydown = (e) => {
    if (e.key === 'Escape') {
        if (showDeleteConfirm.value) {
            cancelDelete()
        } else if (showEventModal.value) {
            closeEventModal()
        }
    }
}

// بارگذاری اولیه
onMounted(async () => {
    await getRoomRequirement()

    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleKeydown)

    setInterval(() => {
        minSelectableDate.value = new Date()
    }, 60000)
})

// پاکسازی
onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.calendar-wrapper {
    width: 100%;
}

:deep(.custom-vue-cal) {
    border: none;
    border-radius: 0.75rem;
}

:deep(.vuecal__event.meeting) {
    background: linear-gradient(135deg, #42b983, #35495e);
    border: none;
    color: white;
    border-radius: 0.5rem;
}

:deep(.vuecal__event.presentation) {
    background: linear-gradient(135deg, #ff6b6b, #c92a2a);
    border: none;
    color: white;
    border-radius: 0.5rem;
}

:deep(.vuecal__event.workshop) {
    background: linear-gradient(135deg, #ffa726, #f57c00);
    border: none;
    color: white;
    border-radius: 0.5rem;
}

.event-content {
    padding: 0.5rem;
    font-size: 0.75rem;
    position: relative;
}

.event-title {
    display: block;
    font-weight: 600;
    margin-bottom: 0.25rem;
    padding-right: 1rem;
}

.event-description {
    display: block;
    opacity: 0.9;
    margin-bottom: 0.25rem;
}

.event-meta {
    display: block;
    font-size: 0.7rem;
    opacity: 0.8;
}

.event-time {
    display: block;
}

.event-actions {
    position: absolute;
    left: 0.25rem;
    top: 0.25rem;
    opacity: 0;
    transition: opacity 0.2s ease;
}

:deep(.vuecal__event:hover .event-actions) {
    opacity: 1;
}

.delete-btn {
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 0.25rem;
    color: #dc2626;
    cursor: pointer;
    transition: all 0.2s ease;
}

.delete-btn:hover {
    background: #dc2626;
    color: white;
    transform: scale(1.1);
}

:deep(.vuecal__cell--past) {
    opacity: 0.5;
    cursor: not-allowed;
}

:deep(.vuecal__cell--past .vuecal__cell-content) {
    pointer-events: none;
}

:deep(.vuecal__cell--past .vuecal__flex) {
    background-color: #f9fafb;
}

.past-event {
    opacity: 0.7;
    cursor: not-allowed !important;
}

:deep(.vuecal__event.past-event) {
    cursor: not-allowed !important;
    background: linear-gradient(135deg, #9ca3af, #6b7280) !important;
}

:deep(.vuecal__event.past-event:hover) {
    cursor: not-allowed !important;
}
</style>