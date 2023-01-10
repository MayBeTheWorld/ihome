"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u--text",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.value, common_vendor.button, common_vendor.openType, common_vendor.props$4],
  emits: ["click"],
  computed: {
    valueStyle() {
      const style = {
        textDecoration: this.decoration,
        fontWeight: this.bold ? "bold" : "normal",
        wordWrap: this.wordWrap,
        fontSize: common_vendor.index.$u.addUnit(this.size)
      };
      !this.type && (style.color = this.color);
      this.isNvue && this.lines && (style.lines = this.lines);
      this.lineHeight && (style.lineHeight = common_vendor.index.$u.addUnit(this.lineHeight));
      !this.isNvue && this.block && (style.display = "block");
      return common_vendor.index.$u.deepMerge(style, common_vendor.index.$u.addStyle(this.customStyle));
    },
    isNvue() {
      let nvue = false;
      return nvue;
    },
    isMp() {
      let mp = false;
      mp = true;
      return mp;
    }
  },
  data() {
    return {};
  },
  methods: {
    clickHandler() {
      if (this.call && this.mode === "phone") {
        common_vendor.index.makePhoneCall({
          phoneNumber: this.text
        });
      }
      this.$emit("click");
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_link2 = common_vendor.resolveComponent("u-link");
  (_easycom_u_icon2 + _easycom_u_link2)();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
const _easycom_u_link = () => "../u-link/u-link.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_link)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.show
  }, _ctx.show ? common_vendor.e({
    b: _ctx.mode === "price"
  }, _ctx.mode === "price" ? {
    c: common_vendor.n(_ctx.type && `u-text__value--${_ctx.type}`),
    d: common_vendor.s($options.valueStyle)
  } : {}, {
    e: _ctx.prefixIcon
  }, _ctx.prefixIcon ? {
    f: common_vendor.p({
      name: _ctx.prefixIcon,
      customStyle: _ctx.$u.addStyle(_ctx.iconStyle)
    })
  } : {}, {
    g: _ctx.mode === "link"
  }, _ctx.mode === "link" ? {
    h: common_vendor.p({
      text: _ctx.value,
      href: _ctx.href,
      underLine: true
    })
  } : _ctx.openType && $options.isMp ? {
    j: common_vendor.t(_ctx.value),
    k: common_vendor.s($options.valueStyle),
    l: _ctx.index,
    m: _ctx.openType,
    n: common_vendor.o((...args) => _ctx.onGetUserInfo && _ctx.onGetUserInfo(...args)),
    o: common_vendor.o((...args) => _ctx.onContact && _ctx.onContact(...args)),
    p: common_vendor.o((...args) => _ctx.onGetPhoneNumber && _ctx.onGetPhoneNumber(...args)),
    q: common_vendor.o((...args) => _ctx.onError && _ctx.onError(...args)),
    r: common_vendor.o((...args) => _ctx.onLaunchApp && _ctx.onLaunchApp(...args)),
    s: common_vendor.o((...args) => _ctx.onOpenSetting && _ctx.onOpenSetting(...args)),
    t: _ctx.lang,
    v: _ctx.sessionFrom,
    w: _ctx.sendMessageTitle,
    x: _ctx.sendMessagePath,
    y: _ctx.sendMessageImg,
    z: _ctx.showMessageCard,
    A: _ctx.appParameter
  } : {
    B: common_vendor.t(_ctx.value),
    C: common_vendor.s($options.valueStyle),
    D: common_vendor.n(_ctx.type && `u-text__value--${_ctx.type}`),
    E: common_vendor.n(_ctx.lines && `u-line-${_ctx.lines}`)
  }, {
    i: _ctx.openType && $options.isMp,
    F: _ctx.suffixIcon
  }, _ctx.suffixIcon ? {
    G: common_vendor.p({
      name: _ctx.suffixIcon,
      customStyle: _ctx.$u.addStyle(_ctx.iconStyle)
    })
  } : {}, {
    H: _ctx.margin,
    I: _ctx.align === "left" ? "flex-start" : _ctx.align === "center" ? "center" : "flex-end",
    J: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5fec1d8b"], ["__file", "D:/desktop/ihome2/node_modules/uview-plus/components/u-text/u-text.vue"]]);
wx.createComponent(Component);
