"use strict";
const common_vendor = require("../../../../../../../common/vendor.js");
const uni_modules_skyNutui_components_skyNutui_packages_utils_create_component = require("../../utils/create/component.js");
require("../../locale/index.js");
require("../../locale/lang/zh-CN.js");
require("../../locale/lang/baseLang.js");
require("../../locale/lang/en-US.js");
require("../../utils/util.js");
const { componentName, create } = uni_modules_skyNutui_components_skyNutui_packages_utils_create_component.createComponent("menu-item");
const Icon = () => "../icon/index.js";
const Popup = () => "../popup/index.js";
const _sfc_main = create({
  props: {
    title: String,
    options: {
      type: Array,
      default: []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: null,
    cols: {
      type: Number,
      default: 1
    },
    titleIcon: String,
    activeTitleClass: String,
    inactiveTitleClass: String,
    optionIcon: {
      type: String,
      default: "Check"
    }
  },
  components: {
    [Icon.name]: Icon,
    [Popup.name]: Popup
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const state = common_vendor.reactive({
      showPopup: false,
      transition: true,
      showWrapper: false,
      isShowPlaceholderElement: false
    });
    const useParent = () => {
      const parent2 = common_vendor.inject("menuParent", null);
      if (parent2) {
        const instance = common_vendor.getCurrentInstance();
        const { link } = parent2;
        link(instance);
        return {
          parent: parent2
        };
      }
    };
    const { parent } = useParent();
    const parentOffset = common_vendor.computed(() => {
      return parent.offset.value;
    });
    const classes = common_vendor.computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });
    const placeholderElementStyle = common_vendor.computed(() => {
      const heightStyle = { height: "calc(var(--window-top) + " + parent.offset.value + "px)" };
      if (parent.props.direction === "down") {
        return heightStyle;
      } else {
        return { ...heightStyle, top: "auto" };
      }
    });
    const toggle = (show = !state.showPopup, options = {}) => {
      if (show === state.showPopup) {
        return;
      }
      state.showPopup = show;
      if (!show) {
        state.isShowPlaceholderElement = show;
      } else {
        state.isShowPlaceholderElement = show;
      }
      if (show) {
        state.showWrapper = true;
      }
    };
    const renderTitle = () => {
      var _a;
      if (props.title) {
        return props.title;
      }
      const match = (_a = props.options) == null ? void 0 : _a.find((option) => option.value === props.modelValue);
      return match ? match.text : "";
    };
    const onClick = (option) => {
      state.showPopup = false;
      state.isShowPlaceholderElement = false;
      if (option.value !== props.modelValue) {
        emit("update:modelValue", option.value);
        emit("change", option.value);
      }
    };
    const handleClose = () => {
      console.log("onclose");
      state.showWrapper = false;
      state.isShowPlaceholderElement = false;
    };
    const handleClickOutside = () => {
      state.showPopup = false;
    };
    return {
      classes,
      placeholderElementStyle,
      renderTitle,
      state,
      parent,
      toggle,
      onClick,
      handleClose,
      handleClickOutside,
      parentOffset
    };
  }
});
if (!Array) {
  const _easycom_nut_icon2 = common_vendor.resolveComponent("nut-icon");
  const _easycom_nut_popup2 = common_vendor.resolveComponent("nut-popup");
  (_easycom_nut_icon2 + _easycom_nut_popup2)();
}
const _easycom_nut_icon = () => "../icon/index.js";
const _easycom_nut_popup = () => "../popup/index.js";
if (!Math) {
  (_easycom_nut_icon + _easycom_nut_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.state.isShowPlaceholderElement,
    b: common_vendor.o((...args) => _ctx.handleClickOutside && _ctx.handleClickOutside(...args)),
    c: _ctx.parent.props.direction === "up" ? 1 : "",
    d: common_vendor.s(_ctx.placeholderElementStyle),
    e: common_vendor.f(_ctx.options, (option, index, i0) => {
      return common_vendor.e({
        a: option.value === _ctx.modelValue
      }, option.value === _ctx.modelValue ? {
        b: option.value === _ctx.modelValue ? 1 : "",
        c: option.value !== _ctx.modelValue ? 1 : "",
        d: "44a587f0-1-" + i0 + ",44a587f0-0",
        e: common_vendor.p({
          name: _ctx.optionIcon,
          color: _ctx.parent.props.activeColor
        })
      } : {}, {
        f: common_vendor.t(option.text),
        g: option.value === _ctx.modelValue ? 1 : "",
        h: option.value !== _ctx.modelValue ? 1 : "",
        i: option.value === _ctx.modelValue ? _ctx.parent.props.activeColor : "",
        j: index,
        k: common_vendor.n({
          active: option.value === _ctx.modelValue
        }),
        l: common_vendor.o(($event) => _ctx.onClick(option), index)
      });
    }),
    f: 100 / _ctx.cols + "%",
    g: common_vendor.o(_ctx.handleClose),
    h: common_vendor.o(($event) => _ctx.state.showPopup = $event),
    i: common_vendor.p({
      popStyle: _ctx.parent.props.direction === "down" ? {
        top: "calc(var(--window-top) + " + _ctx.parent.offset.value + "px)"
      } : {
        bottom: "calc(var(--window-bottom) + " + _ctx.parent.offset.value + "px)",
        top: "auto"
      },
      overlayStyle: _ctx.parent.props.direction === "down" ? {
        top: "calc(var(--window-top) + " + _ctx.parent.offset.value + "px)"
      } : {
        bottom: "calc(var(--window-bottom) + " + _ctx.parent.offset.value + "px)",
        top: "auto"
      },
      ..._ctx.$attrs,
      position: _ctx.parent.props.direction === "down" ? "topMenu" : "bottomMenu",
      duration: _ctx.parent.props.duration,
      ["pop-class"]: "nut-menu__pop",
      overlayClass: "nut-menu__overlay",
      overlay: _ctx.parent.props.overlay,
      lockScroll: _ctx.parent.props.lockScroll,
      isWrapTeleport: false,
      ["close-on-click-overlay"]: _ctx.parent.props.closeOnClickOverlay,
      visible: _ctx.state.showPopup
    }),
    j: common_vendor.n(_ctx.classes),
    k: _ctx.state.showWrapper && _ctx.parentOffset > 0
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/prgraming/myproject/ihome/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/menuitem/index.vue"]]);
wx.createComponent(Component);
