"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  publicTabBar();
}
const publicTabBar = () => "../../components/publicTabBar/publicTabBar.js";
const _sfc_main = {
  __name: "decoration",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          activePage: 1
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Projects/\u7231\u4F73\u88C5/pages/decoration/decoration.vue"]]);
wx.createPage(MiniProgramPage);
