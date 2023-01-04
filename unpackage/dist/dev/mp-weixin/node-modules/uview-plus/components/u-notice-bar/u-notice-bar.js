"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-notice-bar",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$1],
  data() {
    return {
      show: true
    };
  },
  methods: {
    click(index) {
      this.$emit("click", index);
      if (this.url && this.linkType) {
        this.openPage();
      }
    },
    close() {
      this.show = false;
      this.$emit("close");
    }
  }
};
if (!Array) {
  const _easycom_u_column_notice2 = common_vendor.resolveComponent("u-column-notice");
  const _easycom_u_row_notice2 = common_vendor.resolveComponent("u-row-notice");
  (_easycom_u_column_notice2 + _easycom_u_row_notice2)();
}
const _easycom_u_column_notice = () => "../u-column-notice/u-column-notice.js";
const _easycom_u_row_notice = () => "../u-row-notice/u-row-notice.js";
if (!Math) {
  (_easycom_u_column_notice + _easycom_u_row_notice)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.show
  }, $data.show ? common_vendor.e({
    b: _ctx.direction === "column" || _ctx.direction === "row" && _ctx.step
  }, _ctx.direction === "column" || _ctx.direction === "row" && _ctx.step ? {
    c: common_vendor.o($options.close),
    d: common_vendor.o($options.click),
    e: common_vendor.p({
      color: _ctx.color,
      bgColor: _ctx.bgColor,
      text: _ctx.text,
      mode: _ctx.mode,
      step: _ctx.step,
      icon: _ctx.icon,
      ["disable-touch"]: _ctx.disableTouch,
      fontSize: _ctx.fontSize,
      duration: _ctx.duration
    })
  } : {
    f: common_vendor.o($options.close),
    g: common_vendor.o($options.click),
    h: common_vendor.p({
      color: _ctx.color,
      bgColor: _ctx.bgColor,
      text: _ctx.text,
      mode: _ctx.mode,
      fontSize: _ctx.fontSize,
      speed: _ctx.speed,
      url: _ctx.url,
      linkType: _ctx.linkType,
      icon: _ctx.icon
    })
  }, {
    i: common_vendor.s({
      backgroundColor: _ctx.bgColor
    }),
    j: common_vendor.s(_ctx.$u.addStyle(_ctx.customStyle))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-63dbbc8e"], ["__file", "D:/Projects/\u7231\u4F73\u88C5/node_modules/uview-plus/components/u-notice-bar/u-notice-bar.vue"]]);
wx.createComponent(Component);
