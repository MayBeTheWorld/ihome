<template>
  <view class="container">
    <view
        class="slide-content"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >
      <image :src="slides[currentSlide].image" class="slide-image" />
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

const onTouchStart = (e) => {
  startX.value = e.touches[0].clientX
}

const onTouchEnd = (e) => {
  const endX = e.changedTouches[0].clientX
  const delta = startX.value - endX

  if (delta > 50) {
    // 左滑
    setCurrentSlide((currentSlide.value + 1) % slides.length)
  } else if (delta < -50) {
    // 右滑
    setCurrentSlide((currentSlide.value - 1 + slides.length) % slides.length)
  }
}

const startX = ref(0)

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

  .slide-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

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
}
</style>
