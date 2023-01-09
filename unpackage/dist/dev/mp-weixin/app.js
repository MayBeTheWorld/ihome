"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/decoration/decoration.js";
  "./pages/community/community.js";
  "./pages/my/my.js";
  "./pages/login/testLogin.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.hideTabBar();
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Projects/\u7231\u4F73\u88C5/App.vue"]]);
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
