// vuex的 actions模 块
import {RECEIVE_ADDRESS,RECEIVE_TABSWIPER,RECEIVE_SHOPS} from './mutation-types.js'
import {getAddress,getTabSwiper,getShowlist} from '../api'
export default{
	// 异步获取地址
	async getAddress({commit,state}){
		//发送ajax请求
		const geohash=state.latitaude+','+state.longitude
		console.log(geohash)
		const address=(await getAddress(geohash)).data
		console.log(address)
		commit(RECEIVE_ADDRESS,{address})
	},
	// 异步获取食品分类
	async getTabSwiper({commit}){
		//发送ajax请求
		const tabSwiper=(await getTabSwiper()).data
		console.log(tabSwiper)
		commit(RECEIVE_TABSWIPER,{tabSwiper})
	},
	// 异步获取商品列表
	async getShowlist({commit,state}){
		//发送ajax请求
		const shoplist=(await getShowlist(state.latitude,state.longitude)).data
		console.log(shoplist)
		commit(RECEIVE_SHOPS,{shoplist})
	},
}
