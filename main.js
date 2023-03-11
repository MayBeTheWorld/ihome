import App from './App';
import Store from './store';
import uviewPlus from 'uview-plus'

// #ifndef VUE3
import Vue from 'vue'
Vue.prototype.$store = Store
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(Store);
  app.use(uviewPlus);
  app.config.globalProperties.msg = 'hello';
  uni.$u.config.unit = 'rpx'
  return {
    app
  }
}
// #endif

// Vue.prototype.showModal = function(ob) {
// 	setTimeout(() => {
// 		this.$refs.modal.showModal(ob);
// 	}, 100);
// }
// Vue.prototype.showLoading = function(ob) {
// 	setTimeout(() => {
// 		this.$refs.loading.showLoading(ob);
// 	}, 100);
// }
// Vue.prototype.hideLoading = function() {
// 	setTimeout(() => {
// 		this.$refs.loading.hideLoading();
// 	}, 100);
// }
// Vue.prototype.showToast = function(ob) {
// 	setTimeout(() => {
// 		this.$refs.toast.showToast(ob);
// 	}, 100);
// }
// Vue.prototype.hideToast = function() {
// 	setTimeout(() => {
// 		this.$refs.toast.hideToast();
// 	}, 100);
// }

