"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  publicTabBar();
}
const publicTabBar = () => "../../components/publicTabBar/publicTabBar.js";
const _sfc_main = {
  __name: "community",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          activePage: 2
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/desktop/ihome2/pages/community/community.vue"]]);
wx.createPage(MiniProgramPage);
