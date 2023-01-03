import { createStore } from 'vuex'

const store = createStore({
	state: {
		isLogin: false //是否登录状态
	},
	mutations: {
		//定义操作isLogin状态的方法
		storeLogin(state, payload) {
			state.isLogin = payload 
		}
	}
})

export default store