<template>
	<view class="systemBox">
		<u-loading-page :loading="loading" icon-size="40"></u-loading-page>
		<publicTabBar :activePage="0"/>

		<view class="header">
			<view class="profileView">
				<image :src='profile' mode="aspectFit"></image>
				<!-- "../../static/my/我的.png" -->
			</view>
			<view class="searchBox">
				<input type="text" class="search" placeholder="搜索"/>
				<image class="icon" src="../../static/index/search.png" mode="aspectFit"></image>
			</view>
			<view class="imageView">
				<image class="icon" src="../../static/index/扫一扫.png" mode="aspectFit"></image>
			</view>
		</view>
		
		<scroll-view class="styleChooseView" scroll-x="true">
			<view class="styleChooseBox">
				<view class="buildingStyle" @click="styleItem = 0" 
				:style="{ color: styleItem == 0?'#FEB814':'#363636' }">简欧风</view>
				<view class="buildingStyle" @click="styleItem = 1"
				:style="{ color: styleItem == 1?'#FEB814':'#363636' }">中式风</view>
				<view class="buildingStyle" @click="styleItem = 2"
				:style="{ color: styleItem == 2?'#FEB814':'#363636' }">美式风</view>
				<view class="buildingStyle" @click="styleItem = 3"
				:style="{ color: styleItem == 3?'#FEB814':'#363636' }">日式风</view>
				<view class="buildingStyle" @click="styleItem = 4"
				:style="{ color: styleItem == 4?'#FEB814':'#363636' }">田园风</view>
			</view>
		</scroll-view>
		
		<waterfallFlow :flowData='flowData'/>
		<!-- <scroll-view class="contentBox" scroll-y="true" >
			<view>
				瀑布流内容
			</view>
		</scroll-view> -->
		<!-- <view class="">
			登录状态： {{ $store.state.isLogin }}
		</view> -->
		
	</view>
</template>

<script setup>
	import { ref, reactive  } from "vue";
	import waterfallFlow from "@/components/waterfallFlow/waterfallFlow.vue";
	import publicTabBar from "@/components/publicTabBar/publicTabBar.vue";
	
	//风格索引，默认第一个
	const styleItem = ref('0');
	//给瀑布流组件传值，示例数据
	const flowData = reactive([{
		picUrl: 'https://p3.itc.cn/q_70/images03/20210228/77c2895860cd4b8a84d4a7047a48e92d.jpeg',
		text: '该建筑位于郑州的一个休闲中心，以地势地貌为依托，将建筑、环境、人文汇聚于此。虽然没有使用坡屋顶，但是出挑的屋檐，庭院都有中国传统建筑的意味。'
	},{
		picUrl: 'https://p0.itc.cn/q_70/images03/20210228/3bac3025b3664ccd85faa83503e5c50b.jpeg',
		text: '阿丽拉乌镇酒店的设计，是一场传统江南元素的转译。除了平面布局以传统江南水乡聚落空间为原型，设计还提取了村芯、水口、巷道、水渠等标志性的公共空间元素 ，并延续了传统街巷空间的尺度体系。'
	},{
		picUrl: 'https://image.16pic.com/00/11/59/16pic_1159705_s.jpg?imageView2/0/format/png',
		text: '这个二层别墅是个外观不出挑的简欧风格，比起看到的很多华丽造型的欧式建筑，这个简欧住宅更偏向于一种复古的氛围感，浅黄色墙面砖就素雅了许多，拱形门洞也给人欧式古堡感觉，虽大体上比较现代化，但氛围感却十足~'
	},{
		picUrl: 'https://pic2.zhimg.com/80/v2-cfb06f7201d22fb67b1c6e1a7c6db419_1440w.webp',
		text: '建筑为欧式风格，整体造型方正雅致，颜色舒适淡雅，立面造型以暖色调进行上下分层，搭配褐色线条划分开，使得整体空间尽显庄严大气。'
	}])
	//头像变量
	const profile = ref('../../static/my/我的.png')
	
	// function 
</script>

<style>
	@import url("./index.css");
	@import url("../overall/system.css");
</style>
