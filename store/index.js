import { createStore } from 'vuex'

const store = createStore({
	state: {
		// 用户信息
		userInfo: {
			isLogin: false ,//是否登录状态
			id: '',
			// profile: '',//用户头像信息
			loginName: '',
			name: '',
			token: '',
		},
	},
	mutations: {
		//定义操作isLogin状态的方法
		storeLogin(state, res) {
			const temp = {
				isLogin: true,
				id: res.id,
				loginName: res.loginName,
				name: res.name,
				token: res.token,
			}
			
			state.userInfo = Object.assign({}, state.userInfo, temp)
			// 将用户信息保存在本地
			uni.setStorageSync('userInfo', JSON.stringify(state.userInfo))
		},
		storeLogout(state) {
			const temp = {
				isLogin: false,
				id: '',
				loginName: '',
				name: '',
				token: ''
			}
			
			state.userInfo = Object.assign({}, state.userInfo, temp)
			// 将用户信息从本地缓存中删除      
			uni.removeStorageSync('userInfo')
		}
	}
})

export default store