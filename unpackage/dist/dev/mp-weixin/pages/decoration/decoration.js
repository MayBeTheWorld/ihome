"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
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
      activePage: "1"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Projects/\u7231\u4F73\u88C5/pages/decoration/decoration.vue"]]);
wx.createPage(MiniProgramPage);
