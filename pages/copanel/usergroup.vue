<template>
    <div class="p-4 sm:p-6">
        <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <!-- هدر صفحه -->
            <div class="p-4 sm:p-6 border-b border-gray-200">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 class="text-xl sm:text-2xl text-gray-800">مدیریت گروه‌های کاربری</h1>
                        <p class="text-gray-600 mt-1 text-sm sm:text-base">مدیریت و مشاهده تمام گروه‌های کاربری سیستم
                        </p>
                    </div>
                    <button @click="openModal('create')"
                        class="mt-4 sm:mt-0 bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 space-x-reverse w-full sm:w-auto">
                        <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                        <span class="text-sm sm:text-base">افزودن گروه</span>
                    </button>
                </div>
            </div>

            <!-- بخش جستجو -->
            <div class="p-4 sm:p-6 border-b border-gray-200 bg-gray-50">
                <div class="flex flex-col md:flex-row gap-3 sm:gap-4">
                    <!-- جستجو -->
                    <div class="flex-1">
                        <div class="relative">
                            <input v-model="searchQuery" type="text" placeholder="جستجو گروه‌های کاربری..."
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
                </div>
            </div>

            <!-- نمایش دسکتاپ (جدول) -->
            <div class="hidden lg:block overflow-x-auto">
                <table class="w-full min-w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                نام گروه
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                توضیحات
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                تاریخ ایجاد
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                اقدامات
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="group in paginatedGroups" :key="group.pk_usergroup"
                            class="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                            @click="openModal('edit', group)">
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div
                                        class="flex-shrink-0 h-10 w-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                                        {{ getGroupInitials(group.usergroup) }}
                                    </div>
                                    <div class="mr-3">
                                        <div class="text-sm font-medium text-gray-900">{{ group.usergroup }}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-4 sm:px-6 py-4">
                                <div class="text-sm text-gray-900 max-w-xs truncate">
                                    {{
                                        group.description ||
                                        'بدون توضیحات'
                                    }}
                                </div>
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ group.jalalicreateddate }}
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div class="flex items-center space-x-2 sm:space-x-3 space-x-reverse">
                                    <button @click.stop="openModal('edit', group)"
                                        class="text-blue-600 hover:text-orange-900 transition-colors duration-200 p-1"
                                        title="ویرایش">
                                        <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button @click.stop="deleteGroup(group.pk_usergroup)"
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
                <div v-for="group in paginatedGroups" :key="group.pk_usergroup"
                    class="border-b border-gray-200 last:border-b-0 p-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                    @click="openModal('edit', group)">
                    <div class="flex items-start justify-between mb-3">
                        <div class="flex items-center">
                            <div
                                class="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                                {{ getGroupInitials(group.usergroup) }}
                            </div>
                            <div class="mr-3">
                                <div class="text-sm font-medium text-gray-900">{{ group.usergroup }}</div>
                                <div class="text-xs text-gray-500">{{ group.userCount || 0 }} کاربر</div>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-2 text-sm">
                        <div class="flex justify-between">
                            <span class="text-gray-500">توضیحات:</span>
                            <span class="text-gray-900 text-left flex-1 mr-2">{{ group.description || 'بدون توضیحات'
                            }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-500">تاریخ ایجاد:</span>
                            <span class="text-gray-900">{{ group.jalalicreateddate }}</span>
                        </div>
                    </div>

                    <div
                        class="flex items-center justify-end space-x-3 space-x-reverse mt-3 pt-3 border-t border-gray-100">
                        <button @click.stop="openModal('edit', group)"
                            class="text-blue-600 hover:text-orange-900 transition-colors duration-200 flex items-center space-x-1 space-x-reverse text-sm">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            <span>ویرایش</span>
                        </button>
                        <button @click.stop="deleteGroup(group.pk_usergroup)"
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
            <div v-if="filteredGroups.length === 0" class="text-center py-8 sm:py-12">
                <svg class="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <h3 class="mt-2 text-sm font-medium text-gray-900">گروه کاربری یافت نشد</h3>
                <p class="mt-1 text-sm text-gray-500">هیچ گروه کاربری با معیارهای جستجوی شما مطابقت ندارد.</p>
            </div>

            <!-- Pagination -->
            <div
                class="px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div class="text-xs sm:text-sm text-gray-700">
                    نمایش
                    <span class="font-medium">{{ (currentPage - 1) * itemsPerPage + 1 }}</span>
                    تا
                    <span class="font-medium">{{ Math.min(currentPage * itemsPerPage, filteredGroups.length) }}</span>
                    از
                    <span class="font-medium">{{ filteredGroups.length }}</span>
                    نتیجه
                </div>
                <div class="flex space-x-2 space-x-reverse">
                    <button @click="currentPage--" :disabled="currentPage === 1"
                        class="px-3 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm font-medium transition-all duration-200"
                        :class="currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'">
                        قبلی
                    </button>
                    <button @click="currentPage++" :disabled="currentPage * itemsPerPage >= filteredGroups.length"
                        class="px-3 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm font-medium transition-all duration-200"
                        :class="currentPage * itemsPerPage >= filteredGroups.length ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'">
                        بعدی
                    </button>
                </div>
            </div>
        </div>

        <!-- مودال گروه کاربری -->
        <CopanelUserGroupModal :is-open="isModalOpen" :mode="modalMode" :group="selectedGroup" @close="closeModal"
            @save="handleSaveGroup" />
    </div>
</template>

<script setup>
const { $freeApi } = useNuxtApp()

definePageMeta({
    layout: 'copanel'
})

// وضعیت‌های صفحه
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 10
const isModalOpen = ref(false)
const modalMode = ref('create') // 'create' or 'edit'
const selectedGroup = ref(null)

// داده‌های گروه‌های کاربری
const groups = ref([])

// فیلتر کردن گروه‌ها بر اساس جستجو
const filteredGroups = computed(() => {
    let filtered = groups.value

    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(group =>
            group.usergroup?.toLowerCase().includes(query) ||
            group.description?.toLowerCase().includes(query)
        )
    }

    return filtered
})

