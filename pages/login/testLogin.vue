<template>
	<view>
		测试登录状态：{{ $store.state.userInfo }}
	</view>
	<button @click="login">
		点击提交登录
	</button>
	<button @click="logout">
		点击退出登录
	</button>
	<!-- uview-plus组件使用 -->
	<view>
	    <u-notice-bar :text="text1"></u-notice-bar>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	import { useStore } from 'vuex'
	
	const store = useStore();
	function login() {
		uni.$u.http.post('http://43.140.203.85:8102/user/login', {
			loginName: 'test',
			password: 'a1915f03b38bf54926700dfc9ea699f8'
		}).then(res => {
			console.log(res);
			if (res) {
				console.log('登录成功')
			} else {
				uni.showToast({
					icon: 'none',
					title: '登录失败', // 如果msg不存在，就显示请求失败
					duration: 2000
				});
			};
			// console.log(res.data.content);
			store.commit('storeLogin', res.data.content);
			uni.switchTab({
				url: '/pages/main/main'
			});
		}).catch(err => {
			uni.showToast({
				icon: 'none',
				title: '请求失败', // 如果msg不存在，就显示请求失败
				duration: 2000
			})
		})
	};
		
	function logout() {
		store.commit('storeLogout');
		console.log('成功退出登录')
		uni.switchTab({
			url: '/pages/main/main'
		});
	}
	// store.commit('storeLogin', bool)
	
	const text1 = ref('uview-plus UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用')
</script>

<style>

</style>
