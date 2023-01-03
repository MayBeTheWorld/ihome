"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "publicTabBar",
  props: {
    activePage: {
      type: String,
      default: "-1"
    }
  },
  methods: {
    gotoIndexMenu(aim) {
      if (aim != this.activePage) {
        switch (aim) {
          case "0":
            common_vendor.index$1.switchTab({
              url: "../../pages/index/index"
            });
            break;
          case "1":
            common_vendor.index$1.switchTab({
              url: "../../pages/decoration/decoration"
            });
            break;
          case "2":
            common_vendor.index$1.switchTab({
              url: "../../pages/community/community"
            });
            break;
          case "3":
            common_vendor.index$1.switchTab({
              url: "../../pages/my/my"
            });
            break;
        }
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.activePage == "0" ? "grayscale(0%)" : "grayscale(100%)",
    b: common_vendor.o(($event) => $options.gotoIndexMenu("0")),
    c: $props.activePage == "1" ? "grayscale(0%)" : "grayscale(100%)",
    d: common_vendor.o(($event) => $options.gotoIndexMenu("1")),
    e: $props.activePage == "2" ? "grayscale(0%)" : "grayscale(100%)",
    f: common_vendor.o(($event) => $options.gotoIndexMenu("2")),
    g: $props.activePage == "3" ? "grayscale(0%)" : "grayscale(100%)",
    h: common_vendor.o(($event) => $options.gotoIndexMenu("3"))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Projects/\u7231\u4F73\u88C5/components/publicTabBar/publicTabBar.vue"]]);
wx.createComponent(Component);
