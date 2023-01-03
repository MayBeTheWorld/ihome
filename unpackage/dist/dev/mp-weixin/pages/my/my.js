"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    login() {
      common_vendor.index$1.navigateTo({
        url: "../login/testLogin"
      });
    }
  }
};
if (!Array) {
  const _easycom_publicTabBar2 = common_vendor.resolveComponent("publicTabBar");
  _easycom_publicTabBar2();
}
const _easycom_publicTabBar = () => "../../components/publicTabBar/publicTabBar.js";
if (!Math) {
  _easycom_publicTabBar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      activePage: "3"
    }),
    b: common_vendor.o(($event) => $options.login())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Projects/\u7231\u4F73\u88C5/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
