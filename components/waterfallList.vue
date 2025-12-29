<template>
	<view class="waterfalls-flow">
		<view v-for="(item,index) in data.column" :key="index" class="waterfalls-flow-column" :id="`waterfalls_flow_column_${index+1}`" :msg="msg" :style="{'width':w,'margin-left':index==0?0:m}">
			<view :class="['column-value',{'column-value-show':item2.o}]" v-for="(item2,index2) in columnValue(index)" :key="index2" :style="[s1]" @click.stop="wapperClick(item2)">
				<view class="inner" v-if="data.seat==1">
					<!-- #ifdef MP-WEIXIN -->
					<!-- #ifdef VUE2 -->
					<slot name="slot{{item2.index}}"></slot>
					<!-- #endif -->
					<!-- #ifdef VUE3 -->
					<slot :name="`slot${item2.index}`"></slot>
					<!-- #endif -->
					<!-- #endif -->
					<!-- #ifndef MP-WEIXIN -->
					<slot v-bind="item2"></slot>
					<!-- #endif -->
				</view>
				<image :class="['img',{'img-hide':item2[hideImageKey]==true||item2[hideImageKey]==1},{'img-error':!item2[data.imageKey]}]" :src="item2[data.imageKey]" mode="widthFix" @load="imgLoad(item2,index+1)" @error="imgError(item2,index+1)" @click.stop="imageClick(item2)"></image>
				<view class="inner" v-if="data.seat==2">
					<!-- #ifdef MP-WEIXIN -->
					<!-- #ifdef VUE2 -->
					<slot name="slot{{item2.index}}"></slot>
					<!-- #endif -->
					<!-- #ifdef VUE3 -->
					<slot :name="`slot${item2.index}`"></slot>
					<!-- #endif -->
					<!-- #endif -->
					<!-- #ifndef MP-WEIXIN -->
					<slot v-bind="item2"></slot>
					<!-- #endif -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { ref, reactive, computed, watch, nextTick, onMounted } from 'vue'

