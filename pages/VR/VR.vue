<template>
    <view class="systemBox">
        <status-bar />
        <view class="content">
            <image class="vr-image" src="../../static/VR/VRglasses.png" />
            <text class="title">欢迎使用 VR 系统</text>
            <text class="instruction">请连接 VR 设备</text>
            <button class="connect-button">连接设备</button>
        </view>
        <publicTabBar :activePage="2" />
    </view>
</template>

<script setup>
import StatusBar from "@/components/statusBar.vue";
</script>

<style scoped lang="scss">
@keyframes wiggle {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
}

.systemBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    background-image: linear-gradient(to bottom, #fffae0, #FFFFFF);
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    justify-content: center;
    padding: 0 20px;
}

.vr-image {
    width: 600rpx;
    height: 600rpx;
    animation: wiggle 2s linear infinite;
    margin-bottom: 20px;
}

.title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.instruction {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.connect-button {
    background-image: linear-gradient(to right, #FEB814, #FBC02D);
    color: white;
    font-size: 1rem;
    padding: 8px 16px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.connect-button:hover {
    background-image: linear-gradient(to right, #FBAE10, #FDD835);
}
</style>
