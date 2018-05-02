const routers = [
    {
        path: '/',
        meta: {
            title: '登录'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/dashboard',
        meta: {
            title: '主面板'
        },
        component: (resolve) => require(['./views/dashboard/dashboard-index.vue'], resolve)
    }
];
export default routers;