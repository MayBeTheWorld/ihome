"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uvText = () => "../u-text/u-text.js";
const _sfc_main = {
  name: "u--text",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$7],
  components: {
    uvText
  }
};
if (!Array) {
  const _component_uvText = common_vendor.resolveComponent("uvText");
  _component_uvText();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: _ctx.type,
      show: _ctx.show,
      text: _ctx.text,
      prefixIcon: _ctx.prefixIcon,
      suffixIcon: _ctx.suffixIcon,
      mode: _ctx.mode,
      href: _ctx.href,
      format: _ctx.format,
      call: _ctx.call,
      openType: _ctx.openType,
      bold: _ctx.bold,
      block: _ctx.block,
      lines: _ctx.lines,
      color: _ctx.color,
      decoration: _ctx.decoration,
      size: _ctx.size,
      iconStyle: _ctx.iconStyle,
      margin: _ctx.margin,
      lineHeight: _ctx.lineHeight,
      align: _ctx.align,
      wordWrap: _ctx.wordWrap,
      customStyle: _ctx.customStyle
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/prgraming/myproject/ihome/node_modules/uview-plus/components/u--text/u--text.vue"]]);
wx.createComponent(Component);
