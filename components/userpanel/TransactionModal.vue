<template>
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <!-- هدر مودال -->
            <div class="p-6 border-b border-gray-200">
                <div class="flex items-center justify-between">
                    <h2 class="text-xl  text-gray-800">
                        {{ mode === 'create' ? 'افزودن تراکنش جدید' : 'ویرایش تراکنش' }}
                    </h2>
                    <button @click="$emit('close')"
                        class="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- فرم -->
            <form @submit.prevent="handleSubmit" class="p-6 space-y-4">
                <!-- مقدار -->
                <div>
                    <label for="amount" class="block text-sm font-medium text-gray-700 mb-2">مبلغ (ریال)</label>
                    <input id="amount" v-model="displayAmount" type="text" required @input="handleAmountInput"
                        @keydown="preventInvalidKeys"
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm dir-ltr text-right"
                        placeholder="مبلغ را وارد کنید">
                    <p v-if="amountError" class="text-red-500 text-xs mt-1">{{ amountError }}</p>
                </div>

                <!-- توضیحات -->
                <div>
                    <label for="description" class="block text-sm font-medium text-gray-700 mb-2">توضیحات</label>
                    <textarea id="description" v-model="formData.description" rows="3"
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm resize-none"
                        placeholder="توضیحات تراکنش (اختیاری)"></textarea>
                </div>

                <!-- ضمیمه -->
                <div>
                    <label for="attachment" class="block text-sm font-medium text-gray-700 mb-2">ضمیمه (اجباری)</label>
                    <input id="attachment" type="file" accept="image/*" @change="handleFileUpload" required
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm">
                    <p class="text-xs text-gray-500 mt-1">فرمت‌های مجاز: JPEG, PNG, JPG, GIF, SVG (حداکثر 5MB)</p>

                    <!-- پیش‌نمایش تصویر -->
                    <div v-if="previewImage" class="mt-3">
                        <p class="text-sm text-gray-700 mb-2">پیش‌نمایش:</p>
                        <img :src="previewImage" alt="پیش‌نمایش ضمیمه"
                            class="w-32 h-32 object-cover rounded-lg border border-gray-300">
                    </div>
                    <p v-if="attachmentError" class="text-red-500 text-xs mt-1">{{ attachmentError }}</p>
                </div>

                <!-- دکمه‌های اقدام -->
                <div class="flex items-center justify-end space-x-3 space-x-reverse pt-4 border-t border-gray-200">
                    <button type="button" @click="$emit('close')"
                        class="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 text-sm">
                        انصراف
                    </button>
                    <button type="submit" :disabled="!isFormValid"
                        class="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                        {{ mode === 'create' ? 'افزودن تراکنش' : 'ذخیره تغییرات' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>

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

// داده‌های فرم
const formData = ref({
    amount: '',
    description: '',
    attachment: null
})

const displayAmount = ref('')
const previewImage = ref(null)
const amountError = ref('')
const attachmentError = ref('')

// تبدیل اعداد فارسی و عربی به انگلیسی
const convertToEnglishNumbers = (str) => {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']

    let result = str.toString()

    // تبدیل اعداد فارسی
    persianNumbers.forEach((persianNum, index) => {
        result = result.replace(new RegExp(persianNum, 'g'), index.toString())
    })

    // تبدیل اعداد عربی
    arabicNumbers.forEach((arabicNum, index) => {
        result = result.replace(new RegExp(arabicNum, 'g'), index.toString())
    })

    return result
}

// جلوگیری از ورود کاراکترهای غیر مجاز
const preventInvalidKeys = (event) => {
    // اجازه دادن به کلیدهای کنترل (Backspace, Delete, Arrow keys, Tab, etc.)
    if (event.ctrlKey || event.altKey || event.metaKey) return

    const key = event.key

    // اجازه دادن به کلیدهای کنترلی
    if ([
        'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight',
        'Tab', 'Home', 'End', 'Enter'
    ].includes(key)) return

    // فقط اجازه دادن به اعداد و کاما
    if (!/[\d,۰-۹٠-٩]/.test(key)) {
        event.preventDefault()
    }
}

// فرمت کردن عدد با جداکننده هزارگان
const formatNumberWithCommas = (numberString) => {
    // حذف همه کاماها و کاراکترهای غیر عددی
    const cleanNumber = numberString.replace(/[^\d]/g, '')

    if (!cleanNumber) return ''

    // فرمت کردن با جداکننده هزارگان
    return parseInt(cleanNumber, 10).toLocaleString('en-US')
}

