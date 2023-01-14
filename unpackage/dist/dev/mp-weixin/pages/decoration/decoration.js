"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "decoration",
  setup() {
    return {};
  }
};
if (!Array) {
  const _easycom_publicTabBar2 = common_vendor.resolveComponent("publicTabBar");
  const _easycom_nut_button2 = common_vendor.resolveComponent("nut-button");
  (_easycom_publicTabBar2 + _easycom_nut_button2)();
}
const _easycom_publicTabBar = () => "../../components/publicTabBar/publicTabBar.js";
const _easycom_nut_button = () => "../../uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/button/index.js";
if (!Math) {
  (_easycom_publicTabBar + _easycom_nut_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      activePage: 1
    }),
    b: common_vendor.p({
      type: "primary"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/desktop/ihome2/pages/decoration/decoration.vue"]]);
wx.createPage(MiniProgramPage);
