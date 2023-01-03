<!-- 一级界面底部导航组件 -->
<template>
	<view class="tabBar">
		<view class="tabBarView"
			:style="{filter: activePage == '0'?'grayscale(0%)':'grayscale(100%)'}"
			@click="gotoIndexMenu('0')">
			<view class="tabBarContent">
				<view class="imageView">
					<!-- 图标设置 -->
					<image src="../../static/index/首页.png" mode="aspectFit"></image>
				</view>
				<view class="textView">首页</view>
			</view>
		</view>
		<view class="tabBarView"
			:style="{filter: activePage == '1'?'grayscale(0%)':'grayscale(100%)'}"
			@click="gotoIndexMenu('1')">
			<view class="tabBarContent">
				<view class="imageView">
					<image src="../../static/decoration/装修.png" mode="aspectFit"></image>
				</view>
				<view class="textView">装修</view>
			</view>
		</view>
		<view class="tabBarView"
			:style="{filter: activePage == '2'?'grayscale(0%)':'grayscale(100%)'}"
			@click="gotoIndexMenu('2')">
			<view class="tabBarContent">
				<view class="imageView">
					<image src="../../static/community/社区.png" mode="aspectFit"></image>
				</view>
				<view class="textView">社区</view>
			</view>
		</view>
		<view class="tabBarView"
			:style="{filter: activePage == '3'?'grayscale(0%)':'grayscale(100%)'}"
			@click="gotoIndexMenu('3')">
			<view class="tabBarContent">
				<view class="imageView">
					<image src="../../static/my/我的.png" mode="aspectFit"></image>
				</view>
				<view class="textView">我的</view>
			</view>
		</view>
<!-- 		<button @click="log">
			
		</button> -->
	</view>
</template>

<script setup>
	import { toRefs, defineProps } from 'vue'
	
	const name = 'publicTabBar'
	const props = defineProps({
		activePage: String,
	})
	const { activePage } = props
	
	// const log = ()=> {
	// 	console.log(activePage)
	// }

	function gotoIndexMenu (aim) {
		if (aim != activePage) {
			switch (aim) {
				case '0':
					uni.switchTab({
						url: '../../pages/index/index',
					})
					break;
				case '1':
					uni.switchTab({
						url: '/pages/decoration/decoration',
					})
					break;
				case '2':
					uni.switchTab({
						url: '../../pages/community/community',
					});
					break;
				case '3':
					uni.switchTab({
						url: '../../pages/my/my',
					});
					break;
			}
		}
	}
</script>

<style>
	@import url("publicTabBar.css");
</style>