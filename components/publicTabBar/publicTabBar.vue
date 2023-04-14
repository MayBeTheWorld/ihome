<!-- 一级界面底部导航组件 -->
<template>
    <view class="tabBar">
        <view class="tabBarView"
              :style="{filter: activePage == '0'?'grayscale(0%)':'grayscale(100%)'}"
              @click="gotoIndexMenu('0')">
            <view class="tabBarContent">
                <view class="imageView">
                    <!-- 图标设置 -->
                    <image src="../../static/index/index.png" mode="aspectFit"></image>
                </view>
                <view class="textView">首页</view>
            </view>
        </view>
        <view class="tabBarView"
              :style="{filter: activePage == '1'?'grayscale(0%)':'grayscale(100%)'}"
              @click="gotoIndexMenu('1')">
            <view class="tabBarContent">
                <view class="imageView">
                    <image src="../../static/VR/vr.png" mode="aspectFit"></image>
                </view>
                <view class="textView">商城</view>
            </view>
        </view>
        <view class="tabBarView"
              :style="{filter: activePage == '2'?'grayscale(0%)':'grayscale(100%)'}"
              @click="gotoIndexMenu('2')">
            <view class="tabBarContent">
                <view class="imageView">
                    <image src="../../static/VR/vr.png" mode="aspectFit"></image>
                </view>
                <view class="textView">VR</view>
            </view>
        </view>
        <view class="tabBarView"
              :style="{filter: activePage == '3'?'grayscale(0%)':'grayscale(100%)'}"
              @click="gotoIndexMenu('3')">
            <view class="tabBarContent">
                <view class="imageView">
                    <image src="../../static/news/notion.png" mode="aspectFit"></image>
                </view>
                <view class="textView">消息</view>
            </view>
        </view>
        <view class="tabBarView"
              :style="{filter: activePage == '4'?'grayscale(0%)':'grayscale(100%)'}"
              @click="gotoIndexMenu('4')">
            <view class="tabBarContent">
                <view class="imageView">
                    <image src="../../static/main/mine.png" mode="aspectFit"></image>
                </view>
                <view class="textView">我的</view>
            </view>
        </view>
    </view>
</template>

<script setup name="publicTabBar">
import {defineProps} from 'vue'

uni.hideTabBar();
//取得父组件传值并解构
const props = defineProps({
    activePage: {
        type: Number,
        default: 0
    }
})

function gotoIndexMenu(aim) {
    if (aim != props.activePage) {
        switch (aim) {
            case '0':
                uni.switchTab({
                    url: '../../pages/index/index',
                });
                console.log('跳转首页')
                break;
            case '1':
                uni.switchTab({
                    url: '../../pages/shopping-centre/shopping-centre',
                    success: function (res) {
                        console.log('navigateTo success')
                    },
                    fail: function (res) {
                        console.log('navigateTo fail')
                    }
                });
                break;
            case '2':
                uni.switchTab({
                    url: '../../pages/VR/VR',
                });
                break;
            case '3':
                uni.switchTab({
                    url: '../../pages/news/news',
                });
                break;
            case '4':
                uni.switchTab({
                    url: '../../pages/main/main',
                });
                break;
        }
    }
}
</script>

<style>
@import url("publicTabBar.css");
</style>
