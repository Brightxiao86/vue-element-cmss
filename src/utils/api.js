import axios from './fetch'

// 登入接口 { unsername, password}
export function fetchLogin(data) {
    return axios({
        url: '/users/cms/login',
        method: 'POST',
        data
    })
}


// 获取所有品类
export function fetchCates(params) {
    return axios({
      url: '/cates/all',
      method: 'GET',
      params
    })
  }

// 添加商品
export function fetchNewGood(data) {
    return axios({
        url: '/goods/new',
        method: 'POST',
        data
    })
}

// 添加商品品类
export function fetchAddCate(data) {
    return axios({
        url: '/cates/add',
        method: 'POST',
        data
    })
}
//商品列表
 export function fetchGoodList(params){
     return axios({
         url:'/goods/list',
         method:'GET',
         params
     })
 }
 //获取商品详情
 export function fetchGoodAmend(params){
     return axios({
         url: '/goods/amend',
         method:'GET',
         params
     })
 }

export default {
    fetchLogin,
    fetchNewGood,
    fetchCates,
    fetchAddCate,
    fetchGoodList,
    fetchGoodAmend,
}

// ES6模块化语法：

// 使用 export 抛出，必须使用 import { } from '' 进行引入。
// 使用 export default {} 抛出，必须 import xx from '' 进入引入。
// 在同一个模块中，有且最多只能有 export default，可以没有
// 在同一个模块中，export 可以有多少，数量不限
