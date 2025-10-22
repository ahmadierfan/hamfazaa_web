<template>
    <!-- Overlay برای موبایل -->
    <div v-if="sidebarStore.isMobile && sidebarStore.isMobileOpen" @click="sidebarStore.closeMobileSidebar()"
        class="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"></div>

    <!-- سایدبار برای دسکتاپ -->
    <aside v-if="!sidebarStore.isMobile" :class="[
        'bg-white shadow-lg transition-all duration-300 overflow-hidden fixed h-full z-20',
        sidebarStore.isOpen ? 'w-64' : 'w-20'
    ]" style="height: calc(100vh - 4rem); top: 4rem;">
        <div class="p-4 flex flex-col h-full">
            <!-- دکمه باز و بسته کردن سایدبار -->
            <button @click="sidebarStore.toggleSidebar()"
                class="self-end mb-6 p-2 rounded-full hover:bg-gray-100 transition-colors">
                <svg :class="{ 'rotate-180': !sidebarStore.isOpen }" class="w-5 h-5 text-gray-600 transition-transform"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <!-- منوها -->
            <nav class="flex-1">
                <ul class="space-y-2">
                    <li v-for="item in sidebarStore.menuItems" :key="item.id">
                        <NuxtLink :to="item.path" @click="sidebarStore.setActiveMenu(item.id)"
                            class="flex items-center p-3 rounded-lg hover:bg-orange-50 transition-colors group" :class="{
                                'bg-orange-100 text-orange-600 border-r-4 border-orange-500': isActive(item)
                            }">
                            <span class="flex-shrink-0 text-gray-600 group-hover:text-orange-600"
                                :class="{ 'text-orange-600': isActive(item) }">
                                <CopanelSidebarIcon :icon="item.icon" />
                            </span>
                            <span :class="[
                                'mr-3 transition-all duration-300 font-medium',
                                sidebarStore.isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
                            ]">
                                {{ item.title }}
                            </span>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>

    <!-- سایدبار برای موبایل -->
    <aside v-if="sidebarStore.isMobile" :class="[
        'bg-white shadow-lg fixed top-0 left-0 bottom-0 z-30 transform transition-transform duration-300 md:hidden',
        sidebarStore.isMobileOpen ? 'translate-x-0' : '-translate-x-full'
    ]" style="width: 280px; height: 100vh;">
        <div class="p-4 flex flex-col h-full pt-20">
            <!-- دکمه بستن در موبایل -->
            <button @click="sidebarStore.closeMobileSidebar()"
                class="self-start mb-6 p-2 rounded-full hover:bg-gray-100 transition-colors absolute top-4 left-4">
                <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- منوها -->
            <nav class="flex-1">
                <ul class="space-y-2">
                    <li v-for="item in sidebarStore.menuItems" :key="item.id">
                        <NuxtLink :to="item.path" @click="sidebarStore.setActiveMenu(item.id)"
                            class="flex items-center p-4 rounded-lg hover:bg-orange-50 transition-colors group" :class="{
                                'bg-orange-100 text-orange-600 border-r-4 border-orange-500': isActive(item)
                            }">
                            <span class="flex-shrink-0 text-gray-600 group-hover:text-orange-600 ml-3"
                                :class="{ 'text-orange-600': isActive(item) }">
                                <CopanelSidebarIcon :icon="item.icon" />
                            </span>
                            <span class="font-medium text-lg">
                                {{ item.title }}
                            </span>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script setup>
import { useSidebarStore } from '~/stores/sidebar'

const sidebarStore = useSidebarStore()
const route = useRoute()

// تابع برای چک کردن active بودن منو
const isActive = (item) => {
    const currentPath = route.path
    if (item.path === currentPath) return true
    if (item.path !== '/copanel/' && currentPath.startsWith(item.path)) {
        return true
    }
    return false
}

// هنگام لود کامپوننت، منوی فعال را بر اساس route تنظیم کن
onMounted(() => {
    sidebarStore.setActiveMenuFromRoute()
})

// وقتی route تغییر کرد، منوی فعال را آپدیت کن
watch(() => route.path, () => {
    sidebarStore.setActiveMenuFromRoute()
})
</script>