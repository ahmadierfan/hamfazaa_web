<template>
    <div class="p-4 sm:p-6">
        <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <!-- هدر صفحه -->
            <div class="p-4 sm:p-6 border-b border-gray-200">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 class="text-xl sm:text-2xl  text-gray-800">مدیریت کاربران</h1>
                        <p class="text-gray-600 mt-1 text-sm sm:text-base">مدیریت و مشاهده تمام کاربران سیستم</p>
                    </div>
                    <button @click="openModal('create')"
                        class="mt-4 sm:mt-0 bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 space-x-reverse w-full sm:w-auto">
                        <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                        <span class="text-sm sm:text-base">افزودن کاربر</span>
                    </button>
                </div>
            </div>

            <!-- بخش جستجو و فیلتر -->
            <div class="p-4 sm:p-6 border-b border-gray-200 bg-gray-50">
                <div class="flex flex-col md:flex-row gap-3 sm:gap-4">
                    <!-- جستجو -->
                    <div class="flex-1">
                        <div class="relative">
                            <input v-model="searchQuery" type="text" placeholder="جستجو کاربران..."
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
                        <option value="suspended">مسدود</option>
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
                                نام
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                نام خانوادگی
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                موبایل
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                وضعیت
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                تاریخ عضویت
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                اقدامات
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="user in paginatedUsers" :key="user.id"
                            class="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                            @click="openModal('edit', user)">
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900">{{ user.name }}</div>
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ user.mobile }}</div>
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <span class="px-2 py-1 sm:px-3 sm:py-1 inline-flex text-xs leading-5  rounded-full"
                                    :class="getStatusBadgeClass(user.isactive)">
                                    {{ getStatusText(user.isactive) }}
                                </span>
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ user.jalalicreateddate }}
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div class="flex items-center space-x-2 sm:space-x-3 space-x-reverse">
                                    <button @click.stop="openModal('edit', user)"
                                        class="text-blue-600 hover:text-orange-900 transition-colors duration-200 p-1"
                                        title="ویرایش">
                                        <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button @click.stop="deleteUser(user.id)"
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
                <div v-for="user in paginatedUsers" :key="user.id"
                    class="border-b border-gray-200 last:border-b-0 p-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                    @click="openModal('edit', user)">
                    <div class="flex items-start justify-between mb-3">
                        <div class="flex items-center">
                            <div
                                class="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white  text-sm">
                                {{ getUserInitials(user) }}
                            </div>
                            <div class="mr-3">
                                <div class="text-sm font-medium text-gray-900">{{ user.name }}</div>
                                <div class="text-xs text-gray-500">{{ user.mobile }}</div>
                            </div>
                        </div>
                        <span class="px-2 py-1 inline-flex text-xs leading-5  rounded-full shrink-0"
                            :class="getStatusBadgeClass(user.isactive)">
                            {{ getStatusText(user.isactive) }}
                        </span>
                    </div>

                    <div class="grid grid-cols-1 gap-2 text-sm">
                        <div class="flex justify-between">
                            <span class="text-gray-500">نام:</span>
                            <span class="text-gray-900">{{ user.name }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-500">موبایل:</span>
                            <span class="text-gray-900 font-medium">{{ user.mobile }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-500">تاریخ عضویت:</span>
                            <span class="text-gray-900">{{ user.jalalicreateddate }}</span>
                        </div>
                    </div>

                    <div
                        class="flex items-center justify-end space-x-3 space-x-reverse mt-3 pt-3 border-t border-gray-100">
                        <button @click.stop="openModal('edit', user)"
                            class="text-blue-600 hover:text-orange-900 transition-colors duration-200 flex items-center space-x-1 space-x-reverse text-sm">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            <span>ویرایش</span>
                        </button>
                        <button @click.stop="deleteUser(user.id)"
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
            <div v-if="filteredUsers.length === 0" class="text-center py-8 sm:py-12">
                <svg class="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                <h3 class="mt-2 text-sm font-medium text-gray-900">کاربری یافت نشد</h3>
                <p class="mt-1 text-sm text-gray-500">هیچ کاربری با معیارهای جستجوی شما مطابقت ندارد.</p>
            </div>

            <!-- Pagination -->
            <div
                class="px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div class="text-xs sm:text-sm text-gray-700">
                    نمایش
                    <span class="font-medium">{{ (currentPage - 1) * itemsPerPage + 1 }}</span>
                    تا
                    <span class="font-medium">{{ Math.min(currentPage * itemsPerPage, filteredUsers.length) }}</span>
                    از
                    <span class="font-medium">{{ filteredUsers.length }}</span>
                    نتیجه
                </div>
                <div class="flex space-x-2 space-x-reverse">
                    <button @click="currentPage--" :disabled="currentPage === 1"
                        class="px-3 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm font-medium transition-all duration-200"
                        :class="currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'">
                        قبلی
                    </button>
                    <button @click="currentPage++" :disabled="currentPage * itemsPerPage >= filteredUsers.length"
                        class="px-3 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm font-medium transition-all duration-200"
                        :class="currentPage * itemsPerPage >= filteredUsers.length ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'">
                        بعدی
                    </button>
                </div>
            </div>
        </div>

        <!-- مودال کاربر -->
        <CopanelUserModal :is-open="isModalOpen" :mode="modalMode" :user="selectedUser" @close="closeModal"
            @save="handleSaveUser" />
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
const selectedUser = ref(null)

// داده‌های نمونه کاربران
const users = ref([])

// فیلتر کردن کاربران بر اساس جستجو و وضعیت
const filteredUsers = computed(() => {
    let filtered = users.value

    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(user =>
            user.name?.toLowerCase().includes(query) ||
            user.mobile?.includes(query) ||
            user.email?.toLowerCase().includes(query)
        )
    }

    if (statusFilter.value) {
        filtered = filtered.filter(user => {
            if (statusFilter.value === 'active') return user.isactive === 1
            if (statusFilter.value === 'inactive') return user.isactive === 0
            if (statusFilter.value === 'suspended') return user.isactive === 2
            return true
        })
    }

    return filtered
})

// کاربران صفحه‌بندی شده
const paginatedUsers = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredUsers.value.slice(start, end)
})

