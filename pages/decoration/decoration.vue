<template>
	<view class="systemBox">
		<publicTabBar :activePage="1" />
	</view>
  <u-scroll-list>
    <view v-for="(item, index) in list" :key="index">
      <image :src="item.thumb"></image>
    </view>
  </u-scroll-list>
</template>

<script >
export default {
  name: 'decoration',
  setup() {
    const list = [
      {
        thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"
      }, {
        thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"
      }, {
        thumb: "https://cdn.uviewui.com/uview/goods/3.jpg"
      }, {
        thumb: "https://cdn.uviewui.com/uview/goods/4.jpg"
      }, {
        thumb: "https://cdn.uviewui.com/uview/goods/5.jpg"
      }
    ]
  }
}

</script>

<style>

</style>
