<template>
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

        <!-- 📅 آیکون تقویم -->
        <path v-if="icon === 'calendar'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />

        <!-- 👥 آیکون کاربران -->
        <g v-if="icon === 'users'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <!-- دو پروفایل کاربری -->
            <circle cx="8" cy="8" r="3" />
            <circle cx="16" cy="8" r="3" />
            <!-- بدنه‌ها -->
            <path d="M2 20c0-3 2-5 6-5s6 2 6 5" />
            <path d="M10 20c0-3 2-5 6-5s6 2 6 5" />
        </g>

        <!-- 🏠 آیکون اتاق‌ها -->
        <g v-if="icon === 'rooms'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <!-- دیوار و سقف -->
            <path d="M4 10l8-6 8 6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
            <!-- در -->
            <path d="M10 20v-6h4v6" />
        </g>

        <!-- 🎧 آیکون پشتیبانی -->
        <g v-if="icon === 'support'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M4 12a8 8 0 0 1 16 0v4a2 2 0 0 1-2 2h-2" />
            <path d="M4 12v4a2 2 0 0 0 2 2h2" />
            <circle cx="12" cy="12" r="1.5" />
            <path d="M12 18v2" />
        </g>

    </svg>

</template>

<script setup>
defineProps({
    icon: {
        type: String,
        required: true,
        validator: (value) => ['calendar', 'users', 'support', 'rooms'].includes(value)
    }
})
</script>