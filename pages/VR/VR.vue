<template>
  <view class="systemBox">
    <view class="battar">
      <publicTabBar :activePage="1"/>
    </view>
    <status-bar/>
    <view class="menu">
      <nut-menu>
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
      <!--解决下面baar的馊主意-->
      <u-list-item
          v-for="(item, index) in listBoundless"
          :key="index"
      >
        <uni-card :isFull="true" extra="额外信息" sub-title="副标题"
                  thumbnail="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
                  title="基础卡片">
          <text>这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。</text>
          <!--        <view v-for="(item, index) in list" :key="index" @scrolltolower="scrolltolower" :key="index">-->
          <u-scroll-list :indicator=false @left="left" @right="right">
            <view class="scroll-list" style="flex-direction: row;">
              <view
                  v-for="(item, index) in list"
                  :key="index"
                  :class="[(index === 9) && 'scroll-list__goods-item--no-margin-right']"
                  class="scroll-list__goods-item"
              >
                <image :src="item.thumb" class="scroll-list__goods-item__image"></image>
                <text class="scroll-list__goods-item__text">￥{{ item.price }}</text>
              </view>
              <view class="scroll-list__show-more">
                <text class="scroll-list__show-more__text">查看更多</text>
                <u-icon color="#f56c6c" name="arrow-leftward" size="12"></u-icon>
              </view>
            </view>
          </u-scroll-list>
          <!--        </view>-->
        </uni-card>
      </u-list-item>
    </u-list>

  </view>
</template>

<script setup>
import { reactive, ref } from 'vue'
import StatusBar from '../../components/statusBar'

const state = reactive({
  options1: [
    {
      text: '设计费',
      value: 0
    },
    {
      text: '新款商品',
      value: 1
    },
    {
      text: '活动商品',
      value: 2
    }
  ],
  options2: [
    {
      text: '风格',
      value: 0
    },
    {
      text: '新款商品',
      value: 1
    },
    {
      text: '活动商品',
      value: 2
    }
  ],
  options3: [
    {
      text: '施工',
      value: 0
    },
    {
      text: '新款商品',
      value: 1
    },
    {
      text: '活动商品',
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
}, {
  options1: [
    {
      text: '设计费',
      value: 0
    },
    {
      text: '新款商品',
      value: 1
    },
    {
      text: '活动商品',
      value: 2
    }
  ],
  options2: [
    {
      text: '风格',
      value: 0
    },
    {
      text: '新款商品',
      value: 1
    },
    {
      text: '活动商品',
      value: 2
    }
  ],
  options3: [
    {
      text: '施工',
      value: 0
    },
    {
      text: '新款商品',
      value: 1
    },
    {
      text: '活动商品',
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
}, {
  options1: [
    {
      text: '设计费',
      value: 0
    },
    {
      text: '新款商品',
      value: 1
    },
    {
      text: '活动商品',
      value: 2
    }
  ],
  options2: [
    {
      text: '风格',
      value: 0
    },
    {
      text: '新款商品',
      value: 1
    },
    {
      text: '活动商品',
      value: 2
    }
  ],
  options3: [
    {
      text: '施工',
      value: 0
    },
    {
      text: '新款商品',
      value: 1
    },
    {
      text: '活动商品',
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
}, {
  options1: [
    {
      text: '设计费',
      value: 0
    },
    {
      text: '新款商品',
      value: 1
    },
    {
      text: '活动商品',
      value: 2
    }
  ],
  options2: [
    {
      text: '风格',
      value: 0
    },
    {
      text: '新款商品',
      value: 1
    },
    {
      text: '活动商品',
      value: 2
    }
  ],
  options3: [
    {
      text: '施工',
      value: 0
    },
    {
      text: '新款商品',
      value: 1
    },
    {
      text: '活动商品',
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
  for (let i = 0; i < 5; i++) {
    listBoundless.value.push(i)
  }
}
// 0-100的数组

const listBoundless = ref([])
// 让数组变成无限循环的数组
for (let i = 0; i < 5; i++) {
  listBoundless.value.push(i)
}
const list = ref([
  {
    price: '230.5',
    thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg'
  }, {
    price: '74.1',
    thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg'
  }, {
    price: '8457',
    thumb: 'https://cdn.uviewui.com/uview/goods/6.jpg'
  }, {
    price: '1442',
    thumb: 'https://cdn.uviewui.com/uview/goods/5.jpg'
  }, {
    price: '541',
    thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg'
  }, {
    price: '234',
    thumb: 'https://cdn.uviewui.com/uview/goods/3.jpg'
  }, {
    price: '562',
    thumb: 'https://cdn.uviewui.com/uview/goods/4.jpg'
  }, {
    price: '251.5',
    thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg'
  }]
)

</script>

<style lang="scss">
.scroll-list {
  @include flex(column);

  &__goods-item {
    margin-right: 20px;

    &__image {
      width: 60px;
      height: 60px;
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

//.postion {
//  position: fixed;
//  bottom: 110rpx;
//  top: 100rpx;
//}

//.menu {
//  width: 100%;
//  height: 30px;
//  background-color: #ff381e;
//  position: fixed;
//  top: 0;
//}
//只要设置固定位置组件就不见了
</style>
