<template>
	<view class="systemBox">
		<publicTabBar :activePage="0"/>

		<!-- 头部功能 -->
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

		<!-- 风格选择栏 -->
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

		<!-- 瀑布流展示组件 -->
		<scroll-view class="waterfallsFlowBox" scroll-y="true" >
			<swiper class="waterfallsFlowBox" :indicator-dots="false" :autoplay="false"
			:circular="true" :current="styleItem" @change="swiperChange">
				<swiper-item>
					<scroll-view class="waterfallsFlowBox" scroll-y="true" >
						<view>
							<custom-waterfalls-flow class="swiper-item" :column="column"
							:listStyle="listStyle" ref="waterfallsFlowRef" :value="data.list0">
								<!-- #ifdef MP-WEIXIN -->
								    <view class="flowItem" v-for="(item,index) in data.list0" :key="index" slot="slot{{index}}">
										<view class="descBox">
											<view class="desc">{{item.desc}}</view>
											<view class="userBox">
												<view class="user">
													<u-avatar :src="src" shape="circle" size="40"></u-avatar>
													<text class="userName">1232321312</text>
												</view>
												<view class="star" @click="saveArticle(item)">
													<u-icon :name="collectIds.includes(item.id)?'star-fill':'star'"
													:color="collectIds.includes(item.id)?'#FEB814':'#363636'"
													size="40"></u-icon>
												</view>
											</view>
										</view>
								    </view>
								<!-- #endif -->
								<!-- #ifndef MP-WEIXIN -->
								    <template v-slot:default="item">
								        <view class="flowItem">
								            <view class="descBox">
								            	<view class="desc">{{item.desc}}</view>
												<view class="userBox">
													<view class="user">
														<u-avatar :src="src" shape="circle" size="50"></u-avatar>
														<text class="userName">1232321312</text>
													</view>
													<view class="star" @click="saveArticle(item)">
														<u-icon :name="collectIds.includes(item.id)?'star-fill':'star'"
														:color="collectIds.includes(item.id)?'#FEB814':'#363636'"
														size="40" ></u-icon>
													</view>
												</view>
								            </view>
								        </view>
								    </template>
								<!-- #endif -->
							</custom-waterfalls-flow>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="waterfallsFlowBox" scroll-y="true" >
						<view>
							<custom-waterfalls-flow class="swiper-item" :column="column" :listStyle="listStyle" ref="waterfallsFlowRef" :value="data.list0">
								<!-- #ifdef MP-WEIXIN -->
								    <view class="flowItem" v-for="(item,index) in data.list0" :key="index" slot="slot{{index}}">
										<view class="descBox">
											<view class="desc">{{item.desc}}</view>
											<view class="userBox">
												<view class="user">
													<u-avatar :src="src" shape="circle" size="40"></u-avatar>
													<text class="userName">1232321312</text>
												</view>
												<view class="star" @click="saveArticle(item)">
													<u-icon :name="collectIds.includes(item.id)?'star-fill':'star'"
													:color="collectIds.includes(item.id)?'#FEB814':'#363636'"
													size="40"></u-icon>
												</view>
											</view>
										</view>
								    </view>
								<!-- #endif -->
								<!-- #ifndef MP-WEIXIN -->
								    <template v-slot:default="item">
								        <view class="flowItem">
								            <view class="descBox">
								            	<view class="desc">{{item.desc}}</view>
												<view class="userBox">
													<view class="user">
														<u-avatar :src="src" shape="circle" size="50"></u-avatar>
														<text class="userName">1232321312</text>
													</view>
													<view class="star" @click="saveArticle(item)">
														<u-icon :name="collectIds.includes(item.id)?'star-fill':'star'"
														:color="collectIds.includes(item.id)?'#FEB814':'#363636'"
														size="40" ></u-icon>
														<!--  -->
													</view>
												</view>
								            </view>
								        </view>
								    </template>
								<!-- #endif -->
							</custom-waterfalls-flow>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="waterfallsFlowBox" scroll-y="true" >
						<view>
							<custom-waterfalls-flow class="swiper-item" :column="column" :listStyle="listStyle" ref="waterfallsFlowRef" :value="data.list0">
								<!-- #ifdef MP-WEIXIN -->
								    <view class="flowItem" v-for="(item,index) in data.list0" :key="index" slot="slot{{index}}">
										<view class="descBox">
											<view class="desc">{{item.desc}}</view>
											<view class="userBox">
												<view class="user">
													<u-avatar :src="src" shape="circle" size="40"></u-avatar>
													<text class="userName">1232321312</text>
												</view>
												<view class="star" @click="saveArticle(item)">
													<u-icon :name="collectIds.includes(item.id)?'star-fill':'star'"
													:color="collectIds.includes(item.id)?'#FEB814':'#363636'"
													size="40"></u-icon>
												</view>
											</view>
										</view>
								    </view>
								<!-- #endif -->
								<!-- #ifndef MP-WEIXIN -->
								    <template v-slot:default="item">
								        <view class="flowItem">
								            <view class="descBox">
								            	<view class="desc">{{item.desc}}</view>
												<view class="userBox">
													<view class="user">
														<u-avatar :src="src" shape="circle" size="50"></u-avatar>
														<text class="userName">1232321312</text>
													</view>
													<view class="star" @click="saveArticle(item)">
														<u-icon :name="collectIds.includes(item.id)?'star-fill':'star'"
														:color="collectIds.includes(item.id)?'#FEB814':'#363636'"
														size="40" ></u-icon>
														<!--  -->
													</view>
												</view>
								            </view>
								        </view>
								    </template>
								<!-- #endif -->
							</custom-waterfalls-flow>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="waterfallsFlowBox" scroll-y="true" >
						<view>
							<custom-waterfalls-flow class="swiper-item" :column="column" :listStyle="listStyle" ref="waterfallsFlowRef" :value="data.list0">
								<!-- #ifdef MP-WEIXIN -->
								    <view class="flowItem" v-for="(item,index) in data.list0" :key="index" slot="slot{{index}}">
										<view class="descBox">
											<view class="desc">{{item.desc}}</view>
											<view class="userBox">
												<view class="user">
													<u-avatar :src="src" shape="circle" size="40"></u-avatar>
													<text class="userName">1232321312</text>
												</view>
												<view class="star" @click="saveArticle(item)">
													<u-icon :name="collectIds.includes(item.id)?'star-fill':'star'"
													:color="collectIds.includes(item.id)?'#FEB814':'#363636'"
													size="40"></u-icon>
												</view>
											</view>
										</view>
								    </view>
								<!-- #endif -->
								<!-- #ifndef MP-WEIXIN -->
								    <template v-slot:default="item">
								        <view class="flowItem">
								            <view class="descBox">
								            	<view class="desc">{{item.desc}}</view>
												<view class="userBox">
													<view class="user">
														<u-avatar :src="src" shape="circle" size="50"></u-avatar>
														<text class="userName">1232321312</text>
													</view>
													<view class="star" @click="saveArticle(item)">
														<u-icon :name="collectIds.includes(item.id)?'star-fill':'star'"
														:color="collectIds.includes(item.id)?'#FEB814':'#363636'"
														size="40" ></u-icon>
														<!--  -->
													</view>
												</view>
								            </view>
								        </view>
								    </template>
								<!-- #endif -->
							</custom-waterfalls-flow>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="waterfallsFlowBox" scroll-y="true" >
						<view>
							<custom-waterfalls-flow class="swiper-item" :column="column" :listStyle="listStyle" ref="waterfallsFlowRef" :value="data.list0">
								<!-- #ifdef MP-WEIXIN -->
								    <view class="flowItem" v-for="(item,index) in data.list0" :key="index" slot="slot{{index}}">
										<view class="descBox">
											<view class="desc">{{item.desc}}</view>
											<view class="userBox">
												<view class="user">
													<u-avatar :src="src" shape="circle" size="40"></u-avatar>
													<text class="userName">1232321312</text>
												</view>
												<view class="star" @click="saveArticle(item)">
													<u-icon :name="collectIds.includes(item.id)?'star-fill':'star'"
													:color="collectIds.includes(item.id)?'#FEB814':'#363636'"
													size="40"></u-icon>
												</view>
											</view>
										</view>
								    </view>
								<!-- #endif -->
								<!-- #ifndef MP-WEIXIN -->
								    <template v-slot:default="item">
								        <view class="flowItem">
								            <view class="descBox">
								            	<view class="desc">{{item.desc}}</view>
												<view class="userBox">
													<view class="user">
														<u-avatar :src="src" shape="circle" size="50"></u-avatar>
														<text class="userName">1232321312</text>
													</view>
													<view class="star" @click="saveArticle(item)">
														<u-icon :name="collectIds.includes(item.id)?'star-fill':'star'"
														:color="collectIds.includes(item.id)?'#FEB814':'#363636'"
														size="40" ></u-icon>
														<!--  -->
													</view>
												</view>
								            </view>
								        </view>
								    </template>
								<!-- #endif -->
							</custom-waterfalls-flow>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</scroll-view>

	</view>
