<template>
  <view class="systemBox">
    <status-bar/>
    <view class="header">
      <text class="title">消息中心</text>
      <view class="settings-icon" @click="handleSettingsClick">
        <image src="../../static/message/setting.png"/>
      </view>
    </view>
    <view class="notification-list">
      <view class="notification-item">
        <view class="icon">
          <image src="../../static/message/wuLiu.png"/>
        </view>
        <text class="item-title">交易物流</text>
      </view>
      <div class="divider"></div>
      <view class="notification-item">
        <view class="icon">
          <image src="../../static/message/xiaoXi.png"/>
        </view>
        <text class="item-title">活动消息</text>
      </view>
    </view>
    <!--    <button class="scan-button" @click="click">扫一扫</button>-->
    <publicTabBar :activePage="3"/>
  </view>
</template>

<script setup>
import StatusBar from '../../components/statusBar'

const click = () => {
  console.log('click')
  uni.scanCode({
    autoDecodeCharset: true,
    success: function (res) {
      // console.log('条码类型：' + res.scanType)
      // console.log('条码内容：' + res.result)
      console.log('success')
    },
    fail: function (res) {
      console.log('fail')
    },
    complete: function (res) {
      console.log('complete')
      // 跳转页面components/scan/scanReturn.vue
      uni.navigateTo({
        url: '/components/scan/scanReturn',
        success: function (res) {
          console.log('navigateTo success')
        },
        fail: function (res) {
          console.log('navigateTo fail')
        }
      })
    }
  })
}
const handleSettingsClick = () => {
  console.log('Settings button clicked')
  uni.navigateTo({
    url: '/components/scan/scanReturn',
    success: function (res) {
      console.log('navigateTo success')
    },
    fail: function (res) {
      console.log('navigateTo fail')
    }
  })
}

</script>

<style lang="scss" scoped>
.systemBox {
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10rpx;
  background-color: #ffffff;
  margin-top: 20rpx;

}

.title {
  font-size: 32rpx;
  font-weight: bold;
  color: #000000;
}

.settings-icon {
  position: absolute;
  top: 50%;
  right: 20rpx;
  transform: translateY(-50%);
  width: 40rpx;
  height: 40rpx;
  margin-right: 20rpx;

  image {
    width: 100%;
    height: 100%;
  }

}

.notification-list {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}

.notification-item {
  display: flex;
  align-items: center; // 设置为center使图标和文字上下居中
  justify-content: flex-start;
  padding: 20rpx;
}

.icon {
  //margin-top: 10rpx;
  width: 60rpx;
  height: 60rpx;
  margin-right: 20rpx;

  image {
    width: 100%;
    height: 100%;
  }
}

.item-title {
  font-size: 28rpx;
  font-weight: 500;
}

.divider {
  height: 1rpx;
  background-color: #e5e5e5;
  margin-left: 98rpx;
}

.scan-button {
  width: 100%;
  height: 100rpx;
  background-color: #3c9cff;
  color: #ffffff;
  font-size: 32rpx;
  font-weight: bold;
  border: none;
  margin-top: 20rpx;
}
</style>
