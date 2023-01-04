"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-loading-page",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props],
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_u_loading_icon2 = common_vendor.resolveComponent("u-loading-icon");
  const _easycom_u_transition2 = common_vendor.resolveComponent("u-transition");
  (_easycom_u_loading_icon2 + _easycom_u_transition2)();
}
const _easycom_u_loading_icon = () => "../u-loading-icon/u-loading-icon.js";
const _easycom_u_transition = () => "../u-transition/u-transition.js";
if (!Math) {
  (_easycom_u_loading_icon + _easycom_u_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.image
  }, _ctx.image ? {
    b: _ctx.image,
    c: _ctx.$u.addUnit(_ctx.iconSize),
    d: _ctx.$u.addUnit(_ctx.iconSize)
  } : {
    e: common_vendor.p({
      mode: _ctx.loadingMode,
      size: _ctx.$u.addUnit(_ctx.iconSize),
      color: _ctx.loadingColor
    })
  }, {
    f: common_vendor.t(_ctx.loadingText),
    g: _ctx.$u.addUnit(_ctx.fontSize),
    h: _ctx.color,
    i: common_vendor.p({
      show: _ctx.loading,
      ["custom-style"]: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: _ctx.bgColor,
        display: "flex"
      }
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f571bd8d"], ["__file", "D:/Projects/\u7231\u4F73\u88C5/node_modules/uview-plus/components/u-loading-page/u-loading-page.vue"]]);
wx.createComponent(Component);