// مدیریت ورود مبلغ
const handleAmountInput = (event) => {
    let value = event.target.value

    // تبدیل اعداد فارسی/عربی به انگلیسی
    value = convertToEnglishNumbers(value)

    // ذخیره موقعیت کرسر
    const cursorPosition = event.target.selectionStart

    // فرمت کردن عدد
    const formattedValue = formatNumberWithCommas(value)

    // محاسبه موقعیت جدید کرسر
    let newCursorPosition = cursorPosition

    // اگر کاربر در حال پاک کردن کاراکتر است، موقعیت کرسر را تنظیم کن
    if (formattedValue.length < displayAmount.value.length) {
        // پاک کردن اتفاق افتاده
        const deletedChar = displayAmount.value[cursorPosition - 1]
        if (deletedChar === ',') {
            newCursorPosition = cursorPosition - 1
        }
    } else {
        // اضافه کردن کاراکتر جدید
        const addedChar = value[cursorPosition - 1]
        if (addedChar === ',') {
            newCursorPosition = cursorPosition + 1
        }
    }

    // به روز رسانی مقدار نمایشی
    displayAmount.value = formattedValue

    // به روز رسانی مقدار واقعی (بدون کاما)
    const numericValue = formattedValue.replace(/,/g, '')
    formData.value.amount = numericValue

    amountError.value = ''

    // تنظیم مجدد موقعیت کرسر در مرحله بعدی رندر
    nextTick(() => {
        const input = event.target
        if (input) {
            // اگر مقدار خالی است، کرسر را در ابتدا قرار بده
            if (!formattedValue) {
                input.setSelectionRange(0, 0)
            } else {
                // اطمینان از اینکه موقعیت کرسر در محدوده مجاز است
                const safePosition = Math.min(Math.max(newCursorPosition, 0), formattedValue.length)
                input.setSelectionRange(safePosition, safePosition)
            }
        }
    })
}

// اعتبارسنجی فرم
const isFormValid = computed(() => {
    return formData.value.amount &&
        formData.value.amount.length > 0 &&
        formData.value.attachment &&
        !amountError.value &&
        !attachmentError.value
})

// مشاهده تغییرات در تراکنش انتخابی
watch(() => props.transaction, (newTransaction) => {
    if (newTransaction) {
        formData.value = {
            amount: newTransaction.amount,
            description: newTransaction.description,
            attachment: newTransaction.attachment || null
        }

        // فرمت کردن مبلغ برای نمایش
        if (newTransaction.amount) {
            const numericValue = parseInt(newTransaction.amount, 10)
            if (!isNaN(numericValue)) {
                displayAmount.value = numericValue.toLocaleString('en-US')
            }
        }

        // تنظیم پیش‌نمایش اگر فایل ضمیمه وجود دارد
        if (newTransaction.attachmentUrl) {
            previewImage.value = newTransaction.attachmentUrl
        }
    } else {
        resetForm()
    }
})

// مدیریت آپلود فایل
const handleFileUpload = (event) => {
    const file = event.target.files[0]
    attachmentError.value = ''

    if (file) {
        // بررسی حجم فایل (حداکثر 5MB)
        const maxSize = 5 * 1024 * 1024 // 5MB
        if (file.size > maxSize) {
            attachmentError.value = 'حجم فایل نباید بیشتر از 5MB باشد'
            formData.value.attachment = null
            previewImage.value = null
            return
        }

        formData.value.attachment = file

        // ایجاد پیش‌نمایش
        const reader = new FileReader()
        reader.onload = (e) => {
            previewImage.value = e.target.result
        }
        reader.readAsDataURL(file)
    } else {
        formData.value.attachment = null
        previewImage.value = null
    }
}

// ارسال فرم
const handleSubmit = () => {
    // اعتبارسنجی نهایی
    if (!formData.value.amount || !formData.value.attachment) {
        if (!formData.value.amount) {
            amountError.value = 'وارد کردن مبلغ الزامی است'
        }
        if (!formData.value.attachment) {
            attachmentError.value = 'افزودن ضمیمه الزامی است'
        }
        return
    }

    const submitData = new FormData()
    submitData.append('amount', formData.value.amount)
    submitData.append('description', formData.value.description || '')
    submitData.append('attachment', formData.value.attachment)

    emit('save', submitData)
    resetForm()
}

// بازنشانی فرم
const resetForm = () => {
    formData.value = {
        amount: '',
        description: '',
        attachment: null
    }
    displayAmount.value = ''
    previewImage.value = null
    amountError.value = ''
    attachmentError.value = ''
}
</script>