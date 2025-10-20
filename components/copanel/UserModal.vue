<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
        <!-- Background overlay -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="closeModal"></div>

        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
                class="relative transform overflow-hidden rounded-2xl bg-white text-right shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <!-- Modal header -->
                <div class="bg-white px-6 py-4 border-b border-gray-200">
                    <div class="flex items-center justify-between">
                        <h3 class="text-lg font-medium text-gray-900">
                            {{ mode === 'create' ? 'افزودن کاربر جدید' : 'ویرایش کاربر' }}
                        </h3>
                        <button type="button"
                            class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                            @click="closeModal">
                            <span class="sr-only">بستن</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Form -->
                <form @submit.prevent="handleSubmit" class="bg-white px-6 py-6">
                    <div class="space-y-6">
                        <!-- Name field -->
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                                نام
                            </label>
                            <input type="text" id="name" v-model="formData.name" required
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                                placeholder="نام ">
                        </div>
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                                نام خانوادگی
                            </label>
                            <input type="text" id="name" v-model="formData.lastname" required
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                                placeholder=" نام خانوادگی">
                        </div>

                        <!-- mobile field -->
                        <div>
                            <label for="mobile" class="block text-sm font-medium text-gray-700 mb-2">
                                شماره موبایل
                            </label>
                            <input type="tel" id="mobile" v-model="formData.mobile" required
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                                placeholder="09123456789">
                        </div>

                        <!-- active field with radio buttons (only in edit mode) -->
                        <div v-if="mode === 'edit'">
                            <label class="block text-sm font-medium text-gray-700 mb-4">
                                وضعیت کاربر
                            </label>
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <!-- Active Radio -->
                                <label class="relative flex cursor-pointer">
                                    <input type="radio" name="status" value="1" v-model="formData.isactive"
                                        class="sr-only peer">
                                    <div
                                        class="w-full p-4 border-2 border-gray-200 rounded-xl transition-all duration-300 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:ring-2 peer-checked:ring-green-200 hover:border-green-300 hover:bg-green-25">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center space-x-3 space-x-reverse">
                                                <div
                                                    class="w-4 h-4 border-2 border-gray-300 rounded-full peer-checked:border-green-500 peer-checked:bg-green-500 transition-all duration-300">
                                                </div>
                                                <span
                                                    class="text-sm font-medium text-gray-700 peer-checked:text-green-700">
                                                    فعال
                                                </span>
                                            </div>
                                            <svg v-if="formData.isactive === 1" class="w-5 h-5 text-green-500"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </label>

                                <!-- Inactive Radio -->
                                <label class="relative flex cursor-pointer">
                                    <input type="radio" name="isactive" value="0" v-model="formData.isactive"
                                        class="sr-only peer">
                                    <div
                                        class="w-full p-4 border-2 border-gray-200 rounded-xl transition-all duration-300 peer-checked:border-yellow-500 peer-checked:bg-yellow-50 peer-checked:ring-2 peer-checked:ring-yellow-200 hover:border-yellow-300 hover:bg-yellow-25">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center space-x-3 space-x-reverse">
                                                <div
                                                    class="w-4 h-4 border-2 border-gray-300 rounded-full peer-checked:border-yellow-500 peer-checked:bg-yellow-500 transition-all duration-300">
                                                </div>
                                                <span
                                                    class="text-sm font-medium text-gray-700 peer-checked:text-yellow-700">
                                                    غیرفعال
                                                </span>
                                            </div>
                                            <svg v-if="formData.isactive === 0" class="w-5 h-5 text-yellow-500"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </label>
                            </div>

                            <!-- Status descriptions -->
                            <div class="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-500">
                                <div class="text-center"
                                    :class="{ 'text-green-600 font-medium': formData.isactive === 1 }">
                                    کاربر می‌تواند وارد سیستم شود
                                </div>
                                <div class="text-center"
                                    :class="{ 'text-yellow-600 font-medium': formData.isactive === 0 }">
                                    کاربر نمی‌تواند وارد سیستم شود
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Action buttons -->
                    <div class="mt-8 flex space-x-3 space-x-reverse">
                        <button type="button" @click="closeModal"
                            class="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300">
                            انصراف
                        </button>
                        <button type="submit"
                            class="flex-1 px-4 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
                            {{ mode === 'create' ? 'ایجاد کاربر' : 'ذخیره تغییرات' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isOpen: Boolean,
    mode: {
        type: String,
        default: 'create',
        validator: (value) => ['create', 'edit'].includes(value)
    },
    user: {
        type: Object,
        default: null
    }
})

const emit = defineEmits(['close', 'save'])

// Form data
const formData = ref({
    name: '',
    mobile: '',
    isactive: 1
})

// Reset form when modal opens
watch(() => props.isOpen, (newVal) => {
    if (newVal) {
        if (props.mode === 'edit' && props.user) {
            // Fill form with user data
            formData.value = { ...props.user }
        } else {
            // Reset form for new user
            formData.value = {
                name: '',
                mobile: '',
                isactive: 1
            }
        }
    }
})

// Functions
const closeModal = () => {
    emit('close')
}

const handleSubmit = () => {
    emit('save', formData.value)
}
</script>