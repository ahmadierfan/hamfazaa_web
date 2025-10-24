<template>
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <!-- هدر -->
            <div class="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl p-6 text-white">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3 space-x-reverse">
                        <div class="bg-white bg-opacity-20 p-2 rounded-xl">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-lg ">{{ mode === 'create' ? 'افزودن تراکنش' : 'ویرایش تراکنش' }}</h3>
                            <p class="text-blue-100 text-sm mt-1">مدیریت تراکنش مالی</p>
                        </div>
                    </div>
                    <button @click="$emit('close')"
                        class="text-white hover:text-blue-100 transition-colors p-1 rounded-lg hover:bg-white hover:bg-opacity-10">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="p-6">
                <form @submit.prevent="handleSubmit" class="space-y-6">
                    <!-- انتخاب کاربر -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            انتخاب کاربر
                        </label>
                        <div class="relative">
                            <div @click="toggleUserDropdown"
                                class="w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-xl bg-white shadow-sm transition-all duration-200 cursor-pointer flex items-center justify-between"
                                :class="userDropdownOpen ? 'ring-2 ring-blue-200 border-blue-500' : ''">
                                <span v-if="formData.user_id" class="flex items-center space-x-2 space-x-reverse">
                                    <div
                                        class="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium">
                                        {{ getInitials(selectedUserName) }}
                                    </div>
                                    <span class="text-gray-700">{{ selectedUserName }}</span>
                                </span>
                                <span v-else class="text-gray-400">انتخاب کاربر...</span>

                                <svg class="h-5 w-5 text-gray-400 transition-transform duration-200"
                                    :class="userDropdownOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>

                            <!-- منوی دراپ‌دان کاربران -->
                            <div v-if="userDropdownOpen"
                                class="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                                <!-- فیلد جستجو -->
                                <div class="p-3 border-b border-gray-200">
                                    <div class="relative">
                                        <input type="text" v-model="userSearchQuery" @input="filterUsers"
                                            placeholder="جستجوی کاربر..."
                                            class="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            ref="userSearchInput">
                                        <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                                            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <!-- لیست کاربران -->
                                <div class="py-1">
                                    <div v-for="user in filteredUserList" :key="user.id" @click="selectUser(user)"
                                        class="flex items-center space-x-3 space-x-reverse px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors duration-150"
                                        :class="formData.user_id === user.id ? 'bg-blue-100' : ''">
                                        <div class="flex-shrink-0">
                                            <div
                                                class="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
                                                {{ getInitials(user.name) }}
                                            </div>
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="text-sm font-medium text-gray-900 truncate">{{ user.name }}</p>
                                            <p class="text-sm text-gray-500 truncate">{{ user.email }}</p>
                                        </div>
                                        <div v-if="formData.user_id === user.id" class="flex-shrink-0">
                                            <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div v-if="filteredUserList.length === 0"
                                        class="px-3 py-4 text-center text-gray-500 text-sm">
                                        کاربری یافت نشد
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- مبلغ -->
                    <div>
                        <label for="amount" class="block text-sm font-medium text-gray-700 mb-2">
                            مبلغ (ریال)
                        </label>
                        <input type="number" id="amount" v-model="formData.amount" required
                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                            placeholder="مبلغ را وارد کنید">
                    </div>

                    <!-- نوع تراکنش -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            نوع تراکنش
                        </label>
                        <div class="grid grid-cols-2 gap-4">
                            <label
                                class="flex items-center p-4 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                                :class="formData.amount > 0 ? 'border-blue-500 bg-blue-50' : ''">
                                <input type="radio" v-model="formData.amount" :value="Math.abs(formData.amount) || 0"
                                    class="text-blue-600 focus:ring-blue-500">
                                <span class="mr-3 text-sm font-medium text-gray-900">واریزی</span>
                            </label>
                            <label
                                class="flex items-center p-4 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                                :class="formData.amount < 0 ? 'border-red-500 bg-red-50' : ''">
                                <input type="radio" v-model="formData.amount" :value="-(Math.abs(formData.amount) || 0)"
                                    class="text-red-600 focus:ring-red-500">
                                <span class="mr-3 text-sm font-medium text-gray-900">برداشت</span>
                            </label>
                        </div>
                    </div>

                    <!-- وضعیت پرداخت -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            وضعیت پرداخت
                        </label>
                        <div class="flex items-center space-x-4 space-x-reverse">
                            <label class="flex items-center">
                                <input type="radio" v-model="formData.ispayed" :value="1"
                                    class="text-green-600 focus:ring-green-500">
                                <span class="mr-2 text-sm text-gray-900">پرداخت شده</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" v-model="formData.ispayed" :value="0"
                                    class="text-yellow-600 focus:ring-yellow-500">
                                <span class="mr-2 text-sm text-gray-900">در انتظار پرداخت</span>
                            </label>
                        </div>
                    </div>

                    <!-- توضیحات -->
                    <div>
                        <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
                            توضیحات
                        </label>
                        <textarea id="description" v-model="formData.description" rows="3"
                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                            placeholder="توضیحات تراکنش (اختیاری)"></textarea>
                    </div>

                    <!-- ضمیمه -->
                    <div>
                        <label for="attachment" class="block text-sm font-medium text-gray-700 mb-2">
                            ضمیمه (اختیاری)
                        </label>
                        <input type="file" id="attachment" @change="handleFileUpload" accept="image/*,.pdf,.doc,.docx"
                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
                        <p class="text-xs text-gray-500 mt-1">فرمت‌های مجاز: تصویر، PDF, Word</p>
                    </div>

                    <!-- دکمه‌های action -->
                    <div class="flex gap-3 pt-6 border-t border-gray-200">
                        <button type="submit" :disabled="isSubmitting"
                            class="flex-1 inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl">
                            <svg v-if="isSubmitting" class="animate-spin -mr-1 ml-2 h-5 w-5 text-white" fill="none"
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
                            {{ isSubmitting ? 'در حال ذخیره...' : (mode === 'create' ? 'ثبت تراکنش' : 'ویرایش تراکنش')
                            }}
                        </button>

                        <button type="button" @click="$emit('close')"
                            class="flex-1 inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200">
                            انصراف
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
const { $freeApi } = useNuxtApp()

