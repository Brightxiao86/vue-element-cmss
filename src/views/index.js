
const Home=()=>import('./system/Home.vue')

// 商品管理模块
const GoodAdd = ()=>import('./good/Add.vue')
const GoodList = ()=>import('./good/List.vue')

export default [
    {
        id: 1,
        text: '商品管理',
        icon: 'el-icon-menu',
        children: [
            { id: 11, text: '增加商品', path: '/good/add:id', component: GoodAdd, icon: 'el-icon-circle-plus' },
            { id: 12, text: '商品列表', path: '/good/list', component: GoodList, icon: 'el-icon-s-order' }
        ]
    },
    {
        id: 2,
        text: '商品数据',
        icon: 'el-icon-s-marketing',
        children: [
            { id: 21, text: '数据管理', path: '/home', component: Home, icon: 'el-icon-s-data'}
        ]
    }
]