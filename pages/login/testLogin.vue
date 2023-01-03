<template>
	<view>
		测试登录状态：{{ $store.state.isLogin }}
	</view>
	<button @click="login(true)">
		点击提交登录
	</button>
	<button @click="login(false)">
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
	
	const store = useStore()
	const login = (bool) => store.commit('storeLogin', bool)
	const text1 = ref('uview-plus UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用')
</script>

<style>

</style>