export default {
	props: {
		value: Array,
		column: { // 列的数量 
			type: [Number],
			default: 2
		},
		maxColumn: { // 最大列数 
			type: [Number],
			default: 5
		},
		columnSpace: { // 列之间的间距 百分比
			type: [Number],
			default: 2
		},
		imageKey: { // 图片key
			type: [String],
			default: 'image'
		},
		hideImageKey: { // 隐藏图片key
			type: [String],
			default: 'hide'
		},
		seat: { // 文本的位置，1图片之上 2图片之下
			type: [String, Number],
			default: 2
		},
		listStyle: { // 单个展示项的样式：eg:{'background':'red'}
			type: Object
		}
	},
	emits: ['loaded'],
	setup(props, { emit }) {
		// 响应式数据
		const data = reactive({
			list: props.value ? props.value : [],
			column: props.column < 2 ? 2 : props.column,
			columnSpace: props.columnSpace <= 5 ? props.columnSpace : 5,
			imageKey: props.imageKey,
			seat: props.seat
		})
		
		const msg = ref(0)
		const listInitStyle = ref({
			'border-radius': '12rpx',
			'margin-bottom': '20rpx',
			'background-color': '#fff'
		})
		const adds = ref([]) //预置数据
		const isLoaded = ref(true)
		const curIndex = ref(0)
		const isRefresh = ref(true)
		const flag = ref(false)
		const refreshDatas = ref([])

		// 计算属性
		const w = computed(() => {
			const column_rate = `${100 / data.column - (+data.columnSpace)}%`
			return column_rate
		})
		const m = computed(() => {
			const column_margin = `${(100-(100 / data.column - (+data.columnSpace)).toFixed(5)*data.column)/(data.column-1)}%`
			return column_margin
		})
		const s1 = computed(() => {
			return { ...listInitStyle.value, ...props.listStyle }
		})

	// 方法
		// 预加载图片
		const loadImages = (idx = 0) => {
			let count = 0
			const newList = data.list.filter((item, index) => index >= idx)
			for (let i = 0; i < newList.length; i++) {
				// #ifndef APP-PLUS
				uni.getImageInfo({
					src: `${newList[i][props.imageKey]}.jpg`,
					complete: res => {
						count++
						if (count == newList.length) initValue(idx)
					}
				})
				// #endif
				// #ifdef APP-PLUS
				plus.io.getImageInfo({
					src: `${newList[i][props.imageKey]}.jpg`,
					complete: res => {
						count++
						if (count == newList.length) initValue(idx)
					}
				})
				// #endif
			}
		}

		// 刷新相关逻辑	
		const refresh = () => {
			if (!isLoaded.value) {
				refreshDatas.value = props.value
				return false
			}
			setTimeout(() => {
				refreshDatas.value = []
				isRefresh.value = true
				adds.value = []
				data.list = props.value ? props.value : []
				data.column = props.column < 2 ? 2 : props.column >= props.maxColumn ? props.maxColumn : props.column
				data.columnSpace = props.columnSpace <= 5 ? props.columnSpace : 5
				data.imageKey = props.imageKey
				data.seat = props.seat
				curIndex.value = 0
				// 每列的数据初始化
				for (let i = 1; i <= data.column; i++) {
					data[`column_${i}_values`] = []
					msg.value++
				}
				nextTick(() => {
					initValue(curIndex.value, 'refresh==>')
				})
			}, 1)
		}

		// 获取列内容
		const columnValue = (index) => {
			return data[`column_${index+1}_values`]
		}

		// 监听 prop.value 是否修改，修改则触发 change
		const change = (newValue) => {
			for (let i = 0; i < data.list.length; i++) {
				const cv = data[`column_${data.list[i].column}_values`]
				for (let j = 0; j < cv.length; j++) {
					if (newValue[i] && i === cv[j].index) {
						// 将 newValue 中对应索引的值复制到 cv 中，并重新复制给 data 中数据
						data[`column_${data.list[i].column}_values`][j] = Object.assign(cv[j], newValue[i])
						msg.value++
						break
					}
				}
			}
		}

		// 获取最小列
		const getMin = (a, s) => {
			let m = a[0][s]
			let mo = a[0]
			for (var i = a.length - 1; i >= 0; i--) {
				if (a[i][s] < m) {
					m = a[i][s]
				}
			}
			mo = a.filter(i => i[s] == m)
			return mo[0]
		}

		// 获取各列高度，并触发 getMin 函数获取最小列高度
		const getMinColumnHeight = () => {
			return new Promise(resolve => {
				const heightArr = []
				for (let i = 1; i <= data.column; i++) {
					const query = uni.createSelectorQuery()
					// 分别获取了两列的高度
					query.select(`#waterfalls_flow_column_${i}`).boundingClientRect(data => {
						heightArr.push({ column: i, height: data.height })
					}).exec(() => {
						if (data.column <= heightArr.length) {
							resolve(getMin(heightArr, 'height'))
						}
					})
				}
			})
		}

		// 初始化渲染值
		const initValue = async (i, from) => {
			isLoaded.value = false
			if (i >= data.list.length || refreshDatas.value.length) {
				msg.value++
				loaded()
				return false
			}
			const minHeightRes = await getMinColumnHeight()
			const c = data[`column_${minHeightRes.column}_values`]
			data.list[i].column = minHeightRes.column
			c.push({ ...data.list[i], cIndex: c.length, index: i, o: 0 })
			msg.value++
		}

		// 图片加载完成
		const imgLoad = (item, c) => {
			const i = item.index
			item.o = 1
			data[`column_${c}_values`][item.cIndex] = JSON.parse(JSON.stringify(item))
			initValue(i + 1)
		}
		
		// 图片加载失败
		const imgError = (item, c) => {
			const i = item.index
			item.o = 1
			item[data.imageKey] = null
			data[`column_${c}_values`][item.cIndex] = JSON.parse(JSON.stringify(item))
			initValue(i + 1)
		}

		// 渲染结束
		const loaded = () => {
			if (refreshDatas.value.length) {
				isLoaded.value = true
				refresh()
				return false
			}
			curIndex.value = data.list.length
			if (adds.value.length) {
				data.list = adds.value[0]
				adds.value.splice(0, 1)
				initValue(curIndex.value)
			} else {
				if (data.list.length) emit('loaded')
				isLoaded.value = true
				isRefresh.value = false
			}
		}

		// 单项点击事件
		const wapperClick = (item) => {
			emit('wapperClick', item);
		}
		// 图片点击事件
		const imageClick = (item) => {
			emit('imageClick', item);
		}

	// 监听器
		// 监听props.value
		watch(() => props.value, (newValue, oldValue) => {
			setTimeout(() => {
				nextTick(() => {
					if (isRefresh.value) return false
					if (isLoaded.value) {
						if (newValue.length <= curIndex.value) return change(newValue)
						data.list = newValue
						nextTick(() => {
							initValue(curIndex.value, 'watch==>')
						})
					} else {
						adds.value.push(newValue)
					}
				})
			}, 10)
		}, { deep: true })
		// 监听props.column
		watch(() => props.column, (newValue) => {
			refresh()
		})

		// 初始化
		onMounted(() => {
			refresh()
		})

		// 返回模板中使用的数据和方法
		return {
			data,
			msg,
			w,
			m,
			s1,
			columnValue,
			loadImages,
			refresh,
			change,
			getMin,
			getMinColumnHeight,
			initValue,
			imgLoad,
			imgError,
			loaded,
			wapperClick,
			imageClick
		}
	}
}
</script>

<style lang="scss" scoped>
	.waterfalls-flow {
		overflow: hidden;
		padding: 0 20rpx;
		
		&-column {
			float: left;
		}
	}

	.column-value {
		width: 100%;
		font-size: 0;
		overflow: hidden;
		transition: opacity .4s;
		opacity: 0;

		&-show {
			opacity: 1;
		}

		.inner {
			font-size: 30rpx;
		}

		.img {
			width: 100%;

			&-hide {
				display: none;
			}

			&-error {
				background: #f2f2f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAiAQMAAAAatXkPAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAAIZJREFUCNdlzjEKwkAUBNAfEGyCuYBkLyLuxRYW2SKlV1JSeA2tUiZg4YrLjv9PGsHqNTPMSAQuyAJgRDHSyvBPwtZoSJXakeJI9iuRLGDygdl6V0yKDtyMAeMPZySj8yfD+UapvRPj2JOwkyAooSV5IwdDjPdCPspe8LyTl9IKJvDETKKRv6vnlUasgg0fAAAAAElFTkSuQmCC) no-repeat center center;
			}
		}
	}
</style>