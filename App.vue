<script>
import { useStore } from 'vuex'

const store = useStore()
export default {
  onLaunch: function () {
    uni.hideTabBar()
    uni.getStorage({
      key: 'userInfo',
      success: (res) => {
        console.log(JSON.parse(res.data))
        this.$store.commit('storeLogin', JSON.parse(res.data))
      },
      fail: (err) => {
        console.log(err)
        this.$store.commit('storeLogout')
      }
    })
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
@import "uview-plus/index.scss";
@import '@/uni_modules/sky-nutui/components/sky-nutui/app.scss';


</style>
