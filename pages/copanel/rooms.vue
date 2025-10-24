<template>
    <div class="p-4 sm:p-6">
        <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <!-- هدر صفحه -->
            <div class="p-4 sm:p-6 border-b border-gray-200">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 class="text-xl sm:text-2xl  text-gray-800">مدیریت اتاق‌های جلسه</h1>
                        <p class="text-gray-600 mt-1 text-sm sm:text-base">مدیریت و تنظیم اتاق‌های قابل رزرو</p>
                    </div>
                    <button @click="openModal('create')"
                        class="mt-4 sm:mt-0 bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 space-x-reverse w-full sm:w-auto">
                        <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                        <span class="text-sm sm:text-base">اتاق جدید</span>
                    </button>
                </div>
            </div>

            <!-- بخش جستجو و فیلتر -->
            <div class="p-4 sm:p-6 border-b border-gray-200 bg-gray-50">
                <div class="flex flex-col md:flex-row gap-3 sm:gap-4">
                    <!-- جستجو -->
                    <div class="flex-1">
                        <div class="relative">
                            <input v-model="searchQuery" type="text" placeholder="جستجو در اتاق‌ها..."
                                class="w-full pr-10 pl-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-sm sm:text-base">
                            <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <!-- فیلتر وضعیت -->
                    <select v-model="statusFilter"
                        class="px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white text-sm sm:text-base">
                        <option value="">همه وضعیت‌ها</option>
                        <option value="active">فعال</option>
                        <option value="inactive">غیرفعال</option>
                        <option value="maintenance">در تعمیر</option>
                    </select>
                </div>
            </div>

            <!-- نمایش دسکتاپ (جدول) -->
            <div class="hidden lg:block overflow-x-auto">
                <table class="w-full min-w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                اتاق
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ساعات کاری
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                روزهای فعال
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                محدودیت‌ها
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                هزینه‌ها
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                وضعیت
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                اقدامات
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="room in paginatedRooms" :key="room.pk_room"
                            class="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                            @click="openModal('edit', room)">
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10">
                                        <div
                                            class="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white  text-xs sm:text-sm">
                                            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="mr-3 sm:mr-4">
                                        <div class="text-sm font-medium text-gray-900">{{ room.room }}</div>
                                        <div class="text-xs text-gray-500">ظرفیت: {{ room.capacity }} نفر</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <div>{{ formatTime(room.starttime) }} - {{ formatTime(room.endtime) }}</div>
                                <div class="text-gray-500 text-xs">ساعت رزرو</div>
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <div class="flex flex-wrap gap-1 max-w-[150px] sm:max-w-[200px]">
                                    <span v-for="day in getAvailableDaysArray(room)" :key="day"
                                        class="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                                        {{ getDayText(day) }}
                                    </span>
                                </div>
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <div class="text-xs sm:text-sm">حداکثر {{ room.maxhoursperweek }} ساعت در هفته</div>
                                <div class="text-gray-500 text-xs">{{ room.max_hours_per_user }} ساعت برای هر کاربر
                                </div>
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <div v-if="room.amountperhour" class="text-xs sm:text-sm">{{
                                    room.amountperhour.toLocaleString() }} تومان</div>
                                <div class="text-gray-500 text-xs">هزینه هر ساعت</div>
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <span class="px-2 py-1 sm:px-3 sm:py-1 inline-flex text-xs leading-5  rounded-full"
                                    :class="getStatusBadgeClass(room.isactive)">
                                    {{ getStatusText(room.isactive) }}
                                </span>
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div class="flex items-center space-x-2 sm:space-x-3 space-x-reverse">
                                    <button @click.stop="openModal('edit', room)"
                                        class="text-blue-600 hover:text-orange-900 transition-colors duration-200 p-1"
                                        title="ویرایش">
                                        <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button @click.stop="deleteRoom(room.pk_room)"
                                        class="text-red-600 hover:text-red-900 transition-colors duration-200 p-1"
                                        title="حذف">
                                        <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- نمایش موبایل (کارت) -->
            <div class="lg:hidden">
                <div v-for="room in paginatedRooms" :key="room.pk_room"
                    class="border-b border-gray-200 last:border-b-0 p-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                    @click="openModal('edit', room)">
                    <div class="flex items-start justify-between mb-3">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                                <div
                                    class="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white  text-sm">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                            </div>
                            <div class="mr-3">
                                <div class="text-sm font-medium text-gray-900">{{ room.room }}</div>
                                <div class="text-xs text-gray-500">ظرفیت: {{ room.capacity }} نفر</div>
                            </div>
                        </div>
                        <span class="px-2 py-1 inline-flex text-xs leading-5  rounded-full shrink-0"
                            :class="getStatusBadgeClass(room.isactive)">
                            {{ getStatusText(room.isactive) }}
                        </span>
                    </div>

                    <div class="grid grid-cols-1 gap-2 text-sm">
                        <div class="flex justify-between">
                            <span class="text-gray-500">ساعات کاری:</span>
                            <span class="text-gray-900">{{ formatTime(room.starttime) }} - {{ formatTime(room.endtime)
                            }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-500">محدودیت هفتگی:</span>
                            <span class="text-gray-900">{{ room.maxhoursperweek }} ساعت</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-500">محدودیت کاربر:</span>
                            <span class="text-gray-900">{{ room.max_hours_per_user }} ساعت</span>
                        </div>
                        <div v-if="room.amountperhour" class="flex justify-between">
                            <span class="text-gray-500">هزینه ساعتی:</span>
                            <span class="text-gray-900">{{ room.amountperhour.toLocaleString() }} تومان</span>
                        </div>
                        <div>
                            <span class="text-gray-500 block mb-1">روزهای فعال:</span>
                            <div class="flex flex-wrap gap-1">
                                <span v-for="day in getAvailableDaysArray(room)" :key="day"
                                    class="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                                    {{ getDayText(day) }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex items-center justify-end space-x-3 space-x-reverse mt-3 pt-3 border-t border-gray-100">
                        <button @click.stop="openModal('edit', room)"
                            class="text-blue-600 hover:text-orange-900 transition-colors duration-200 flex items-center space-x-1 space-x-reverse text-sm">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            <span>ویرایش</span>
                        </button>
                        <button @click.stop="deleteRoom(room.pk_room)"
                            class="text-red-600 hover:text-red-900 transition-colors duration-200 flex items-center space-x-1 space-x-reverse text-sm">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            <span>حذف</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- حالت خالی -->
            <div v-if="filteredRooms.length === 0" class="text-center py-8 sm:py-12">
                <svg class="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 class="mt-2 text-sm font-medium text-gray-900">اتاقی یافت نشد</h3>
                <p class="mt-1 text-sm text-gray-500">هیچ اتاقی با معیارهای جستجوی شما مطابقت ندارد.</p>
            </div>

            <!-- Pagination -->
            <div
                class="px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div class="text-xs sm:text-sm text-gray-700">
                    نمایش
                    <span class="font-medium">{{ (currentPage - 1) * itemsPerPage + 1 }}</span>
                    تا
                    <span class="font-medium">{{ Math.min(currentPage * itemsPerPage, filteredRooms.length) }}</span>
                    از
                    <span class="font-medium">{{ filteredRooms.length }}</span>
                    نتیجه
                </div>
                <div class="flex space-x-2 space-x-reverse">
                    <button @click="currentPage--" :disabled="currentPage === 1"
                        class="px-3 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm font-medium transition-all duration-200"
                        :class="currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'">
                        قبلی
                    </button>
                    <button @click="currentPage++" :disabled="currentPage * itemsPerPage >= filteredRooms.length"
                        class="px-3 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm font-medium transition-all duration-200"
                        :class="currentPage * itemsPerPage >= filteredRooms.length ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'">
                        بعدی
                    </button>
                </div>
            </div>
        </div>

        <!-- مودال اتاق -->
        <CopanelRoomModal :is-open="isModalOpen" :mode="modalMode" :room="selectedRoom" @close="closeModal"
            @save="handleSaveRoom" />
    </div>
</template>

<script setup>
const { $freeApi } = useNuxtApp()

definePageMeta({
    layout: 'copanel'
})

// وضعیت‌های صفحه
const searchQuery = ref('')
const statusFilter = ref('')
const currentPage = ref(1)
const itemsPerPage = 10
const isModalOpen = ref(false)
const modalMode = ref('create') // 'create' or 'edit'
const selectedRoom = ref(null)

// داده‌های اتاق‌ها
const rooms = ref([])

// فیلتر کردن اتاق‌ها بر اساس جستجو و وضعیت
const filteredRooms = computed(() => {
    let filtered = rooms.value

    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(room =>
            room.room?.toLowerCase().includes(query) ||
            room.description?.toLowerCase().includes(query)
        )
    }

    if (statusFilter.value) {
        filtered = filtered.filter(room => {
            if (statusFilter.value === 'active') return room.isactive === 1
            if (statusFilter.value === 'inactive') return room.isactive === 0
            return true
        })
    }

    return filtered
})

