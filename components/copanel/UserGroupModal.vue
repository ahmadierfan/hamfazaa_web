<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
        <!-- Background overlay -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="closeModal"></div>

        <div class="md:flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
                class="relative transform overflow-hidden rounded-2xl bg-white text-right shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <!-- Modal header -->
                <div class="bg-white px-6 py-4 border-b border-gray-200">
                    <div class="flex items-center justify-between">
                        <h3 class="text-lg font-medium text-gray-900">
                            {{ mode === 'create' ? 'افزودن گروه کاربری جدید' : 'ویرایش گروه کاربری' }}
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
                        <!-- Group name field -->
                        <div>
                            <label for="usergroup" class="block text-sm font-medium text-gray-700 mb-2">
                                نام گروه کاربری
                            </label>
                            <input type="text" id="usergroup" v-model="formData.usergroup" required
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                                placeholder="نام گروه کاربری">
                        </div>

                        <!-- Description field -->
                        <div>
                            <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
                                توضیحات
                            </label>
                            <textarea id="description" v-model="formData.description" rows="4"
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                                placeholder="توضیحات مربوط به این گروه کاربری..."></textarea>
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
                            {{ mode === 'create' ? 'ایجاد گروه' : 'ذخیره تغییرات' }}
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
    group: {
        type: Object,
        default: null
    }
})

const emit = defineEmits(['close', 'save'])

// Form data
const formData = ref({
    usergroup: '',
    description: ''
})

// Reset form when modal opens or group changes
watch([() => props.isOpen, () => props.group], ([isOpen, group]) => {
    if (isOpen) {
        if (props.mode === 'edit' && group) {
            // Fill form with group data
            formData.value = {
                usergroup: group.usergroup || '',
                description: group.description || ''
            }
        } else {
            // Reset form for new group
            formData.value = {
                usergroup: '',
                description: ''
            }
        }
    }
}, { immediate: true })

// Functions
const closeModal = () => {
    emit('close')
}

const handleSubmit = () => {
    // اگر در حالت ویرایش هستیم و گروه انتخاب شده وجود دارد، ID را اضافه می‌کنیم
    const submitData = {
        ...formData.value,
        ...(props.mode === 'edit' && props.group && { pk_usergroup: props.group.pk_usergroup })
    }
    emit('save', submitData)
}
</script>