</template>

<script setup>
	import { ref, reactive  } from "vue";
	import publicTabBar from "@/components/publicTabBar/publicTabBar.vue";

	//风格索引，默认第一个
	const styleItem = ref(0);
	function swiperChange(e) {
		console.log(e.detail.current);
		styleItem.value = e.detail.current;
	};

	//给瀑布流组件传值，示例数据
	const data = reactive({
		list0: [{
				image: 'https://p3.itc.cn/q_70/images03/20210228/77c2895860cd4b8a84d4a7047a48e92d.jpeg',
				title: '',
				desc: '筑位于郑州的一个休闲中心，以地势地貌为依托，将建筑、环境、人文汇聚于此。虽然没有使用坡屋顶，但是出挑的屋檐，庭院都有中国传统建筑的意味。',
				id: 1001,
			},{
				image: 'https://p0.itc.cn/q_70/images03/20210228/3bac3025b3664ccd85faa83503e5c50b.jpeg',
				title: '',
				desc: '阿丽拉乌镇酒店的设计，是一场传统江南元素的转译。除了平面布局以传统江南水乡聚落空间为原型，设计还提取了村芯、水口、巷道、水渠等标志性的公共空间元素 ，并延续了传统街巷空间的尺度体系。',
				id: 1002,
			},{
				image: 'https://image.16pic.com/00/11/59/16pic_1159705_s.jpg?imageView2/0/format/png',
				title: '',
				desc: '这个二层别墅是个外观不出挑的简欧风格，比起看到的很多华丽造型的欧式建筑，这个简欧住宅更偏向于一种复古的氛围感，浅黄色墙面砖就素雅了许多，拱形门洞也给人欧式古堡感觉，虽大体上比较现代化，但氛围感却十足',
				id: 1003,
			},{
				image: 'https://pic2.zhimg.com/80/v2-cfb06f7201d22fb67b1c6e1a7c6db419_1440w.webp',
				title: '',
				desc: '建筑为欧式风格，整体造型方正雅致，颜色舒适淡雅，立面造型以暖色调进行上下分层，搭配褐色线条划分开，使得整体空间尽显庄严大气。',
				id: 1004,
			},{
				image: 'https://p0.itc.cn/q_70/images03/20210228/3bac3025b3664ccd85faa83503e5c50b.jpeg',
				title: '',
				desc: '阿丽拉乌镇酒店的设计，是一场传统江南元素的转译。除了平面布局以传统江南水乡聚落空间为原型，设计还提取了村芯、水口、巷道、水渠等标志性的公共空间元素 ，并延续了传统街巷空间的尺度体系。',
				id: 1005,
			},{
				image: 'https://p3.itc.cn/q_70/images03/20210228/77c2895860cd4b8a84d4a7047a48e92d.jpeg',
				title: '',
				desc: '该建筑位于郑州的一个休闲中心，以地势地貌为依托，将建筑、环境、人文汇聚于此。虽然没有使用坡屋顶，但是出挑的屋檐，庭院都有中国传统建筑的意味。',
				id: 1006,
			},{
				image: 'https://pic2.zhimg.com/80/v2-cfb06f7201d22fb67b1c6e1a7c6db419_1440w.webp',
				title: '',
				desc: '建筑为欧式风格，整体造型方正雅致，颜色舒适淡雅，立面造型以暖色调进行上下分层，搭配褐色线条划分开，使得整体空间尽显庄严大气。',
				id: 1007,
			},{
				image: 'https://image.16pic.com/00/11/59/16pic_1159705_s.jpg?imageView2/0/format/png',
				title: '',
				desc: '这个二层别墅是个外观不出挑的简欧风格，比起看到的很多华丽造型的欧式建筑，这个简欧住宅更偏向于一种复古的氛围感，浅黄色墙面砖就素雅了许多，拱形门洞也给人欧式古堡感觉，虽大体上比较现代化，但氛围感却十足',
				id: 1008,
			}]
	});
	//瀑布流组件列数
	const column = ref(2);
	//单个展示项样式
	const listStyle = {
		'box-shadow':'0px 0px 10px rgba(0, 0, 0, 0.1)'
	}	//瀑布流组件初始化数据
	const waterfallsFlowRef = ref(null);
	//用户头像变量
	const profile = ref('../../static/my/我的.png');
	// 文字作者头像变量
	const src = ref('https://cdn.uviewui.com/uview/album/1.jpg')
	// 收藏文章的id合集
	const collectIds = reactive([])
	function saveArticle(item) {
		if (collectIds.indexOf(item.id) == -1) {
			collectIds.push(item.id)
			console.log('收藏成功')
		} else {
			collectIds.splice(collectIds.indexOf(item.id), 1);
			console.log('收藏取消')
		}
	}


</script>

<style>
	@import url("./index.css");
	@import url("../overall/system.css");
</style>
