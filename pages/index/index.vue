<template>
	<view class="systemBox">
		<u-loading-page :loading="loading" icon-size="40"></u-loading-page>
		<publicTabBar :activePage="0" />

		<view class="header">
			<view class="profileView">
				<image src="../../static/my/我的.png" mode="aspectFit"></image>
			</view>
			<view class="searchBox">
				<input type="text" class="search" placeholder="搜索"/>
				<image class="icon" src="../../static/index/search.png" mode="aspectFit"></image>
			</view>
			<view class="imageView">
				<image class="icon" src="../../static/index/扫一扫.png" mode="aspectFit"></image>
			</view>
		</view>
		
		<!-- <view class="">
			登录状态： {{ $store.state.isLogin }}
		</view> -->
		
	</view>
</template>

<script setup>
	import publicTabBar from "@/components/publicTabBar/publicTabBar.vue";
</script>

<style>
	@import url("./index.css");
	@import url("../overall/system.css");
</style>
