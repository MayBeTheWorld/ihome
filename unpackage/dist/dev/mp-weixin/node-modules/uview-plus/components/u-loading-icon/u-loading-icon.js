"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-loading-icon",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$4],
  data() {
    return {
      array12: Array.from({
        length: 12
      }),
      aniAngel: 360,
      webviewHide: false,
      loading: false
    };
  },
  computed: {
    otherBorderColor() {
      const lightColor = common_vendor.index.$u.colorGradient(this.color, "#ffffff", 100)[80];
      if (this.mode === "circle") {
        return this.inactiveColor ? this.inactiveColor : lightColor;
      } else {
        return "transparent";
      }
    }
  },
  watch: {
    show(n) {
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => {
      }, 20);
    },
    addEventListenerToWebview() {
      const pages = getCurrentPages();
      const page = pages[pages.length - 1];
      const currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.show
  }, _ctx.show ? common_vendor.e({
    b: !$data.webviewHide
  }, !$data.webviewHide ? common_vendor.e({
    c: _ctx.mode === "spinner"
  }, _ctx.mode === "spinner" ? {
    d: common_vendor.f($data.array12, (item, index, i0) => {
      return {
        a: index
      };
    })
  } : {}, {
    e: common_vendor.n(`u-loading-icon__spinner--${_ctx.mode}`),
    f: _ctx.color,
    g: _ctx.$u.addUnit(_ctx.size),
    h: _ctx.$u.addUnit(_ctx.size),
    i: _ctx.color,
    j: $options.otherBorderColor,
    k: $options.otherBorderColor,
    l: $options.otherBorderColor,
    m: `${_ctx.duration}ms`,
    n: _ctx.mode === "semicircle" || _ctx.mode === "circle" ? _ctx.timingFunction : ""
  }) : {}, {
    o: _ctx.text
  }, _ctx.text ? {
    p: common_vendor.t(_ctx.text),
    q: _ctx.$u.addUnit(_ctx.textSize),
    r: _ctx.textColor
  } : {}, {
    s: common_vendor.s(_ctx.$u.addStyle(_ctx.customStyle)),
    t: common_vendor.n(_ctx.vertical && "u-loading-icon--vertical")
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-00752c6d"], ["__file", "D:/Projects/\u7231\u4F73\u88C5/node_modules/uview-plus/components/u-loading-icon/u-loading-icon.vue"]]);
wx.createComponent(Component);
