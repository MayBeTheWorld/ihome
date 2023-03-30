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
        <image :src="slide.image" class="slide-image"/>
      </swiper-item>
    </swiper>
    <view class="text-container">
      <text>{{ slides[currentSlide].description }}</text>
    </view>
    <view class="indicators">
      <view
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ active: index === currentSlide }"
          class="indicator"
          @tap="setCurrentSlide(index)"
      ></view>
    </view>
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
  padding-top: 100rpx;

  .swiper {
    width: 600rpx;
    // 高度和宽度比例为黄金分割
    height: 600rpx * 1.618;
    //  阴影
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    //  圆角
    border-radius: 10px;
  }

  .swiper-item {
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .slide-image {
    width: 100%;
    height: 100%;
    //  图片适应容器的大小，包括圆角
    object-fit: cover;
    border-radius: 10px;
  }

  .text-container {
    margin-top: 100rpx;
    text-align: center;
  }

  .indicators {
    display: flex;
    justify-content: center;
    margin-top: 100rpx;

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
