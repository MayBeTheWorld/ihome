"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  _easycom_u_avatar2();
}
const _easycom_u_avatar = () => "../../node-modules/uview-plus/components/u-avatar/u-avatar.js";
if (!Math) {
  (publicTabBar + _easycom_u_avatar)();
}
const publicTabBar = () => "../../components/publicTabBar/publicTabBar.js";
const _sfc_main = {
  __name: "my",
  setup(__props) {
    const m = () => console.log(common_vendor.getCurrentInstance());
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          activePage: 3
        }),
        b: common_vendor.p({
          src: _ctx.src,
          shape: "circle",
          size: "150"
        }),
        c: common_vendor.o(m)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Projects/\u7231\u4F73\u88C5/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
