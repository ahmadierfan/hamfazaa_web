<template>
    <div class="p-4 sm:p-6">
        <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <!-- هدر صفحه -->
            <div class="p-4 sm:p-6 border-b border-gray-200">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 class="text-xl sm:text-2xl  text-gray-800">تراکنش‌های مالی</h1>
                        <p class="text-gray-600 mt-1 text-sm sm:text-base">مدیریت و مشاهده تراکنش‌های مالی</p>
                    </div>
                    <button @click="openModal('create')"
                        class="mt-4 sm:mt-0 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 space-x-reverse w-full sm:w-auto">
                        <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                        <span class="text-sm sm:text-base">افزودن تراکنش</span>
                    </button>
                </div>
            </div>

            <!-- بخش جستجو و فیلتر -->
            <div class="p-4 sm:p-6 border-b border-gray-200 bg-gray-50">
                <div class="flex flex-col md:flex-row gap-3 sm:gap-4">
                    <!-- جستجو -->
                    <div class="flex-1">
                        <div class="relative">
                            <input v-model="searchQuery" type="text" placeholder="جستجو در توضیحات..."
                                class="w-full pr-10 pl-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm sm:text-base">
                            <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <!-- فیلتر نوع تراکنش -->
                    <select v-model="typeFilter"
                        class="px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-white text-sm sm:text-base">
                        <option value="">همه تراکنش‌ها</option>
                        <option value="income">واریزی</option>
                        <option value="expense">برداشت</option>
                    </select>

                </div>
            </div>

            <!-- خلاصه مالی -->
            <div class="p-4 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-blue-50">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-sm text-gray-600">موجودی کل</p>
                                <p class="text-2xl  text-gray-800">{{ threeComma(totalBalance) }}</p>
                            </div>
                            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-sm text-gray-600">مجموع واریزی‌ها</p>
                                <p class="text-2xl  text-green-600">{{ threeComma(totalIncome) }}</p>
                            </div>
                            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-sm text-gray-600">تعداد تراکنش‌ها</p>
                                <p class="text-2xl  text-purple-600">{{ filteredTransactions.length }}</p>
                            </div>
                            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
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
                                مبلغ
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                توضیحات
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                کاربر
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ضمیمه
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                تاریخ
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                زمان
                            </th>
                            <th
                                class="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                وضعیت
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="transaction in paginatedTransactions" :key="transaction.pk_wallettransaction"
                            class="hover:bg-gray-50 transition-colors duration-200">
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium" :class="getAmountClass(transaction.amount)">
                                    {{ threeComma(transaction.amount) }}
                                </div>
                            </td>
                            <td class="px-4 sm:px-6 py-4">
                                <div class="text-sm text-gray-900 max-w-xs truncate">
                                    {{ transaction.description || 'بدون توضیح' }}
                                </div>
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900" v-if="transaction.mobile">
                                    {{ transaction.mobile }}
                                </div>
                                <div class="text-sm text-gray-400" v-else>
                                    نامشخص
                                </div>
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <div v-if="transaction.attachment" class="flex justify-center">
                                    <a target="_blank" :href="imager(transaction.attachment)"
                                        class="text-blue-600 hover:text-blue-900 transition-colors duration-200 p-1"
                                        title="مشاهده ضمیمه">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </a>
                                </div>
                                <span v-else class="text-sm text-gray-400">بدون ضمیمه</span>
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ transaction.jalalicreateddate }}
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ transaction.createdtime }}
                            </td>
                            <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                                <div v-if="transaction.ispayed == 1" class="text-xs text-green-600">
                                    پرداخت شده
                                </div>
                                <div v-else>
                                    <button @click="togglePaymentStatus(transaction)"
                                        class="text-xs bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition-colors duration-200"
                                        :disabled="isUpdatingPayment">
                                        {{ isUpdatingPayment ? 'در حال بروزرسانی...' : 'تغییر وضعیت به پرداخت شده' }}
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- نمایش موبایل (کارت) -->
            <div class="lg:hidden">
                <div v-for="transaction in paginatedTransactions" :key="transaction.pk_wallettransaction"
                    class="border-b border-gray-200 last:border-b-0 p-4 hover:bg-gray-50 transition-colors duration-200">
                    <div class="flex items-start justify-between mb-3">
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm"
                                :class="getAmountClass(transaction.amount).includes('text-green') ? 'bg-green-500' : 'bg-red-500'">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <div class="mr-3">
                                <div class="text-sm font-medium" :class="getAmountClass(transaction.amount)">
                                    {{ threeComma(transaction.amount) }}
                                </div>
                                <div class="text-xs text-gray-500">{{ transaction.jalalicreateddate }}</div>
                            </div>
                        </div>
                        <span class="px-2 py-1 inline-flex text-xs leading-5  rounded-full shrink-0"
                            :class="getTypeBadgeClass(transaction.amount)">
                            {{ getTypeText(transaction.amount) }}
                        </span>
                    </div>

                    <div class="grid grid-cols-1 gap-2 text-sm">
                        <div class="flex justify-between">
                            <span class="text-gray-500">توضیحات:</span>
                            <span class="text-gray-900 text-left flex-1 mr-2">{{ transaction.description || 'بدون توضیح'
                            }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-500">کاربر:</span>
                            <span class="text-gray-900">{{ transaction.mobile || 'نامشخص' }}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-500">ضمیمه:</span>
                            <a target="_blank" :href="imager(transaction.attachment)" v-if="transaction.attachment"
                                class="text-blue-600 hover:text-blue-900 text-sm flex items-center space-x-1 space-x-reverse">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <span>مشاهده</span>
                            </a>
                            <span v-else class="text-gray-400 text-sm">بدون ضمیمه</span>
                        </div>
                        <div class="flex justify-between items-center pt-2 border-t border-gray-100">
                            <span class="text-gray-500">وضعیت:</span>
                            <div v-if="transaction.ispayed == 1" class="text-xs text-green-600">
                                پرداخت شده
                            </div>
                            <div v-else>
                                <button @click="togglePaymentStatus(transaction)" v-if="transaction.ispayed == 0"
                                    class="text-xs bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition-colors duration-200"
                                    :disabled="isUpdatingPayment">
                                    {{ isUpdatingPayment ? 'در حال بروزرسانی...' : 'تغییر وضعیت به پرداخت شد' }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- حالت خالی -->
            <div v-if="filteredTransactions.length === 0" class="text-center py-8 sm:py-12">
                <svg class="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h3 class="mt-2 text-sm font-medium text-gray-900">تراکنشی یافت نشد</h3>
                <p class="mt-1 text-sm text-gray-500">هیچ تراکنشی با معیارهای جستجوی شما مطابقت ندارد.</p>
            </div>

            <!-- Pagination -->
            <div
                class="px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div class="text-xs sm:text-sm text-gray-700">
                    نمایش
                    <span class="font-medium">{{ (currentPage - 1) * itemsPerPage + 1 }}</span>
                    تا
                    <span class="font-medium">{{ Math.min(currentPage * itemsPerPage, filteredTransactions.length)
                    }}</span>
                    از
                    <span class="font-medium">{{ filteredTransactions.length }}</span>
                    نتیجه
                </div>
                <div class="flex space-x-2 space-x-reverse">
                    <button @click="currentPage--" :disabled="currentPage === 1"
                        class="px-3 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm font-medium transition-all duration-200"
                        :class="currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'">
                        قبلی
                    </button>
                    <button @click="currentPage++" :disabled="currentPage * itemsPerPage >= filteredTransactions.length"
                        class="px-3 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm font-medium transition-all duration-200"
                        :class="currentPage * itemsPerPage >= filteredTransactions.length ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'">
                        بعدی
                    </button>
                </div>
            </div>
        </div>

        <!-- مودال افزودن تراکنش -->
        <UserpanelTransactionModal :is-open="isModalOpen" :mode="modalMode" :transaction="selectedTransaction"
            @close="closeModal" @save="handleSaveTransaction" />
    </div>
</template>

<script setup>
const { imager } = userImager()
const { $freeApi } = useNuxtApp()
const { threeComma } = useThreeComma()


definePageMeta({
    layout: 'copanel'
})

// وضعیت‌های صفحه
const searchQuery = ref('')
const typeFilter = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(10)
const isModalOpen = ref(false)
const modalMode = ref('create')
const selectedTransaction = ref(null)
const isUpdatingPayment = ref(false)

// داده‌های تراکنش‌ها
const transactions = ref([])

// فیلتر کردن تراکنش‌ها
const filteredTransactions = computed(() => {
    let filtered = transactions.value

    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(transaction =>
            transaction.description?.toLowerCase().includes(query) ||
            transaction.mobile?.toLowerCase().includes(query)
        )
    }

    if (typeFilter.value) {
        filtered = filtered.filter(transaction => {
            if (typeFilter.value === 'income') return transaction.amount > 0
            if (typeFilter.value === 'expense') return transaction.amount < 0
            return true
        })
    }

    return filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
})

// تراکنش‌های صفحه‌بندی شده
const paginatedTransactions = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    return filteredTransactions.value.slice(start, end)
})

