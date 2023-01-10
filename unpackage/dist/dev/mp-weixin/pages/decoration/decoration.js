"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "decoration",
  setup() {
  }
};
if (!Array) {
  const _easycom_publicTabBar2 = common_vendor.resolveComponent("publicTabBar");
  const _easycom_u_scroll_list2 = common_vendor.resolveComponent("u-scroll-list");
  (_easycom_publicTabBar2 + _easycom_u_scroll_list2)();
}
const _easycom_publicTabBar = () => "../../components/publicTabBar/publicTabBar.js";
const _easycom_u_scroll_list = () => "../../node-modules/uview-plus/components/u-scroll-list/u-scroll-list.js";
if (!Math) {
  (_easycom_publicTabBar + _easycom_u_scroll_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      activePage: 1
    }),
    b: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: item.thumb,
        b: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/desktop/ihome2/pages/decoration/decoration.vue"]]);
wx.createPage(MiniProgramPage);
