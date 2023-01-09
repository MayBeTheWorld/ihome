<template>
	<view class="systemBox">
		<publicTabBar :activePage="3" />
		
		<view class="loginState">
			<!-- #ifdef MP-WEIXIN -->
				<view class="profileView">
					<u-avatar :src="src" shape="circle" size="150"></u-avatar>
				</view>
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
				<view class="profileView">
					<u-avatar :src="src" shape="circle" size="100"></u-avatar>
				</view>
			<!-- #endif -->
			<view class="">
				未登录
			</view>
		</view>
		<view class="loginInfo">
			<view class="Info">
				关注：0
			</view>
			<view class="Info">
				粉丝：0
			</view>
			<view class="Info3">
				被赞或收藏：0
			</view>
		</view>
		<view @click="m" class="">
			123
		</view>
		<!-- <button @click="login()">点击跳转登录</button> -->
	</view>
</template>

<script setup>
	import publicTabBar from "@/components/publicTabBar/publicTabBar.vue";
import { getCurrentInstance } from "vue";

	const m = () => console.log(getCurrentInstance());
	const login = ()=>{
		uni.navigateTo({
			url: '../login/testLogin'
		})
	}
</script>

<style lang="scss">
.loginState {
	display: flex;
	flex-direction: row;
	align-items: baseline;
	font-size: 48rpx;
	font-weight: 900;
	margin: 30rpx 0;
	.profileView {
		margin: 0 30rpx;
	}
}
.loginInfo {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	color: #666666;
	margin: 0 40rpx;
	font-size: 30rpx;
	.Info {
		flex: 1;
	}
	.Info3 {
		flex: 1.5;
	}
}
</style>
