"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "waterfallFlow",
  props: {
    flowData: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.flowData, (item, i, i0) => {
          return {
            a: item.picUrl,
            b: common_vendor.t(item.text)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Projects/\u7231\u4F73\u88C5/components/waterfallFlow/waterfallFlow.vue"]]);
wx.createComponent(Component);
