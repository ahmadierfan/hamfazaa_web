<template>
    <div class="min-h-screen bg-gray-50 rtl">
        <CopanelHeader />
        <div class="flex pt-16">
            <CopanelSidebar />
            <main :class="[
                'flex-1 transition-all duration-300 min-h-screen bg-gray-50',
                sidebarStore.isOpen ? 'pr-64' : 'pr-20'
            ]" style="min-height: calc(100vh - 4rem);">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup>
import { useSidebarStore } from '~/stores/sidebar'

const sidebarStore = useSidebarStore()
</script>

<style scoped>
.rtl {
    direction: rtl;
}

.rtl {
    direction: rtl;
}

/* انیمیشن‌های سفارشی */
.sidebar-transition {
    transition: all 0.3s ease-in-out;
}

/* اسکرول بار زیبا */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #fb923c;
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: #ea580c;
}
</style>