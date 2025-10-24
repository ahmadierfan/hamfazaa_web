<template>
    <div
        class="mt-28 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition hover:shadow-lg hover:-translate-y-1 duration-300">
        <!-- هدر گرادیان -->
        <div class="bg-gradient-to-r from-orange-400 to-orange-500 p-6 flex justify-center">
            <div
                class="h-20 w-20 rounded-full bg-white flex items-center justify-center text-orange-500 text-3xl font-bold shadow-md">
                {{ initials }}
            </div>
        </div>

        <!-- اطلاعات کاربر -->
        <div class="p-5 text-center">
            <h2 class="text-xl font-semibold text-gray-800">{{ user.name }}</h2>
            <p class="text-sm text-gray-500 mt-1">{{ user.company }}</p>

            <div class="flex items-center justify-center mt-4 text-gray-600">
                <span>{{ user.phone }}</span>
            </div>

        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

definePageMeta({
    layout: 'userpanel'
})

const user = {
    name: '-',
    phone: '-',
    company: '-'
}

const initials = computed(() => {
    const names = user.name.split(' ')
    return names.map(n => n[0]).join('').slice(0, 2).toUpperCase()
})
</script>

<style scoped>
/* موشن ورود ظریف */
div[data-v-] {
    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
