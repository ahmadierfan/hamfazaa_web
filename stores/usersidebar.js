export const useUserSidebarStore = defineStore('usersidebar', () => {
    const isOpen = ref(true)
    const activeMenu = ref(1)
    const isMobile = ref(false)
    const isMobileOpen = ref(false)
    const route = useRoute()

    const menuItems = ref([
        { id: 1, title: 'تقویم', path: '/userpanel/', icon: 'calendar' },
        { id: 2, title: ' مالی', path: '/userpanel/wallet', icon: 'wallet' },
    ])

    // تشخیص دستگاه موبایل
    function checkMobile() {
        if (process.client) {
            isMobile.value = window.innerWidth < 768
            if (isMobile.value) {
                isOpen.value = false
                isMobileOpen.value = false
            } else {
                // در دسکتاپ سایدبار باز باشد
                isOpen.value = true
                isMobileOpen.value = false
            }
        }
    }

    // تابع جدید برای پیدا کردن منوی فعال بر اساس route فعلی
    function findActiveMenuByRoute() {
        const currentPath = route.path
        const activeItem = menuItems.value.find(item => {
            if (item.path === currentPath) return true
            if (item.path !== '/userpanel/' && currentPath.startsWith(item.path)) {
                return true
            }
            return false
        })

        return activeItem ? activeItem.id : 1
    }

    // تنظیم منوی فعال بر اساس route
    function setActiveMenuFromRoute() {
        activeMenu.value = findActiveMenuByRoute()
    }

    function toggleSidebar() {
        if (isMobile.value) {
            isMobileOpen.value = !isMobileOpen.value
        } else {
            isOpen.value = !isOpen.value
        }
    }

    function closeMobileSidebar() {
        if (isMobile.value) {
            isMobileOpen.value = false
        }
    }

    function openMobileSidebar() {
        if (isMobile.value) {
            isMobileOpen.value = true
        }
    }

    function setActiveMenu(menuId) {
        activeMenu.value = menuId
        if (isMobile.value) {
            closeMobileSidebar()
        }
    }

    function getActiveMenuTitle() {
        const activeItem = menuItems.value.find(item => item.id === activeMenu.value)
        return activeItem ? activeItem.title : 'تقویم جلسات'
    }

    function getActiveMenuIcon() {
        const activeItem = menuItems.value.find(item => item.id === activeMenu.value)
        return activeItem ? activeItem.icon : 'calendar'
    }

    // watch route changes
    watch(() => route.path, () => {
        setActiveMenuFromRoute()
        if (isMobile.value) {
            closeMobileSidebar()
        }
    })

    // رصد تغییر سایز صفحه
    onMounted(() => {
        if (process.client) {
            checkMobile()
            window.addEventListener('resize', checkMobile)
        }
    })

    return {
        isOpen,
        activeMenu,
        menuItems,
        isMobile,
        isMobileOpen,
        toggleSidebar,
        setActiveMenu,
        getActiveMenuTitle,
        getActiveMenuIcon,
        setActiveMenuFromRoute,
        findActiveMenuByRoute,
        closeMobileSidebar,
        openMobileSidebar,
        checkMobile
    }
})