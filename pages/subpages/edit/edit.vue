<template>
	<view class="systemBox">
		<view class="tap">
			风格频道
		</view>
		<view class="buttonBox">
			<u-grid :border="false" col="4">
				<u-grid-item v-for="(item1, index1) in styleList" :key="index1">
					<view class="button">
						<u-button style="color: black;height: 70rpx;width: 150rpx;margin: 7rpx 0;" size="small"
							type="primary" color="#e9ecf0" text="镂空" @click="remove(index1)">
							{{ item1 }}
						</u-button>
					</view>
				</u-grid-item>
			</u-grid>
		</view>
		<view class="tap">
			可选风格
		</view>
		<view class="buttonBox">
			<u-grid :border="false" col="4">
				<u-grid-item v-for="(item2, index2) in styleOption" :key="index2">
					<view class="button">
						<u-button style="color: black;height: 70rpx;width: 150rpx;margin: 7rpx 0;" size="small"
							type="primary" color="#e9ecf0" text="镂空" @click="add(index2)">
							{{ item2 }}
						</u-button>
					</view>
				</u-grid-item>
			</u-grid>
		</view>
		<!-- <u-tag text="标签" size="large" closable :show="close1" @close="close1 = false" bgColor="#e9ecf0" color="#000" borderColor="#e9ecf0"></u-tag>
		<u-tag text="标签" type="warning" closable :show="close2" @close="close2 = false"></u-tag> -->
	</view>
</template>

<script setup>
	import {
		reactive
	} from "vue";
	// 在setup中使用this，这里用_this代表this
	import {
		getCurrentInstance
	} from 'vue'
	// 在setup中使用onUnload
	import {
		onUnload
	} from '@dcloudio/uni-app'

	// 接受起始页码数据
	const props = defineProps({
		styleList: String
	})
	const close1 = true
	const close2 = true
	// 当前风格列表
	const styleList = reactive(props.styleList.split(','))
	// 定义所有风格列表
	const allStyle = reactive(['简欧风', '中式风', '美式风', '日式风', '田园风', '现代主义风', '园林风'])
	// 可选风格列表
	const styleOption = reactive(allStyle.filter((e) => !styleList.includes(e)))
	console.log(styleList)

	function remove(index) {
		styleOption.push(styleList[index])
		styleList.splice(index, 1)
	}

	function add(index) {
		if (styleList.indexOf(styleOption[index]) == -1) {
			styleList.push(styleOption[index])
			styleOption.splice(index, 1)
		}
	}
	
	// 页面卸载时向起始页通过事件传递数据
	const _this = getCurrentInstance().appContext.config.globalProperties
	onUnload(options => {
		console.log('page onLoad: ', options)
	
		const eventChannel = _this.getOpenerEventChannel()
		eventChannel.emit('getNewStyleLIst', {
			data: styleList
		});
	})
</script>


<style>
	@import url("../../overall/system.css");

	.systemBox {
		background-color: white;
		align-items: center;
	}

	.tap {
		display: flex;
		align-items: center;
		height: 80rpx;
	}

	.buttonBox {
		width: 700rpx;
	}

	.button {
		margin: 0rpx;
	}
</style>