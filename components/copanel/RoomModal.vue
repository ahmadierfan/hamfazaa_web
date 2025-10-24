<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
        <!-- Background overlay -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="closeModal"></div>

        <div class="md:flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
                class="relative transform overflow-hidden rounded-2xl bg-white text-right shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                <!-- Modal header -->
                <div class="bg-white px-6 py-4 border-b border-gray-200">
                    <div class="flex items-center justify-between">
                        <h3 class="text-lg font-medium text-gray-900">
                            {{ mode === 'create' ? 'اتاق جدید' : 'ویرایش اتاق' }}
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
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- نام اتاق -->
                        <div class="md:col-span-2">
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                                نام اتاق *
                            </label>
                            <input type="text" id="name" v-model="formData.room" required
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                                placeholder="نام اتاق">
                        </div>

                        <!-- ظرفیت -->
                        <div>
                            <label for="capacity" class="block text-sm font-medium text-gray-700 mb-2">
                                ظرفیت (نفر) *
                            </label>
                            <input type="number" id="capacity" v-model="formData.capacity" required min="1"
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                                placeholder="۱۰">
                        </div>

                        <!-- ساعت شروع -->
                        <div>
                            <label for="starttime" class="block text-sm font-medium text-gray-700 mb-2">
                                ساعت شروع رزرو *
                            </label>
                            <input type="time" id="starttime" v-model="formData.starttime" required
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300">
                        </div>

                        <!-- ساعت پایان -->
                        <div>
                            <label for="endtime" class="block text-sm font-medium text-gray-700 mb-2">
                                ساعت پایان رزرو *
                            </label>
                            <input type="time" id="endtime" v-model="formData.endtime" required
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300">
                        </div>

                        <!-- روزهای قابل رزرو -->
                        <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                روزهای قابل رزرو *
                            </label>
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                <label v-for="day in availableDaysOptions" :key="day.value"
                                    class="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                                    :class="{ 'bg-orange-50 border-orange-500': formData.availabledays.includes(day.value) }">
                                    <input type="checkbox" :value="day.value" v-model="formData.availabledays"
                                        class="hidden">
                                    <span class="text-sm font-medium text-gray-700">{{ day.label }}</span>
                                </label>
                            </div>
                        </div>

                        <!-- حداکثر ساعت رزرو -->
                        <div>
                            <label for="maxhoursperuser" class="block text-sm font-medium text-gray-700 mb-2">
                                حداکثر ساعت رزرو برای هر کاربر *
                            </label>
                            <input type="number" id="maxhoursperuser" v-model="formData.maxhoursperweek" required
                                min="1" max="24"
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                                placeholder="۴">
                        </div>

                        <!-- هزینه کاربر اضافی -->
                        <div>
                            <label for="amountperhour" class="block text-sm font-medium text-gray-700 mb-2">
                                هزینه کاربر اضافی (ریال) *
                            </label>
                            <input type="number" id="amountperhour" v-model="formData.amountperhour" required min="0"
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                                placeholder="۵۰۰۰۰">
                        </div>

                        <!-- وضعیت -->
                        <div class="md:col-span-2">
                            <label for="isactive" class="block text-sm font-medium text-gray-700 mb-2">
                                وضعیت *
                            </label>
                            <select id="isactive" v-model="formData.isactive" required
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white">
                                <option value="1">فعال</option>
                                <option value="0">غیرفعال</option>
                            </select>
                        </div>

                        <!-- توضیحات -->
                        <div class="md:col-span-2">
                            <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
                                توضیحات
                            </label>
                            <textarea id="description" v-model="formData.description" rows="3"
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                                placeholder="توضیحات مربوط به اتاق..."></textarea>
                        </div>
                    </div>

                    <!-- دکمه‌های action -->
                    <div class="mt-8 flex space-x-3 space-x-reverse">
                        <button type="button" @click="closeModal"
                            class="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300">
                            انصراف
                        </button>
                        <button type="submit"
                            class="flex-1 px-4 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
                            {{ mode === 'create' ? 'ایجاد اتاق' : 'ذخیره تغییرات' }}
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
    room: {
        type: Object,
        default: null
    }
})

const emit = defineEmits(['close', 'save'])

// گزینه‌های روزهای هفته
const availableDaysOptions = [
    { value: 'saturday', label: 'شنبه' },
    { value: 'sunday', label: 'یکشنبه' },
    { value: 'monday', label: 'دوشنبه' },
    { value: 'tuesday', label: 'سه‌شنبه' },
    { value: 'wednesday', label: 'چهارشنبه' },
    { value: 'thursday', label: 'پنجشنبه' },
    { value: 'friday', label: 'جمعه' }
]

// داده‌های فرم
const formData = ref({
    name: '',
    capacity: 10,
    starttime: '08:00',
    endtime: '18:00',
    availabledays: ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday'],
    maxhoursperuser: 4,
    amountperhour: 50000,
    isactive: 1,
    description: ''
})

// ریست فرم هنگام باز شدن مودال
watch(() => props.isOpen, (newVal) => {
    if (newVal) {
        if (props.mode === 'edit' && props.room) {
            // پر کردن فرم با داده‌های اتاق
            formData.value = { ...props.room }
        } else {
            // ریست فرم برای ایجاد اتاق جدید
            formData.value = {
                name: '',
                capacity: 10,
                starttime: '08:00',
                endtime: '18:00',
                availabledays: ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday'],
                maxhoursperuser: 4,
                amountperhour: 50000,
                isactive: 1,
                description: ''
            }
        }
    }
})

// توابع
const closeModal = () => {
    emit('close')
}

const handleSubmit = () => {
    // اعتبارسنجی حداقل یک روز انتخاب شده باشد
    if (formData.value.availabledays.length === 0) {
        alert('لطفاً حداقل یک روز را انتخاب کنید')
        return
    }

    emit('save', formData.value)
}
</script>