const getStatusBadgeClass = (isactive) => {
    const classes = {
        1: 'bg-green-100 text-green-800',
        0: 'bg-yellow-100 text-yellow-800',
        2: 'bg-red-100 text-red-800'
    }
    return classes[isactive] || 'bg-gray-100 text-gray-800'
}

const getStatusText = (isactive) => {
    const texts = {
        1: 'فعال',
        0: 'غیرفعال',
        2: 'مسدود'
    }
    return texts[isactive] || isactive
}

// تابع برای گرفتن حروف اول کاربر
const getUserInitials = (user) => {
    const first = user.name?.charAt(0) || ''
    return (first).toUpperCase()
}

// توابع مدیریت مودال
const openModal = (mode, user = null) => {
    modalMode.value = mode
    selectedUser.value = user
    isModalOpen.value = true
}

const closeModal = () => {
    isModalOpen.value = false
    selectedUser.value = null
}

const handleSaveUser = async (userData) => {
    try {
        // اطمینان از اینکه isactive به صورت عدد ارسال شود
        const dataToSend = {
            ...userData,
            isactive: Number(userData.isactive)
        }

        await $freeApi.post('company-create-update-user', dataToSend)
        closeModal()
        getUsers()

        // نمایش پیام موفقیت
        // می‌توانید از یک toast notification استفاده کنید
    } catch (error) {
        console.error('Error saving user:', error)
        // نمایش پیام خطا
    }
}

const deleteUser = async (userId) => {
    if (confirm('آیا از حذف این کاربر اطمینان دارید؟')) {
        try {
            await $freeApi.post('company-delete-user', { userId: userId })
            getUsers()
        } catch (error) {
            console.error('Error deleting user:', error)
        }
    }
}

const getUsers = async () => {
    try {
        const { data } = await $freeApi.get('company-users') // اصلاح آدرس API
        users.value = data
    } catch (error) {
        console.error('Error fetching users:', error)
        users.value = []
    }
}

onMounted(() => {
    getUsers()
})
</script>