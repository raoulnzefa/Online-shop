import Vue from 'vue'
import Vuex from 'vuex'


import commonActions from './actions/actions'
import apiRequests from './actions/api-requests'
import mutations from './mutations/mutations'
import getters from './getters/getters'

const actions = {
	...commonActions,
	...apiRequests
}


Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		products: [],
		cart: []
	},

	actions,

	mutations,

	getters
})