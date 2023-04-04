"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_publicTabBar2 = common_vendor.resolveComponent("publicTabBar");
  _easycom_publicTabBar2();
}
const _easycom_publicTabBar = () => "../../components/publicTabBar/publicTabBar.js";
if (!Math) {
  (common_vendor.unref(StatusBar) + _easycom_publicTabBar)();
}
const StatusBar = () => "../../components/statusBar.js";
const _sfc_main = {
  __name: "news",
  setup(__props) {
    const handleSettingsClick = () => {
      console.log("Settings button clicked");
      common_vendor.index.navigateTo({
        url: "/components/scan/scanReturn",
        success: function(res) {
          console.log("navigateTo success");
        },
        fail: function(res) {
          console.log("navigateTo fail");
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleSettingsClick),
        b: common_vendor.p({
          activePage: 2
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-24bc9d41"], ["__file", "D:/prgraming/myproject/ihome/pages/news/news.vue"]]);
wx.createPage(MiniProgramPage);
