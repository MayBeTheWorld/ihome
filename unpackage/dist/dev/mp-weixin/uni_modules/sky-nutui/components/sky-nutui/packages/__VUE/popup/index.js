"use strict";
const common_vendor = require("../../../../../../../common/vendor.js");
const uni_modules_skyNutui_components_skyNutui_packages___VUE_popup_useLockScroll = require("./use-lock-scroll.js");
const uni_modules_skyNutui_components_skyNutui_packages___VUE_overlay_props = require("../overlay/props.js");
const uni_modules_skyNutui_components_skyNutui_packages_utils_create_component = require("../../utils/create/component.js");
require("../../locale/index.js");
require("../../locale/lang/zh-CN.js");
require("../../locale/lang/baseLang.js");
require("../../locale/lang/en-US.js");
require("../../utils/util.js");
const overlay = () => "../overlay/index.js";
const icon = () => "../icon/index.js";
const { componentName, create } = uni_modules_skyNutui_components_skyNutui_packages_utils_create_component.createComponent("popup");
let _zIndex = 2e3;
const popupProps = {
  ...uni_modules_skyNutui_components_skyNutui_packages___VUE_overlay_props.overlayProps,
  position: {
    type: String,
    default: "center"
  },
  transition: String,
  style: {
    type: Object
  },
  popStyle: {
    type: Object
  },
  popClass: {
    type: String,
    default: ""
  },
  closeable: {
    type: Boolean,
    default: false
  },
  closeIconPosition: {
    type: String,
    default: "top-right"
  },
  closeIcon: {
    type: String,
    default: "close"
  },
  destroyOnClose: {
    type: Boolean,
    default: true
  },
  teleport: {
    type: [String],
    default: "body"
  },
  overlay: {
    type: Boolean,
    default: true
  },
  round: {
    type: Boolean,
    default: false
  },
  isWrapTeleport: {
    type: Boolean,
    default: false
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: false
  }
};
const _sfc_main = create({
  components: {
    [overlay.name]: overlay,
    [icon.name]: icon
  },
  props: {
    ...popupProps
  },
  emits: ["click", "click-close-icon", "open", "close", "opend", "closed", "update:visible", "click-overlay"],
  options: {
    virtualHost: true
  },
  setup(props, { emit }) {
    const lockPage = common_vendor.inject("lockPage", (isLock) => {
    }, false);
    const popupRef = common_vendor.ref();
    const state = common_vendor.reactive({
      zIndex: props.zIndex,
      showSlot: true,
      transitionName: `popup-fade-${props.position}`,
      slideTransitionName: `nut-slide-${props.position}`,
      overLayCount: 1,
      keepAlive: false,
      closed: props.closeable
    });
    const visibleLocal = common_vendor.ref(false);
    const [lockScroll, unlockScroll] = uni_modules_skyNutui_components_skyNutui_packages___VUE_popup_useLockScroll.useLockScroll(() => props.lockScroll);
    const classes = common_vendor.computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        ["round"]: props.round,
        [`popup-${props.position}`]: true,
        [`popup-${props.position}--safebottom`]: props.position === "bottom" && props.safeAreaInsetBottom,
        [props.popClass]: true,
        [`${state.slideTransitionName}In`]: visibleLocal.value,
        [`${state.slideTransitionName}Out`]: !visibleLocal.value
      };
    });
    const popStyle = common_vendor.computed(() => {
      return {
        zIndex: state.zIndex,
        animationDuration: props.duration ? `${props.duration}s` : "initial",
        ...props.popStyle
      };
    });
    const open = () => {
      if (props.zIndex != 2e3) {
        _zIndex = Number(props.zIndex);
      }
      visibleLocal.value = true;
      emit("update:visible", true);
      lockPage(true);
      state.zIndex = ++_zIndex;
      if (props.destroyOnClose) {
        state.showSlot = true;
      }
      emit("open");
    };
    const close = () => {
      lockPage(false);
      visibleLocal.value = false;
      setTimeout(() => {
        emit("update:visible", false);
      }, +props.duration * 1e3);
      if (props.destroyOnClose) {
        setTimeout(() => {
          state.showSlot = false;
          emit("close");
        }, +props.duration * 1e3);
      }
    };
    const onClick = (e) => {
      emit("click", e);
    };
    const onClickCloseIcon = (e) => {
      emit("click-close-icon", e);
      close();
    };
    const onClickOverlay = (e) => {
      if (props.closeOnClickOverlay) {
        emit("click-overlay", e);
        close();
      }
    };
    const onOpened = (e) => {
      emit("opend", e);
    };
    const onClosed = (e) => {
      emit("closed", e);
    };
    common_vendor.onMounted(() => {
      props.transition ? state.transitionName = props.transition : state.transitionName = `popup-slide-${props.position}`;
      props.visible && open();
    });
    common_vendor.onBeforeUnmount(() => {
      props.visible && close();
    });
    common_vendor.onBeforeMount(() => {
      if (props.visible) {
        unlockScroll();
      }
    });
    common_vendor.onActivated(() => {
      if (state.keepAlive) {
        emit("update:visible", true);
        state.keepAlive = false;
      }
    });
    common_vendor.onDeactivated(() => {
      if (props.visible) {
        close();
        state.keepAlive = true;
      }
    });
    common_vendor.watch(
      () => props.visible,
      (value) => {
        if (value) {
          open();
        } else {
          close();
        }
      }
    );
    common_vendor.watch(
      () => props.position,
      (value) => {
        value === "center" ? state.transitionName = "popup-fade" : state.transitionName = `popup-slide-${value}`;
      }
    );
    common_vendor.watch(
      () => props.closeable,
      (value) => {
        state.closed = value;
      }
    );
    return {
      ...common_vendor.toRefs(state),
      popStyle,
      classes,
      onClick,
      onClickCloseIcon,
      onClickOverlay,
      onOpened,
      onClosed,
      popupRef
    };
  }
});
if (!Array) {
  const _easycom_nut_overlay2 = common_vendor.resolveComponent("nut-overlay");
  const _easycom_nut_icon2 = common_vendor.resolveComponent("nut-icon");
  const _component_Transition = common_vendor.resolveComponent("Transition");
  (_easycom_nut_overlay2 + _easycom_nut_icon2 + _component_Transition)();
}
const _easycom_nut_overlay = () => "../overlay/index.js";
const _easycom_nut_icon = () => "../icon/index.js";
if (!Math) {
  (_easycom_nut_overlay + _easycom_nut_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.isWrapTeleport
  }, _ctx.isWrapTeleport ? common_vendor.e({
    b: _ctx.overlay
  }, _ctx.overlay ? {
    c: common_vendor.o(_ctx.onClickOverlay),
    d: common_vendor.p({
      visible: _ctx.visible,
      ["close-on-click-overlay"]: _ctx.closeOnClickOverlay,
      overlayClass: _ctx.overlayClass,
      overlayStyle: _ctx.overlayStyle,
      ["z-index"]: _ctx.zIndex,
      ["lock-scroll"]: _ctx.lockScroll,
      duration: _ctx.duration
    })
  } : {}, {
    e: _ctx.showSlot
  }, _ctx.showSlot ? {} : {}, {
    f: _ctx.closed
  }, _ctx.closed ? {
    g: common_vendor.p({
      name: _ctx.closeIcon,
      size: "12px"
    }),
    h: common_vendor.o((...args) => _ctx.onClickCloseIcon && _ctx.onClickCloseIcon(...args)),
    i: common_vendor.n("nutui-popup__close-icon--" + _ctx.closeIconPosition)
  } : {}, {
    j: _ctx.visible,
    k: common_vendor.n(_ctx.classes),
    l: common_vendor.s(_ctx.popStyle),
    m: common_vendor.o((...args) => _ctx.onClick && _ctx.onClick(...args)),
    n: common_vendor.o(_ctx.onOpened),
    o: common_vendor.o(_ctx.onClosed),
    p: common_vendor.p({
      name: _ctx.transitionName
    })
  }) : common_vendor.e({
    q: _ctx.overlay
  }, _ctx.overlay ? {
    r: common_vendor.o(_ctx.onClickOverlay),
    s: common_vendor.p({
      visible: _ctx.visible,
      ["close-on-click-overlay"]: _ctx.closeOnClickOverlay,
      overlayClass: _ctx.overlayClass,
      overlayStyle: _ctx.overlayStyle,
      ["z-index"]: _ctx.zIndex,
      ["lock-scroll"]: _ctx.lockScroll,
      duration: _ctx.duration
    })
  } : {}, {
    t: _ctx.showSlot
  }, _ctx.showSlot ? {} : {}, {
    v: _ctx.closed
  }, _ctx.closed ? {
    w: common_vendor.p({
      name: _ctx.closeIcon,
      size: "12px"
    }),
    x: common_vendor.o((...args) => _ctx.onClickCloseIcon && _ctx.onClickCloseIcon(...args)),
    y: common_vendor.n("nutui-popup__close-icon--" + _ctx.closeIconPosition)
  } : {}, {
    z: _ctx.visible,
    A: common_vendor.n(_ctx.classes),
    B: common_vendor.s(_ctx.popStyle),
    C: common_vendor.o((...args) => _ctx.onClick && _ctx.onClick(...args)),
    D: common_vendor.o(_ctx.onOpened),
    E: common_vendor.o(_ctx.onClosed),
    F: common_vendor.p({
      name: _ctx.transitionName
    })
  }));
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/prgraming/myproject/ihome/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/popup/index.vue"]]);
wx.createComponent(Component);