// اتاق‌های صفحه‌بندی شده
const paginatedRooms = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredRooms.value.slice(start, end)
})

// تابع برای تبدیل availableDays از JSON string به آرایه
const getAvailableDaysArray = (room) => {
    try {
        if (Array.isArray(room.available_days)) {
            return room.available_days
        }
        if (typeof room.available_days === 'string') {
            // حذف اسلش‌های اضافی و parse کردن
            const cleanString = room.available_days.replace(/\\/g, '')
            const parsed = JSON.parse(cleanString)
            return Array.isArray(parsed) ? parsed : []
        }
        if (typeof room.availabledays === 'string') {
            // برای فیلد availabledays (با d کوچک)
            const cleanString = room.availabledays.replace(/\\/g, '')
            const parsed = JSON.parse(cleanString)
            return Array.isArray(parsed) ? parsed : []
        }
        return []
    } catch (error) {
        console.error('Error parsing available days:', error, room)
        return []
    }
}

// توابع کمکی برای نمایش
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
    // اگر timeString شامل ثانیه باشد، فقط ساعت و دقیقه را برمی‌گرداند
    return timeString.toString().substring(0, 5)
}

const getStatusBadgeClass = (isactive) => {
    const classes = {
        1: 'bg-green-100 text-green-800',
        0: 'bg-red-100 text-red-800',
    }
    return classes[isactive] || 'bg-gray-100 text-gray-800'
}

