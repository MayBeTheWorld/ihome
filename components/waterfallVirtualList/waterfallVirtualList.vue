<template>
	<view class="waterfalls-vitual">
		<view class="waterfalls-vitual-colume" v-for="(item, index) in column" :key="index" :id="`waterfall_vitual_column_${index+1}`" :msg="msg" :style="{'width':w,'margin-left':index==0?0:m}"  >
			<!-- columnValue方法返回了存储在data[`column_${index+1}_values`]中对应的数据 -->
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

<script lang="ts" setup name="waterfallVirtualList">
	import { computed, defineProps, nextTick, reactive, ref, toRefs, watch } from 'vue'
	
	interface ICardItem {
		id: number;
		height: number;
		width: number;
		[key: string]: any;
	}
	
	interface IVirtualWaterFallProps {
	  gap: number; // 卡片间隔
	  column: number; // 瀑布流列数
	  pageSize: number; // 单次请求数据数量
	  request?: (page: number, pageSize: number) => Promise<ICardItem[]>; // 数据请求方法
	}
	
	// 渲染视图项
	 interface IRenderItem {
	  item: ICardItem; // 数据源
	  y: number; // 卡片距离列表顶部的距离
	  h: number; // 卡片自身高度
	  style: object; // 用于渲染视图上的样式（宽、高、偏移量）
	}
	
	// 卡片列
	interface ICordColumn {
		list: IRenderItem[];
		width: number
		height: number
	}
	
	const props = defineProps({
		value: { // 数据队列
			type: Array,
			default: []
		},
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
	})
	
	const { value:dataList, column, maxColumn, columnSpace, imageKey, hideImageKey, seat, listStyle } = toRefs(props)
	const data = reactive({})
	const msg = ref(0)
	const listInitStyle = reactive({
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
	
	// 数据队列
	// const dataList = reactive(value.value ? value.value : [] as ICardItem[]);
	
	// 计算列宽
	const w = () => `${100 / column.value - (+columnSpace.value)}%`;
	// 计算margin
	const m = () => `${(100-(100 / column.value - (+columnSpace.value)).toFixed(5)*column.value)/(column.value-1)}%`
	// list样式
	const s1 = () => { ...listInitStyle, ...listStyle }
	
	// 预加载图片
	const loadImages = (idx = 0) => {
		console.log('预加载')
		let count = 0;
		const newList = dataList.filter((item, index) => index >= idx);
		for (let i = 0; i < newList.length; i++) {
			// #ifndef APP-PLUS
			uni.getImageInfo({
				src: `${newList[i][imageKey.value]}.jpg`,
				complete: res => {
					count++;
					if (count == newList.length) initValue(idx);
				}
			})
			// #endif
			// #ifdef APP-PLUS
			plus.io.getImageInfo({
				src: `${newList[i][imageKey.value]}.jpg`,
				complete: res => {
					count++;
					if (count == newList.length) initValue(idx);
				}
			})
			// #endif
		}
	}
	
	// 刷新相关逻辑
	const useRefreshEffect = () => {
		if (!isLoaded.value) {
			refreshDatas.value = value.value
			return false
		};
		setTimeout(() => {
			refreshDatas.value = [];
			isRefresh.value = true;
			adds.value = [];
			dataList = props.value ? props.value : [] as ICardItem[];
			column.value = props.column < 2 ? 2 : props.column >= props.maxColumn ? props.maxColumn : props.column;
			columnSpace.value = props.columnSpace <= 5 ? props.columnSpace : 5;
			imageKey.value = props.imageKey;
			seat.value = props.seat;
			curIndex.value = 0;
			// 每列的数据初始化，并在 data 中添加对于列的属性
			for (let i = 1; i <= column.value; i++) {
				data[`column_${i}_values`] = [];
				msg.value++;
			}
			nextTick(() => {
				initValue(curIndex.value, 'refresh==>');
			})
		}, 1)
		return { refreshDatas, isRefresh, adds, dataList, column, columnSpace, imageKey, seat, curIndex }
	}
	useRefreshEffect()
	
	// 获取列内容
	const columnValue = (index: Number) => {
		return data[`column_${index+1}_values`];
	}
	
	// 新值赋予函数
	const change = (newValue: Any) => {
		for (let i = 0; i < dataList.length; i++) {
			const cv = data[`column_${dataList[i].column}_values`];
			for (let j = 0; j < cv.length; j++) {
				if (newValue[i] && i === cv[j].index) {
					// 将 newValue 中对应索引的值复制到 cv 中，并重新复制给 data 中数据
					data[`column_${dataList[i].column}_values`][j] = Object.assign(cv[j], newValue[i]);
					msg++;
					break;
				}
			}
		}
	}
	
	// 获取最小列
	const getMin = (a: Array, str: String) => {
		let m = a[0][str];
		let mo = a[0];
		for (let i = a.length - 1; i >= 0; i--) {
			if (a[i][str] < m) {
				m = a[i][str];
			}
		}
		mo = a.filter(i => i[str] == m);
		return mo[0];
	}
	
	// 计算每列的高度
	const getMinColumnHeight = () => {
		return new Promise(resolve => {
			const heightArr = [];
			for (let i = 1; i <= column.value; i++) {
				const query = uni.createSelectorQuery().in(this);
				// 分别获取了两列的高度
				query.select(`#waterfalls_flow_column_${i}`).boundingClientRect(data => {
					console.log(data)
					heightArr.push({ column: i, height: data.height });
				}).exec(() => {
					// 当所有列的高度都获取完成后
					if (column.value <= heightArr.length) {
						resolve(getMin(heightArr, 'height'));
					}
				});
			}
		})
	}
	
	// 初始化渲染值
	const initValue = async () => {
		isLoaded.value = false;
		if (i >= dataList.length || refreshDatas.value.length) {
			msg.value++;
			loaded();
			return false;
		}
		const minHeightRes = await getMinColumnHeight();
		const c = data[`column_${minHeightRes.column}_values`];
		dataList[i].column = minHeightRes.column;
		c.push({ ...dataList[i], cIndex: c.length, index: i, o: 0 });
		msg.value++;
	}
	
	// 图片加载完成
	const imgLoad = (item, c) => {
		const i = item.index;
		item.o = 1;
		data[`column_${c}_values`][item.cIndex] = JSON.parse(JSON.stringify(item));
		initValue(i + 1);
	}
	// 图片加载失败
	const imgError = (item, c) => {
		const i = item.index;
		item.o = 1;
		item[imageKey.value] = null;
		data[`column_${c}_values`][item.cIndex] = JSON.parse(JSON.stringify(item));
		initValue(i + 1);
	}
	// 渲染结束
	const loaded = () => {
		if (refreshDatas.value.length) {
			isLoaded.value = true;
			refresh();
			return false;
		}
		curIndex.value = dataList.length;
		if (adds.value.length) {
			dataList = adds.value[0];
			adds.value.splice(0, 1);
			initValue(curIndex.value);
		} else {
			if (dataList.length) emit('loaded');
			isLoaded.value = true;
			isRefresh.value = false;
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
	
	
	
	
	
	// 初始化容器高度
	const containerRef = ref<HTMLDivElement | null>(null);
	const scrollState = reactive({
	  viewWidth: 0,
	  viewHeight: 0,
	  start: 0 // startIndex
	});
	// 计算容器高度
	const end = computed(() => scrollState.viewHeight + scrollState.start);  // endIndex
	// 初始化所有列数据，dataList
	const queueState = reactive({
		//  queue 中保存初始格式化的列数组
		queue: Array(props.column).fill(0).map<ICordColumn>(() => ({ list: [], width:0, height: 0})), //存储卡片的二维数组
		len: 0, // 存储在当前视图上展现的所以卡片数量
	})
	
	// 计算 DOM 结构中 list 的 height 样式， 返回值中拿到了最小列索引，最大高高度和最小高度
	const computedHeight = computed(() => {
		let minIndex = 0,
			minHeight = Infinity,
			maxHeight = -Infinity;
		// 分别获取列中的高度和索引， 
		queueState.queue.forEach(({ height }, index) => {
			if (height < minHeight) {
				minHeight = height;
				minIndex= index;
			}
			if (height > maxHeight) {
				maxHeight = height
			}
		});;
		
		return { minIndex, minHeight, maxHeight }
	})
	
	// 设置列高度
	const listStyle = computed(() => { height: `${computedHeight.value.maxHeight}px` })
	
	const cardList = computed(() => queueState.queue.reduce<IRenderItem>((pre, { list}) => pre.concat(list). []))
	
	const renderList = computed(() => cardList.value.filter((i) => i.h + i.y > scrollState.start && i.y < end.value))
	
	// 将原数据源 item 转换为 cardItem 并添加到最小高度列的 list 队列里
	const addInQueue = (size: number) => {
	  for (let i = 0; i < size; i++) {
		// 获取最小高度列的索引
	    const minIndex = computedHeight.value.minIndex;
		// 获取当前高度最小列
	    const currentColumn = queueState.queue[minIndex];
		// 获取当前列的最后一个元素
	    const before = currentColumn.list[currentColumn.list.length - 1] || null;
		// 获取要的数据项
	    const dataItem = dataList[queueState.len];
		// 将新元素添加到当前列
	    const item = generatorItem(dataItem, before, minIndex);
	    currentColumn.list.push(item);
		// 更新当前列的高度
	    currentColumn.height = item.y;
		// 增加队列长度计数器
	    queueState.len++;
	  }
	};
	
	// 获取要添加的卡片的高宽和样式
	const generatorItem = (item: ICardItem, before: IRenderItem | null, index: number): IRenderItem => {
	  // itmeSizeInfo 是用来辅助计算卡片的宽度高度的 
	  const rect = itemSizeInfo.value.get(item.id);
	  const width = rect!.width;
	  const height = rect!.height;
	  // 计算卡片的垂直位置,gap 是卡片的上下间隔
	  let y = 0;
	  if (before) y = before.y + before.h + props.gap;
	
	  return {
	    item,
	    y,
	    h: height,
	    style: {
	      width: `${width}px`,
	      height: `${height}px`,
	      transform: `translate3d(${index === 0 ? 0 : (width + props.gap) * index}px, ${y}px, 0)`,
	    },
	  };
	};
	
	interface IItemRect {
	  width: number;
	  height: number;
	}
	
	const itemSizeInfo = computed(() =>
	// 将数据源中的数据累加，pre 是累加器，初始值是一个新的 Map 对象。current 是当前遍历到的 ICardItem 对象
	  dataList.reduce<Map<ICardItem["id"], IItemRect>>((pre, current) => {
		  // 向下取整得到每个卡片项的宽度
	    const itemWidth = Math.floor((scrollState.viewWidth - (props.column - 1) * props.gap) / props.column);
		// 计算得到的宽度高度的 IItemRect 对象作为值，存入 Map 中
	    pre.set(current.id, {
	      width: itemWidth,
	      height: Math.floor((itemWidth * current.height) / current.width),
	    });
	    return pre;
	  }, new Map())
	);
	
	
	
	
	
	
	// 监听 props.value
	watch(
		() => props.value,
		(newValue, oldValue) => {
			setTimeout(() => {
				nextTick(() => {
					if (isRefresh.value) return false
					if (isLoaded.value) {
						if (newValue.length <= curIndex.value) return change(newValue)
						dataList = newValue
						nextTick(() => {
							initValue(curIndex.value, "watch==>")
						})
					} else {
						adds.value.push(newValue)
					}
				})
			}, 10)
		},
		{
			deep: true
		}
	)
	// 监听 props.column
	watch(
		() => props.column,
		(newValue) => {
			useRefreshEffect()
		}
	)

</script>

<style lang="scss" scoped>
	.waterfalls-vitual {
		overflow: hidden;
		padding: 0 20rpx;
		
		&-column {
			float: left;
		}
		
		&-item {
			width: 100%;
			font-size: 0;
			overflow: hidden;
			transition: opacity .4s;
			opacity: 0;
			
			.img {
				width: 100%;
			}
			
			.inner {
				font-size: 30rpx;
			}
		}
	}
</style>