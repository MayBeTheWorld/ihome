"use strict";
const common_vendor = require("../../../../../../../common/vendor.js");
const uni_modules_skyNutui_components_skyNutui_packages_utils_create_component = require("../../utils/create/component.js");
const uni_modules_skyNutui_components_skyNutui_packages_utils_pxCheck = require("../../utils/pxCheck.js");
require("../../locale/index.js");
require("../../locale/lang/zh-CN.js");
require("../../locale/lang/baseLang.js");
require("../../locale/lang/en-US.js");
require("../../utils/util.js");
const { componentName, create } = uni_modules_skyNutui_components_skyNutui_packages_utils_create_component.createComponent("icon");
const _sfc_main = create({
  props: {
    name: { type: String, default: "" },
    size: { type: [String, Number], default: "" },
    width: { type: [String, Number], default: "" },
    height: { type: [String, Number], default: "" },
    classPrefix: { type: String, default: "nut-icon" },
    popClass: { type: String, default: "" },
    class: { type: String, default: "" },
    fontClassName: { type: String, default: "nutui-iconfont" },
    color: { type: String, default: "" },
    tag: { type: String, default: "i" }
  },
  emits: ["click"],
  options: {
    virtualHost: true,
    addGlobalClass: true
  },
  setup(props, { emit, slots }) {
    const handleClick = (event) => {
      emit("click", event);
    };
    const isImage = () => {
      return props.name ? props.name.indexOf("/") !== -1 : false;
    };
    const classes = common_vendor.computed$1(() => {
      return isImage() ? `${componentName}__img` : `${props.fontClassName} ${componentName} ${props.classPrefix}-${props.name} ${props.popClass} ${props.class}`;
    });
    const getStyle = common_vendor.computed$1(() => {
      const style = {
        color: props.color,
        fontSize: uni_modules_skyNutui_components_skyNutui_packages_utils_pxCheck.pxCheck(props.size),
        width: uni_modules_skyNutui_components_skyNutui_packages_utils_pxCheck.pxCheck(props.width || props.size),
        height: uni_modules_skyNutui_components_skyNutui_packages_utils_pxCheck.pxCheck(props.height || props.size)
      };
      return style;
    });
    return {
      isImage,
      handleClick,
      classes,
      getStyle
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.isImage()
  }, _ctx.isImage() ? {
    b: common_vendor.n(_ctx.classes),
    c: common_vendor.s(_ctx.getStyle),
    d: common_vendor.o((...args) => _ctx.handleClick && _ctx.handleClick(...args)),
    e: _ctx.name
  } : {}, {
    f: !_ctx.isImage()
  }, !_ctx.isImage() ? {
    g: common_vendor.n(_ctx.classes),
    h: common_vendor.s(_ctx.getStyle),
    i: common_vendor.o((...args) => _ctx.handleClick && _ctx.handleClick(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/desktop/ihome2/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/icon/index.vue"]]);
wx.createComponent(Component);
