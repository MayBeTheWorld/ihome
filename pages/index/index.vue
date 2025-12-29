<template>
	<!-- 去除手机状态栏变化 -->
	<!-- #ifdef APP-PLUS -->
	<view class="status-bar"></view>
	<!-- #endif -->

	<view class="systemBox">
		<publicTabBar :activePage="0" />

		<!-- 头部功能 -->
		<view class="header">
			<view class="profileView">
				<image :src='profile' @click="mine" mode="aspectFit"></image>
				<!-- "../../static/my/mine.png" -->
			</view>
			<view class="searchBox">
				<input type="text" class="search" placeholder="搜索" />
				<image class="icon" src="../../static/index/search.png" mode="aspectFit"></image>
			</view>
			<view class="imageView">
				<image class="icon" @click="openScan" src="../../static/index/scan.png" mode="aspectFit"></image>
			</view>
		</view>


		<scroll-view class="indexView" scroll-x="true">
			<!-- 风格选择栏 -->
			<view class="styleChooseBox">
				<view class="buildingStyle" v-for="(item,index) in styleLIst" @click="chooseStyle(index)"
					:style="{ color: styleItem == index?'#FEB814':'#363636' }">{{item}}</view>
			</view>

			<!-- 瀑布流展示组件 -->
			<swiper class="waterfallsFlowBox" :autoplay="false" :circular="true" :current="styleItem"
				@change="swiperChange">
				<swiper-item v-for="(items,articleIndex) in article">
					<scroll-view class="waterfallsFlowBox" scroll-y="true" @scrolltolower="addNew(articleIndex)" :lower-threshold="600">
						<waterfallList class="swiper-item" :column="column" :listStyle="listStyle"
							ref="waterfallsFlowRef" :value="items">
							<!-- #ifdef MP-WEIXIN -->
							<view class="flowItem" v-for="(item,index) in items" :key="index"
								slot="slot{{index}}">
								<view class="descBox">
									<view class="desc">{{item.desc}}</view>
									<view class="userBox">
										<view class="user">
											<u-avatar :src="src" shape="circle" size="40"></u-avatar>
											<text class="userName">用户名</text>
										</view>
										<view class="star" @click="saveArticle(item)">
											<u-icon :name="collectIds.includes(item.id)?'star-fill':'star'"
												:color="collectIds.includes(item.id)?'#FEB814':'#363636'" size="40">
											</u-icon>
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
												<text class="userName">用户名</text>
											</view>
											<view class="star" @click="saveArticle(item)">
												<u-icon :name="collectIds.includes(item.id)?'star-fill':'star'"
													:color="collectIds.includes(item.id)?'#FEB814':'#363636'"
													size="40"></u-icon>
											</view>
										</view>
									</view>
								</view>
							</template>
							<!-- #endif -->
						</waterfallList>
					</scroll-view>
				</swiper-item>
			</swiper>
		</scroll-view>

		<!-- 扫码组件 -->
		<!-- #ifdef APP-PLUS -->
		<view class="scan-box" :class="{active: isShowScan}">
			<!-- <uni-nav-bar if="isShowScan" fixed :status-bar="true" title="扫一扫" @clickLeft="closeScan">
				</uni-nav-bar> -->
			<scan ref="scanRef" @success="getScanCode" @goBack="closeScan" />
		</view>
		<!-- #endif -->
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		nextTick
	} from "vue";
	import publicTabBar from "@/components/publicTabBar/publicTabBar.vue";
	import waterfallList from "../../components/waterfallList.vue";
	// #ifdef APP-PLUS
	import scan from "@/components/scan/scan.vue";
	// #endif
	import {
		useStore
	} from 'vuex'

	const store = useStore();


	// 扫一扫功能
	const scanRef = ref();
	const isShowScan = ref(false);
	// #ifdef APP-PLUS
	function openScan() {
		scanRef.value.open();
		isShowScan.value = true;
	};
	// 隐藏扫描
	function closeScan() {
		scanRef.value.close();
		isShowScan.value = false;
	};
	// 扫码成功
	function getScanCode(val) {
		closeScan();
		uni.showToast({
			icon: 'none',
			title: '扫码成功',
		});
	};
	// #endif
	// #ifndef APP-PLUS
	function openScan() {
		uni.scanCode({
			success: function() {
			},
			fail: function() {
			}
		})
	}
	// #endif


	// 测试函数
	const mine = () => {
		// 调转我的界面
	}

	// 风格选择栏功能
	//风格索引，默认第一个
	const styleItem = ref(0);
	// 定义风格列表
	const styleLIst = reactive(['简欧风', '中式风', '美式风', '日式风', '田园风'])
	// 定义可选风格列表
	const styleOption = reactive(['简欧风', '中式风', '美式风', '日式风', '田园风', '现代主义风', '园林风'])
	const oldStyle = reactive({
		styleItem: 0
	});
	// 捆绑scroll-view的change事件
	function swiperChange(e) {
		styleItem.value = e.detail.current;
	};
	function chooseStyle(num) {
		if (styleItem.value == num) {
			return false
		} else {
			nextTick(() => {
				styleItem.value = num;
			})
		}
	};

	// 瀑布流组件功能
	// 瀑布流展示数据
	const article = reactive([])
	// 初始化各个风格数据
	for (let i = 0; i < styleLIst.length; i++) {
	  const innerArr = [];
	  innerArr.push({
			image: 'https://p3.itc.cn/q_70/images03/20210228/77c2895860cd4b8a84d4a7047a48e92d.jpeg',
			title: '',
			desc: '该建筑位于郑州的一个休闲中心，以地势地貌为依托，将建筑、环境、人文汇聚于此。虽然没有使用坡屋顶，但是出挑的屋檐，庭院都有中国传统建筑的意味。',
			id: 1001,
		}, {
			image: 'https://p0.itc.cn/q_70/images03/20210228/3bac3025b3664ccd85faa83503e5c50b.jpeg',
			title: '',
			desc: '阿丽拉乌镇酒店的设计，是一场传统江南元素的转译。除了平面布局以传统江南水乡聚落空间为原型，设计还提取了村芯、水口、巷道、水渠等标志性的公共空间元素 ，并延续了传统街巷空间的尺度体系。',
			id: 1002,
		}, {
			image: 'https://image.16pic.com/00/11/59/16pic_1159705_s.jpg?imageView2/0/format/png',
			title: '',
			desc: '这个二层别墅是个外观不出挑的简欧风格，比起看到的很多华丽造型的欧式建筑，这个简欧住宅更偏向于一种复古的氛围感，浅黄色墙面砖就素雅了许多，拱形门洞也给人欧式古堡感觉，虽大体上比较现代化，但氛围感却十足',
			id: 1003,
		}, {
			image: 'https://pic2.zhimg.com/80/v2-cfb06f7201d22fb67b1c6e1a7c6db419_1440w.webp',
			title: '',
			desc: '建筑为欧式风格，整体造型方正雅致，颜色舒适淡雅，立面造型以暖色调进行上下分层，搭配褐色线条划分开，使得整体空间尽显庄严大气。',
			id: 1004,
		}, {
			image: 'https://p0.itc.cn/q_70/images03/20210228/3bac3025b3664ccd85faa83503e5c50b.jpeg',
			title: '',
			desc: '阿丽拉乌镇酒店的设计，是一场传统江南元素的转译。除了平面布局以传统江南水乡聚落空间为原型，设计还提取了村芯、水口、巷道、水渠等标志性的公共空间元素 ，并延续了传统街巷空间的尺度体系。',
			id: 1005,
		}, {
			image: 'https://p3.itc.cn/q_70/images03/20210228/77c2895860cd4b8a84d4a7047a48e92d.jpeg',
			title: '',
			desc: '该建筑位于郑州的一个休闲中心，以地势地貌为依托，将建筑、环境、人文汇聚于此。虽然没有使用坡屋顶，但是出挑的屋檐，庭院都有中国传统建筑的意味。',
			id: 1006,
		}, {
			image: 'https://pic2.zhimg.com/80/v2-cfb06f7201d22fb67b1c6e1a7c6db419_1440w.webp',
			title: '',
			desc: '建筑为欧式风格，整体造型方正雅致，颜色舒适淡雅，立面造型以暖色调进行上下分层，搭配褐色线条划分开，使得整体空间尽显庄严大气。',
			id: 1007,
		}, {
			image: 'https://image.16pic.com/00/11/59/16pic_1159705_s.jpg?imageView2/0/format/png',
			title: '',
			desc: '这个二层别墅是个外观不出挑的简欧风格，比起看到的很多华丽造型的欧式建筑，这个简欧住宅更偏向于一种复古的氛围感，浅黄色墙面砖就素雅了许多，拱形门洞也给人欧式古堡感觉，虽大体上比较现代化，但氛围感却十足',
			id: 1008,
		});
	  article.push(innerArr);
	}
	// 随机添加示例数据
	const data = reactive({
		list0: [{
			image: 'https://p3.itc.cn/q_70/images03/20210228/77c2895860cd4b8a84d4a7047a48e92d.jpeg',
			title: '',
			desc: '该建筑位于郑州的一个休闲中心，以地势地貌为依托，将建筑、环境、人文汇聚于此。虽然没有使用坡屋顶，但是出挑的屋檐，庭院都有中国传统建筑的意味。',
			id: 1001,
		}, {
			image: 'https://p0.itc.cn/q_70/images03/20210228/3bac3025b3664ccd85faa83503e5c50b.jpeg',
			title: '',
			desc: '阿丽拉乌镇酒店的设计，是一场传统江南元素的转译。除了平面布局以传统江南水乡聚落空间为原型，设计还提取了村芯、水口、巷道、水渠等标志性的公共空间元素 ，并延续了传统街巷空间的尺度体系。',
			id: 1002,
		}, {
			image: 'https://image.16pic.com/00/11/59/16pic_1159705_s.jpg?imageView2/0/format/png',
			title: '',
			desc: '这个二层别墅是个外观不出挑的简欧风格，比起看到的很多华丽造型的欧式建筑，这个简欧住宅更偏向于一种复古的氛围感，浅黄色墙面砖就素雅了许多，拱形门洞也给人欧式古堡感觉，虽大体上比较现代化，但氛围感却十足',
			id: 1003,
		}, {
			image: 'https://pic2.zhimg.com/80/v2-cfb06f7201d22fb67b1c6e1a7c6db419_1440w.webp',
			title: '',
			desc: '建筑为欧式风格，整体造型方正雅致，颜色舒适淡雅，立面造型以暖色调进行上下分层，搭配褐色线条划分开，使得整体空间尽显庄严大气。',
			id: 1004,
		}, {
			image: 'https://p0.itc.cn/q_70/images03/20210228/3bac3025b3664ccd85faa83503e5c50b.jpeg',
			title: '',
			desc: '阿丽拉乌镇酒店的设计，是一场传统江南元素的转译。除了平面布局以传统江南水乡聚落空间为原型，设计还提取了村芯、水口、巷道、水渠等标志性的公共空间元素 ，并延续了传统街巷空间的尺度体系。',
			id: 1005,
		}, {
			image: 'https://p3.itc.cn/q_70/images03/20210228/77c2895860cd4b8a84d4a7047a48e92d.jpeg',
			title: '',
			desc: '该建筑位于郑州的一个休闲中心，以地势地貌为依托，将建筑、环境、人文汇聚于此。虽然没有使用坡屋顶，但是出挑的屋檐，庭院都有中国传统建筑的意味。',
			id: 1006,
		}, {
			image: 'https://pic2.zhimg.com/80/v2-cfb06f7201d22fb67b1c6e1a7c6db419_1440w.webp',
			title: '',
			desc: '建筑为欧式风格，整体造型方正雅致，颜色舒适淡雅，立面造型以暖色调进行上下分层，搭配褐色线条划分开，使得整体空间尽显庄严大气。',
			id: 1007,
		}, {
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
		'box-shadow': '0px 0px 10px rgba(0, 0, 0, 0.1)'
	}
	//瀑布流组件初始化数据
	const waterfallsFlowRef = ref(null);
	//用户头像变量
	const profile = ref('../../static/main/mine.png');
	// 文字作者头像变量
	const src = ref('https://cdn.uviewui.com/uview/album/1.jpg')
	// 收藏文章
	const collectIds = reactive([])
	function saveArticle(item) {
		if (collectIds.indexOf(item.id) == -1) {
			collectIds.push(item.id)
		} else {
			collectIds.splice(collectIds.indexOf(item.id), 1);
		}
	}
	// 捆绑scroll-view的scrolltolower事件,触底刷新功能
	function addNew(index) {
		const batch = 10; // 预加载更大批次，提前准备更多卡片
		let length = article[index].length
		for (let i = 0;i <= batch;i++) {
			let t = Math.random()
			const num = ref(Math.floor(0 * (1 - t) + data.list0.length * t))
			article[index].push(data.list0[num.value]);
			article[index][length - 1].id += 1
		}
	}
</script>

<style lang="scss">
	@import url("../overall/system.css");

	// 手机状态栏
	.status-bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	// 扫码控件
	.scan-box {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, .8);
		transform: translateX(100%);
		transition: transform 0.05s;

		&.active {
			transform: translateX(0)
		}
	}

	/* 头部功能部分 */
	.header {
		width: 100%;
		height: 100rpx;
		position: relative;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 10rpx;
	}

	.profileView {
		display: block;
		margin: 20rpx 20rpx;
		border-radius: 50rpx;
	}

	.profileView>image {
		width: 80rpx;
		height: 80rpx;
	}

	.imageView {
		margin: 0 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.icon {
		width: 60rpx;
		height: 60rpx;
	}

	.searchBox {
		width: 100%;
		margin: 0 0 0 20rpx;
		padding: 10rpx 20rpx;
		display: flex;
		flex-direction: row;
		justify-items: center;
		align-items: center;
		border-radius: 50rpx;
		border: 0rpx;
		background-color: rgba(0, 0, 0, 0.05);

	}

	.search {
		height: 100%;
		width: 100%;
		font-size: 0.75rem;
		border: 0;
		margin-left: 10rpx;
		padding-top: 5rpx;
	}

	.indexView {
		height: calc(100vh - 90rpx - 110rpx);
	}

	/* 风格选择栏部分 */
	.styleChooseBox {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		padding: 20rpx 0;
	}

	.buildingStyle {
		display: flex;
		align-items: center;
		font-weight: 900;
		height: 50rpx;
	}

	.styleChooseView {
		height: 90rpx;
	}

	/* 瀑布流组件部分 */
	.waterfallsFlowBox {
		height: calc(100vh - var(--status-bar-height) - 110rpx - 90rpx - 110rpx);
	}

	.descBox {
		margin: 0 20rpx;
	}

	.desc {
		margin-top: 20rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		text-overflow: '';
		overflow: hidden;
	}

	.userBox {
		margin: 20rpx 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.user {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.userName {
		padding-left: 10rpx;
	}

	.star {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
