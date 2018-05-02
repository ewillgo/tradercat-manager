const routers = [
    {
        path: '/',
        meta: {
            title: '登录'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/register',
        meta: {
            title: '注册账号'
        },
        component: (resolve) => require(['./views/register.vue'], resolve)
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