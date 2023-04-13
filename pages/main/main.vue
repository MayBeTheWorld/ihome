<template>
	<!-- 去除手机状态栏变化 -->
	<!-- #ifdef APP-PLUS -->
	<view class="status-bar"></view>
	<!-- #endif -->
	
	<view class="systemBox">
		<scroll-view class="pageBox" scroll-y="true" >
			<publicTabBar :activePage="3" />
			
			<view v-if="isLogin" :key="isLogin">
				<!-- 头像与用户名 -->
				<view class="loginState" @click="loginout">
					<!-- #ifdef MP-WEIXIN -->
						<view class="profileView">
							<u-avatar :src="profile" shape="circle" size="150"></u-avatar>
						</view>
					<!-- #endif -->
					<!-- #ifndef MP-WEIXIN -->
						<view class="profileView">
							<u-avatar :src="profile" shape="circle" size="150"></u-avatar>
						</view>
					<!-- #endif -->
					<!-- <navigator url="../subpages/login/testLogin.vue">
						{{ $store.state.userInfo.name }}{{ isLogin }}
					</navigator> -->
					<view class="">
						{{ $store.state.userInfo.name }}{{ isLogin }}
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
			</view>
			<view v-if="!isLogin" :key="isLogin" class="emptyUser">
				<view>登录IhomeAPP</view>
				<view>体验更多新奇功能，尽享高级家装服务</view>
				<view class="btn" @click="login">
					立即登录
				</view>
			</view>
			
			<view class="functionsBox">
				<view class="functionsTitle">
					<text>常用工具</text>
				</view>
				<view class="functions">
					<view v-for="func in functionList" :key="func.aim" @click="" class="functioinItem">
						<!-- 微信无法使用本地图片，需要通过接口返回 -->
						<!-- #ifdef MP -->
						<image style="width: 100%;height: 100%;"
							:src='`../../static/main/${func.aim}.png`' mode="aspectFit">
						</image>
						<!-- #endif -->
						<!-- #ifndef MP -->
						<image style="width: 100%;height: 100%;"
							:src="`../../static/main/${func.aim}.png`" mode="aspectFit"></image>
						<!-- #endif -->
						<view class="functionsText">
							{{ func.word }}
						</view>
						
					</view>
				</view>
			</view>
			<view class="topic hot" style="">
				<view class="topicTitle">热门话题</view>
				<view class="topicText">#提升生活品质的小家电</view>
				<view class="topicText">装修时我最后后悔遗憾的事</view>
			</view>
			<view class="topic new">
				<view class="topicTitle">最新话题</view>
				<view class="topicText">#皮质沙发怎么养护？</view>
				<view class="topicText">#有没有空气炸锅推荐呀~</view>
			</view>
			<view class="gap"></view>
		</scroll-view>
	</view>
</template>

<script setup>
	import publicTabBar from "@/components/publicTabBar/publicTabBar.vue";
	import { ref, reactive, onActivated, nextTick } from "vue";
	import { useStore } from 'vuex'
	
	const store = useStore();
	const isLogin = ref(store.state.userInfo.isLogin);
	// onActivated(() => {
	// 	// 此处isLogin.value为DOM更新前值，保存更新前旧值
	// 	let oldLogin = isLogin.value;
	// 	// console.log('isLogin',isLogin.value)
	// 	// console.log('oldLogin',oldLogin)
	// 	nextTick(() => {
	// 		// 此处isLogin.value为DOM更新后值，如果isLogin前后值不同则触发更新
	// 		isLogin.value = store.state.userInfo.isLogin;
	// 		// console.log('isLogin',isLogin.value);
	// 		// console.log('oldLogin',oldLogin)
	// 	});
	// });                                                               
	// 头像变量
	const profile = ref('https://images.freeimages.com/365/images/previews/af5/funny-cat-vector-illustration-25725.jpg');	
	// 功能列表
	const functionList = reactive([{
		aim: 'comment',
		word: '发布的评论'
	},{
		aim: 'decorationInformation',
		word: '装修信息'
	},{
		aim: 'like',
		word: '我的点赞'
	},{
		aim: 'collect',
		word: '我的收藏'
	},{
		aim: 'article',
		word: '发布的文章'
	},{
		aim: 'novicesGuide',
		word: '新手攻略'
	},{
		aim: 'shoppingCart',
		word: '购物车'
	},{
		aim: 'orders',
		word: '我的订单'
	}]);
	
	function login () {
		uni.navigateTo({
			url: '/pages/subpages/login/login',
			fail: (res) => {
				console.log(res)
			}
		})
	};
	
	function loginout () {
		store.commit('storeLogout');
		console.log('成功退出登录')
		uni.reLaunch({
			url: '/pages/main/main'
		});
	};
</script>

<style lang="scss">
@import url("../overall/system.css");
// 手机状态栏
.status-bar {
		height: var(--status-bar-height);
		width: 100%;
	}
// 页面可滑动部分高度
.pageBox {
	height: calc(100vh - 110rpx);
}

// 用户未登录时展示部分
.emptyUser {
	background: #fff;
	padding-top: 40rpx;
	text-align: center;
	line-height: 50rpx;
	.btn {
		width: 710rpx;
		height: 80rpx;
		margin: 22rpx auto 0;
		text-align: center;
		line-height: 80rpx;
		border: 2rpx solid #cdcdcd;
		border-radius: 80rpx;
		font-size: 32rpx;
	}
}
// 用户信息部分
.loginState {
	display: flex;
	flex-direction: row;
	align-items: baseline;
	font-size: 40rpx;
	font-weight: 900;
	padding: 30rpx 0;
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

// 常用工具部分
.functionsTitle {
	margin: 40rpx 40rpx 0 40rpx;
	font-weight: 900;
}
.functions {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 160rpx);
	margin: 20rpx 40rpx;
	.functioinItem {
		display: flex;
		flex-direction: column;
		justify-items: center;
		width: 100%;
		margin: 20rpx 0;
		.functionsText {
			display: flex;
			justify-content: center;
			margin-top: 15rpx;
			color: #666666;
			font-size: 26rpx;
		}
	}
}

// 话题部分
.topic {
	margin: 0 40rpx 30rpx 40rpx;
	padding: 40rpx 40rpx 30rpx 40rpx;
	border-radius: 40rpx;
	.topicTitle {
		font-size: 36rpx;
		margin-bottom: 20rpx;
	}
	.topicText {
		font-size: 24rpx;
		margin-left: 20rpx;
		margin-bottom: 15rpx;
		color: #8f8f8f;
	}
}
.hot {
	background: linear-gradient(to right top, rgb(245,246,248), rgb(229,215,240));
}
.new {
	background: linear-gradient(to right top, rgb(244,246,249), rgb(249,230,214));
}

// 话题底部填充
.gap {
	height: 20rpx;
}
</style>
