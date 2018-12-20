// 包含n个接口请求函数模块
import ajax from './ajax.js'

const BASE_URL = '/api'

export const getAddress=(geohash)=>ajax(`${BASE_URL}/address/${geohash}`)

export const goods=()=>ajax(`${BASE_URL}/goods`)

export const getTabSwiper=()=>ajax(`${BASE_URL}/tabSwiper`)

export const getShowlist=(latitude,longitude)=>ajax(`${BASE_URL}/shoplist`,{latitude,longitude})