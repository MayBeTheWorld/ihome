"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-row-notice",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$10],
  data() {
    return {
      animationDuration: "0",
      animationPlayState: "paused",
      nvueInit: true,
      show: true
    };
  },
  watch: {
    text: {
      immediate: true,
      handler(newValue, oldValue) {
        this.vue();
        if (!common_vendor.index.$u.test.string(newValue)) {
          common_vendor.index.$u.error("noticebar\u7EC4\u4EF6direction\u4E3Arow\u65F6\uFF0C\u8981\u6C42text\u53C2\u6570\u4E3A\u5B57\u7B26\u4E32\u5F62\u5F0F");
        }
      }
    },
    fontSize() {
      this.vue();
    },
    speed() {
      this.vue();
    }
  },
  computed: {
    textStyle() {
      let style = {};
      style.color = this.color;
      style.fontSize = common_vendor.index.$u.addUnit(this.fontSize);
      return style;
    },
    animationStyle() {
      let style = {};
      style.animationDuration = this.animationDuration;
      style.animationPlayState = this.animationPlayState;
      return style;
    },
    innerText() {
      let result = [], len = 20;
      const textArr = this.text.split("");
      for (let i = 0; i < textArr.length; i += len) {
        result.push(textArr.slice(i, i + len).join(""));
      }
      return result;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.vue();
      if (!common_vendor.index.$u.test.string(this.text)) {
        common_vendor.index.$u.error("noticebar\u7EC4\u4EF6direction\u4E3Arow\u65F6\uFF0C\u8981\u6C42text\u53C2\u6570\u4E3A\u5B57\u7B26\u4E32\u5F62\u5F0F");
      }
    },
    async vue() {
      let textWidth = 0;
      await common_vendor.index.$u.sleep();
      textWidth = (await this.$uGetRect(".u-notice__content__text")).width;
      (await this.$uGetRect(".u-notice__content")).width;
      this.animationDuration = `${textWidth / common_vendor.index.$u.getPx(this.speed)}s`;
      this.animationPlayState = "paused";
      setTimeout(() => {
        this.animationPlayState = "running";
      }, 10);
    },
    async nvue() {
    },
    loopAnimation(textWidth, boxWidth) {
    },
    getNvueRect(el) {
    },
    clickHandler(index) {
      this.$emit("click");
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
    c: common_vendor.f($options.innerText, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    d: common_vendor.s($options.textStyle),
    e: common_vendor.s($options.animationStyle),
    f: ["link", "closable"].includes(_ctx.mode)
  }, ["link", "closable"].includes(_ctx.mode) ? common_vendor.e({
    g: _ctx.mode === "link"
  }, _ctx.mode === "link" ? {
    h: common_vendor.p({
      name: "arrow-right",
      size: 17,
      color: _ctx.color
    })
  } : {}, {
    i: _ctx.mode === "closable"
  }, _ctx.mode === "closable" ? {
    j: common_vendor.o($options.close),
    k: common_vendor.p({
      name: "close",
      size: 16,
      color: _ctx.color
    })
  } : {}) : {}, {
    l: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-462e724c"], ["__file", "D:/desktop/ihome2/node_modules/uview-plus/components/u-row-notice/u-row-notice.vue"]]);
wx.createComponent(Component);
