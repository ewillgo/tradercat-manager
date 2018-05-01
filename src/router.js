const routers = [
    {
        path: '/',
        meta: {
            title: '登录'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    }
];
export default routers;