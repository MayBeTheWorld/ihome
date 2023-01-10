"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$5],
  watch: {
    text: {
      immediate: true,
      handler(newValue, oldValue) {
        if (!common_vendor.index.$u.test.array(newValue)) {
          common_vendor.index.$u.error("noticebar\u7EC4\u4EF6direction\u4E3Acolumn\u65F6\uFF0C\u8981\u6C42text\u53C2\u6570\u4E3A\u6570\u7EC4\u5F62\u5F0F");
        }
      }
    }
  },
  computed: {
    textStyle() {
      let style = {};
      style.color = this.color;
      style.fontSize = common_vendor.index.$u.addUnit(this.fontSize);
      return style;
    },
    vertical() {
      if (this.mode == "horizontal")
        return false;
      else
        return true;
    }
  },
  data() {
    return {
      index: 0
    };
  },
  methods: {
    noticeChange(e) {
      this.index = e.detail.current;
    },
    clickHandler() {
      this.$emit("click", this.index);
    },
    close() {
      this.$emit("close");
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.icon
  }, _ctx.icon ? {
    b: common_vendor.p({
      name: _ctx.icon,
      color: _ctx.color,
      size: "19"
    })
  } : {}, {
    c: common_vendor.f(_ctx.text, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    d: common_vendor.s($options.textStyle),
    e: _ctx.disableTouch,
    f: _ctx.step ? false : true,
    g: _ctx.duration,
    h: common_vendor.o((...args) => $options.noticeChange && $options.noticeChange(...args)),
    i: ["link", "closable"].includes(_ctx.mode)
  }, ["link", "closable"].includes(_ctx.mode) ? common_vendor.e({
    j: _ctx.mode === "link"
  }, _ctx.mode === "link" ? {
    k: common_vendor.p({
      name: "arrow-right",
      size: 17,
      color: _ctx.color
    })
  } : {}, {
    l: _ctx.mode === "closable"
  }, _ctx.mode === "closable" ? {
    m: common_vendor.o($options.close),
    n: common_vendor.p({
      name: "close",
      size: 16,
      color: _ctx.color
    })
  } : {}) : {}, {
    o: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6c9dce4e"], ["__file", "D:/desktop/ihome2/node_modules/uview-plus/components/u-column-notice/u-column-notice.vue"]]);
wx.createComponent(Component);
