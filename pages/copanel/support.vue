<template>
    <div class="p-6">
        <div class="max-w-4xl mx-auto">
            <!-- هدر صفحه -->
            <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-6">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 class="text-2xl font-bold text-gray-800">پشتیبانی همفضا</h1>
                        <p class="text-gray-600 mt-1">ما اینجاییم تا به شما کمک کنیم</p>
                    </div>
                    <div class="mt-4 md:mt-0 flex items-center space-x-4 space-x-reverse">
                        <div class="text-right">
                            <p class="text-sm text-gray-500">وضعیت سرویس</p>
                            <p class="text-green-600 font-medium flex items-center">
                                <span class="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                                همه سرویس‌ها فعال
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-6">
                <div>
                    <!-- فرم ثبت درخواست -->
                    <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-6">
                        <h2 class="text-xl font-bold text-gray-800 mb-6">ثبت درخواست پشتیبانی</h2>

                        <form @submit.prevent="submitTicket" class="space-y-6">
                            <!-- موضوع -->
                            <div>
                                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                                    موضوع درخواست *
                                </label>
                                <input type="text" id="subject" v-model="ticketForm.subject" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                                    placeholder="موضوع درخواست خود را وارد کنید">
                            </div>

                            <!-- دسته‌بندی -->
                            <div>
                                <label for="category" class="block text-sm font-medium text-gray-700 mb-2">
                                    دسته‌بندی *
                                </label>
                                <select id="category" v-model="ticketForm.category" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white">
                                    <option value="">انتخاب دسته‌بندی</option>
                                    <option value="technical">مشکل فنی</option>
                                    <option value="billing">صورتحساب و پرداخت</option>
                                    <option value="account">حساب کاربری</option>
                                    <option value="feature">پیشنهاد قابلیت جدید</option>
                                    <option value="other">سایر</option>
                                </select>
                            </div>

                            <!-- اولویت -->
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">
                                    اولویت *
                                </label>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    <label v-for="priority in priorities" :key="priority.value"
                                        class="relative flex cursor-pointer rounded-xl border border-gray-300 p-4 focus:outline-none"
                                        :class="{
                                            'border-orange-500 bg-orange-50': ticketForm.priority === priority.value,
                                            'hover:bg-gray-50': ticketForm.priority !== priority.value
                                        }">
                                        <input type="radio" :value="priority.value" v-model="ticketForm.priority"
                                            class="sr-only">
                                        <div class="flex w-full items-center justify-between">
                                            <div class="flex items-center">
                                                <div class="text-sm">
                                                    <div class="font-medium text-gray-900 flex items-center">
                                                        <span class="w-2 h-2 rounded-full ml-2"
                                                            :class="priority.color"></span>
                                                        {{ priority.title }}
                                                    </div>
                                                    <p class="text-gray-500 text-xs mt-1">{{ priority.description }}</p>
                                                </div>
                                            </div>
                                            <svg v-if="ticketForm.priority === priority.value"
                                                class="h-5 w-5 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <!-- توضیحات -->
                            <div>
                                <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
                                    توضیحات کامل *
                                </label>
                                <textarea id="description" v-model="ticketForm.description" rows="6" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none"
                                    placeholder="شرح کامل مشکل یا درخواست خود را بنویسید..."></textarea>
                            </div>

                            <!-- پیوست فایل -->
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">
                                    پیوست فایل (اختیاری)
                                </label>
                                <div @click="triggerFileInput"
                                    class="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-orange-400 transition-all duration-300 cursor-pointer"
                                    :class="{ 'border-orange-400 bg-orange-50': isDragging }" @dragover="handleDragOver"
                                    @dragleave="handleDragLeave" @drop="handleDrop">
                                    <input ref="fileInput" type="file" @change="handleFileSelect" multiple
                                        class="hidden">
                                    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <div class="mt-4">
                                        <p class="text-sm text-gray-600">
                                            <span class="font-medium text-orange-600">برای آپلود کلیک کنید</span>
                                            یا فایل را اینجا رها کنید
                                        </p>
                                        <p class="text-xs text-gray-500 mt-1">حداکثر ۵ فایل، هر کدام تا ۱۰ مگابایت</p>
                                    </div>
                                </div>

                                <!-- لیست فایل‌های انتخاب شده -->
                                <div v-if="ticketForm.attachments.length > 0" class="mt-4 space-y-2">
                                    <div v-for="(file, index) in ticketForm.attachments" :key="index"
                                        class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div class="flex items-center space-x-3 space-x-reverse">
                                            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <div>
                                                <p class="text-sm font-medium text-gray-700">{{ file.name }}</p>
                                                <p class="text-xs text-gray-500">{{ formatFileSize(file.size) }}</p>
                                            </div>
                                        </div>
                                        <button type="button" @click="removeFile(index)"
                                            class="text-red-500 hover:text-red-700 transition-colors duration-200">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- دکمه ارسال -->
                            <div class="flex space-x-4 space-x-reverse">
                                <button type="button" @click="resetForm"
                                    class="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300">
                                    پاک کردن فرم
                                </button>
                                <button type="submit" :disabled="isSubmitting"
                                    class="flex-1 px-6 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                                    <span v-if="isSubmitting">
                                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                            </path>
                                        </svg>
                                        در حال ارسال...
                                    </span>
                                    <span v-else>
                                        ارسال درخواست
                                    </span>
                                </button>
                            </div>
                        </form>
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
// آیکون‌های SVG
const TechnicalIcon = {
    template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  `
}

const BillingIcon = {
    template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
    </svg>
  `
}

