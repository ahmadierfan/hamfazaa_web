<template>
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <!-- 📅 آیکون تقویم -->
        <path v-if="icon === 'calendar'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />

        <!-- 👥 آیکون کاربران -->
        <g v-if="icon === 'users'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <circle cx="8" cy="8" r="3" />
            <circle cx="16" cy="8" r="3" />
            <path d="M2 20c0-3 2-5 6-5s6 2 6 5" />
            <path d="M10 20c0-3 2-5 6-5s6 2 6 5" />
        </g>

        <!-- 🏠 آیکون اتاق‌ها -->
        <g v-if="icon === 'rooms'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M4 10l8-6 8 6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
            <path d="M10 20v-6h4v6" />
        </g>

        <!-- 🎧 آیکون پشتیبانی -->
        <g v-if="icon === 'support'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M4 12a8 8 0 0 1 16 0v4a2 2 0 0 1-2 2h-2" />
            <path d="M4 12v4a2 2 0 0 0 2 2h2" />
            <circle cx="12" cy="12" r="1.5" />
            <path d="M12 18v2" />
        </g>

        <!-- 🏡 آیکون خانه -->
        <g v-if="icon === 'home'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
        </g>

        <!-- 💰 آیکون کیف پول -->
        <g v-if="icon === 'wallet'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M3 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
            <path d="M21 10h-4a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h4" />
            <circle cx="17" cy="12" r="1" />
        </g>

        <!-- 👤 آیکون پروفایل -->
        <g v-if="icon === 'profile'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
        </g>
    </svg>
</template>

<script setup>
defineProps({
    icon: {
        type: String,
        required: true,
        validator: (value) => [
            'calendar',
            'users',
            'support',
            'rooms',
            'home',
            'wallet',
            'profile' // 👈 آیکون جدید
        ].includes(value)
    }
})
</script>
