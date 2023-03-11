"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-cell",
  data() {
    return {};
  },
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$5],
  computed: {
    titleTextStyle() {
      return common_vendor.index.$u.addStyle(this.titleStyle);
    }
  },
  emits: ["click"],
  methods: {
    // 点击cell
    clickHandler(e) {
      if (this.disabled)
        return;
      this.$emit("click", {
        name: this.name
      });
      this.openPage();
      this.stop && this.preventEvent(e);
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_line2 = common_vendor.resolveComponent("u-line");
  (_easycom_u_icon2 + _easycom_u_line2)();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
const _easycom_u_line = () => "../u-line/u-line.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_line)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.icon
  }, _ctx.icon ? {
    b: common_vendor.p({
      name: _ctx.icon,
      ["custom-style"]: _ctx.iconStyle,
      size: _ctx.size === "large" ? 22 : 18
    })
  } : {}, {
    c: _ctx.title
  }, _ctx.title ? {
    d: common_vendor.t(_ctx.title),
    e: common_vendor.s($options.titleTextStyle),
    f: common_vendor.n(_ctx.disabled && "u-cell--disabled"),
    g: common_vendor.n(_ctx.size === "large" && "u-cell__title-text--large")
  } : {}, {
    h: _ctx.label
  }, _ctx.label ? {
    i: common_vendor.t(_ctx.label),
    j: common_vendor.n(_ctx.disabled && "u-cell--disabled"),
    k: common_vendor.n(_ctx.size === "large" && "u-cell__label--large")
  } : {}, {
    l: !_ctx.$u.test.empty(_ctx.value)
  }, !_ctx.$u.test.empty(_ctx.value) ? {
    m: common_vendor.t(_ctx.value),
    n: common_vendor.n(_ctx.disabled && "u-cell--disabled"),
    o: common_vendor.n(_ctx.size === "large" && "u-cell__value--large")
  } : {}, {
    p: _ctx.isLink
  }, _ctx.isLink ? {
    q: common_vendor.p({
      name: _ctx.rightIcon,
      ["custom-style"]: _ctx.rightIconStyle,
      color: _ctx.disabled ? "#c8c9cc" : "info",
      size: _ctx.size === "large" ? 18 : 16
    })
  } : {}, {
    r: common_vendor.n(`u-cell__right-icon-wrap--${_ctx.arrowDirection}`),
    s: common_vendor.n(_ctx.center && "u-cell--center"),
    t: common_vendor.n(_ctx.size === "large" && "u-cell__body--large"),
    v: _ctx.border
  }, _ctx.border ? {} : {}, {
    w: common_vendor.n(_ctx.customClass),
    x: common_vendor.s(_ctx.$u.addStyle(_ctx.customStyle)),
    y: !_ctx.disabled && (_ctx.clickable || _ctx.isLink) ? "u-cell--clickable" : "",
    z: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b4243719"], ["__file", "D:/prgraming/myproject/ihome/node_modules/uview-plus/components/u-cell/u-cell.vue"]]);
wx.createComponent(Component);
