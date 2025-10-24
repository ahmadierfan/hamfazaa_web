<template>
    <div class="min-h-screen bg-gray-50 rtl" v-if="isAuthenticated">
        <CopanelHeader />
        <div class="flex pt-16">
            <CopanelSidebar />
            <main :class="[
                'flex-1 transition-all duration-300 min-h-screen bg-gray-50',
                sidebarStore.isOpen && !sidebarStore.isMobile ? 'md:pr-64' : 'md:pr-20',
                'pr-0'
            ]" style="min-height: calc(100vh - 4rem);">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup>
const sidebarStore = useSidebarStore()

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const isAuthenticated = ref(false)
const router = useRouter()

onMounted(() => {
    if (process.client) {
        const token = localStorage.getItem('jwt_token')
        if (token) {
            isAuthenticated.value = true
        } else {
            router.replace('/login')
        }
    }
})

</script>

<style scoped>
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