const AccountIcon = {
    template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
    </svg>
  `
}

const FeatureIcon = {
    template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
    </svg>
  `
}

// وضعیت‌های صفحه
const ticketForm = ref({
    subject: '',
    category: '',
    priority: 'medium',
    description: '',
    attachments: []
})

const isSubmitting = ref(false)
const isDragging = ref(false)
const fileInput = ref(null)

// داده‌های نمونه
const quickHelp = ref([
    {
        id: 1,
        title: 'راهنمای فنی',
        description: 'راهنمای رفع مشکلات فنی و اتصال',
        icon: TechnicalIcon
    },
    {
        id: 2,
        title: 'صورتحساب و پرداخت',
        description: 'سوالات مربوط به صورتحساب و روش‌های پرداخت',
        icon: BillingIcon
    },
    {
        id: 3,
        title: 'حساب کاربری',
        description: 'مدیریت حساب کاربری و تنظیمات',
        icon: AccountIcon
    },
    {
        id: 4,
        title: 'پیشنهادات',
        description: 'ارسال پیشنهاد برای بهبود سرویس',
        icon: FeatureIcon
    }
])

const priorities = ref([
    { value: 'low', title: 'کم', description: 'در ۷۲ ساعت', color: 'bg-green-500' },
    { value: 'medium', title: 'متوسط', description: 'در ۲۴ ساعت', color: 'bg-yellow-500' },
    { value: 'high', title: 'بالا', description: 'در ۴ ساعت', color: 'bg-red-500' }
])

const recentTickets = ref([
    {
        id: 'TKT-001',
        subject: 'مشکل در آپلود فایل',
        category: 'technical',
        priority: 'high',
        status: 'open',
        description: 'هنگ آپلود فایل‌های بزرگتر از ۵۰ مگابایت دارم...',
        createdAt: '2023-12-01'
    },
    {
        id: 'TKT-002',
        subject: 'سوال درباره صورتحساب',
        category: 'billing',
        priority: 'medium',
        status: 'closed',
        description: 'نیاز به توضیح درباره آیتم‌های صورتحساب دارم...',
        createdAt: '2023-11-28'
    }
])

// توابع
const triggerFileInput = () => {
    fileInput.value?.click()
}

const handleFileSelect = (event) => {
    const files = Array.from(event.target.files)
    handleFiles(files)
}

const handleDragOver = (event) => {
    event.preventDefault()
    isDragging.value = true
}

const handleDragLeave = () => {
    isDragging.value = false
}

const handleDrop = (event) => {
    event.preventDefault()
    isDragging.value = false
    const files = Array.from(event.dataTransfer.files)
    handleFiles(files)
}

const handleFiles = (files) => {
    const validFiles = files.filter(file => {
        const maxSize = 10 * 1024 * 1024 // 10MB
        if (file.size > maxSize) {
            alert(`فایل ${file.name} بزرگتر از ۱۰ مگابایت است`)
            return false
        }
        return true
    })

    if (ticketForm.value.attachments.length + validFiles.length > 5) {
        alert('حداکثر ۵ فایل می‌توانید آپلود کنید')
        return
    }

    ticketForm.value.attachments.push(...validFiles)
}

const removeFile = (index) => {
    ticketForm.value.attachments.splice(index, 1)
}

const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const selectHelpItem = (item) => {
    ticketForm.value.category =
        item.title === 'راهنمای فنی' ? 'technical' :
            item.title === 'صورتحساب و پرداخت' ? 'billing' :
                item.title === 'حساب کاربری' ? 'account' : 'feature'
}

const submitTicket = async () => {
    isSubmitting.value = true

    // شبیه‌سازی ارسال درخواست
    await new Promise(resolve => setTimeout(resolve, 2000))

    // ایجاد تیکت جدید
    const newTicket = {
        id: 'TKT-' + String(recentTickets.value.length + 1).padStart(3, '0'),
        ...ticketForm.value,
        status: 'open',
        createdAt: new Date().toISOString().split('T')[0]
    }

    recentTickets.value.unshift(newTicket)
    resetForm()
    isSubmitting.value = false

    alert('درخواست شما با موفقیت ثبت شد. شماره پیگیری: ' + newTicket.id)
}

const resetForm = () => {
    ticketForm.value = {
        subject: '',
        category: '',
        priority: 'medium',
        description: '',
        attachments: []
    }
}

const getStatusBadgeClass = (status) => {
    const classes = {
        open: 'bg-green-100 text-green-800',
        closed: 'bg-gray-100 text-gray-800',
        pending: 'bg-yellow-100 text-yellow-800'
    }
    return classes[status] || 'bg-gray-100 text-gray-800'
}

const getStatusText = (status) => {
    const texts = {
        open: 'باز',
        closed: 'بسته',
        pending: 'در انتظار'
    }
    return texts[status] || status
}

const getCategoryText = (category) => {
    const texts = {
        technical: 'فنی',
        billing: 'صورتحساب',
        account: 'حساب کاربری',
        feature: 'پیشنهاد',
        other: 'سایر'
    }
    return texts[category] || category
}

const getPriorityText = (priority) => {
    const texts = {
        low: 'کم',
        medium: 'متوسط',
        high: 'بالا'
    }
    return texts[priority] || priority
}

const formatDate = (dateString) => {
    try {
        const date = new Date(dateString)
        return date.toLocaleDateString('fa-IR')
    } catch (error) {
        return dateString
    }
}
</script>