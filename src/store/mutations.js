// vuex的 mutations模 块
import {RECEIVE_ADDRESS,RECEIVE_TABSWIPER,RECEIVE_SHOPS} from './mutation-types.js'
export default{
	[RECEIVE_ADDRESS](state,{address}){
		state.address=address
	},
	[RECEIVE_TABSWIPER](state,{tabSwiper}){
		state.tabSwiper=tabSwiper
	},
	[RECEIVE_SHOPS](state,{shoplist}){
		state.shoplist=shoplist
	},
}