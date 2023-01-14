"use strict";
const common_vendor = require("../../../../../../../common/vendor.js");
const uni_modules_skyNutui_components_skyNutui_packages_utils_create_component = require("../../utils/create/component.js");
require("../../locale/index.js");
require("../../locale/lang/zh-CN.js");
require("../../locale/lang/baseLang.js");
require("../../locale/lang/en-US.js");
require("../../utils/util.js");
const Icon = () => "../icon/index.js";
const { componentName, create } = uni_modules_skyNutui_components_skyNutui_packages_utils_create_component.createComponent("button");
const _sfc_main = create({
  components: {
    [Icon.name]: Icon
  },
  props: {
    color: String,
    shape: {
      type: String,
      default: "round"
    },
    plain: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "normal"
    },
    block: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    iconClassPrefix: {
      type: String,
      default: "nut-icon"
    },
    iconFontClassName: {
      type: String,
      default: "nutui-iconfont"
    }
  },
  options: {
    virtualHost: true
  },
  emits: ["click"],
  setup(props, { emit, slots }) {
    const { type, size, shape, disabled, loading, color, plain, block, height } = common_vendor.toRefs(props);
    const handleClick = (event) => {
      if (!loading.value && !disabled.value) {
        emit("click", event);
      }
    };
    const classes = common_vendor.computed$1(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--${type.value}`]: type.value,
        [`${prefixCls}--${size.value}`]: size.value,
        [`${prefixCls}--${shape.value}`]: shape.value,
        [`${prefixCls}--plain`]: plain.value,
        [`${prefixCls}--block`]: block.value,
        [`${prefixCls}--disabled`]: disabled.value,
        [`${prefixCls}--loading`]: loading.value
      };
    });
    const getStyle = common_vendor.computed$1(() => {
      var _a;
      const style = {};
      if (color == null ? void 0 : color.value) {
        if (plain.value) {
          style.color = color.value;
          style.background = "#fff";
          if (!((_a = color.value) == null ? void 0 : _a.includes("gradient"))) {
            style.borderColor = color.value;
          }
        } else {
          style.color = "#fff";
          style.background = color.value;
        }
      }
      if (height) {
        style.height = height.value;
      }
      return style;
    });
    return {
      handleClick,
      classes,
      getStyle
    };
  }
});
if (!Array) {
  const _easycom_nut_icon2 = common_vendor.resolveComponent("nut-icon");
  _easycom_nut_icon2();
}
const _easycom_nut_icon = () => "../icon/index.js";
if (!Math) {
  _easycom_nut_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.loading
  }, _ctx.loading ? {
    b: common_vendor.p({
      popClass: "nut-icon-loading"
    })
  } : {}, {
    c: _ctx.icon && !_ctx.loading
  }, _ctx.icon && !_ctx.loading ? {
    d: common_vendor.p({
      name: _ctx.icon,
      ["class-prefix"]: _ctx.iconClassPrefix,
      ["font-class-name"]: _ctx.iconFontClassName
    })
  } : {}, {
    e: _ctx.$slots.default
  }, _ctx.$slots.default ? {
    f: _ctx.icon || _ctx.loading ? 1 : ""
  } : {}, {
    g: common_vendor.n(_ctx.classes),
    h: common_vendor.s(_ctx.getStyle),
    i: common_vendor.o((...args) => _ctx.handleClick && _ctx.handleClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/desktop/ihome2/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/button/index.vue"]]);
wx.createComponent(Component);
