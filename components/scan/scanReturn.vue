<template>
  <view class="container">
    <swiper
        :current="currentSlide"
        :duration="300"
        circular
        class="swiper"
        @change="onSwiperChange"
    >
      <swiper-item
          v-for="(slide, index) in slides"
          :key="index"
      >
        <view class="slide-content">
          <image :src="slide.image" class="slide-image"/>
          <view class="text-container">
            <text>{{ slide.description }}</text>
          </view>
          <view class="indicators">
            <view
                v-for="(s, i) in slides"
                :key="i"
                :class="{ active: i === currentSlide }"
                class="indicator"
                @tap="setCurrentSlide(i)"
            ></view>
          </view>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const currentSlide = ref(0)
const slides = [
  {
    image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
    description: 'Slide 1 description'
  },
  {
    image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
    description: 'Slide 2 description'
  },
  {
    image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    description: 'Slide 3 description'
  }
]

const onSwiperChange = (e) => {
  currentSlide.value = e.detail.current
}

const setCurrentSlide = (index) => {
  currentSlide.value = index
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /*关键代码，这样才能全屏*/
  position: absolute;
  top: 0;
  left: 0;

  .swiper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .swiper-item {
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .slide-image {
    position: absolute;
    top: 100rpx;
    left: 50%;
    transform: translateX(-50%);
    width: 600rpx;
    // 高度和宽度比例为黄金分割
    height: 600rpx * 1.618;
    //  阴影
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    //  圆角
    border-radius: 10px;
  }

  .text-container {
    position: absolute;
    bottom: 250rpx; // 调整这个值以放置文本到合适的位置
    width: 100%;
    text-align: center;
  }

  .indicators {
    position: absolute;
    bottom: 200rpx;
    width: 100%;
    display: flex;
    justify-content: center;

    .indicator {
      width: 10px;
      height: 10px;
      margin: 0 5px;
      background-color: #ccc;
      border-radius: 50%;
      transition: background-color 0.3s ease;
    }

    .active {
      background-color: skyblue;
    }
  }
}
</style>
