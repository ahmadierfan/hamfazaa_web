export const useUsrSidebarStore = defineStore('usrsidebar', () => {
    const isOpen = ref(true)
    const activeMenu = ref(1)

    const menuItems = ref([
        { id: 1, title: 'تقویم جلسات', path: '/usrpanel/', icon: 'calendar' },
        { id: 4, title: 'پرداخت ها', path: '/usrpanel/transactions', icon: 'support' },
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