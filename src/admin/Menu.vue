<template>
  <sidebar-menu :menu="menu"/>
</template>

<script>
    export default {
        name: 'Menu',
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Shin_1999',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/',
                        title: 'Dashboard',
                        icon: 'far fa-chart-bar'
                    },
                    {
                        href: '/',
                        title: 'Sản phẩm',
                        icon: 'fas fa-store',
                        child: [
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link'
                            }
                        ]
                    },
                    {
                        href: '/',
                        title: 'Đơn hàng',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/',
                        title: 'Giao hàng',
                        icon: 'fas fa-truck'
                    },
                    {
                        href: '/',
                        title: 'Báo cáo',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/',
                        title: 'Thông báo',
                        icon: 'fa fa-user'
                    },
                ]
            }
        }
    }
</script>
<style  scoped>

</style>