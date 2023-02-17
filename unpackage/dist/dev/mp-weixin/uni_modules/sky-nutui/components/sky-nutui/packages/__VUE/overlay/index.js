"use strict";
const common_vendor = require("../../../../../../../common/vendor.js");
const uni_modules_skyNutui_components_skyNutui_packages_utils_create_component = require("../../utils/create/component.js");
const uni_modules_skyNutui_components_skyNutui_packages___VUE_overlay_props = require("./props.js");
require("../../locale/index.js");
require("../../locale/lang/zh-CN.js");
require("../../locale/lang/baseLang.js");
require("../../locale/lang/en-US.js");
require("../../utils/util.js");
const { componentName, create } = uni_modules_skyNutui_components_skyNutui_packages_utils_create_component.createComponent("overlay");
const _sfc_main = create({
  props: uni_modules_skyNutui_components_skyNutui_packages___VUE_overlay_props.overlayProps,
  emits: ["click", "update:visible"],
  options: {
    virtualHost: true
  },
  setup(props, { emit }) {
    const classes = common_vendor.computed$1(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [props.overlayClass]: true
      };
    });
    common_vendor.watch(
      () => props.visible,
      (value) => {
        value ? lock() : unlock();
      }
    );
    const lock = () => {
      if (props.lockScroll && props.visible)
        ;
    };
    const unlock = () => {
    };
    common_vendor.onDeactivated(unlock);
    common_vendor.onBeforeUnmount(unlock);
    common_vendor.onMounted(lock);
    common_vendor.onActivated(lock);
    const style = common_vendor.computed$1(() => {
      return {
        animationDuration: `${props.duration}s`,
        zIndex: props.zIndex,
        ...props.overlayStyle
      };
    });
    const touchmove = (e) => {
      if (props.lockScroll)
        e.preventDefault();
    };
    const onClick = (e) => {
      emit("click", e);
      if (props.closeOnClickOverlay) {
        emit("update:visible", false);
      }
    };
    return { classes, style, touchmove, onClick };
  }
});
if (!Array) {
  const _component_Transition = common_vendor.resolveComponent("Transition");
  _component_Transition();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n(_ctx.classes),
    b: common_vendor.o((...args) => _ctx.touchmove && _ctx.touchmove(...args)),
    c: common_vendor.o((...args) => _ctx.onClick && _ctx.onClick(...args)),
    d: common_vendor.s(_ctx.style),
    e: _ctx.visible,
    f: common_vendor.p({
      name: "overlay-fade"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/desktop/ihome2/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/overlay/index.vue"]]);
wx.createComponent(Component);
