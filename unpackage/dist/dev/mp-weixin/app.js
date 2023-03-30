"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/VR/VR.js";
  "./components/scan/scanReturn.js";
  "./pages/news/news.js";
  "./pages/main/main.js";
  "./pages/subpages/login/testLogin.js";
  "./pages/subpages/login/login.js";
}
common_vendor.useStore();
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.hideTabBar();
    common_vendor.index.getStorage({
      key: "userInfo",
      success: (res) => {
        console.log(JSON.parse(res.data));
        this.$store.commit("storeLogin", JSON.parse(res.data));
      },
      fail: (err) => {
        console.log(err);
        this.$store.commit("storeLogout");
      }
    });
  },
  onShow: function() {
  },
  onHide: function() {
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/prgraming/myproject/ihome/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  app.use(common_vendor.uviewPlus);
  app.config.globalProperties.msg = "hello";
  common_vendor.index.$u.config.unit = "rpx";
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
