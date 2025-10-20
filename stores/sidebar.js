export const useSidebarStore = defineStore('sidebar', () => {
    const isOpen = ref(true)
    const activeMenu = ref(1)

    const menuItems = ref([
        { id: 1, title: 'تقویم جلسات', path: '/copanel/', icon: 'calendar' },
        { id: 2, title: 'اتاق ها', path: '/copanel/rooms', icon: 'rooms' },
        { id: 3, title: 'کاربران', path: '/copanel/users', icon: 'users' },
        { id: 4, title: 'لینک اختصاصی', path: '/copanel/link', icon: 'support' },
    ])

    function toggleSidebar() {
        isOpen.value = !isOpen.value
    }

    function setActiveMenu(menuId) {
        activeMenu.value = menuId
    }

    function getActiveMenuTitle() {
        const activeItem = menuItems.value.find(item => item.id === activeMenu.value)
        return activeItem ? activeItem.title : 'تقویم جلسات'
    }

    function getActiveMenuIcon() {
        const activeItem = menuItems.value.find(item => item.id === activeMenu.value)
        return activeItem ? activeItem.icon : 'calendar'
    }

    return {
        isOpen,
        activeMenu,
        menuItems,
        toggleSidebar,
        setActiveMenu,
        getActiveMenuTitle,
        getActiveMenuIcon
    }
})