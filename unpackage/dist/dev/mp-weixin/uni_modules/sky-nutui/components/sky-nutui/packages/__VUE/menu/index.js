"use strict";
const common_vendor = require("../../../../../../../common/vendor.js");
const uni_modules_skyNutui_components_skyNutui_packages_utils_create_component = require("../../utils/create/component.js");
require("../../locale/index.js");
require("../../locale/lang/zh-CN.js");
require("../../locale/lang/baseLang.js");
require("../../locale/lang/en-US.js");
require("../../utils/util.js");
const { componentName, create } = uni_modules_skyNutui_components_skyNutui_packages_utils_create_component.createComponent("menu");
const _sfc_main = create({
  props: {
    activeColor: {
      type: String,
      default: ""
    },
    overlay: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "down"
    },
    scrollFixed: {
      type: [Boolean, String, Number],
      default: false
    },
    titleClass: [String]
  },
  methods: {
    updateOffset() {
      setTimeout(() => {
        common_vendor.index.createSelectorQuery().in(this).select(".nut-menu__bar.opened").boundingClientRect((rect) => {
          if (this.direction === "down") {
            this.offset = rect.bottom;
          } else {
            this.offset = common_vendor.index.getSystemInfoSync().windowHeight - rect.top;
          }
        }).exec();
      }, 100);
    },
    toggleItem(active) {
      this.children.forEach((item, index) => {
        if (index === active) {
          this.updateOffset();
          item.toggle();
        } else if (item.state.showPopup) {
          item.toggle(false, { immediate: true });
        }
      });
    }
  },
  setup(props) {
    const barRef = common_vendor.ref();
    const offset = common_vendor.ref(0);
    const isScrollFixed = common_vendor.ref(false);
    const useChildren = () => {
      const publicChildren = common_vendor.reactive([]);
      const internalChildren = common_vendor.reactive([]);
      const linkChildren2 = (value) => {
        const link = (child) => {
          if (child.proxy) {
            internalChildren.push(child);
            publicChildren.push(child.proxy);
          }
        };
        common_vendor.provide(
          "menuParent",
          Object.assign(
            {
              link,
              children: publicChildren,
              internalChildren
            },
            value
          )
        );
      };
      return {
        children: publicChildren,
        linkChildren: linkChildren2
      };
    };
    const { children, linkChildren } = useChildren();
    const opened = common_vendor.computed$1(() => children.some((item) => item.state.showWrapper));
    const classes = common_vendor.computed$1(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        "scroll-fixed": isScrollFixed.value
      };
    });
    linkChildren({ props, offset });
    const onScroll = (res) => {
      const { scrollFixed } = props;
      const scrollTop = res.scrollTop;
      isScrollFixed.value = scrollTop > (typeof scrollFixed === "boolean" ? 30 : Number(scrollFixed));
    };
    const getClasses = (showPopup) => {
      let str = "";
      const { titleClass } = props;
      if (showPopup) {
        str += "active";
      }
      if (titleClass) {
        str += ` ${titleClass}`;
      }
      return str;
    };
    common_vendor.onPageScroll((res) => {
      const { scrollFixed } = props;
      if (scrollFixed) {
        onScroll(res);
      }
    });
    return {
      offset,
      children,
      opened,
      classes,
      barRef,
      getClasses
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
  return {
    a: common_vendor.f(_ctx.children, (item, index, i0) => {
      return {
        a: common_vendor.t(item.renderTitle()),
        b: "5c443072-0-" + i0,
        c: common_vendor.p({
          name: item.titleIcon || (_ctx.direction === "up" ? "arrow-up" : "down-arrow"),
          size: "10"
        }),
        d: common_vendor.n(_ctx.getClasses(item.state.showPopup)),
        e: common_vendor.o(($event) => !item.disabled && _ctx.toggleItem(index), index),
        f: item.disabled ? 1 : "",
        g: item.state.showPopup ? 1 : "",
        h: item.state.showPopup ? _ctx.activeColor : "",
        i: index
      };
    }),
    b: _ctx.opened ? 1 : "",
    c: common_vendor.n(_ctx.classes)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/desktop/ihome2/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/menu/index.vue"]]);
wx.createComponent(Component);