const getStatusText = (isactive) => {
    const texts = {
        1: 'فعال',
        0: 'غیرفعال',
    }
    return texts[isactive] || isactive
}

// توابع مدیریت مودال
const openModal = (mode, room = null) => {
    modalMode.value = mode
    selectedRoom.value = room
    isModalOpen.value = true
}

const closeModal = () => {
    isModalOpen.value = false
    selectedRoom.value = null
}

const handleSaveRoom = async (roomData) => {
    try {
        roomData.starttime = roomData.starttime?.substring(0, 5)
        roomData.endtime = roomData.endtime?.substring(0, 5)
        roomData.availabledays = getAvailableDaysForServer(roomData),

            await $freeApi.post('company-create-update-room', roomData)

        getRooms()
        closeModal()
    } catch (error) {
        console.error('Error saving room:', error)
    }
}

// تابع برای آماده‌سازی availableDays برای سرور
const getAvailableDaysForServer = (roomData) => {
    // اولویت‌های مختلف برای پیدا کردن availableDays
    if (Array.isArray(roomData.availableDays)) {
        return roomData.availableDays
    }

    if (Array.isArray(roomData.available_days)) {
        return roomData.available_days
    }

    if (Array.isArray(roomData.parsedAvailableDays)) {
        return roomData.parsedAvailableDays
    }

    // اگر از مودال می‌آید و در selectedDays است
    if (roomData.selectedDays && Array.isArray(roomData.selectedDays)) {
        return roomData.selectedDays
    }

    // اگر رشته JSON است
    const jsonString = roomData.available_days || roomData.availabledays
    if (typeof jsonString === 'string') {
        try {
            const cleanString = jsonString.replace(/\\/g, '')
            const parsed = JSON.parse(cleanString)
            return Array.isArray(parsed) ? parsed : ['saturday', 'sunday']
        } catch (e) {
            console.error('Error parsing available days JSON:', e)
        }
    }

    // مقدار پیش‌فرض
    return ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday']
}

const deleteRoom = async (roomId) => {
    if (confirm('آیا از حذف این اتاق اطمینان دارید؟')) {
        try {
            await $freeApi.post('company-delete-room', { roomId: roomId })
            await getRooms()
        } catch (error) {
            console.error('Error deleting room:', error)
        }
    }
}

const getRooms = async () => {
    try {
        const { data } = await $freeApi.get('company-active-rooms')
        // اضافه کردن availableDays پارس شده به هر اتاق
        rooms.value = data.map(room => ({
            ...room,
            parsedAvailableDays: getAvailableDaysArray(room)
        }))
    } catch (error) {
        console.error('Error fetching rooms:', error)
        rooms.value = []
    }
}

onMounted(() => {
    getRooms()
})
</script>