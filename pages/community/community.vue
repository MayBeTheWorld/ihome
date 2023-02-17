<template>
  <view class="systemBox">
    <publicTabBar :activePage="2"/>
    <view class="u-page">
      <u-list
          @scrolltolower="scrolltolower"
      >
        <u-list-item
            v-for="(item, index) in state.indexList"
            :key="index"
        >
          <u-cell
              :title="`列表长度-${index + 1}`"
          >
            <template #icon>
              <u-avatar
                  shape="square"
                  size="35"
                  :src="item.url"
                  customStyle="margin: -3px 5px -3px 0"
              >
              </u-avatar>
            </template>
          </u-cell>
        </u-list-item>
      </u-list>
    </view>
  </view>
</template>

<script setup>
import {reactive, ref, onMounted, onUnmounted} from 'vue'

const state = reactive({
  indexList: [],
  urls: [
    'https://cdn.uviewui.com/uview/album/1.jpg',
    'https://cdn.uviewui.com/uview/album/2.jpg',
    'https://cdn.uviewui.com/uview/album/3.jpg',
    'https://cdn.uviewui.com/uview/album/4.jpg',
    'https://cdn.uviewui.com/uview/album/5.jpg',
    'https://cdn.uviewui.com/uview/album/6.jpg',
    'https://cdn.uviewui.com/uview/album/7.jpg',
    'https://cdn.uviewui.com/uview/album/8.jpg',
    'https://cdn.uviewui.com/uview/album/9.jpg',
    'https://cdn.uviewui.com/uview/album/10.jpg',
  ]
})

const scrolltolower = () => {
  this.loadmore()
}
onMounted(() => {
  loadmore()
})
const loadmore = () => {
  for (let i = 0; i < 30; i++) {
    this.indexList.push({
      url: this.urls[uni.$u.random(0, this.urls.length - 1)]
    })
  }
  console.log('loadmore')

}
</script>

<style>

</style>
