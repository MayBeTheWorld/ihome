<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
			<view class="profileView">
				<u-avatar shape="circle" size="150"></u-avatar>
			</view>
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN -->
			<view class="profileView">
				<u-avatar shape="circle" size="150"></u-avatar>
			</view>
		<!-- #endif -->
		<view class="login-form">
			<input class="input-row js-input-numer" v-model="account" maxlength="20" 
			placeholder="输入账号"/>
			<!-- <input class="input-row js-input-numer" v-model="account" type="number" maxlength="11" placeholder="输入手机号"/> -->
			<input class="input-row" v-model="password" @confirm="bindLogin" 
			type="password" maxlength="32" placeholder="输入密码" confirm-type="登录"/>
			<button type="button" class="login-btn" @click="bindLogin">登录</button>
			<!-- 账号密码
			loginName: 'test',
			password: 'a1915f03b38bf54926700dfc9ea699f8' -->
			<view class="bot">
				<!-- 待接口完成后完善 -->
				<view class="forget" hover-class="none" @click="tip">
					忘记密码?
				</view>
				<view class="sign" hover-class="none" @click="tip">
					立即注册
				</view>
			</view>
		</view>
		<view class="auth-row" v-if="hasProvider">
			<view class="auth-image" v-for="provider in providerList" 
			:key="provider.value">
				<!-- #ifdef APP-PLUS -->
				<image class="img" :src="provider.image" 
				@click="authLogin(provider.value)"></image>
				<!-- #endif -->
				<!-- 小程序处理 -->
				<!-- #ifdef MP-WEIXIN -->
				<button v-if="provider.value == 'weixin'" class="log-btn" 
				open-type="getUserInfo" @getuserinfo="getUserInfo">
					<image class="img" :src="provider.image"></image>
				</button>
				<!-- #endif -->
			</view>
		</view>
	</view>
</template>

