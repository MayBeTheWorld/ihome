<template>
  <view class="container">
    <swiper
        :current="currentSlide"
        circular
        class="swiper"
        @change="onSwiperChange"
    >
      <swiper-item
          v-for="(slide, index) in slides"
          :key="index"
      >
        <image :src="slide.image" class="slide-image" @tap="navigateToVR"/>
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
import { useRouter } from 'vue-router'

const router = useRouter()
const currentSlide = ref(0)
const slides = [
  {
    image: 'static/scanreturn/img.png',
    description: '北欧极简'
  },
  {
    image: 'static/scanreturn/img_1.png',
    description: '现代简约'
  },
  {
    image: 'static/scanreturn/img_2.png',
    description: '美式田园'
  }
]

const onSwiperChange = (e) => {
  currentSlide.value = e.detail.current
}

const setCurrentSlide = (index) => {
  currentSlide.value = index
}

const navigateToVR = () => {
  uni.switchTab({
    url: '/pages/shopping-centre/shopping-centre'
  })
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
    height: 600rpx * 1.618;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .text-container {
    position: absolute;
    bottom: 280rpx;
    width: 100%;
    text-align: center;
    font-size: 32rpx;
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

      // 添加过渡动画
      transition: background-color 0.3s ease, transform 0.3s ease;
      // 初始大小
      transform: scale(1);
    }

    .active {
      background-color: skyblue;

      // 放大指示器
      transform: scale(1.3);
    }
  }
}
</style>