// محاسبات مالی
const totalBalance = computed(() => {
    return transactions.value
        .filter(transaction => transaction.ispayed != 0)
        .reduce((sum, transaction) => sum + transaction.amount, 0)
})

const totalIncome = computed(() => {
    return transactions.value
        .filter(transaction => transaction.ispayed != 0)
        .reduce((sum, transaction) => sum + transaction.amount, 0)
})

const getAmountClass = (amount) => {
    return amount > 0 ? 'text-green-600' : 'text-red-600'
}

const getTypeBadgeClass = (amount) => {
    return amount > 0
        ? 'bg-green-100 text-green-800'
        : 'bg-red-100 text-red-800'
}

const getTypeText = (amount) => {
    return amount > 0 ? 'واریزی' : 'برداشت'
}

const getStatusBadgeClass = (ispayed) => {
    const classes = {
        1: 'bg-green-100 text-green-800',
        0: 'bg-yellow-100 text-yellow-800'
    }
    return classes[ispayed] || 'bg-gray-100 text-gray-800'
}

// توابع مدیریت مودال
const openModal = (mode, transaction = null) => {
    modalMode.value = mode
    selectedTransaction.value = transaction
    isModalOpen.value = true
}

const closeModal = () => {
    isModalOpen.value = false
    selectedTransaction.value = null
}

const handleSaveTransaction = async (transactionData) => {
    try {
        await $freeApi.post('user-increase-wallet', transactionData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        closeModal()
        getTransactions()
    } catch (error) {
        console.error('Error saving transaction:', error)
    }
}

// تابع تغییر وضعیت پرداخت برای تراکنش‌های سرور
const togglePaymentStatus = async (transaction) => {
    isUpdatingPayment.value = true
    try {
        await $freeApi.post('update-transaction-payment-status', {
            transaction_id: transaction.pk_wallettransaction,
            ispayed: 1
        })

        // بروزرسانی وضعیت در لیست
        const index = transactions.value.findIndex(t => t.pk_wallettransaction === transaction.pk_wallettransaction)
        if (index !== -1) {
            transactions.value[index].ispayed = 1
        }
    } catch (error) {
        console.error('Error updating payment status:', error)
    } finally {
        isUpdatingPayment.value = false
    }
}

const getTransactions = async () => {
    try {
        const { data } = await $freeApi.get('company-wallet-transactions')
        transactions.value = data
    } catch (error) {
        console.error('Error fetching transactions:', error)
        transactions.value = []
    }
}

onMounted(() => {
    getTransactions()
})
</script>