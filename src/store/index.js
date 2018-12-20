// vuex最核心的管理对象
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getter from './getter.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getter
})