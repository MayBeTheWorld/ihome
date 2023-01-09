<!-- 弃用组件 -->
<template>
	<scroll-view class="cardScroll" scroll-y="true" >
		<view class="cardBox">
			<view v-for="(item, i) in flowData" class="card">
				<img class="cardPic" :src="item.picUrl">
				<view class="cardText">
					<text class="text" selectable='false'>
						{{ item.text }}
					</text>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script setup name="waterfallFlow">
import { onMounted } from "vue";
	const props = defineProps({
		flowData: {
			type: Array,
			default: []
		}
	})
	
	// onMounted(() => {
	// 	flowSort()
	// })
	
	// function flowSort () {
	// 	//1.获取主容器宽度
	// 	const content = document.getElementsByClassName("cardBox")[0];
	// 	const contentWidth = content.offsetWidth;
	// 	console.log(contentWidth);
	// 	//2.获取每个卡片宽度
	// 	const cards = content.children;
	// 	const cardWidth = cards[0].offsetWidth;
	// 	console.log(cards.length)
	// 	console.log(cardWidth);
	// 	//3.第一行可以排列多少张卡片
	// 	const nums = Math.floor(contentWidth/cardWidth); 
	// 	console.log(nums)
	// 	//4.收集第一排的所有高度
	// 	let arrHeight = [];
	// 	//通过遍历各个元素重新计算高度而实现
	// 	for (let i = 0;i < cards.length;i++) {
	// 		// 此处均为第一行元素
	// 		if(i < nums) { 
	// 			//获取第一行每张图片高度，并取到数组中
	// 			arrHeight.push(cards[i].offsetHeight) 
	// 		}else{
	// 			//创建第一个元素对象
	// 			let obj = {
	// 				minH:arrHeight[0],
	// 				minI:0	            
	// 			};
	// 			for (let j = 0;j < arrHeight.length;j++){
	// 				//与每行高度做对比，有更小的就覆盖，直达取到最小
	// 				if(arrHeight[j]<obj.minH) { 
	// 					obj.minH = arrHeight[j];
	// 					obj.minI = j
	// 				}
	// 			};
	// 			console.log(obj)
	// 			cards[i].style.position = "absolute";
	// 			cards[i].style.left = cards[obj.minI].offsetLeft + "px";
	// 			cards[i].style.top = obj.minH + "px";
	// 			arrHeight[obj.minI] = arrHeight[obj.minI] + cards[i].offsetHeight;
	// 		}
	// 	}
				
	// }
</script>

<style lang="scss">
.cardScroll {
	/*110rpx为header的高度,90rpx为风格选项条的高度，110rpx为底部导航栏的高度*/
	height: calc(100vh - 110rpx - 90rpx - 110rpx);
}
.cardBox {
	width: 750rpx;
	.card {
		display: block;
		float: left;
		background-color: #ffffff;
		margin: 10rpx;
		width: 350rpx;
		border-radius: 10rpx;
		overflow: hidden;
		// border: 2rpx solid red;
		box-shadow:
		0px 1.7px 3.6px rgba(0, 0, 0, 0.024),
		0px 4.6px 10px rgba(0, 0, 0, 0.035),
		0px 11.2px 24.1px rgba(0, 0, 0, 0.046),
		0px 37px 80px rgba(0, 0, 0, 0.07);
		.cardPic {
			width: 100%;
		}
		.cardText {
			margin: 0 20rpx 10rpx 20rpx;
			.text {
				font-size: 0.8rem;
				font-weight: 900;
				font-family: cursive;
			}
		}
	}
}

</style>