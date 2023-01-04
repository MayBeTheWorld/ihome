"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  publicTabBar();
}
const publicTabBar = () => "../../components/publicTabBar/publicTabBar.js";
const _sfc_main = {
  __name: "my",
  setup(__props) {
    const login = () => {
      common_vendor.index.navigateTo({
        url: "../login/testLogin"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          activePage: 3
        }),
        b: common_vendor.o(($event) => login())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Projects/\u7231\u4F73\u88C5/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
