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
        // ...
    ],
    options2: [
        // ...
    ],
    options3: [
        // ...
    ],
    options4: [
        // ...
    ],
    value1: 0
})

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
const listBoundless = ref([])

const combinedList = [
    {
        thumbnail: '../../static/zhaungxiu/img.png',
        title: '深圳轩怡雅居装饰设计工程有限公司',
        text: '2021年度十大最具影响力品牌',
        service: 1771,
