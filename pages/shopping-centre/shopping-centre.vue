<template>
    <view class="systemBox">
        <view class="battar">
            <publicTabBar :activePage="1"/>
        </view>
        <status-bar/>
        <view class="menu">
            <nut-menu active-color="#FEB814">
                <nut-menu-item v-model="state.value1" :options="state.options1"/>
                <nut-menu-item v-model="state.value1" :options="state.options2"/>
                <nut-menu-item v-model="state.value1" :options="state.options3"/>
                <nut-menu-item v-model="state.value1" :options="state.options4"/>
            </nut-menu>
        </view>
        <!--        把u-list放到一个ulist中，就不担心上面的滚动了，我他妈怎么没想到-->
        <u-list
                class="postion" height="calc(100vh - 110rpx - 48px)" @scrolltolower="scrolltolower"
        >
            <u-list-item
                    v-for="(item, index) in listBoundless"
                    :key="index"
            >
                <uni-card :isFull="true" :extra="'联系商家'" :sub-title="'近期服务' + item.service + '人'"
                          :thumbnail="item.thumbnail"
                          :title="item.title">
                    <text>{{ item.text }}</text>
                    <u-scroll-list :indicator=false @left="left" @right="right">
                        <view class="scroll-list" style="flex-direction: row;">
                            <view
                                    v-for="(img, idx) in item.images"
                                    :key="idx"
                                    :class="[(idx === item.images.length - 1) && 'scroll-list__goods-item--no-margin-right']"
                                    class="scroll-list__goods-item"
                            >
                                <image :src="img" class="scroll-list__goods-item__image"></image>
                            </view>
                            <view class="scroll-list__show-more">
                                <text class="scroll-list__show-more__text">查看更多</text>
                                <u-icon color="#f56c6c" name="arrow-leftward" size="12"></u-icon>
                            </view>
                        </view>
                    </u-scroll-list>
                </uni-card>
            </u-list-item>
        </u-list>
    </view>
</template>

<script setup>
import {reactive, ref} from 'vue'
import StatusBar from '../../components/statusBar.vue'

const state = reactive({
    options1: [
        {
            text: '装修公司',
            value: 0
        },
        {
            text: '上榜商家',
            value: 1
        },
        {
            text: '连锁品牌',
            value: 2
        }
    ],
    options2: [
        {
            text: '设计师',
            value: 0
        },
        {
            text: '现代简约',
            value: 1
        },
        {
            text: '轻奢',
            value: 2
        }, {
            text: '新中式',
            value: 3
        }
    ],
    options3: [
        {
            text: '装修套餐',
            value: 0
        },
        {
            text: '仅设计',
            value: 1
        },
        {
            text: '整套装修',
            value: 2
        }
    ],
    options4: [
        {
            text: '筛选',
            value: 0
        },
        {
            text: '好评排序',
            value: 'b'
        },
        {
            text: '销量排序',
            value: 'c'
        }
    ],
    value1: 0
})

// const handleChange = val => {
//   console.log('val', val)
// }
const left = () => {
    console.log('left')
}
const right = () => {
    console.log('right')
}
const scrolltolower = () => {
    console.log('scrolltolower')
    for (let i = 0; i < 4; i++) {
    //    在listBoundless中添加与之前相同的数据
        listBoundless.value.push(listBoundless.value[i])
    }
}
// 0-100的数组

const listBoundless = ref([
    {
        thumbnail: '../../static/zhaungxiu/img.png',
        title: '深圳轩怡雅居装饰设计工程有限公司',
        text: '2021年度十大最具影响力品牌',
        service: 1771,
        images: [
            '../../static/zhaungxiu/img_1.png',
            '../../static/zhaungxiu/img_2.png',
            '../../static/zhaungxiu/img_3.png',
            '../../static/zhaungxiu/img_4.png'
        ]
    },
    {
        thumbnail: '../../static/zhaungxiu/img_5.png',
        title: '东易日盛家居装饰集团股份有限公司深圳分公司',
        text: '人气榜第8名',
        service: 1771,
        images: [
            '../../static/zhaungxiu/img_6.png',
            '../../static/zhaungxiu/img_7.png',
            '../../static/zhaungxiu/img_8.png',
            '../../static/zhaungxiu/img_9.png'
        ]
    },
    {
        thumbnail: '../../static/zhaungxiu/img_10.png',
        title: '深圳市恒泰兴装饰设计工程有限公司',
        text: '2021年度最具人气品牌',
        service: 1256,
        images: [
            '../../static/zhaungxiu/img_11.png',
            '../../static/zhaungxiu/img_12.png',
            '../../static/zhaungxiu/img_13.png',
            '../../static/zhaungxiu/img_14.png'
        ]
    },
    {
        thumbnail: '../../static/zhaungxiu/img_10.png',
        title: '深圳市佳美域品牌装饰设计工程有限公司',
        text: '2021年金兔奖',
        service: 2027,
        images: [
            '../../static/zhaungxiu/img_16.png',
            '../../static/zhaungxiu/img_17.png',
            '../../static/zhaungxiu/img_18.png',
            '../../static/zhaungxiu/img_19.png'
        ]
    }
])
// 让数组变成无限循环的数组
</script>

<style lang="scss">
.scroll-list {
  @include flex(column);

  &__goods-item {
    margin-right: 20px;

    &__image {
      width: 150rpx;
      height: 92.7rpx;
      border-radius: 4px;
      border-radius: 4px;
    }

    &__text {
      color: #f56c6c;
      text-align: center;
      font-size: 12px;
      margin-top: 5px;
    }
  }

  &__show-more {
    background-color: #fff0f0;
    border-radius: 3px;
    padding: 3px 6px;
    @include flex(column);
    align-items: center;

    &__text {
      font-size: 12px;
      width: 12px;
      color: #f56c6c;
      line-height: 16px;
    }
  }
}

.battar {
  z-index: 999;
}

</style>