<script setup>
	import { reactive, ref } from "vue";
	import { useStore } from 'vuex'
	
	const store = useStore();
	const hasProvider = false; // 是否有服务商平台可登录
	const providerList = reactive([]);
	const account = ref('');
	const password = ref('');
	
	// 获取服务供应商
	function getProvider() {
		let mayProviderList = ['weixin', 'qq', 'sinaweibo'];
		// 判断是否用某种登录工具登录
		uni.getProvider({
			service: 'oauth',	
			success: res => {
				if (res.provider && res.provider.length) {
					for (let i = 0; i < res.provider.length; i++) {
						var tempProvider = res.provider[i];
						if (~mayProviderList.indexOf(tempProvider)) {
							providerList.value.push({
								value: tempProvider,
								// image: '/static/image/login/' + tempProvider + '.png'
							});
							console.log(res.provider);
						}
					}
					hasProvider.value = true;
				}
			},
			fail: err => {
				console.error('获取服务供应商失败：' + JSON.stringify(err));
			}
		});
	};
	// 从服务供应商获取信息
	function getUserInfo(res) {
		if (!res.detail.iv) {
			uni.showToast({
				icon: "none",
				title: "您取消了授权,登录失败"
			});
			return false;
		};
		// 用户授权，获取用户基本信息和加密数据（encryptedData、iv），后台进行查询配对用户，生成userInfo返回前台
		// 这里有一个验证用户接口
		setTimeout(() => {
			let profile = JSON.parse(res.detail.rawData)
			profile.nickname = profile.nickName
			
			const temp = {
				token: '',
				profile,
			}
			// store.commit('storeLogin', res.data.content);
			uni.switchTab({
				url: '/pages/index/index'
			});
		}, 100);
	};
	// 账号密码登录
	function bindLogin() {
		// 保存填写的账号密码
		const userAccount = account.value.trim()
		const userPassword = password.value.trim()
		if (!userAccount.length) {
			alert('请输入账号')
			console.log('请输入账号');
			return false;
		}
		// if(!(/^1[3456789]\d{9}$/.test(account))){ 
		// 	alert("手机号码有误，请重填");  
		// 	console.log("手机号码有误，请重填")
		// 	return false; 
		// } 
		if (password.length < 6) {
			alert('密码最短为 6 个字符');
			console.log('密码最短为 6 个字符')
			return false;
		}
		
		uni.showLoading({
		    title: '登录中'
		});
		
		// 实现登录
		console.log(account.value + ',' + password.value)
		uni.$u.http.post('http://43.140.203.85:8102/user/login', {
			loginName: account.value,
			password: password.value
			// loginName: 'test',
			// password: 'a1915f03b38bf54926700dfc9ea699f8'
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
			uni.reLaunch({
				url: '/pages/index/index'
			});
		}).catch(err => {
			uni.showToast({
				icon: 'none',
				title: '请求失败', // 如果msg不存在，就显示请求失败
				duration: 2000
			});
			console.log(err)
		});
		uni.hideLoading();
		
	};
	// 授权登录
	function authLogin(value) {
		uni.login({
			provider: value,
			success: res => {
				console.log(res)
				uni.getUserInfo({
					provider: value,
					success: infoRes => {
						console.log(infoRes);
						// 这里可以有一个验证用户接口，判定授权的QQ/微博/微信有无绑定平台账号，如果没有新建账号，有的话平台账号登录
						// uni.request({
						// })
						let profile = {};
						infoRes.userInfo.nickname = infoRes.userInfo.nickName;
						profile = infoRes.userInfo;
						console.log(profile);
						
						const temp = {
							token: '',
							profile,
						};
						
						// this.storeLogin(temp)
						// store.commit('storeLogin', temp);
	
						// 登录完之后到首页
						uni.switchTab({
							url: '/pages/index/index'
						});
					}
				});
			},
			fail: err => {
				console.error('授权失败：' + JSON.stringify(err));
			}
		});
	};
	// 验证报错
	function alert (msg) {
		uni.showToast({
			icon: 'none',
			title: msg
		});
	};
	// 服务未完成提示
	function tip () {
		uni.showToast({
			icon: 'none',
			title:'服务尚未完善'
		})
	}
	
</script>

<style lang="scss">
.profileView {
	display: flex;
	padding-top: 110rpx;
	justify-content: center;
	align-items: center;
}
	
.input-row {
	width: 500rpx;
	height: 75rpx;
	margin: 0 auto;
	border: 1px solid #FEB814;
	color: #6c6c6c;
	border-radius: 75rpx;
	padding: 0 50rpx;
	line-height: 75rpx;
	margin-bottom: 45rpx;
	font-size: 26rpx;
}

.login-form {
	padding-top: 110rpx;
}
.login-btn {
	width: 600rpx;
	height: 75rpx;
	margin: 0 auto;
	border: 1px solid #FEB814;
	border-radius: 75rpx;
	line-height: 75rpx;
	margin-bottom: 45rpx;
	font-size: 26rpx;
	color: #fff;
	background: #FEB814;
}
.bot {
	display: flex;
	width: 550rpx;
	padding: 0 17rpx;
	font-size: 26rpx;
	margin: 0 auto;
	justify-content: space-between;
}
.sign {
	color: #FEB814;
}
.auth-row {
	display: flex;
	flex-direction: row;
	justify-content: center;
	position: absolute;
	bottom: 100rpx;
	left: 0;
	width: 100%;
	.auth-image {
		width: 50px;
		height: 50px;
		border: 1px solid #dddddd;
		border-radius: 50px;
		margin: 0 20px;
		background-color: #ffffff;
		overflow:hidden;
	}
	.img {
		width: 30px;
		height: 30px;
		margin: 10px;
	}
	input{
		outline:none;
		border:none;
		list-style: none;
	}
}
.log-btn{
	margin:0;
	padding:0;
	background: #fff!important;
	height:48px;
	&::after{
		background-color:transparent;
		margin:0;
		padding:0;
		border:0;
	}
}
</style>
