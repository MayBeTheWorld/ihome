<template>
  <view>
  </view>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup (props, ctx) {
    const typeList = [
      plus.barcode.QR
    ]
    const barcode = ref(null)
    const goBackBtn = ref(null)

    function open () {
      // 创建上层webview
      const pages = getCurrentPages()
      const currentWebview = pages[pages.length - 1].$getAppWebview()
      // 创建一个扫码框
      barcode.value = plus.barcode.create('barcode', typeList.value, {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100vh',
        height: '100vh',
        frameColor: '#FFCC33',
        scanbarColor: '#FFCC33'
      })

      // 扫码成功回调
      barcode.value.onmarked = (type, result) => {
        console.log('子组件触发成功回调')
        ctx.emit('success', result)
        console.log('成功触发父组件success事件')
        console.log(result)
        openStartRecognize(result)
        console.log('成功传值给openStartRecognize')
        close()
      }

      // 添加到当前 Webview
      currentWebview.append(barcode.value)

      // 打开扫码
      console.log(barcode.value)
      barcode.value.start()
      console.log('开始扫码')

      // 创建一个返回按钮
      goBackBtn.value = new plus.nativeObj.View('goBackBtn', {
        top: '10%',
        left: '10%',
        height: '35px',
        width: '35px'
        // border-radius: '50px',
      },
      [{
        tag: 'img',
        id: 'img',
        src: 'static/index/cha.png',
        position: {
          width: '100%',
          left: '0%'
        }
      }

      ])
      goBackBtn.value.show()
      console.log(goBackBtn.value)
      console.log('返回按钮创建成功')
      // 拦截按钮区域触摸事件
      goBackBtn.value.interceptTouchEvent(true)
      // 添加当前webview
      currentWebview.append(goBackBtn.value)
      console.log('webview添加')
      // 添加事件监听
      goBackBtn.value.addEventListener('click', (e) => {
        ctx.emit('goBack')
      })
    }

    // 关闭扫码
    function close () {
      barcode.value.close()
      goBackBtn.value.close()
    }

    // 打开识别 网址跳转
    function openStartRecognize (result) {
      // 判断是否是网站
      // let strRegex = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/|www\.)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
      // let reg = new RegExp(strRegex);
      // console.log('happen',reg.test(result))
      // if (reg.test(result)) {
      // 	return false
      // }
      // 创建一个 webview 页面
      const barcodeWebview = plus.webview.create(result, 'barcodeWebview', {
        titleNView: {
          autoBackButton: true,
          backgroundColor: '#fff',
          titleColor: '#333'
          // titleText: '外部页面',   // 不设置标题自动读取网页标题
        },
        backButtonAutoControl: 'hide',
        hardwareAccelerated: true,
        background: '#fff'
      })
      barcodeWebview.show('slide-in-right', 200, function () {
        const title = barcodeWebview.getTitle()
      })
    }

    return {
      open,
      close,
      openStartRecognize
    }
  }
})
</script>

<style>
</style>
