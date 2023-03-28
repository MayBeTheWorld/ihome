<!-- 一级界面底部导航组件 -->
<template>
  <view class="tabBar">
    <view :style="{filter: activePage == '0'?'grayscale(0%)':'grayscale(100%)'}"
          class="tabBarView"
          @click="gotoIndexMenu('0')">
      <view class="tabBarContent">
        <view class="imageView">
          <!-- 图标设置 -->
          <image mode="aspectFit" src="../../static/index/index.png"></image>
        </view>
        <view class="textView">首页</view>
      </view>
    </view>
    <view :style="{filter: activePage == '1'?'grayscale(0%)':'grayscale(100%)'}"
          class="tabBarView"
          @click="gotoIndexMenu('1')">
      <view class="tabBarContent">
        <view class="imageView">
          <image mode="aspectFit" src="../../static/VR/vr.png"></image>
        </view>
        <view class="textView">VR</view>
      </view>
    </view>
    <view :style="{filter: activePage == '2'?'grayscale(0%)':'grayscale(100%)'}"
          class="tabBarView"
          @click="gotoIndexMenu('2')">
      <view class="tabBarContent">
        <view class="imageView">
          <image mode="aspectFit" src="../../static/news/notion.png"></image>
        </view>
        <view class="textView">消息</view>
      </view>
    </view>
    <view :style="{filter: activePage == '3'?'grayscale(0%)':'grayscale(100%)'}"
          class="tabBarView"
          @click="gotoIndexMenu('3')">
      <view class="tabBarContent">
        <view class="imageView">
          <image mode="aspectFit" src="../../static/main/mine.png"></image>
        </view>
        <view class="textView">我的</view>
      </view>
    </view>
  </view>
</template>

<script name="publicTabBar" setup>
import { defineProps } from 'vue'

uni.hideTabBar()
// 取得父组件传值并解构
const props = defineProps({
  activePage: {
    type: Number,
    default: 0
  }
})

function gotoIndexMenu (aim) {
  if (aim != props.activePage) {
    switch (aim) {
      case '0':
        uni.switchTab({
          url: '../../pages/index/index'
        })
        break
      case '1':
        uni.switchTab({
          url: '../../pages/VR/VR'
        })
        break
      case '2':
        uni.switchTab({
          url: '../../pages/news/news'
        })
        break
      case '3':
        uni.switchTab({
          url: '../../pages/main/main'
        })
        break
    }
  }
}
</script>

<style>
@import url("publicTabBar.css");
</style>
