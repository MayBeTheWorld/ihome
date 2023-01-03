<template>
	<view class="systemBox">
		<publicTabBar :activePage="3" />
		
		<button @click="login()">点击跳转登录</button>
	</view>
</template>

<script setup>
	import publicTabBar from "@/components/publicTabBar/publicTabBar.vue";
	
	const login = ()=>{
		uni.navigateTo({
			url: '../login/testLogin'
		})
	}
</script>

<style>

</style>