const props = defineProps({
    isOpen: Boolean,
    mode: {
        type: String,
        default: 'create'
    },
    transaction: {
        type: Object,
        default: null
    }
})

const emit = defineEmits(['close', 'save'])

// وضعیت‌های فرم
const isSubmitting = ref(false)
const formData = ref({
    user_id: '',
    amount: 0,
    description: '',
    attachment: null,
    ispayed: 0
})

// مدیریت کاربران
const userDropdownOpen = ref(false)
const userSearchQuery = ref('')
const usersList = ref([])
const filteredUserList = ref([])
const userSearchInput = ref(null)

// محاسبه نام کاربر انتخاب شده
const selectedUserName = computed(() => {
    if (!formData.value.user_id) return ''
    const user = usersList.value.find(u => u.id === formData.value.user_id)
    return user ? user.name : ''
})

// توابع مدیریت کاربران
const toggleUserDropdown = () => {
    userDropdownOpen.value = !userDropdownOpen.value
    if (userDropdownOpen.value) {
        nextTick(() => {
            userSearchInput.value?.focus()
            filterUsers()
        })
    }
}

const filterUsers = () => {
    if (!userSearchQuery.value) {
        filteredUserList.value = usersList.value
    } else {
        filteredUserList.value = usersList.value.filter(user =>
            user.name.toLowerCase().includes(userSearchQuery.value.toLowerCase()) ||
            user.email.toLowerCase().includes(userSearchQuery.value.toLowerCase())
        )
    }
}

const selectUser = (user) => {
    formData.value.user_id = user.id
    userDropdownOpen.value = false
    userSearchQuery.value = ''
}

const getInitials = (name) => {
    if (!name) return ''
    return name.split(' ').map(word => word[0]).join('').toUpperCase().substring(0, 2)
}

// مدیریت آپلود فایل
const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        formData.value.attachment = file
    }
}

// مدیریت ارسال فرم
const handleSubmit = async () => {
    if (!formData.value.user_id || !formData.value.amount) {
        // نمایش خطا
        return
    }

    isSubmitting.value = true
    try {
        const submitData = new FormData()
        Object.keys(formData.value).forEach(key => {
            if (formData.value[key] !== null && formData.value[key] !== undefined) {
                submitData.append(key, formData.value[key])
            }
        })

        emit('save', submitData)
    } catch (error) {
        console.error('Error submitting form:', error)
    } finally {
        isSubmitting.value = false
    }
}

// بارگذاری کاربران
const loadUsers = async () => {
    try {
        const { data } = await $freeApi.get('get-users-list') // این endpoint باید لیست کاربران را برگرداند
        usersList.value = data.users || []
        filteredUserList.value = usersList.value
    } catch (error) {
        console.error('Error loading users:', error)
        usersList.value = []
    }
}

// مقداردهی اولیه فرم در صورت ویرایش
watch(() => props.transaction, (newTransaction) => {
    if (newTransaction && props.mode === 'edit') {
        formData.value = {
            user_id: newTransaction.user_id,
            amount: newTransaction.amount,
            description: newTransaction.description,
            attachment: null,
            ispayed: newTransaction.ispayed
        }
    } else {
        // ریست فرم برای حالت ایجاد
        formData.value = {
            user_id: '',
            amount: 0,
            description: '',
            attachment: null,
            ispayed: 0
        }
    }
})

// بارگذاری اولیه
onMounted(() => {
    loadUsers()
})

// بستن دراپ‌دان هنگام کلیک خارج
const handleClickOutside = (event) => {
    const dropdown = event.target.closest('.relative')
    if (!dropdown) {
        userDropdownOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>