// گروه‌های صفحه‌بندی شده
const paginatedGroups = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredGroups.value.slice(start, end)
})

// تابع برای گرفتن حروف اول گروه
const getGroupInitials = (groupName) => {
    if (!groupName) return 'گ'
    const words = groupName.split(' ')
    if (words.length === 1) return words[0].charAt(0)
    return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase()
}

// توابع مدیریت مودال
const openModal = (mode, group = null) => {
    modalMode.value = mode
    selectedGroup.value = group
    isModalOpen.value = true
}

const closeModal = () => {
    isModalOpen.value = false
    selectedGroup.value = null
}

const handleSaveGroup = async (groupData) => {
    try {
        // اگر در حالت ویرایش هستیم، pk_usergroup گروه را اضافه می‌کنیم
        const dataToSend = {
            ...groupData,
            ...(modalMode.value === 'edit' && selectedGroup.value && { pk_usergroup: selectedGroup.value.pk_usergroup })
        }

        await $freeApi.post('company-create-update-usergroup', dataToSend)
        closeModal()
        getGroups()

    } catch (error) {
        console.error('Error saving group:', error)
    }
}

const deleteGroup = async (groupId) => {
    if (confirm('آیا از حذف این گروه کاربری اطمینان دارید؟')) {
        try {
            await $freeApi.post('company-delete-usergroup', { groupId: groupId })
            getGroups()
        } catch (error) {
            console.error('Error deleting group:', error)
        }
    }
}

const getGroups = async () => {
    try {
        const { data } = await $freeApi.get('company-usergroups')
        groups.value = data
    } catch (error) {
        console.error('Error fetching groups:', error)
        groups.value = []
    }
}

onMounted(() => {
    getGroups()
})
</script>