"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "publicTabBar",
  props: {
    activePage: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    common_vendor.index.hideTabBar();
    function gotoIndexMenu(aim) {
      if (aim != props.activePage) {
        switch (aim) {
          case "0":
            common_vendor.index.switchTab({
              url: "../../pages/index/index"
            });
            break;
          case "1":
            common_vendor.index.switchTab({
              url: "../../pages/VR/VR"
            });
            break;
          case "2":
            common_vendor.index.switchTab({
              url: "../../pages/news/news"
            });
            break;
          case "3":
            common_vendor.index.switchTab({
              url: "../../pages/main/main"
            });
            break;
        }
      }
    }
    return (_ctx, _cache) => {
      return {
        a: __props.activePage == "0" ? "grayscale(0%)" : "grayscale(100%)",
        b: common_vendor.o(($event) => gotoIndexMenu("0")),
        c: __props.activePage == "1" ? "grayscale(0%)" : "grayscale(100%)",
        d: common_vendor.o(($event) => gotoIndexMenu("1")),
        e: __props.activePage == "2" ? "grayscale(0%)" : "grayscale(100%)",
        f: common_vendor.o(($event) => gotoIndexMenu("2")),
        g: __props.activePage == "3" ? "grayscale(0%)" : "grayscale(100%)",
        h: common_vendor.o(($event) => gotoIndexMenu("3"))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Projects/\u7231\u4F73\u88C5/components/publicTabBar/publicTabBar.vue"]]);
wx.createComponent(Component);
