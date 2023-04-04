if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const ON_PAGE_SCROLL = "onPageScroll";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onPageScroll = /* @__PURE__ */ createHook(ON_PAGE_SCROLL);
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$s = {
    __name: "publicTabBar",
    props: {
      activePage: {
        type: Number,
        default: 0
      }
    },
    setup(__props) {
      const props2 = __props;
      uni.hideTabBar();
      function gotoIndexMenu(aim) {
        if (aim != props2.activePage) {
          switch (aim) {
            case "0":
              uni.switchTab({
                url: "../../pages/index/index"
              });
              break;
            case "1":
              uni.switchTab({
                url: "../../pages/VR/VR"
              });
              break;
            case "2":
              uni.switchTab({
                url: "../../pages/news/news"
              });
              break;
            case "3":
              uni.switchTab({
                url: "../../pages/main/main"
              });
              break;
          }
        }
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "tabBar" }, [
          vue.createElementVNode(
            "view",
            {
              style: vue.normalizeStyle({ filter: __props.activePage == "0" ? "grayscale(0%)" : "grayscale(100%)" }),
              class: "tabBarView",
              onClick: _cache[0] || (_cache[0] = ($event) => gotoIndexMenu("0"))
            },
            [
              vue.createElementVNode("view", { class: "tabBarContent" }, [
                vue.createElementVNode("view", { class: "imageView" }, [
                  vue.createCommentVNode(" 图标设置 "),
                  vue.createElementVNode("image", {
                    mode: "aspectFit",
                    src: "/static/index/index.png"
                  })
                ]),
                vue.createElementVNode("view", { class: "textView" }, "首页")
              ])
            ],
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              style: vue.normalizeStyle({ filter: __props.activePage == "1" ? "grayscale(0%)" : "grayscale(100%)" }),
              class: "tabBarView",
              onClick: _cache[1] || (_cache[1] = ($event) => gotoIndexMenu("1"))
            },
            [
              vue.createElementVNode("view", { class: "tabBarContent" }, [
                vue.createElementVNode("view", { class: "imageView" }, [
                  vue.createElementVNode("image", {
                    mode: "aspectFit",
                    src: "/static/VR/vr.png"
                  })
                ]),
                vue.createElementVNode("view", { class: "textView" }, "VR")
              ])
            ],
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              style: vue.normalizeStyle({ filter: __props.activePage == "2" ? "grayscale(0%)" : "grayscale(100%)" }),
              class: "tabBarView",
              onClick: _cache[2] || (_cache[2] = ($event) => gotoIndexMenu("2"))
            },
            [
              vue.createElementVNode("view", { class: "tabBarContent" }, [
                vue.createElementVNode("view", { class: "imageView" }, [
                  vue.createElementVNode("image", {
                    mode: "aspectFit",
                    src: "/static/news/notion.png"
                  })
                ]),
                vue.createElementVNode("view", { class: "textView" }, "消息")
              ])
            ],
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              style: vue.normalizeStyle({ filter: __props.activePage == "3" ? "grayscale(0%)" : "grayscale(100%)" }),
              class: "tabBarView",
              onClick: _cache[3] || (_cache[3] = ($event) => gotoIndexMenu("3"))
            },
            [
              vue.createElementVNode("view", { class: "tabBarContent" }, [
                vue.createElementVNode("view", { class: "imageView" }, [
                  vue.createElementVNode("image", {
                    mode: "aspectFit",
                    src: "/static/main/mine.png"
                  })
                ]),
                vue.createElementVNode("view", { class: "textView" }, "我的")
              ])
            ],
            4
            /* STYLE */
          )
        ]);
      };
    }
  };
  const publicTabBar = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-4e7366ac"], ["__file", "D:/prgraming/myproject/ihome/components/publicTabBar/publicTabBar.vue"]]);
  const icons = {
    "uicon-level": "",
    "uicon-column-line": "",
    "uicon-checkbox-mark": "",
    "uicon-folder": "",
    "uicon-movie": "",
    "uicon-star-fill": "",
    "uicon-star": "",
    "uicon-phone-fill": "",
    "uicon-phone": "",
    "uicon-apple-fill": "",
    "uicon-chrome-circle-fill": "",
    "uicon-backspace": "",
    "uicon-attach": "",
    "uicon-cut": "",
    "uicon-empty-car": "",
    "uicon-empty-coupon": "",
    "uicon-empty-address": "",
    "uicon-empty-favor": "",
    "uicon-empty-permission": "",
    "uicon-empty-news": "",
    "uicon-empty-search": "",
    "uicon-github-circle-fill": "",
    "uicon-rmb": "",
    "uicon-person-delete-fill": "",
    "uicon-reload": "",
    "uicon-order": "",
    "uicon-server-man": "",
    "uicon-search": "",
    "uicon-fingerprint": "",
    "uicon-more-dot-fill": "",
    "uicon-scan": "",
    "uicon-share-square": "",
    "uicon-map": "",
    "uicon-map-fill": "",
    "uicon-tags": "",
    "uicon-tags-fill": "",
    "uicon-bookmark-fill": "",
    "uicon-bookmark": "",
    "uicon-eye": "",
    "uicon-eye-fill": "",
    "uicon-mic": "",
    "uicon-mic-off": "",
    "uicon-calendar": "",
    "uicon-calendar-fill": "",
    "uicon-trash": "",
    "uicon-trash-fill": "",
    "uicon-play-left": "",
    "uicon-play-right": "",
    "uicon-minus": "",
    "uicon-plus": "",
    "uicon-info": "",
    "uicon-info-circle": "",
    "uicon-info-circle-fill": "",
    "uicon-question": "",
    "uicon-error": "",
    "uicon-close": "",
    "uicon-checkmark": "",
    "uicon-android-circle-fill": "",
    "uicon-android-fill": "",
    "uicon-ie": "",
    "uicon-IE-circle-fill": "",
    "uicon-google": "",
    "uicon-google-circle-fill": "",
    "uicon-setting-fill": "",
    "uicon-setting": "",
    "uicon-minus-square-fill": "",
    "uicon-plus-square-fill": "",
    "uicon-heart": "",
    "uicon-heart-fill": "",
    "uicon-camera": "",
    "uicon-camera-fill": "",
    "uicon-more-circle": "",
    "uicon-more-circle-fill": "",
    "uicon-chat": "",
    "uicon-chat-fill": "",
    "uicon-bag-fill": "",
    "uicon-bag": "",
    "uicon-error-circle-fill": "",
    "uicon-error-circle": "",
    "uicon-close-circle": "",
    "uicon-close-circle-fill": "",
    "uicon-checkmark-circle": "",
    "uicon-checkmark-circle-fill": "",
    "uicon-question-circle-fill": "",
    "uicon-question-circle": "",
    "uicon-share": "",
    "uicon-share-fill": "",
    "uicon-shopping-cart": "",
    "uicon-shopping-cart-fill": "",
    "uicon-bell": "",
    "uicon-bell-fill": "",
    "uicon-list": "",
    "uicon-list-dot": "",
    "uicon-zhihu": "",
    "uicon-zhihu-circle-fill": "",
    "uicon-zhifubao": "",
    "uicon-zhifubao-circle-fill": "",
    "uicon-weixin-circle-fill": "",
    "uicon-weixin-fill": "",
    "uicon-twitter-circle-fill": "",
    "uicon-twitter": "",
    "uicon-taobao-circle-fill": "",
    "uicon-taobao": "",
    "uicon-weibo-circle-fill": "",
    "uicon-weibo": "",
    "uicon-qq-fill": "",
    "uicon-qq-circle-fill": "",
    "uicon-moments-circel-fill": "",
    "uicon-moments": "",
    "uicon-qzone": "",
    "uicon-qzone-circle-fill": "",
    "uicon-baidu-circle-fill": "",
    "uicon-baidu": "",
    "uicon-facebook-circle-fill": "",
    "uicon-facebook": "",
    "uicon-car": "",
    "uicon-car-fill": "",
    "uicon-warning-fill": "",
    "uicon-warning": "",
    "uicon-clock-fill": "",
    "uicon-clock": "",
    "uicon-edit-pen": "",
    "uicon-edit-pen-fill": "",
    "uicon-email": "",
    "uicon-email-fill": "",
    "uicon-minus-circle": "",
    "uicon-minus-circle-fill": "",
    "uicon-plus-circle": "",
    "uicon-plus-circle-fill": "",
    "uicon-file-text": "",
    "uicon-file-text-fill": "",
    "uicon-pushpin": "",
    "uicon-pushpin-fill": "",
    "uicon-grid": "",
    "uicon-grid-fill": "",
    "uicon-play-circle": "",
    "uicon-play-circle-fill": "",
    "uicon-pause-circle-fill": "",
    "uicon-pause": "",
    "uicon-pause-circle": "",
    "uicon-eye-off": "",
    "uicon-eye-off-outline": "",
    "uicon-gift-fill": "",
    "uicon-gift": "",
    "uicon-rmb-circle-fill": "",
    "uicon-rmb-circle": "",
    "uicon-kefu-ermai": "",
    "uicon-server-fill": "",
    "uicon-coupon-fill": "",
    "uicon-coupon": "",
    "uicon-integral": "",
    "uicon-integral-fill": "",
    "uicon-home-fill": "",
    "uicon-home": "",
    "uicon-hourglass-half-fill": "",
    "uicon-hourglass": "",
    "uicon-account": "",
    "uicon-plus-people-fill": "",
    "uicon-minus-people-fill": "",
    "uicon-account-fill": "",
    "uicon-thumb-down-fill": "",
    "uicon-thumb-down": "",
    "uicon-thumb-up": "",
    "uicon-thumb-up-fill": "",
    "uicon-lock-fill": "",
    "uicon-lock-open": "",
    "uicon-lock-opened-fill": "",
    "uicon-lock": "",
    "uicon-red-packet-fill": "",
    "uicon-photo-fill": "",
    "uicon-photo": "",
    "uicon-volume-off-fill": "",
    "uicon-volume-off": "",
    "uicon-volume-fill": "",
    "uicon-volume": "",
    "uicon-red-packet": "",
    "uicon-download": "",
    "uicon-arrow-up-fill": "",
    "uicon-arrow-down-fill": "",
    "uicon-play-left-fill": "",
    "uicon-play-right-fill": "",
    "uicon-rewind-left-fill": "",
    "uicon-rewind-right-fill": "",
    "uicon-arrow-downward": "",
    "uicon-arrow-leftward": "",
    "uicon-arrow-rightward": "",
    "uicon-arrow-upward": "",
    "uicon-arrow-down": "",
    "uicon-arrow-right": "",
    "uicon-arrow-left": "",
    "uicon-arrow-up": "",
    "uicon-skip-back-left": "",
    "uicon-skip-forward-right": "",
    "uicon-rewind-right": "",
    "uicon-rewind-left": "",
    "uicon-arrow-right-double": "",
    "uicon-arrow-left-double": "",
    "uicon-wifi-off": "",
    "uicon-wifi": "",
    "uicon-empty-data": "",
    "uicon-empty-history": "",
    "uicon-empty-list": "",
    "uicon-empty-page": "",
    "uicon-empty-order": "",
    "uicon-man": "",
    "uicon-woman": "",
    "uicon-man-add": "",
    "uicon-man-add-fill": "",
    "uicon-man-delete": "",
    "uicon-man-delete-fill": "",
    "uicon-zh": "",
    "uicon-en": ""
  };
  const version = "3.1.6";
  {
    formatAppLog("log", "at node_modules/uview-plus/libs/config/config.js:6", `
 %c uview-plus V${version} %c https://uiadmin.net/uview-plus 

`, "color: #ffffff; background: #3c9cff; padding:5px 0;", "color: #3c9cff;background: #ffffff; padding:5px 0;");
  }
  const config = {
    v: version,
    version,
    // 主题名称
    type: [
      "primary",
      "success",
      "info",
      "error",
      "warning"
    ],
    // 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
    color: {
      "u-primary": "#2979ff",
      "u-warning": "#ff9900",
      "u-success": "#19be6b",
      "u-error": "#fa3534",
      "u-info": "#909399",
      "u-main-color": "#303133",
      "u-content-color": "#606266",
      "u-tips-color": "#909399",
      "u-light-color": "#c0c4cc"
    },
    // 默认单位，可以通过配置为rpx，那么在用于传入组件大小参数为数值时，就默认为rpx
    unit: "px"
  };
  const actionSheet = {
    // action-sheet组件
    actionSheet: {
      show: false,
      title: "",
      description: "",
      actions: () => [],
      index: "",
      cancelText: "",
      closeOnClickAction: true,
      safeAreaInsetBottom: true,
      openType: "",
      closeOnClickOverlay: true,
      round: 0
    }
  };
  const album = {
    // album 组件
    album: {
      urls: () => [],
      keyName: "",
      singleSize: 180,
      multipleSize: 70,
      space: 6,
      singleMode: "scaleToFill",
      multipleMode: "aspectFill",
      maxCount: 9,
      previewFullImage: true,
      rowCount: 3,
      showMore: true
    }
  };
  const alert = {
    // alert警告组件
    alert: {
      title: "",
      type: "warning",
      description: "",
      closable: false,
      showIcon: false,
      effect: "light",
      center: false,
      fontSize: 14
    }
  };
  const avatar = {
    // avatar 组件
    avatar: {
      src: "",
      shape: "circle",
      size: 40,
      mode: "scaleToFill",
      text: "",
      bgColor: "#c0c4cc",
      color: "#ffffff",
      fontSize: 18,
      icon: "",
      mpAvatar: false,
      randomBgColor: false,
      defaultUrl: "",
      colorIndex: "",
      name: ""
    }
  };
  const avatarGroup = {
    // avatarGroup 组件
    avatarGroup: {
      urls: () => [],
      maxCount: 5,
      shape: "circle",
      mode: "scaleToFill",
      showMore: true,
      size: 40,
      keyName: "",
      gap: 0.5,
      extraValue: 0
    }
  };
  const backtop = {
    // backtop组件
    backtop: {
      mode: "circle",
      icon: "arrow-upward",
      text: "",
      duration: 100,
      scrollTop: 0,
      top: 400,
      bottom: 100,
      right: 20,
      zIndex: 9,
      iconStyle: () => ({
        color: "#909399",
        fontSize: "19px"
      })
    }
  };
  const badge = {
    // 徽标数组件
    badge: {
      isDot: false,
      value: "",
      show: true,
      max: 999,
      type: "error",
      showZero: false,
      bgColor: null,
      color: null,
      shape: "circle",
      numberType: "overflow",
      offset: () => [],
      inverted: false,
      absolute: false
    }
  };
  const button = {
    // button组件
    button: {
      hairline: false,
      type: "info",
      size: "normal",
      shape: "square",
      plain: false,
      disabled: false,
      loading: false,
      loadingText: "",
      loadingMode: "spinner",
      loadingSize: 15,
      openType: "",
      formType: "",
      appParameter: "",
      hoverStopPropagation: true,
      lang: "en",
      sessionFrom: "",
      sendMessageTitle: "",
      sendMessagePath: "",
      sendMessageImg: "",
      showMessageCard: false,
      dataName: "",
      throttleTime: 0,
      hoverStartTime: 0,
      hoverStayTime: 200,
      text: "",
      icon: "",
      iconColor: "",
      color: ""
    }
  };
  const calendar = {
    // calendar 组件
    calendar: {
      title: "日期选择",
      showTitle: true,
      showSubtitle: true,
      mode: "single",
      startText: "开始",
      endText: "结束",
      customList: () => [],
      color: "#3c9cff",
      minDate: 0,
      maxDate: 0,
      defaultDate: null,
      maxCount: Number.MAX_SAFE_INTEGER,
      // Infinity
      rowHeight: 56,
      formatter: null,
      showLunar: false,
      showMark: true,
      confirmText: "确定",
      confirmDisabledText: "确定",
      show: false,
      closeOnClickOverlay: false,
      readonly: false,
      showConfirm: true,
      maxRange: Number.MAX_SAFE_INTEGER,
      // Infinity
      rangePrompt: "",
      showRangePrompt: true,
      allowSameDay: false,
      round: 0,
      monthNum: 3
    }
  };
  const carKeyboard = {
    // 车牌号键盘
    carKeyboard: {
      random: false
    }
  };
  const cell = {
    // cell组件的props
    cell: {
      customClass: "",
      title: "",
      label: "",
      value: "",
      icon: "",
      disabled: false,
      border: true,
      center: false,
      url: "",
      linkType: "navigateTo",
      clickable: false,
      isLink: false,
      required: false,
      arrowDirection: "",
      iconStyle: {},
      rightIconStyle: {},
      rightIcon: "arrow-right",
      titleStyle: {},
      size: "",
      stop: true,
      name: ""
    }
  };
  const cellGroup = {
    // cell-group组件的props
    cellGroup: {
      title: "",
      border: true,
      customStyle: {}
    }
  };
  const checkbox = {
    // checkbox组件
    checkbox: {
      name: "",
      shape: "",
      size: "",
      checkbox: false,
      disabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      iconColor: "",
      label: "",
      labelSize: "",
      labelColor: "",
      labelDisabled: ""
    }
  };
  const checkboxGroup = {
    // checkbox-group组件
    checkboxGroup: {
      name: "",
      value: () => [],
      shape: "square",
      disabled: false,
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      size: 18,
      placement: "row",
      labelSize: 14,
      labelColor: "#303133",
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      iconPlacement: "left",
      borderBottom: false
    }
  };
  const circleProgress = {
    // circleProgress 组件
    circleProgress: {
      percentage: 30
    }
  };
  const code$1 = {
    // code 组件
    code: {
      seconds: 60,
      startText: "获取验证码",
      changeText: "X秒重新获取",
      endText: "重新获取",
      keepRunning: false,
      uniqueKey: ""
    }
  };
  const codeInput = {
    // codeInput 组件
    codeInput: {
      adjustPosition: true,
      maxlength: 6,
      dot: false,
      mode: "box",
      hairline: false,
      space: 10,
      value: "",
      focus: false,
      bold: false,
      color: "#606266",
      fontSize: 18,
      size: 35,
      disabledKeyboard: false,
      borderColor: "#c9cacc",
      disabledDot: true
    }
  };
  const col = {
    // col 组件
    col: {
      span: 12,
      offset: 0,
      justify: "start",
      align: "stretch",
      textAlign: "left"
    }
  };
  const collapse = {
    // collapse 组件
    collapse: {
      value: null,
      accordion: false,
      border: true
    }
  };
  const collapseItem = {
    // collapseItem 组件
    collapseItem: {
      title: "",
      value: "",
      label: "",
      disabled: false,
      isLink: true,
      clickable: true,
      border: true,
      align: "left",
      name: "",
      icon: "",
      duration: 300
    }
  };
  const columnNotice = {
    // columnNotice 组件
    columnNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80,
      step: false,
      duration: 1500,
      disableTouch: true
    }
  };
  const countDown = {
    // u-count-down 计时器组件
    countDown: {
      time: 0,
      format: "HH:mm:ss",
      autoStart: true,
      millisecond: false
    }
  };
  const countTo = {
    // countTo 组件
    countTo: {
      startVal: 0,
      endVal: 0,
      duration: 2e3,
      autoplay: true,
      decimals: 0,
      useEasing: true,
      decimal: ".",
      color: "#606266",
      fontSize: 22,
      bold: false,
      separator: ""
    }
  };
  const datetimePicker = {
    // datetimePicker 组件
    datetimePicker: {
      show: false,
      showToolbar: true,
      value: "",
      title: "",
      mode: "datetime",
      maxDate: new Date(new Date().getFullYear() + 10, 0, 1).getTime(),
      minDate: new Date(new Date().getFullYear() - 10, 0, 1).getTime(),
      minHour: 0,
      maxHour: 23,
      minMinute: 0,
      maxMinute: 59,
      filter: null,
      formatter: null,
      loading: false,
      itemHeight: 44,
      cancelText: "取消",
      confirmText: "确认",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      closeOnClickOverlay: false,
      defaultIndex: () => []
    }
  };
  const divider = {
    // divider组件
    divider: {
      dashed: false,
      hairline: true,
      dot: false,
      textPosition: "center",
      text: "",
      textSize: 14,
      textColor: "#909399",
      lineColor: "#dcdfe6"
    }
  };
  const empty$1 = {
    // empty组件
    empty: {
      icon: "",
      text: "",
      textColor: "#c0c4cc",
      textSize: 14,
      iconColor: "#c0c4cc",
      iconSize: 90,
      mode: "data",
      width: 160,
      height: 160,
      show: true,
      marginTop: 0
    }
  };
  const form = {
    // form 组件
    form: {
      model: () => ({}),
      rules: () => ({}),
      errorType: "message",
      borderBottom: true,
      labelPosition: "left",
      labelWidth: 45,
      labelAlign: "left",
      labelStyle: () => ({})
    }
  };
  const formItem = {
    // formItem 组件
    formItem: {
      label: "",
      prop: "",
      borderBottom: "",
      labelWidth: "",
      rightIcon: "",
      leftIcon: "",
      required: false,
      leftIconStyle: ""
    }
  };
  const gap = {
    // gap组件
    gap: {
      bgColor: "transparent",
      height: 20,
      marginTop: 0,
      marginBottom: 0,
      customStyle: {}
    }
  };
  const grid = {
    // grid组件
    grid: {
      col: 3,
      border: false,
      align: "left"
    }
  };
  const gridItem = {
    // grid-item组件
    gridItem: {
      name: null,
      bgColor: "transparent"
    }
  };
  const {
    color: color$3
  } = config;
  const icon = {
    // icon组件
    icon: {
      name: "",
      color: color$3["u-content-color"],
      size: "16px",
      bold: false,
      index: "",
      hoverClass: "",
      customPrefix: "uicon",
      label: "",
      labelPos: "right",
      labelSize: "15px",
      labelColor: color$3["u-content-color"],
      space: "3px",
      imgMode: "",
      width: "",
      height: "",
      top: 0,
      stop: false
    }
  };
  const image$1 = {
    // image组件
    image: {
      src: "",
      mode: "aspectFill",
      width: "300",
      height: "225",
      shape: "square",
      radius: 0,
      lazyLoad: true,
      showMenuByLongpress: true,
      loadingIcon: "photo",
      errorIcon: "error-circle",
      showLoading: true,
      showError: true,
      fade: true,
      webp: false,
      duration: 500,
      bgColor: "#f3f4f6"
    }
  };
  const indexAnchor = {
    // indexAnchor 组件
    indexAnchor: {
      text: "",
      color: "#606266",
      size: 14,
      bgColor: "#dedede",
      height: 32
    }
  };
  const indexList = {
    // indexList 组件
    indexList: {
      inactiveColor: "#606266",
      activeColor: "#5677fc",
      indexList: () => [],
      sticky: true,
      customNavHeight: 0
    }
  };
  const input = {
    // index 组件
    input: {
      value: "",
      type: "text",
      fixed: false,
      disabled: false,
      disabledColor: "#f5f7fa",
      clearable: false,
      password: false,
      maxlength: -1,
      placeholder: null,
      placeholderClass: "input-placeholder",
      placeholderStyle: "color: #c0c4cc",
      showWordLimit: false,
      confirmType: "done",
      confirmHold: false,
      holdKeyboard: false,
      focus: false,
      autoBlur: false,
      disableDefaultPadding: false,
      cursor: -1,
      cursorSpacing: 30,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      inputAlign: "left",
      fontSize: "15px",
      color: "#303133",
      prefixIcon: "",
      prefixIconStyle: "",
      suffixIcon: "",
      suffixIconStyle: "",
      border: "surround",
      readonly: false,
      shape: "square",
      formatter: null
    }
  };
  const keyboard = {
    // 键盘组件
    keyboard: {
      mode: "number",
      dotDisabled: false,
      tooltip: true,
      showTips: true,
      tips: "",
      showCancel: true,
      showConfirm: true,
      random: false,
      safeAreaInsetBottom: true,
      closeOnClickOverlay: true,
      show: false,
      overlay: true,
      zIndex: 10075,
      cancelText: "取消",
      confirmText: "确定",
      autoChange: false
    }
  };
  const line = {
    // line组件
    line: {
      color: "#d6d7d9",
      length: "100%",
      direction: "row",
      hairline: true,
      margin: 0,
      dashed: false
    }
  };
  const lineProgress = {
    // lineProgress 组件
    lineProgress: {
      activeColor: "#19be6b",
      inactiveColor: "#ececec",
      percentage: 0,
      showText: true,
      height: 12
    }
  };
  const {
    color: color$2
  } = config;
  const link = {
    // link超链接组件props参数
    link: {
      color: color$2["u-primary"],
      fontSize: 15,
      underLine: false,
      href: "",
      mpTips: "链接已复制，请在浏览器打开",
      lineColor: "",
      text: ""
    }
  };
  const list = {
    // list 组件
    list: {
      showScrollbar: false,
      lowerThreshold: 50,
      upperThreshold: 0,
      scrollTop: 0,
      offsetAccuracy: 10,
      enableFlex: false,
      pagingEnabled: false,
      scrollable: true,
      scrollIntoView: "",
      scrollWithAnimation: false,
      enableBackToTop: false,
      height: 0,
      width: 0,
      preLoadScreen: 1
    }
  };
  const listItem = {
    // listItem 组件
    listItem: {
      anchor: ""
    }
  };
  const {
    color: color$1
  } = config;
  const loadingIcon = {
    // loading-icon加载中图标组件
    loadingIcon: {
      show: true,
      color: color$1["u-tips-color"],
      textColor: color$1["u-tips-color"],
      vertical: false,
      mode: "spinner",
      size: 24,
      textSize: 15,
      text: "",
      timingFunction: "ease-in-out",
      duration: 1200,
      inactiveColor: ""
    }
  };
  const loadingPage = {
    // loading-page组件
    loadingPage: {
      loadingText: "正在加载",
      image: "",
      loadingMode: "circle",
      loading: false,
      bgColor: "#ffffff",
      color: "#C8C8C8",
      fontSize: 19,
      iconSize: 28,
      loadingColor: "#C8C8C8"
    }
  };
  const loadmore = {
    // loadmore 组件
    loadmore: {
      status: "loadmore",
      bgColor: "transparent",
      icon: true,
      fontSize: 14,
      iconSize: 17,
      color: "#606266",
      loadingIcon: "spinner",
      loadmoreText: "加载更多",
      loadingText: "正在加载...",
      nomoreText: "没有更多了",
      isDot: false,
      iconColor: "#b7b7b7",
      marginTop: 10,
      marginBottom: 10,
      height: "auto",
      line: false,
      lineColor: "#E6E8EB",
      dashed: false
    }
  };
  const modal = {
    // modal 组件
    modal: {
      show: false,
      title: "",
      content: "",
      confirmText: "确认",
      cancelText: "取消",
      showConfirmButton: true,
      showCancelButton: false,
      confirmColor: "#2979ff",
      cancelColor: "#606266",
      buttonReverse: false,
      zoom: true,
      asyncClose: false,
      closeOnClickOverlay: false,
      negativeTop: 0,
      width: "650rpx",
      confirmButtonShape: ""
    }
  };
  const color = {
    primary: "#3c9cff",
    info: "#909399",
    default: "#909399",
    warning: "#f9ae3d",
    error: "#f56c6c",
    success: "#5ac725",
    mainColor: "#303133",
    contentColor: "#606266",
    tipsColor: "#909399",
    lightColor: "#c0c4cc",
    borderColor: "#e4e7ed"
  };
  const navbar = {
    // navbar 组件
    navbar: {
      safeAreaInsetTop: true,
      placeholder: false,
      fixed: true,
      border: false,
      leftIcon: "arrow-left",
      leftText: "",
      rightText: "",
      rightIcon: "",
      title: "",
      bgColor: "#ffffff",
      titleWidth: "400rpx",
      height: "44px",
      leftIconSize: 20,
      leftIconColor: color.mainColor,
      autoBack: false,
      titleStyle: ""
    }
  };
  const noNetwork = {
    // noNetwork
    noNetwork: {
      tips: "哎呀，网络信号丢失",
      zIndex: "",
      image: "data:image/png;base64,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"
    }
  };
  const noticeBar = {
    // noticeBar
    noticeBar: {
      text: () => [],
      direction: "row",
      step: false,
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      speed: 80,
      fontSize: 14,
      duration: 2e3,
      disableTouch: true,
      url: "",
      linkType: "navigateTo"
    }
  };
  const notify = {
    // notify组件
    notify: {
      top: 0,
      type: "primary",
      color: "#ffffff",
      bgColor: "",
      message: "",
      duration: 3e3,
      fontSize: 15,
      safeAreaInsetTop: false
    }
  };
  const numberBox = {
    // 步进器组件
    numberBox: {
      name: "",
      value: 0,
      min: 1,
      max: Number.MAX_SAFE_INTEGER,
      step: 1,
      integer: false,
      disabled: false,
      disabledInput: false,
      asyncChange: false,
      inputWidth: 35,
      showMinus: true,
      showPlus: true,
      decimalLength: null,
      longPress: true,
      color: "#323233",
      buttonSize: 30,
      bgColor: "#EBECEE",
      cursorSpacing: 100,
      disableMinus: false,
      disablePlus: false,
      iconStyle: ""
    }
  };
  const numberKeyboard = {
    // 数字键盘
    numberKeyboard: {
      mode: "number",
      dotDisabled: false,
      random: false
    }
  };
  const overlay = {
    // overlay组件
    overlay: {
      show: false,
      zIndex: 10070,
      duration: 300,
      opacity: 0.5
    }
  };
  const parse = {
    // parse
    parse: {
      copyLink: true,
      errorImg: "",
      lazyLoad: false,
      loadingImg: "",
      pauseVideo: true,
      previewImg: true,
      setTitle: true,
      showImgMenu: true
    }
  };
  const picker = {
    // picker
    picker: {
      show: false,
      showToolbar: true,
      title: "",
      columns: () => [],
      loading: false,
      itemHeight: 44,
      cancelText: "取消",
      confirmText: "确定",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      keyName: "text",
      closeOnClickOverlay: false,
      defaultIndex: () => [],
      immediateChange: false
    }
  };
  const popup = {
    // popup组件
    popup: {
      show: false,
      overlay: true,
      mode: "bottom",
      duration: 300,
      closeable: false,
      overlayStyle: () => {
      },
      closeOnClickOverlay: true,
      zIndex: 10075,
      safeAreaInsetBottom: true,
      safeAreaInsetTop: false,
      closeIconPos: "top-right",
      round: 0,
      zoom: true,
      bgColor: "",
      overlayOpacity: 0.5
    }
  };
  const radio = {
    // radio组件
    radio: {
      name: "",
      shape: "",
      disabled: "",
      labelDisabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      labelSize: "",
      label: "",
      labelColor: "",
      size: "",
      iconColor: "",
      placement: ""
    }
  };
  const radioGroup = {
    // radio-group组件
    radioGroup: {
      value: "",
      disabled: false,
      shape: "circle",
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      name: "",
      size: 18,
      placement: "row",
      label: "",
      labelColor: "#303133",
      labelSize: 14,
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      borderBottom: false,
      iconPlacement: "left"
    }
  };
  const rate = {
    // rate组件
    rate: {
      value: 1,
      count: 5,
      disabled: false,
      size: 18,
      inactiveColor: "#b2b2b2",
      activeColor: "#FA3534",
      gutter: 4,
      minCount: 1,
      allowHalf: false,
      activeIcon: "star-fill",
      inactiveIcon: "star",
      touchable: true
    }
  };
  const readMore = {
    // readMore
    readMore: {
      showHeight: 400,
      toggle: false,
      closeText: "展开阅读全文",
      openText: "收起",
      color: "#2979ff",
      fontSize: 14,
      textIndent: "2em",
      name: ""
    }
  };
  const row = {
    // row
    row: {
      gutter: 0,
      justify: "start",
      align: "center"
    }
  };
  const rowNotice = {
    // rowNotice
    rowNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80
    }
  };
  const scrollList = {
    // scrollList
    scrollList: {
      indicatorWidth: 50,
      indicatorBarWidth: 20,
      indicator: true,
      indicatorColor: "#f2f2f2",
      indicatorActiveColor: "#3c9cff",
      indicatorStyle: ""
    }
  };
  const search = {
    // search
    search: {
      shape: "round",
      bgColor: "#f2f2f2",
      placeholder: "请输入关键字",
      clearabled: true,
      focus: false,
      showAction: true,
      actionStyle: () => ({}),
      actionText: "搜索",
      inputAlign: "left",
      inputStyle: () => ({}),
      disabled: false,
      borderColor: "transparent",
      searchIconColor: "#909399",
      searchIconSize: 22,
      color: "#606266",
      placeholderColor: "#909399",
      searchIcon: "search",
      margin: "0",
      animation: false,
      value: "",
      maxlength: "-1",
      height: 32,
      label: null
    }
  };
  const section = {
    // u-section组件
    section: {
      title: "",
      subTitle: "更多",
      right: true,
      fontSize: 15,
      bold: true,
      color: "#303133",
      subColor: "#909399",
      showLine: true,
      lineColor: "",
      arrow: true
    }
  };
  const skeleton = {
    // skeleton
    skeleton: {
      loading: true,
      animate: true,
      rows: 0,
      rowsWidth: "100%",
      rowsHeight: 18,
      title: true,
      titleWidth: "50%",
      titleHeight: 18,
      avatar: false,
      avatarSize: 32,
      avatarShape: "circle"
    }
  };
  const slider = {
    // slider组件
    slider: {
      value: 0,
      blockSize: 18,
      min: 0,
      max: 100,
      step: 1,
      activeColor: "#2979ff",
      inactiveColor: "#c0c4cc",
      blockColor: "#ffffff",
      showValue: false,
      disabled: false,
      blockStyle: () => {
      }
    }
  };
  const statusBar = {
    // statusBar
    statusBar: {
      bgColor: "transparent"
    }
  };
  const steps = {
    // steps组件
    steps: {
      direction: "row",
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#969799",
      activeIcon: "",
      inactiveIcon: "",
      dot: false
    }
  };
  const stepsItem = {
    // steps-item组件
    stepsItem: {
      title: "",
      desc: "",
      iconSize: 17,
      error: false
    }
  };
  const sticky = {
    // sticky组件
    sticky: {
      offsetTop: 0,
      customNavHeight: 0,
      disabled: false,
      bgColor: "transparent",
      zIndex: "",
      index: ""
    }
  };
  const subsection = {
    // subsection组件
    subsection: {
      list: [],
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#303133",
      mode: "button",
      fontSize: 12,
      bold: true,
      bgColor: "#eeeeef",
      keyName: "name"
    }
  };
  const swipeAction = {
    // swipe-action组件
    swipeAction: {
      autoClose: true
    }
  };
  const swipeActionItem = {
    // swipeActionItem 组件
    swipeActionItem: {
      show: false,
      name: "",
      disabled: false,
      threshold: 20,
      autoClose: true,
      options: [],
      duration: 300
    }
  };
  const swiper = {
    // swiper 组件
    swiper: {
      list: () => [],
      indicator: false,
      indicatorActiveColor: "#FFFFFF",
      indicatorInactiveColor: "rgba(255, 255, 255, 0.35)",
      indicatorStyle: "",
      indicatorMode: "line",
      autoplay: true,
      current: 0,
      currentItemId: "",
      interval: 3e3,
      duration: 300,
      circular: false,
      previousMargin: 0,
      nextMargin: 0,
      acceleration: false,
      displayMultipleItems: 1,
      easingFunction: "default",
      keyName: "url",
      imgMode: "aspectFill",
      height: 130,
      bgColor: "#f3f4f6",
      radius: 4,
      loading: false,
      showTitle: false
    }
  };
  const swipterIndicator = {
    // swiperIndicator 组件
    swiperIndicator: {
      length: 0,
      current: 0,
      indicatorActiveColor: "",
      indicatorInactiveColor: "",
      indicatorMode: "line"
    }
  };
  const _switch = {
    // switch
    switch: {
      loading: false,
      disabled: false,
      size: 25,
      activeColor: "#2979ff",
      inactiveColor: "#ffffff",
      value: false,
      activeValue: true,
      inactiveValue: false,
      asyncChange: false,
      space: 0
    }
  };
  const tabbar = {
    // tabbar
    tabbar: {
      value: null,
      safeAreaInsetBottom: true,
      border: true,
      zIndex: 1,
      activeColor: "#1989fa",
      inactiveColor: "#7d7e80",
      fixed: true,
      placeholder: true
    }
  };
  const tabbarItem = {
    //
    tabbarItem: {
      name: null,
      icon: "",
      badge: null,
      dot: false,
      text: "",
      badgeStyle: "top: 6px;right:2px;"
    }
  };
  const tabs = {
    //
    tabs: {
      duration: 300,
      list: () => [],
      lineColor: "#3c9cff",
      activeStyle: () => ({
        color: "#303133"
      }),
      inactiveStyle: () => ({
        color: "#606266"
      }),
      lineWidth: 20,
      lineHeight: 3,
      lineBgSize: "cover",
      itemStyle: () => ({
        height: "44px"
      }),
      scrollable: true,
      current: 0,
      keyName: "name"
    }
  };
  const tag = {
    // tag 组件
    tag: {
      type: "primary",
      disabled: false,
      size: "medium",
      shape: "square",
      text: "",
      bgColor: "",
      color: "",
      borderColor: "",
      closeColor: "#C6C7CB",
      name: "",
      plainFill: false,
      plain: false,
      closable: false,
      show: true,
      icon: ""
    }
  };
  const text = {
    // text 组件
    text: {
      type: "",
      show: true,
      text: "",
      prefixIcon: "",
      suffixIcon: "",
      mode: "",
      href: "",
      format: "",
      call: false,
      openType: "",
      bold: false,
      block: false,
      lines: "",
      color: "#303133",
      size: 15,
      iconStyle: () => ({
        fontSize: "15px"
      }),
      decoration: "none",
      margin: 0,
      lineHeight: "",
      align: "left",
      wordWrap: "normal"
    }
  };
  const textarea = {
    // textarea 组件
    textarea: {
      value: "",
      placeholder: "",
      placeholderClass: "textarea-placeholder",
      placeholderStyle: "color: #c0c4cc",
      height: 70,
      confirmType: "done",
      disabled: false,
      count: false,
      focus: false,
      autoHeight: false,
      fixed: false,
      cursorSpacing: 0,
      cursor: "",
      showConfirmBar: true,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      disableDefaultPadding: false,
      holdKeyboard: false,
      maxlength: 140,
      border: "surround",
      formatter: null
    }
  };
  const toast$1 = {
    // toast组件
    toast: {
      zIndex: 10090,
      loading: false,
      text: "",
      icon: "",
      type: "",
      loadingMode: "",
      show: "",
      overlay: false,
      position: "center",
      params: () => {
      },
      duration: 2e3,
      isTab: false,
      url: "",
      callback: null,
      back: false
    }
  };
  const toolbar = {
    // toolbar 组件
    toolbar: {
      show: true,
      cancelText: "取消",
      confirmText: "确认",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      title: ""
    }
  };
  const tooltip = {
    // tooltip 组件
    tooltip: {
      text: "",
      copyText: "",
      size: 14,
      color: "#606266",
      bgColor: "transparent",
      direction: "top",
      zIndex: 10071,
      showCopy: true,
      buttons: () => [],
      overlay: true,
      showToast: true
    }
  };
  const transition = {
    // transition动画组件的props
    transition: {
      show: false,
      mode: "fade",
      duration: "300",
      timingFunction: "ease-out"
    }
  };
  const upload = {
    // upload组件
    upload: {
      accept: "image",
      capture: () => ["album", "camera"],
      compressed: true,
      camera: "back",
      maxDuration: 60,
      uploadIcon: "camera-fill",
      uploadIconColor: "#D3D4D6",
      useBeforeRead: false,
      previewFullImage: true,
      maxCount: 52,
      disabled: false,
      imageMode: "aspectFill",
      name: "",
      sizeType: () => ["original", "compressed"],
      multiple: false,
      deletable: true,
      maxSize: Number.MAX_VALUE,
      fileList: () => [],
      uploadText: "",
      width: 80,
      height: 80,
      previewImage: true
    }
  };
  const props$a = {
    ...actionSheet,
    ...album,
    ...alert,
    ...avatar,
    ...avatarGroup,
    ...backtop,
    ...badge,
    ...button,
    ...calendar,
    ...carKeyboard,
    ...cell,
    ...cellGroup,
    ...checkbox,
    ...checkboxGroup,
    ...circleProgress,
    ...code$1,
    ...codeInput,
    ...col,
    ...collapse,
    ...collapseItem,
    ...columnNotice,
    ...countDown,
    ...countTo,
    ...datetimePicker,
    ...divider,
    ...empty$1,
    ...form,
    ...formItem,
    ...gap,
    ...grid,
    ...gridItem,
    ...icon,
    ...image$1,
    ...indexAnchor,
    ...indexList,
    ...input,
    ...keyboard,
    ...line,
    ...lineProgress,
    ...link,
    ...list,
    ...listItem,
    ...loadingIcon,
    ...loadingPage,
    ...loadmore,
    ...modal,
    ...navbar,
    ...noNetwork,
    ...noticeBar,
    ...notify,
    ...numberBox,
    ...numberKeyboard,
    ...overlay,
    ...parse,
    ...picker,
    ...popup,
    ...radio,
    ...radioGroup,
    ...rate,
    ...readMore,
    ...row,
    ...rowNotice,
    ...scrollList,
    ...search,
    ...section,
    ...skeleton,
    ...slider,
    ...statusBar,
    ...steps,
    ...stepsItem,
    ...sticky,
    ...subsection,
    ...swipeAction,
    ...swipeActionItem,
    ...swiper,
    ...swipterIndicator,
    ..._switch,
    ...tabbar,
    ...tabbarItem,
    ...tabs,
    ...tag,
    ...text,
    ...textarea,
    ...toast$1,
    ...toolbar,
    ...tooltip,
    ...transition,
    ...upload
  };
  const props$9 = {
    props: {
      // 图标类名
      name: {
        type: String,
        default: props$a.icon.name
      },
      // 图标颜色，可接受主题色
      color: {
        type: String,
        default: props$a.icon.color
      },
      // 字体大小，单位px
      size: {
        type: [String, Number],
        default: props$a.icon.size
      },
      // 是否显示粗体
      bold: {
        type: Boolean,
        default: props$a.icon.bold
      },
      // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
      index: {
        type: [String, Number],
        default: props$a.icon.index
      },
      // 触摸图标时的类名
      hoverClass: {
        type: String,
        default: props$a.icon.hoverClass
      },
      // 自定义扩展前缀，方便用户扩展自己的图标库
      customPrefix: {
        type: String,
        default: props$a.icon.customPrefix
      },
      // 图标右边或者下面的文字
      label: {
        type: [String, Number],
        default: props$a.icon.label
      },
      // label的位置，只能右边或者下边
      labelPos: {
        type: String,
        default: props$a.icon.labelPos
      },
      // label的大小
      labelSize: {
        type: [String, Number],
        default: props$a.icon.labelSize
      },
      // label的颜色
      labelColor: {
        type: String,
        default: props$a.icon.labelColor
      },
      // label与图标的距离
      space: {
        type: [String, Number],
        default: props$a.icon.space
      },
      // 图片的mode
      imgMode: {
        type: String,
        default: props$a.icon.imgMode
      },
      // 用于显示图片小图标时，图片的宽度
      width: {
        type: [String, Number],
        default: props$a.icon.width
      },
      // 用于显示图片小图标时，图片的高度
      height: {
        type: [String, Number],
        default: props$a.icon.height
      },
      // 用于解决某些情况下，让图标垂直居中的用途
      top: {
        type: [String, Number],
        default: props$a.icon.top
      },
      // 是否阻止事件传播
      stop: {
        type: Boolean,
        default: props$a.icon.stop
      }
    }
  };
  const mpMixin = {};
  const mixin = {
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: ""
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$u.getRect = this.$uGetRect;
    },
    created() {
      this.$u.getRect = this.$uGetRect;
    },
    computed: {
      // 在2.x版本中，将会把$u挂载到uni对象下，导致在模板中无法使用uni.$u.xxx形式
      // 所以这里通过computed计算属性将其附加到this.$u上，就可以在模板或者js中使用uni.$u.xxx
      // 只在nvue环境通过此方式引入完整的$u，其他平台会出现性能问题，非nvue则按需引入（主要原因是props过大）
      $u() {
        return uni.$u.deepMerge(uni.$u, {
          props: void 0,
          http: void 0,
          mixin: void 0
        });
      },
      /**
       * 生成bem规则类名
       * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
       * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
       * @param {String} name 组件名称
       * @param {Array} fixed 一直会存在的类名
       * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
       * @returns {Array|string}
       */
      bem() {
        return function(name, fixed, change) {
          const prefix = `u-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      // 跳转某一个页面
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          uni[this.linkType]({
            url: url2
          });
        }
      },
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      $uGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = uni.$u.$parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      // 阻止事件冒泡
      preventEvent(e) {
        e && typeof e.stopPropagation === "function" && e.stopPropagation();
      },
      // 空操作
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
      uni.$emit("uOnReachBottom");
    },
    beforeDestroy() {
      if (this.parent && uni.$u.test.array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  };
  const _sfc_main$r = {
    name: "u-icon",
    data() {
      return {};
    },
    emits: ["click"],
    mixins: [mpMixin, mixin, props$9],
    computed: {
      uClasses() {
        let classes = [];
        classes.push(this.customPrefix + "-" + this.name);
        if (this.color && uni.$u.config.type.includes(this.color))
          classes.push("u-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: uni.$u.addUnit(this.size),
          lineHeight: uni.$u.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
          top: uni.$u.addUnit(this.top)
        };
        if (this.color && !uni.$u.config.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
      isImg() {
        return this.name.indexOf("/") !== -1;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? uni.$u.addUnit(this.width) : uni.$u.addUnit(this.size);
        style.height = this.height ? uni.$u.addUnit(this.height) : uni.$u.addUnit(this.size);
        return style;
      },
      // 通过图标名，查找对应的图标
      icon() {
        return icons["uicon-" + this.name] || this.name;
      }
    },
    methods: {
      clickHandler(e) {
        this.$emit("click", this.index);
        this.stop && this.preventEvent(e);
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-icon", ["u-icon--" + _ctx.labelPos]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        $options.isImg ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          class: "u-icon__img",
          src: _ctx.name,
          mode: _ctx.imgMode,
          style: vue.normalizeStyle([$options.imgStyle, _ctx.$u.addStyle(_ctx.customStyle)])
        }, null, 12, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("text", {
          key: 1,
          class: vue.normalizeClass(["u-icon__icon", $options.uClasses]),
          style: vue.normalizeStyle([$options.iconStyle, _ctx.$u.addStyle(_ctx.customStyle)]),
          "hover-class": _ctx.hoverClass
        }, vue.toDisplayString($options.icon), 15, ["hover-class"])),
        vue.createCommentVNode(' 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 '),
        _ctx.label !== "" ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 2,
            class: "u-icon__label",
            style: vue.normalizeStyle({
              color: _ctx.labelColor,
              fontSize: _ctx.$u.addUnit(_ctx.labelSize),
              marginLeft: _ctx.labelPos == "right" ? _ctx.$u.addUnit(_ctx.space) : 0,
              marginTop: _ctx.labelPos == "bottom" ? _ctx.$u.addUnit(_ctx.space) : 0,
              marginRight: _ctx.labelPos == "left" ? _ctx.$u.addUnit(_ctx.space) : 0,
              marginBottom: _ctx.labelPos == "top" ? _ctx.$u.addUnit(_ctx.space) : 0
            })
          },
          vue.toDisplayString(_ctx.label),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$j], ["__scopeId", "data-v-1c933a9a"], ["__file", "D:/prgraming/myproject/ihome/node_modules/uview-plus/components/u-icon/u-icon.vue"]]);
  const props$8 = {
    props: {
      // 文字颜色
      color: {
        type: String,
        default: props$a.link.color
      },
      // 字体大小，单位px
      fontSize: {
        type: [String, Number],
        default: props$a.link.fontSize
      },
      // 是否显示下划线
      underLine: {
        type: Boolean,
        default: props$a.link.underLine
      },
      // 要跳转的链接
      href: {
        type: String,
        default: props$a.link.href
      },
      // 小程序中复制到粘贴板的提示语
      mpTips: {
        type: String,
        default: props$a.link.mpTips
      },
      // 下划线颜色
      lineColor: {
        type: String,
        default: props$a.link.lineColor
      },
      // 超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色
      text: {
        type: String,
        default: props$a.link.text
      }
    }
  };
  const _sfc_main$q = {
    name: "u-link",
    mixins: [mpMixin, mixin, props$8],
    computed: {
      linkStyle() {
        const style = {
          color: this.color,
          fontSize: uni.$u.addUnit(this.fontSize),
          // line-height设置为比字体大小多2px
          lineHeight: uni.$u.addUnit(uni.$u.getPx(this.fontSize) + 2),
          textDecoration: this.underLine ? "underline" : "none"
        };
        return style;
      }
    },
    methods: {
      openLink() {
        plus.runtime.openURL(this.href);
        this.$emit("click");
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        class: "u-link",
        onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.openLink && $options.openLink(...args), ["stop"])),
        style: vue.normalizeStyle([$options.linkStyle, _ctx.$u.addStyle(_ctx.customStyle)])
      },
      vue.toDisplayString(_ctx.text),
      5
      /* TEXT, STYLE */
    );
  }
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$i], ["__scopeId", "data-v-dedad317"], ["__file", "D:/prgraming/myproject/ihome/node_modules/uview-plus/components/u-link/u-link.vue"]]);
  const value = {
    computed: {
      // 经处理后需要显示的值
      value() {
        const {
          text: text2,
          mode,
          format,
          href
        } = this;
        if (mode === "price") {
          if (!/^\d+(\.\d+)?$/.test(text2)) {
            uni.$u.error("金额模式下，text参数需要为金额格式");
          }
          if (uni.$u.test.func(format)) {
            return format(text2);
          }
          return uni.$u.priceFormat(text2, 2);
        }
        if (mode === "date") {
          !uni.$u.test.date(text2) && uni.$u.error("日期模式下，text参数需要为日期或时间戳格式");
          if (uni.$u.test.func(format)) {
            return format(text2);
          }
          if (format) {
            return uni.$u.timeFormat(text2, format);
          }
          return uni.$u.timeFormat(text2, "yyyy-mm-dd");
        }
        if (mode === "phone") {
          if (uni.$u.test.func(format)) {
            return format(text2);
          }
          if (format === "encrypt") {
            return `${text2.substr(0, 3)}****${text2.substr(7)}`;
          }
          return text2;
        }
        if (mode === "name") {
          !(typeof text2 === "string") && uni.$u.error("姓名模式下，text参数需要为字符串格式");
          if (uni.$u.test.func(format)) {
            return format(text2);
          }
          if (format === "encrypt") {
            return this.formatName(text2);
          }
          return text2;
        }
        if (mode === "link") {
          !uni.$u.test.url(href) && uni.$u.error("超链接模式下，href参数需要为URL格式");
          return text2;
        }
        return text2;
      }
    },
    methods: {
      // 默认的姓名脱敏规则
      formatName(name) {
        let value2 = "";
        if (name.length === 2) {
          value2 = name.substr(0, 1) + "*";
        } else if (name.length > 2) {
          let char = "";
          for (let i = 0, len = name.length - 2; i < len; i++) {
            char += "*";
          }
          value2 = name.substr(0, 1) + char + name.substr(-1, 1);
        } else {
          value2 = name;
        }
        return value2;
      }
    }
  };
  const props$7 = {
    props: {
      // 主题颜色
      type: {
        type: String,
        default: props$a.text.type
      },
      // 是否显示
      show: {
        type: Boolean,
        default: props$a.text.show
      },
      // 显示的值
      text: {
        type: [String, Number],
        default: props$a.text.text
      },
      // 前置图标
      prefixIcon: {
        type: String,
        default: props$a.text.prefixIcon
      },
      // 后置图标
      suffixIcon: {
        type: String,
        default: props$a.text.suffixIcon
      },
      // 文本处理的匹配模式
      // text-普通文本，price-价格，phone-手机号，name-姓名，date-日期，link-超链接
      mode: {
        type: String,
        default: props$a.text.mode
      },
      // mode=link下，配置的链接
      href: {
        type: String,
        default: props$a.text.href
      },
      // 格式化规则
      format: {
        type: [String, Function],
        default: props$a.text.format
      },
      // mode=phone时，点击文本是否拨打电话
      call: {
        type: Boolean,
        default: props$a.text.call
      },
      // 小程序的打开方式
      openType: {
        type: String,
        default: props$a.text.openType
      },
      // 是否粗体，默认normal
      bold: {
        type: Boolean,
        default: props$a.text.bold
      },
      // 是否块状
      block: {
        type: Boolean,
        default: props$a.text.block
      },
      // 文本显示的行数，如果设置，超出此行数，将会显示省略号
      lines: {
        type: [String, Number],
        default: props$a.text.lines
      },
      // 文本颜色
      color: {
        type: String,
        default: props$a.text.color
      },
      // 字体大小
      size: {
        type: [String, Number],
        default: props$a.text.size
      },
      // 图标的样式
      iconStyle: {
        type: [Object, String],
        default: props$a.text.iconStyle
      },
      // 文字装饰，下划线，中划线等，可选值 none|underline|line-through
      decoration: {
        tepe: String,
        default: props$a.text.decoration
      },
      // 外边距，对象、字符串，数值形式均可
      margin: {
        type: [Object, String, Number],
        default: props$a.text.margin
      },
      // 文本行高
      lineHeight: {
        type: [String, Number],
        default: props$a.text.lineHeight
      },
      // 文本对齐方式，可选值left|center|right
      align: {
        type: String,
        default: props$a.text.align
      },
      // 文字换行，可选值break-word|normal|anywhere
      wordWrap: {
        type: String,
        default: props$a.text.wordWrap
      }
    }
  };
  const _sfc_main$p = {
    name: "u--text",
    mixins: [mpMixin, mixin, value, props$7],
    emits: ["click"],
    computed: {
      valueStyle() {
        const style = {
          textDecoration: this.decoration,
          fontWeight: this.bold ? "bold" : "normal",
          wordWrap: this.wordWrap,
          fontSize: uni.$u.addUnit(this.size)
        };
        !this.type && (style.color = this.color);
        this.isNvue && this.lines && (style.lines = this.lines);
        this.lineHeight && (style.lineHeight = uni.$u.addUnit(this.lineHeight));
        !this.isNvue && this.block && (style.display = "block");
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      },
      isNvue() {
        let nvue = false;
        return nvue;
      },
      isMp() {
        let mp = false;
        return mp;
      }
    },
    data() {
      return {};
    },
    methods: {
      clickHandler() {
        if (this.call && this.mode === "phone") {
          uni.makePhoneCall({
            phoneNumber: this.text
          });
        }
        this.$emit("click");
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$5);
    const _component_u_link = resolveEasycom(vue.resolveDynamicComponent("u-link"), __easycom_1$4);
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["u-text", []]),
        style: vue.normalizeStyle({
          margin: _ctx.margin,
          justifyContent: _ctx.align === "left" ? "flex-start" : _ctx.align === "center" ? "center" : "flex-end"
        }),
        onClick: _cache[6] || (_cache[6] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        _ctx.mode === "price" ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 0,
            class: vue.normalizeClass(["u-text__price", _ctx.type && `u-text__value--${_ctx.type}`]),
            style: vue.normalizeStyle([$options.valueStyle])
          },
          "￥",
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        _ctx.prefixIcon ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "u-text__prefix-icon"
        }, [
          vue.createVNode(_component_u_icon, {
            name: _ctx.prefixIcon,
            customStyle: _ctx.$u.addStyle(_ctx.iconStyle)
          }, null, 8, ["name", "customStyle"])
        ])) : vue.createCommentVNode("v-if", true),
        _ctx.mode === "link" ? (vue.openBlock(), vue.createBlock(_component_u_link, {
          key: 2,
          text: _ctx.value,
          href: _ctx.href,
          underLine: ""
        }, null, 8, ["text", "href"])) : _ctx.openType && $options.isMp ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 3,
          class: "u-reset-button u-text__value",
          style: vue.normalizeStyle([$options.valueStyle]),
          "data-index": _ctx.index,
          openType: _ctx.openType,
          onGetuserinfo: _cache[0] || (_cache[0] = (...args) => _ctx.onGetUserInfo && _ctx.onGetUserInfo(...args)),
          onContact: _cache[1] || (_cache[1] = (...args) => _ctx.onContact && _ctx.onContact(...args)),
          onGetphonenumber: _cache[2] || (_cache[2] = (...args) => _ctx.onGetPhoneNumber && _ctx.onGetPhoneNumber(...args)),
          onError: _cache[3] || (_cache[3] = (...args) => _ctx.onError && _ctx.onError(...args)),
          onLaunchapp: _cache[4] || (_cache[4] = (...args) => _ctx.onLaunchApp && _ctx.onLaunchApp(...args)),
          onOpensetting: _cache[5] || (_cache[5] = (...args) => _ctx.onOpenSetting && _ctx.onOpenSetting(...args)),
          lang: _ctx.lang,
          "session-from": _ctx.sessionFrom,
          "send-message-title": _ctx.sendMessageTitle,
          "send-message-path": _ctx.sendMessagePath,
          "send-message-img": _ctx.sendMessageImg,
          "show-message-card": _ctx.showMessageCard,
          "app-parameter": _ctx.appParameter
        }, vue.toDisplayString(_ctx.value), 45, ["data-index", "openType", "lang", "session-from", "send-message-title", "send-message-path", "send-message-img", "show-message-card", "app-parameter"])) : (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 4,
            class: vue.normalizeClass(["u-text__value", [
              _ctx.type && `u-text__value--${_ctx.type}`,
              _ctx.lines && `u-line-${_ctx.lines}`
            ]]),
            style: vue.normalizeStyle([$options.valueStyle])
          },
          vue.toDisplayString(_ctx.value),
          7
          /* TEXT, CLASS, STYLE */
        )),
        _ctx.suffixIcon ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 5,
          class: "u-text__suffix-icon"
        }, [
          vue.createVNode(_component_u_icon, {
            name: _ctx.suffixIcon,
            customStyle: _ctx.$u.addStyle(_ctx.iconStyle)
          }, null, 8, ["name", "customStyle"])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      4
      /* STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const uvText = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$h], ["__scopeId", "data-v-5fec1d8b"], ["__file", "D:/prgraming/myproject/ihome/node_modules/uview-plus/components/u-text/u-text.vue"]]);
  const _sfc_main$o = {
    name: "u--text",
    mixins: [mpMixin, mixin, props$7],
    components: {
      uvText
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uvText = vue.resolveComponent("uvText");
    return vue.openBlock(), vue.createBlock(_component_uvText, {
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
    }, null, 8, ["type", "show", "text", "prefixIcon", "suffixIcon", "mode", "href", "format", "call", "openType", "bold", "block", "lines", "color", "decoration", "size", "iconStyle", "margin", "lineHeight", "align", "wordWrap", "customStyle"]);
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$g], ["__file", "D:/prgraming/myproject/ihome/node_modules/uview-plus/components/u--text/u--text.vue"]]);
  const props$6 = {
    props: {
      // 头像图片路径(不能为相对路径)
      src: {
        type: String,
        default: props$a.avatar.src
      },
      // 头像形状，circle-圆形，square-方形
      shape: {
        type: String,
        default: props$a.avatar.shape
      },
      // 头像尺寸
      size: {
        type: [String, Number],
        default: props$a.avatar.size
      },
      // 裁剪模式
      mode: {
        type: String,
        default: props$a.avatar.mode
      },
      // 显示的文字
      text: {
        type: String,
        default: props$a.avatar.text
      },
      // 背景色
      bgColor: {
        type: String,
        default: props$a.avatar.bgColor
      },
      // 文字颜色
      color: {
        type: String,
        default: props$a.avatar.color
      },
      // 文字大小
      fontSize: {
        type: [String, Number],
        default: props$a.avatar.fontSize
      },
      // 显示的图标
      icon: {
        type: String,
        default: props$a.avatar.icon
      },
      // 显示小程序头像，只对百度，微信，QQ小程序有效
      mpAvatar: {
        type: Boolean,
        default: props$a.avatar.mpAvatar
      },
      // 是否使用随机背景色
      randomBgColor: {
        type: Boolean,
        default: props$a.avatar.randomBgColor
      },
      // 加载失败的默认头像(组件有内置默认图片)
      defaultUrl: {
        type: String,
        default: props$a.avatar.defaultUrl
      },
      // 如果配置了randomBgColor为true，且配置了此值，则从默认的背景色数组中取出对应索引的颜色值，取值0-19之间
      colorIndex: {
        type: [String, Number],
        // 校验参数规则，索引在0-19之间
        validator(n) {
          return uni.$u.test.range(n, [0, 19]) || n === "";
        },
        default: props$a.avatar.colorIndex
      },
      // 组件标识符
      name: {
        type: String,
        default: props$a.avatar.name
      }
    }
  };
  const base64Avatar = "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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";
  const _sfc_main$n = {
    name: "u-avatar",
    mixins: [mpMixin, mixin, props$6],
    data() {
      return {
        // 如果配置randomBgColor参数为true，在图标或者文字的模式下，会随机从中取出一个颜色值当做背景色
        colors: [
          "#ffb34b",
          "#f2bba9",
          "#f7a196",
          "#f18080",
          "#88a867",
          "#bfbf39",
          "#89c152",
          "#94d554",
          "#f19ec2",
          "#afaae4",
          "#e1b0df",
          "#c38cc1",
          "#72dcdc",
          "#9acdcb",
          "#77b1cc",
          "#448aca",
          "#86cefa",
          "#98d1ee",
          "#73d1f1",
          "#80a7dc"
        ],
        avatarUrl: this.src,
        allowMp: false
      };
    },
    watch: {
      // 监听头像src的变化，赋值给内部的avatarUrl变量，因为图片加载失败时，需要修改图片的src为默认值
      // 而组件内部不能直接修改props的值，所以需要一个中间变量
      src: {
        immediate: true,
        handler(newVal) {
          this.avatarUrl = newVal;
          if (!newVal) {
            this.errorHandler();
          }
        }
      }
    },
    computed: {
      imageStyle() {
        const style = {};
        return style;
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
      },
      // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
      isImg() {
        return this.src.indexOf("/") !== -1;
      },
      // 图片加载时失败时触发
      errorHandler() {
        this.avatarUrl = this.defaultUrl || base64Avatar;
      },
      clickHandler() {
        this.$emit("click", this.name);
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$5);
    const _component_u__text = resolveEasycom(vue.resolveDynamicComponent("u--text"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-avatar", [`u-avatar--${_ctx.shape}`]]),
        style: vue.normalizeStyle([{
          backgroundColor: _ctx.text || _ctx.icon ? _ctx.randomBgColor ? $data.colors[_ctx.colorIndex !== "" ? _ctx.colorIndex : _ctx.$u.random(0, 19)] : _ctx.bgColor : "transparent",
          width: _ctx.$u.addUnit(_ctx.size),
          height: _ctx.$u.addUnit(_ctx.size)
        }, _ctx.$u.addStyle(_ctx.customStyle)]),
        onClick: _cache[1] || (_cache[1] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          _ctx.mpAvatar && $data.allowMp ? (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 0 },
            [],
            64
            /* STABLE_FRAGMENT */
          )) : _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
            key: 1,
            name: _ctx.icon,
            size: _ctx.fontSize,
            color: _ctx.color
          }, null, 8, ["name", "size", "color"])) : _ctx.text ? (vue.openBlock(), vue.createBlock(_component_u__text, {
            key: 2,
            text: _ctx.text,
            size: _ctx.fontSize,
            color: _ctx.color,
            align: "center",
            customStyle: "justify-content: center"
          }, null, 8, ["text", "size", "color"])) : (vue.openBlock(), vue.createElementBlock("image", {
            key: 3,
            class: vue.normalizeClass(["u-avatar__image", [`u-avatar__image--${_ctx.shape}`]]),
            src: $data.avatarUrl || _ctx.defaultUrl,
            mode: _ctx.mode,
            onError: _cache[0] || (_cache[0] = (...args) => $options.errorHandler && $options.errorHandler(...args)),
            style: vue.normalizeStyle([{
              width: _ctx.$u.addUnit(_ctx.size),
              height: _ctx.$u.addUnit(_ctx.size)
            }])
          }, null, 46, ["src", "mode"]))
        ], true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$f], ["__scopeId", "data-v-14a988f2"], ["__file", "D:/prgraming/myproject/ihome/node_modules/uview-plus/components/u-avatar/u-avatar.vue"]]);
  const _sfc_main$m = {
    props: {
      value: Array,
      column: {
        // 列的数量 
        type: [String, Number],
        default: 2
      },
      maxColumn: {
        // 最大列数 
        type: [String, Number],
        default: 5
      },
      columnSpace: {
        // 列之间的间距 百分比
        type: [String, Number],
        default: 2
      },
      imageKey: {
        // 图片key
        type: [String],
        default: "image"
      },
      hideImageKey: {
        // 隐藏图片key
        type: [String],
        default: "hide"
      },
      seat: {
        // 文本的位置，1图片之上 2图片之下
        type: [String, Number],
        default: 2
      },
      listStyle: {
        // 单个展示项的样式：eg:{'background':'red'}
        type: Object
      }
    },
    data() {
      return {
        data: {
          list: this.value ? this.value : [],
          column: this.column < 2 ? 2 : this.column,
          columnSpace: this.columnSpace <= 5 ? this.columnSpace : 5,
          imageKey: this.imageKey,
          seat: this.seat
        },
        msg: 0,
        listInitStyle: {
          "border-radius": "12rpx",
          "margin-bottom": "20rpx",
          "background-color": "#fff"
        },
        adds: [],
        //预置数据
        isLoaded: true,
        curIndex: 0,
        isRefresh: true,
        flag: false,
        refreshDatas: []
      };
    },
    computed: {
      // 计算列宽
      w() {
        const column_rate = `${100 / this.data.column - +this.data.columnSpace}%`;
        return column_rate;
      },
      // 计算margin
      m() {
        const column_margin = `${(100 - (100 / this.data.column - +this.data.columnSpace).toFixed(5) * this.data.column) / (this.data.column - 1)}%`;
        return column_margin;
      },
      // list样式
      s1() {
        return { ...this.listInitStyle, ...this.listStyle };
      }
    },
    created() {
      this.refresh();
    },
    methods: {
      // 预加载图片
      loadImages(idx = 0) {
        let count2 = 0;
        const newList = this.data.list.filter((item, index2) => index2 >= idx);
        for (let i = 0; i < newList.length; i++) {
          plus.io.getImageInfo({
            src: `${newList[i][this.imageKey]}.jpg`,
            complete: (res) => {
              count2++;
              if (count2 == newList.length)
                this.initValue(idx);
            }
          });
        }
      },
      // 刷新
      refresh() {
        if (!this.isLoaded) {
          this.refreshDatas = this.value;
          return false;
        }
        setTimeout(() => {
          this.refreshDatas = [];
          this.isRefresh = true;
          this.adds = [];
          this.data.list = this.value ? this.value : [];
          this.data.column = this.column < 2 ? 2 : this.column >= this.maxColumn ? this.maxColumn : this.column;
          this.data.columnSpace = this.columnSpace <= 5 ? this.columnSpace : 5;
          this.data.imageKey = this.imageKey;
          this.data.seat = this.seat;
          this.curIndex = 0;
          for (let i = 1; i <= this.data.column; i++) {
            this.data[`column_${i}_values`] = [];
            this.msg++;
          }
          this.$nextTick(() => {
            this.initValue(this.curIndex, "refresh==>");
          });
        }, 1);
      },
      columnValue(index2) {
        return this.data[`column_${index2 + 1}_values`];
      },
      change(newValue) {
        for (let i = 0; i < this.data.list.length; i++) {
          const cv = this.data[`column_${this.data.list[i].column}_values`];
          for (let j = 0; j < cv.length; j++) {
            if (newValue[i] && i === cv[j].index) {
              this.data[`column_${this.data.list[i].column}_values`][j] = Object.assign(cv[j], newValue[i]);
              this.msg++;
              break;
            }
          }
        }
      },
      getMin(a, s) {
        let m = a[0][s];
        let mo = a[0];
        for (var i = a.length - 1; i >= 0; i--) {
          if (a[i][s] < m) {
            m = a[i][s];
          }
        }
        mo = a.filter((i2) => i2[s] == m);
        return mo[0];
      },
      // 计算每列的高度
      getMinColumnHeight() {
        return new Promise((resolve) => {
          const heightArr = [];
          for (let i = 1; i <= this.data.column; i++) {
            const query = uni.createSelectorQuery().in(this);
            query.select(`#waterfalls_flow_column_${i}`).boundingClientRect((data) => {
              heightArr.push({ column: i, height: data.height });
            }).exec(() => {
              if (this.data.column <= heightArr.length) {
                resolve(this.getMin(heightArr, "height"));
              }
            });
          }
        });
      },
      async initValue(i, from) {
        this.isLoaded = false;
        if (i >= this.data.list.length || this.refreshDatas.length) {
          this.msg++;
          this.loaded();
          return false;
        }
        const minHeightRes = await this.getMinColumnHeight();
        const c = this.data[`column_${minHeightRes.column}_values`];
        this.data.list[i].column = minHeightRes.column;
        c.push({ ...this.data.list[i], cIndex: c.length, index: i, o: 0 });
        this.msg++;
      },
      // 图片加载完成
      imgLoad(item, c) {
        const i = item.index;
        item.o = 1;
        this.$set(this.data[`column_${c}_values`], item.cIndex, JSON.parse(JSON.stringify(item)));
        this.initValue(i + 1);
      },
      // 图片加载失败
      imgError(item, c) {
        const i = item.index;
        item.o = 1;
        item[this.data.imageKey] = null;
        this.$set(this.data[`column_${c}_values`], item.cIndex, JSON.parse(JSON.stringify(item)));
        this.initValue(i + 1);
      },
      // 渲染结束
      loaded() {
        if (this.refreshDatas.length) {
          this.isLoaded = true;
          this.refresh();
          return false;
        }
        this.curIndex = this.data.list.length;
        if (this.adds.length) {
          this.data.list = this.adds[0];
          this.adds.splice(0, 1);
          this.initValue(this.curIndex);
        } else {
          if (this.data.list.length)
            this.$emit("loaded");
          this.isLoaded = true;
          this.isRefresh = false;
        }
      },
      // 单项点击事件
      wapperClick(item) {
        this.$emit("wapperClick", item);
      },
      // 图片点击事件
      imageClick(item) {
        this.$emit("imageClick", item);
      }
    },
    watch: {
      value: {
        deep: true,
        handler(newValue, oldValue) {
          setTimeout(() => {
            this.$nextTick(() => {
              if (this.isRefresh)
                return false;
              if (this.isLoaded) {
                if (newValue.length <= this.curIndex)
                  return this.change(newValue);
                this.data.list = newValue;
                this.$nextTick(() => {
                  this.initValue(this.curIndex, "watch==>");
                });
              } else {
                this.adds.push(newValue);
              }
            });
          }, 10);
        }
      },
      column(newValue) {
        this.refresh();
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "waterfalls-flow" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.data.column, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: index2,
            class: "waterfalls-flow-column",
            id: `waterfalls_flow_column_${index2 + 1}`,
            msg: $data.msg,
            style: vue.normalizeStyle({ "width": $options.w, "margin-left": index2 == 0 ? 0 : $options.m })
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($options.columnValue(index2), (item2, index22) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["column-value", { "column-value-show": item2.o }]),
                  key: index22,
                  style: vue.normalizeStyle([$options.s1]),
                  onClick: vue.withModifiers(($event) => $options.wapperClick(item2), ["stop"])
                }, [
                  $data.data.seat == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "inner"
                  }, [
                    vue.renderSlot(_ctx.$slots, "default", vue.normalizeProps(vue.guardReactiveProps(item2)), void 0, true)
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode("image", {
                    class: vue.normalizeClass(["img", { "img-hide": item2[$props.hideImageKey] == true || item2[$props.hideImageKey] == 1 }, { "img-error": !item2[$data.data.imageKey] }]),
                    src: item2[$data.data.imageKey],
                    mode: "widthFix",
                    onLoad: ($event) => $options.imgLoad(item2, index2 + 1),
                    onError: ($event) => $options.imgError(item2, index2 + 1),
                    onClick: vue.withModifiers(($event) => $options.imageClick(item2), ["stop"])
                  }, null, 42, ["src", "onLoad", "onError", "onClick"]),
                  $data.data.seat == 2 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "inner"
                  }, [
                    vue.renderSlot(_ctx.$slots, "default", vue.normalizeProps(vue.guardReactiveProps(item2)), void 0, true)
                  ])) : vue.createCommentVNode("v-if", true)
                ], 14, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ], 12, ["id", "msg"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$e], ["__scopeId", "data-v-6aaf0fae"], ["__file", "D:/prgraming/myproject/ihome/uni_modules/custom-waterfalls-flow/components/custom-waterfalls-flow/custom-waterfalls-flow.vue"]]);
  const _sfc_main$l = vue.defineComponent({
    setup(props2, ctx) {
      const typeList = [
        plus.barcode.QR
      ];
      const barcode = vue.ref(null);
      const goBackBtn = vue.ref(null);
      function open() {
        const pages2 = getCurrentPages();
        const currentWebview = pages2[pages2.length - 1].$getAppWebview();
        barcode.value = plus.barcode.create("barcode", typeList.value, {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100vh",
          height: "100vh",
          frameColor: "#FFCC33",
          scanbarColor: "#FFCC33"
        });
        barcode.value.onmarked = (type, result) => {
          formatAppLog("log", "at components/scan/scan.vue:40", "子组件触发成功回调");
          ctx.emit("success", result);
          formatAppLog("log", "at components/scan/scan.vue:42", "成功触发父组件success事件");
          formatAppLog("log", "at components/scan/scan.vue:43", result);
          openStartRecognize(result);
          formatAppLog("log", "at components/scan/scan.vue:45", "成功传值给openStartRecognize");
          close();
        };
        currentWebview.append(barcode.value);
        formatAppLog("log", "at components/scan/scan.vue:53", barcode.value);
        barcode.value.start();
        formatAppLog("log", "at components/scan/scan.vue:55", "开始扫码");
        goBackBtn.value = new plus.nativeObj.View(
          "goBackBtn",
          {
            top: "10%",
            left: "10%",
            height: "35px",
            width: "35px",
            "border-radius": "35px",
            "background-color": "#ffffff"
          },
          [
            {
              tag: "img",
              id: "img",
              src: "static/index/cha.png",
              position: {
                width: "100%",
                left: "0%"
              }
            }
            // {
            // tag: 'font',
            // id: 'font',
            // text: '退出',
            // textStyles: {
            // size: '10px',
            // color: '#ffffff',
            // },
            // position: {
            // width: '80%',
            // left: '10%',
            // }
            // },
          ]
        );
        goBackBtn.value.show();
        formatAppLog("log", "at components/scan/scan.vue:90", goBackBtn.value);
        formatAppLog("log", "at components/scan/scan.vue:91", "返回按钮创建成功");
        goBackBtn.value.interceptTouchEvent(true);
        currentWebview.append(goBackBtn.value);
        formatAppLog("log", "at components/scan/scan.vue:96", "webview添加");
        goBackBtn.value.addEventListener("click", (e) => {
          ctx.emit("goBack");
        });
        const openGalleryBtn = new plus.nativeObj.View(
          "openGalleryBtn",
          {
            top: "20%",
            // 调整按钮位置
            left: "10%",
            height: "35px",
            width: "35px",
            "border-radius": "35px",
            "background-color": "#ffffff"
          },
          [{
            tag: "img",
            id: "img",
            src: "static/index/cha.png",
            // 更换为你自己的图片路径
            position: {
              width: "100%",
              left: "0%"
            }
          }]
        );
        openGalleryBtn.show();
        openGalleryBtn.interceptTouchEvent(true);
        currentWebview.append(openGalleryBtn);
        openGalleryBtn.addEventListener("click", openGallery);
        function openGallery() {
          plus.gallery.pick(
            (path) => {
              formatAppLog("log", "at components/scan/scan.vue:132", "选中的图片路径：" + path);
            },
            (e) => {
              formatAppLog("log", "at components/scan/scan.vue:136", "取消选择图片");
            },
            {
              filter: "image",
              multiple: false,
              maximum: 1,
              system: false,
              onmaxed: () => {
                plus.nativeUI.alert("最多只能选择1张图片");
              }
            }
          );
        }
      }
      function close() {
        barcode.value.close();
        goBackBtn.value.close();
      }
      function openStartRecognize(result) {
        const barcodeWebview = plus.webview.create(result, "barcodeWebview", {
          titleNView: {
            autoBackButton: true,
            backgroundColor: "#fff",
            titleColor: "#333"
            // titleText: '外部页面',   // 不设置标题自动读取网页标题
          },
          backButtonAutoControl: "hide",
          hardwareAccelerated: true,
          background: "#fff"
        });
        barcodeWebview.show("slide-in-right", 200, function() {
          barcodeWebview.getTitle();
        });
      }
      return {
        open,
        close,
        openStartRecognize
      };
    }
  });
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const __easycom_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$d], ["__file", "D:/prgraming/myproject/ihome/components/scan/scan.vue"]]);
  const _sfc_main$k = {
    __name: "index",
    setup(__props) {
      const scanRef = vue.ref();
      const isShowScan = vue.ref(false);
      function openScan() {
        scanRef.value.open();
        isShowScan.value = true;
        formatAppLog("log", "at pages/index/index.vue:315", "父组件触发打开");
      }
      function closeScan() {
        scanRef.value.close();
        isShowScan.value = false;
        formatAppLog("log", "at pages/index/index.vue:322", "父组件触发关闭");
      }
      function getScanCode(val) {
        formatAppLog("log", "at pages/index/index.vue:327", "父组件扫码成功");
        closeScan();
        uni.showToast({
          icon: "none",
          title: "扫码成功"
        });
      }
      const m = () => {
        formatAppLog("log", "at pages/index/index.vue:349", styleItem.value);
      };
      let styleItem = vue.ref(0);
      vue.reactive({
        styleItem: 0
      });
      function swiperChange(e) {
        styleItem.value = e.detail.current;
        formatAppLog("log", "at pages/index/index.vue:360", e.detail.current);
      }
      function chooseStyle(num) {
        if (styleItem.value == num) {
          return false;
        } else {
          vue.nextTick(() => {
            styleItem.value = num;
          });
        }
      }
      const data = vue.reactive({
        list0: [{
          image: "https://p3.itc.cn/q_70/images03/20210228/77c2895860cd4b8a84d4a7047a48e92d.jpeg",
          title: "",
          desc: "该建筑位于郑州的一个休闲中心，以地势地貌为依托，将建筑、环境、人文汇聚于此。虽然没有使用坡屋顶，但是出挑的屋檐，庭院都有中国传统建筑的意味。",
          id: 1001
        }, {
          image: "https://p0.itc.cn/q_70/images03/20210228/3bac3025b3664ccd85faa83503e5c50b.jpeg",
          title: "",
          desc: "阿丽拉乌镇酒店的设计，是一场传统江南元素的转译。除了平面布局以传统江南水乡聚落空间为原型，设计还提取了村芯、水口、巷道、水渠等标志性的公共空间元素 ，并延续了传统街巷空间的尺度体系。",
          id: 1002
        }, {
          image: "https://image.16pic.com/00/11/59/16pic_1159705_s.jpg?imageView2/0/format/png",
          title: "",
          desc: "这个二层别墅是个外观不出挑的简欧风格，比起看到的很多华丽造型的欧式建筑，这个简欧住宅更偏向于一种复古的氛围感，浅黄色墙面砖就素雅了许多，拱形门洞也给人欧式古堡感觉，虽大体上比较现代化，但氛围感却十足",
          id: 1003
        }, {
          image: "https://pic2.zhimg.com/80/v2-cfb06f7201d22fb67b1c6e1a7c6db419_1440w.webp",
          title: "",
          desc: "建筑为欧式风格，整体造型方正雅致，颜色舒适淡雅，立面造型以暖色调进行上下分层，搭配褐色线条划分开，使得整体空间尽显庄严大气。",
          id: 1004
        }, {
          image: "https://p0.itc.cn/q_70/images03/20210228/3bac3025b3664ccd85faa83503e5c50b.jpeg",
          title: "",
          desc: "阿丽拉乌镇酒店的设计，是一场传统江南元素的转译。除了平面布局以传统江南水乡聚落空间为原型，设计还提取了村芯、水口、巷道、水渠等标志性的公共空间元素 ，并延续了传统街巷空间的尺度体系。",
          id: 1005
        }, {
          image: "https://p3.itc.cn/q_70/images03/20210228/77c2895860cd4b8a84d4a7047a48e92d.jpeg",
          title: "",
          desc: "该建筑位于郑州的一个休闲中心，以地势地貌为依托，将建筑、环境、人文汇聚于此。虽然没有使用坡屋顶，但是出挑的屋檐，庭院都有中国传统建筑的意味。",
          id: 1006
        }, {
          image: "https://pic2.zhimg.com/80/v2-cfb06f7201d22fb67b1c6e1a7c6db419_1440w.webp",
          title: "",
          desc: "建筑为欧式风格，整体造型方正雅致，颜色舒适淡雅，立面造型以暖色调进行上下分层，搭配褐色线条划分开，使得整体空间尽显庄严大气。",
          id: 1007
        }, {
          image: "https://image.16pic.com/00/11/59/16pic_1159705_s.jpg?imageView2/0/format/png",
          title: "",
          desc: "这个二层别墅是个外观不出挑的简欧风格，比起看到的很多华丽造型的欧式建筑，这个简欧住宅更偏向于一种复古的氛围感，浅黄色墙面砖就素雅了许多，拱形门洞也给人欧式古堡感觉，虽大体上比较现代化，但氛围感却十足",
          id: 1008
        }]
      });
      const column = vue.ref(2);
      const listStyle = {
        "box-shadow": "0px 0px 10px rgba(0, 0, 0, 0.1)"
      };
      const waterfallsFlowRef = vue.ref(null);
      const profile = vue.ref("../../static/main/mine.png");
      const src = vue.ref("https://cdn.uviewui.com/uview/album/1.jpg");
      const collectIds = vue.reactive([]);
      function saveArticle(item) {
        if (collectIds.indexOf(item.id) == -1) {
          collectIds.push(item.id);
          formatAppLog("log", "at pages/index/index.vue:434", "收藏成功");
        } else {
          collectIds.splice(collectIds.indexOf(item.id), 1);
          formatAppLog("log", "at pages/index/index.vue:437", "收藏取消");
        }
      }
      return (_ctx, _cache) => {
        const _component_publicTabBar = resolveEasycom(vue.resolveDynamicComponent("publicTabBar"), publicTabBar);
        const _component_u_avatar = resolveEasycom(vue.resolveDynamicComponent("u-avatar"), __easycom_0$4);
        const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$5);
        const _component_custom_waterfalls_flow = resolveEasycom(vue.resolveDynamicComponent("custom-waterfalls-flow"), __easycom_3);
        const _component_scan = resolveEasycom(vue.resolveDynamicComponent("scan"), __easycom_4$1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 去除手机状态栏变化 "),
            vue.createElementVNode("view", { class: "status-bar" }),
            vue.createElementVNode("view", { class: "systemBox" }, [
              vue.createVNode(_component_publicTabBar, { activePage: 0 }),
              vue.createCommentVNode(" 头部功能 "),
              vue.createElementVNode("view", { class: "header" }, [
                vue.createElementVNode("view", { class: "profileView" }, [
                  vue.createElementVNode("image", {
                    src: profile.value,
                    mode: "aspectFit",
                    onClick: m
                  }, null, 8, ["src"]),
                  vue.createCommentVNode(' "../../static/my/mine.png" ')
                ]),
                vue.createElementVNode("view", { class: "searchBox" }, [
                  vue.createElementVNode("input", {
                    class: "search",
                    placeholder: "搜索",
                    type: "text"
                  }),
                  vue.createElementVNode("image", {
                    class: "icon",
                    mode: "aspectFit",
                    src: "/static/index/search.png"
                  })
                ]),
                vue.createElementVNode("view", { class: "imageView" }, [
                  vue.createElementVNode("image", {
                    class: "icon",
                    mode: "aspectFit",
                    src: "/static/index/scan.png",
                    onClick: openScan
                  })
                ])
              ]),
              vue.createElementVNode("scroll-view", {
                class: "indexView",
                "scroll-x": "true"
              }, [
                vue.createCommentVNode(" 风格选择栏 "),
                vue.createElementVNode("view", { class: "styleChooseBox" }, [
                  vue.createElementVNode(
                    "view",
                    {
                      style: vue.normalizeStyle({ color: vue.unref(styleItem) == 0 ? "#FEB814" : "#363636" }),
                      class: "buildingStyle",
                      onClick: _cache[0] || (_cache[0] = ($event) => chooseStyle(0))
                    },
                    "简欧风 ",
                    4
                    /* STYLE */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      style: vue.normalizeStyle({ color: vue.unref(styleItem) == 1 ? "#FEB814" : "#363636" }),
                      class: "buildingStyle",
                      onClick: _cache[1] || (_cache[1] = ($event) => chooseStyle(1))
                    },
                    "中式风 ",
                    4
                    /* STYLE */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      style: vue.normalizeStyle({ color: vue.unref(styleItem) == 2 ? "#FEB814" : "#363636" }),
                      class: "buildingStyle",
                      onClick: _cache[2] || (_cache[2] = ($event) => chooseStyle(2))
                    },
                    "美式风 ",
                    4
                    /* STYLE */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      style: vue.normalizeStyle({ color: vue.unref(styleItem) == 3 ? "#FEB814" : "#363636" }),
                      class: "buildingStyle",
                      onClick: _cache[3] || (_cache[3] = ($event) => chooseStyle(3))
                    },
                    "日式风 ",
                    4
                    /* STYLE */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      style: vue.normalizeStyle({ color: vue.unref(styleItem) == 4 ? "#FEB814" : "#363636" }),
                      class: "buildingStyle",
                      onClick: _cache[4] || (_cache[4] = ($event) => chooseStyle(4))
                    },
                    "田园风 ",
                    4
                    /* STYLE */
                  )
                ]),
                vue.createCommentVNode(" 瀑布流展示组件 "),
                vue.createElementVNode("swiper", {
                  autoplay: false,
                  circular: true,
                  current: vue.unref(styleItem),
                  class: "waterfallsFlowBox",
                  onChange: swiperChange
                }, [
                  vue.createElementVNode("swiper-item", null, [
                    vue.createElementVNode("scroll-view", {
                      class: "waterfallsFlowBox",
                      "scroll-y": "true"
                    }, [
                      vue.createElementVNode("view", null, [
                        vue.createVNode(_component_custom_waterfalls_flow, {
                          ref_key: "waterfallsFlowRef",
                          ref: waterfallsFlowRef,
                          column: column.value,
                          listStyle,
                          value: data.list0,
                          class: "swiper-item"
                        }, {
                          default: vue.withCtx((item) => [
                            vue.createElementVNode("view", { class: "flowItem" }, [
                              vue.createElementVNode("view", { class: "descBox" }, [
                                vue.createElementVNode(
                                  "view",
                                  { class: "desc" },
                                  vue.toDisplayString(item.desc),
                                  1
                                  /* TEXT */
                                ),
                                vue.createElementVNode("view", { class: "userBox" }, [
                                  vue.createElementVNode("view", { class: "user" }, [
                                    vue.createVNode(_component_u_avatar, {
                                      src: src.value,
                                      shape: "circle",
                                      size: "50"
                                    }, null, 8, ["src"]),
                                    vue.createElementVNode("text", { class: "userName" }, "1232321312")
                                  ]),
                                  vue.createElementVNode("view", {
                                    class: "star",
                                    onClick: ($event) => saveArticle(item)
                                  }, [
                                    vue.createVNode(_component_u_icon, {
                                      color: collectIds.includes(item.id) ? "#FEB814" : "#363636",
                                      name: collectIds.includes(item.id) ? "star-fill" : "star",
                                      size: "40"
                                    }, null, 8, ["color", "name"])
                                  ], 8, ["onClick"])
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["column", "value"])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("swiper-item", null, [
                    vue.createElementVNode("scroll-view", {
                      class: "waterfallsFlowBox",
                      "scroll-y": "true"
                    }, [
                      vue.createElementVNode("view", null, [
                        vue.createVNode(_component_custom_waterfalls_flow, {
                          ref_key: "waterfallsFlowRef",
                          ref: waterfallsFlowRef,
                          column: column.value,
                          listStyle,
                          value: data.list0,
                          class: "swiper-item"
                        }, {
                          default: vue.withCtx((item) => [
                            vue.createElementVNode("view", { class: "flowItem" }, [
                              vue.createElementVNode("view", { class: "descBox" }, [
                                vue.createElementVNode(
                                  "view",
                                  { class: "desc" },
                                  vue.toDisplayString(item.desc),
                                  1
                                  /* TEXT */
                                ),
                                vue.createElementVNode("view", { class: "userBox" }, [
                                  vue.createElementVNode("view", { class: "user" }, [
                                    vue.createVNode(_component_u_avatar, {
                                      src: src.value,
                                      shape: "circle",
                                      size: "50"
                                    }, null, 8, ["src"]),
                                    vue.createElementVNode("text", { class: "userName" }, "1232321312")
                                  ]),
                                  vue.createElementVNode("view", {
                                    class: "star",
                                    onClick: ($event) => saveArticle(item)
                                  }, [
                                    vue.createVNode(_component_u_icon, {
                                      color: collectIds.includes(item.id) ? "#FEB814" : "#363636",
                                      name: collectIds.includes(item.id) ? "star-fill" : "star",
                                      size: "40"
                                    }, null, 8, ["color", "name"]),
                                    vue.createCommentVNode("  ")
                                  ], 8, ["onClick"])
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["column", "value"])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("swiper-item", null, [
                    vue.createElementVNode("scroll-view", {
                      class: "waterfallsFlowBox",
                      "scroll-y": "true"
                    }, [
                      vue.createElementVNode("view", null, [
                        vue.createVNode(_component_custom_waterfalls_flow, {
                          ref_key: "waterfallsFlowRef",
                          ref: waterfallsFlowRef,
                          column: column.value,
                          listStyle,
                          value: data.list0,
                          class: "swiper-item"
                        }, {
                          default: vue.withCtx((item) => [
                            vue.createElementVNode("view", { class: "flowItem" }, [
                              vue.createElementVNode("view", { class: "descBox" }, [
                                vue.createElementVNode(
                                  "view",
                                  { class: "desc" },
                                  vue.toDisplayString(item.desc),
                                  1
                                  /* TEXT */
                                ),
                                vue.createElementVNode("view", { class: "userBox" }, [
                                  vue.createElementVNode("view", { class: "user" }, [
                                    vue.createVNode(_component_u_avatar, {
                                      src: src.value,
                                      shape: "circle",
                                      size: "50"
                                    }, null, 8, ["src"]),
                                    vue.createElementVNode("text", { class: "userName" }, "1232321312")
                                  ]),
                                  vue.createElementVNode("view", {
                                    class: "star",
                                    onClick: ($event) => saveArticle(item)
                                  }, [
                                    vue.createVNode(_component_u_icon, {
                                      color: collectIds.includes(item.id) ? "#FEB814" : "#363636",
                                      name: collectIds.includes(item.id) ? "star-fill" : "star",
                                      size: "40"
                                    }, null, 8, ["color", "name"]),
                                    vue.createCommentVNode("  ")
                                  ], 8, ["onClick"])
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["column", "value"])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("swiper-item", null, [
                    vue.createElementVNode("scroll-view", {
                      class: "waterfallsFlowBox",
                      "scroll-y": "true"
                    }, [
                      vue.createElementVNode("view", null, [
                        vue.createVNode(_component_custom_waterfalls_flow, {
                          ref_key: "waterfallsFlowRef",
                          ref: waterfallsFlowRef,
                          column: column.value,
                          listStyle,
                          value: data.list0,
                          class: "swiper-item"
                        }, {
                          default: vue.withCtx((item) => [
                            vue.createElementVNode("view", { class: "flowItem" }, [
                              vue.createElementVNode("view", { class: "descBox" }, [
                                vue.createElementVNode(
                                  "view",
                                  { class: "desc" },
                                  vue.toDisplayString(item.desc),
                                  1
                                  /* TEXT */
                                ),
                                vue.createElementVNode("view", { class: "userBox" }, [
                                  vue.createElementVNode("view", { class: "user" }, [
                                    vue.createVNode(_component_u_avatar, {
                                      src: src.value,
                                      shape: "circle",
                                      size: "50"
                                    }, null, 8, ["src"]),
                                    vue.createElementVNode("text", { class: "userName" }, "1232321312")
                                  ]),
                                  vue.createElementVNode("view", {
                                    class: "star",
                                    onClick: ($event) => saveArticle(item)
                                  }, [
                                    vue.createVNode(_component_u_icon, {
                                      color: collectIds.includes(item.id) ? "#FEB814" : "#363636",
                                      name: collectIds.includes(item.id) ? "star-fill" : "star",
                                      size: "40"
                                    }, null, 8, ["color", "name"]),
                                    vue.createCommentVNode("  ")
                                  ], 8, ["onClick"])
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["column", "value"])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("swiper-item", null, [
                    vue.createElementVNode("scroll-view", {
                      class: "waterfallsFlowBox",
                      "scroll-y": "true"
                    }, [
                      vue.createElementVNode("view", null, [
                        vue.createVNode(_component_custom_waterfalls_flow, {
                          ref_key: "waterfallsFlowRef",
                          ref: waterfallsFlowRef,
                          column: column.value,
                          listStyle,
                          value: data.list0,
                          class: "swiper-item"
                        }, {
                          default: vue.withCtx((item) => [
                            vue.createElementVNode("view", { class: "flowItem" }, [
                              vue.createElementVNode("view", { class: "descBox" }, [
                                vue.createElementVNode(
                                  "view",
                                  { class: "desc" },
                                  vue.toDisplayString(item.desc),
                                  1
                                  /* TEXT */
                                ),
                                vue.createElementVNode("view", { class: "userBox" }, [
                                  vue.createElementVNode("view", { class: "user" }, [
                                    vue.createVNode(_component_u_avatar, {
                                      src: src.value,
                                      shape: "circle",
                                      size: "50"
                                    }, null, 8, ["src"]),
                                    vue.createElementVNode("text", { class: "userName" }, "1232321312")
                                  ]),
                                  vue.createElementVNode("view", {
                                    class: "star",
                                    onClick: ($event) => saveArticle(item)
                                  }, [
                                    vue.createVNode(_component_u_icon, {
                                      color: collectIds.includes(item.id) ? "#FEB814" : "#363636",
                                      name: collectIds.includes(item.id) ? "star-fill" : "star",
                                      size: "40"
                                    }, null, 8, ["color", "name"]),
                                    vue.createCommentVNode("  ")
                                  ], 8, ["onClick"])
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["column", "value"])
                      ])
                    ])
                  ])
                ], 40, ["current"])
              ]),
              vue.createCommentVNode(" 扫码组件 "),
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass([{ active: isShowScan.value }, "scan-box"])
                },
                [
                  vue.createCommentVNode(' <uni-nav-bar if="isShowScan" fixed :status-bar="true" title="扫一扫" @clickLeft="closeScan">\r\n      </uni-nav-bar> '),
                  vue.createVNode(
                    _component_scan,
                    {
                      ref_key: "scanRef",
                      ref: scanRef,
                      onGoBack: closeScan,
                      onSuccess: getScanCode
                    },
                    null,
                    512
                    /* NEED_PATCH */
                  )
                ],
                2
                /* CLASS */
              )
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "D:/prgraming/myproject/ihome/pages/index/index.vue"]]);
  class BaseLang {
  }
  let Lang$1 = class Lang extends BaseLang {
    constructor() {
      super(...arguments);
      this.save = "保存";
      this.confirm = "确认";
      this.cancel = "取消";
      this.done = "完成";
      this.noData = "暂无数据";
      this.placeholder = "请输入";
      this.select = "请选择";
      this.video = {
        errorTip: "视频加载失败",
        clickRetry: "点击重试"
      };
      this.fixednav = {
        activeText: "收起导航",
        unActiveText: "快速导航"
      };
      this.pagination = {
        prev: "上一页",
        next: "下一页"
      };
      this.calendaritem = {
        weekdays: ["日", "一", "二", "三", "四", "五", "六"],
        end: "结束",
        start: "开始",
        title: "日历选择",
        monthTitle: (year, month) => `${year}年${month}月`,
        today: "今天"
      };
      this.shortpassword = {
        title: "请输入密码",
        desc: "您使用了虚拟资产，请进行验证",
        tips: "忘记密码"
      };
      this.uploader = {
        ready: "准备完成",
        readyUpload: "准备上传",
        waitingUpload: "等待上传",
        uploading: "上传中",
        success: "上传成功",
        error: "上传失败"
      };
      this.countdown = {
        day: "天",
        hour: "时",
        minute: "分",
        second: "秒"
      };
      this.address = {
        selectRegion: "请选择所在地区",
        deliveryTo: "配送至",
        chooseAnotherAddress: "选择其他地址"
      };
      this.signature = {
        reSign: "重签",
        unSupportTpl: "对不起，当前浏览器不支持Canvas，无法使用本控件！"
      };
      this.ecard = {
        chooseText: "请选择电子卡面值",
        otherValueText: "其他面值",
        placeholder: "请输入1-5000整数"
      };
      this.timeselect = {
        pickupTime: "取件时间"
      };
      this.sku = {
        buyNow: "立即购买",
        buyNumber: "购买数量",
        addToCart: "加入购物车"
      };
      this.skuheader = {
        skuId: "商品编号"
      };
      this.addresslist = {
        addAddress: "新建地址",
        default: "默认"
      };
      this.comment = {
        complaintsText: "我要投诉",
        additionalReview: (day) => `购买${day}天后追评`,
        additionalImages: (length) => `${length}张追评图片`
      };
      this.infiniteloading = {
        loading: "加载中...",
        pullTxt: "松开刷新",
        loadMoreTxt: "哎呀，这里是底部了啦"
      };
      this.datepicker = {
        year: "年",
        month: "月",
        day: "日",
        hour: "时",
        min: "分",
        seconds: "秒"
      };
      this.audiooperate = {
        back: "倒退",
        start: "开始",
        pause: "暂停",
        forward: "快进",
        mute: "静音"
      };
    }
  };
  class Lang extends BaseLang {
    constructor() {
      super(...arguments);
      this.save = "Save";
      this.confirm = "Confirm";
      this.cancel = "Cancel";
      this.done = "Done";
      this.noData = "No Data";
      this.placeholder = "Placeholder";
      this.select = "Select";
      this.video = {
        errorTip: "Error Tip",
        clickRetry: "Click Retry"
      };
      this.fixednav = {
        activeText: "Close Nav",
        unActiveText: "Open Nav"
      };
      this.pagination = {
        prev: "Previous",
        next: "Next"
      };
      this.calendaritem = {
        weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        end: "End",
        start: "Start",
        title: "Calendar",
        monthTitle: (year, month) => `${year}/${month}`,
        today: "Today"
      };
      this.shortpassword = {
        title: "Please input a password",
        desc: "Verify",
        tips: "Forget password"
      };
      this.uploader = {
        ready: "Ready",
        readyUpload: "Ready to upload",
        waitingUpload: "Waiting for upload",
        uploading: "Uploading",
        success: "Upload successful",
        error: "Upload failed"
      };
      this.countdown = {
        day: " Day ",
        hour: " Hour ",
        minute: " Minute ",
        second: " Second "
      };
      this.address = {
        selectRegion: "Select Region",
        deliveryTo: "Delivery To",
        chooseAnotherAddress: "Choose Another Address"
      };
      this.signature = {
        reSign: "Re Sign",
        unSupportTpl: `Sorry, the current browser doesn't support canvas, so we can't use this control!`
      };
      this.ecard = {
        chooseText: "Select",
        otherValueText: "Other Value",
        placeholder: "Placeholder"
      };
      this.timeselect = {
        pickupTime: "Pickup Time"
      };
      this.sku = {
        buyNow: "Buy Now",
        buyNumber: "Buy Number",
        addToCart: "Add to Cart"
      };
      this.skuheader = {
        skuId: "Sku Number"
      };
      this.addresslist = {
        addAddress: "Add New Address",
        default: "default"
      };
      this.comment = {
        complaintsText: "I have a complaint",
        additionalReview: (day) => `Review after ${day} days of purchase`,
        additionalImages: (length) => `There are ${length} follow-up comments`
      };
      this.infiniteloading = {
        loading: "Loading...",
        pullTxt: "Loose to refresh",
        loadMoreTxt: "Oops, this is the bottom"
      };
      this.datepicker = {
        year: "Year",
        month: "Month",
        day: "Day",
        hour: "Hour",
        min: "Minute",
        seconds: "Second"
      };
      this.audiooperate = {
        back: "Back",
        start: "Start",
        pause: "Pause",
        forward: "Forward",
        mute: "Mute"
      };
    }
  }
  const isFunction = (val) => typeof val === "function";
  const isObject$2 = (val) => val !== null && typeof val === "object";
  const getPropByPath = (obj, keyPath) => {
    try {
      return keyPath.split(".").reduce((prev, curr) => prev[curr], obj);
    } catch (error2) {
      return "";
    }
  };
  const deepMerge$2 = (target, newObj) => {
    Object.keys(newObj).forEach((key) => {
      let targetValue = target[key];
      let newObjValue = newObj[key];
      if (isObject$2(targetValue) && isObject$2(newObjValue)) {
        deepMerge$2(targetValue, newObjValue);
      } else {
        target[key] = newObjValue;
      }
    });
    return target;
  };
  const langs = vue.reactive({
    "zh-CN": new Lang$1(),
    "en-US": new Lang()
  });
  class Locale {
    static languages() {
      return langs[this.currentLang.value];
    }
    static use(lang, newLanguages) {
      if (newLanguages) {
        langs[lang] = new newLanguages();
      }
      this.currentLang.value = lang;
    }
    static merge(lang, newLanguages) {
      if (newLanguages) {
        if (langs[lang]) {
          deepMerge$2(langs[lang], newLanguages);
        } else {
          this.use(lang, newLanguages);
        }
      }
    }
  }
  Locale.currentLang = vue.ref("zh-CN");
  function createComponent(name) {
    const componentName2 = "nut-" + name;
    return {
      componentName: componentName2,
      translate(keyPath, ...args) {
        const languages = Locale.languages();
        const text2 = getPropByPath(languages, `${name.replace("-", "")}.${keyPath}`) || getPropByPath(languages, keyPath);
        return isFunction(text2) ? text2(...args) : text2;
      },
      create: function(_component) {
        _component.baseName = name;
        _component.name = componentName2;
        _component.install = (vue2) => {
          vue2.component(_component.name, _component);
        };
        return vue.defineComponent(_component);
      },
      createDemo: function(_component) {
        _component.baseName = name;
        _component.name = "demo-" + name;
        return vue.defineComponent(_component);
      }
    };
  }
  const pxCheck = (value2) => {
    return isNaN(Number(value2)) ? String(value2) : `${value2}px`;
  };
  const { componentName: componentName$4, create: create$4 } = createComponent("icon");
  const _sfc_main$j = create$4({
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
    setup(props2, { emit, slots }) {
      const handleClick = (event) => {
        emit("click", event);
      };
      const isImage = () => {
        return props2.name ? props2.name.indexOf("/") !== -1 : false;
      };
      const classes = vue.computed(() => {
        return isImage() ? `${componentName$4}__img` : `${props2.fontClassName} ${componentName$4} ${props2.classPrefix}-${props2.name} ${props2.popClass} ${props2.class}`;
      });
      const getStyle = vue.computed(() => {
        const style = {
          color: props2.color,
          fontSize: pxCheck(props2.size),
          width: pxCheck(props2.width || props2.size),
          height: pxCheck(props2.height || props2.size)
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
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        _ctx.isImage() ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          class: vue.normalizeClass(_ctx.classes),
          style: vue.normalizeStyle(_ctx.getStyle),
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
          src: _ctx.name
        }, null, 14, ["src"])) : vue.createCommentVNode("v-if", true),
        !_ctx.isImage() ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 1,
            class: vue.normalizeClass(_ctx.classes),
            style: vue.normalizeStyle(_ctx.getStyle),
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
          },
          null,
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$c], ["__file", "D:/prgraming/myproject/ihome/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/icon/index.vue"]]);
  const overlayProps = {
    visible: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: 2e3
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    overlayClass: {
      type: String,
      default: ""
    },
    lockScroll: {
      type: Boolean,
      default: false
    },
    overlayStyle: {
      type: Object
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  };
  const { componentName: componentName$3, create: create$3 } = createComponent("overlay");
  const _sfc_main$i = create$3({
    props: overlayProps,
    emits: ["click", "update:visible"],
    options: {
      virtualHost: true
    },
    setup(props2, { emit }) {
      const classes = vue.computed(() => {
        const prefixCls = componentName$3;
        return {
          [prefixCls]: true,
          [props2.overlayClass]: true
        };
      });
      vue.watch(
        () => props2.visible,
        (value2) => {
          value2 ? lock() : unlock();
        }
      );
      const lock = () => {
        if (props2.lockScroll && props2.visible)
          ;
      };
      const unlock = () => {
      };
      vue.onDeactivated(unlock);
      vue.onBeforeUnmount(unlock);
      vue.onMounted(lock);
      vue.onActivated(lock);
      const style = vue.computed(() => {
        return {
          animationDuration: `${props2.duration}s`,
          zIndex: props2.zIndex,
          ...props2.overlayStyle
        };
      });
      const touchmove = (e) => {
        if (props2.lockScroll)
          e.preventDefault();
      };
      const onClick = (e) => {
        emit("click", e);
        if (props2.closeOnClickOverlay) {
          emit("update:visible", false);
        }
      };
      return { classes, style, touchmove, onClick };
    }
  });
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock(vue.Transition, {
      name: "overlay-fade",
      persisted: ""
    }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(_ctx.classes),
            onTouchmove: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.touchmove && _ctx.touchmove(...args), ["stop"])),
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClick && _ctx.onClick(...args)),
            style: vue.normalizeStyle(_ctx.style)
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          38
          /* CLASS, STYLE, HYDRATE_EVENTS */
        ), [
          [vue.vShow, _ctx.visible]
        ])
      ]),
      _: 3
      /* FORWARDED */
    });
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$b], ["__scopeId", "data-v-07ec1718"], ["__file", "D:/prgraming/myproject/ihome/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/overlay/index.vue"]]);
  let count = 0;
  const useLockScroll = (isLock) => {
    const lock = () => {
      if (isLock()) {
        //!count && document.body.classList.add(CLSNAME);
        count++;
      }
    };
    const unlock = () => {
      if (isLock() && count) {
        count--;
        //!count && document.body.classList.remove(CLSNAME);
      }
    };
    return [lock, unlock];
  };
  const { componentName: componentName$2, create: create$2 } = createComponent("popup");
  let _zIndex = 2e3;
  const popupProps = {
    ...overlayProps,
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
  const _sfc_main$h = create$2({
    components: {
      [__easycom_0$2.name]: __easycom_0$2,
      [__easycom_0$3.name]: __easycom_0$3
    },
    props: {
      ...popupProps
    },
    emits: ["click", "click-close-icon", "open", "close", "opend", "closed", "update:visible", "click-overlay"],
    options: {
      virtualHost: true
    },
    setup(props2, { emit }) {
      const lockPage = vue.inject("lockPage", (isLock) => {
      }, false);
      const popupRef = vue.ref();
      const state = vue.reactive({
        zIndex: props2.zIndex,
        showSlot: true,
        transitionName: `popup-fade-${props2.position}`,
        slideTransitionName: `nut-slide-${props2.position}`,
        overLayCount: 1,
        keepAlive: false,
        closed: props2.closeable
      });
      const visibleLocal = vue.ref(false);
      const [lockScroll, unlockScroll] = useLockScroll(() => props2.lockScroll);
      const classes = vue.computed(() => {
        const prefixCls = componentName$2;
        return {
          [prefixCls]: true,
          ["round"]: props2.round,
          [`popup-${props2.position}`]: true,
          [`popup-${props2.position}--safebottom`]: props2.position === "bottom" && props2.safeAreaInsetBottom,
          [props2.popClass]: true,
          [`${state.slideTransitionName}In`]: visibleLocal.value,
          [`${state.slideTransitionName}Out`]: !visibleLocal.value
        };
      });
      const popStyle = vue.computed(() => {
        return {
          zIndex: state.zIndex,
          animationDuration: props2.duration ? `${props2.duration}s` : "initial",
          ...props2.popStyle
        };
      });
      const open = () => {
        if (props2.zIndex != 2e3) {
          _zIndex = Number(props2.zIndex);
        }
        visibleLocal.value = true;
        emit("update:visible", true);
        lockPage(true);
        state.zIndex = ++_zIndex;
        if (props2.destroyOnClose) {
          state.showSlot = true;
        }
        emit("open");
      };
      const close = () => {
        lockPage(false);
        visibleLocal.value = false;
        setTimeout(() => {
          emit("update:visible", false);
        }, +props2.duration * 1e3);
        if (props2.destroyOnClose) {
          setTimeout(() => {
            state.showSlot = false;
            emit("close");
          }, +props2.duration * 1e3);
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
        if (props2.closeOnClickOverlay) {
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
      vue.onMounted(() => {
        props2.transition ? state.transitionName = props2.transition : state.transitionName = `popup-slide-${props2.position}`;
        props2.visible && open();
      });
      vue.onBeforeUnmount(() => {
        props2.visible && close();
      });
      vue.onBeforeMount(() => {
        if (props2.visible) {
          unlockScroll();
        }
      });
      vue.onActivated(() => {
        if (state.keepAlive) {
          emit("update:visible", true);
          state.keepAlive = false;
        }
      });
      vue.onDeactivated(() => {
        if (props2.visible) {
          close();
          state.keepAlive = true;
        }
      });
      vue.watch(
        () => props2.visible,
        (value2) => {
          if (value2) {
            open();
          } else {
            close();
          }
        }
      );
      vue.watch(
        () => props2.position,
        (value2) => {
          value2 === "center" ? state.transitionName = "popup-fade" : state.transitionName = `popup-slide-${value2}`;
        }
      );
      vue.watch(
        () => props2.closeable,
        (value2) => {
          state.closed = value2;
        }
      );
      return {
        ...vue.toRefs(state),
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
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_overlay = resolveEasycom(vue.resolveDynamicComponent("nut-overlay"), __easycom_0$2);
    const _component_nut_icon = resolveEasycom(vue.resolveDynamicComponent("nut-icon"), __easycom_0$3);
    return _ctx.isWrapTeleport ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
      _ctx.overlay ? (vue.openBlock(), vue.createBlock(_component_nut_overlay, {
        key: 0,
        visible: _ctx.visible,
        "close-on-click-overlay": _ctx.closeOnClickOverlay,
        overlayClass: _ctx.overlayClass,
        overlayStyle: _ctx.overlayStyle,
        "z-index": _ctx.zIndex,
        "lock-scroll": _ctx.lockScroll,
        duration: _ctx.duration,
        onClick: _ctx.onClickOverlay
      }, null, 8, ["visible", "close-on-click-overlay", "overlayClass", "overlayStyle", "z-index", "lock-scroll", "duration", "onClick"])) : vue.createCommentVNode("v-if", true),
      vue.createVNode(vue.Transition, {
        name: _ctx.transitionName,
        onAfterEnter: _ctx.onOpened,
        onAfterLeave: _ctx.onClosed,
        persisted: ""
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(_ctx.classes),
              style: vue.normalizeStyle(_ctx.popStyle),
              onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClick && _ctx.onClick(...args)),
              ref: "popupRef"
            },
            [
              _ctx.showSlot ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : vue.createCommentVNode("v-if", true),
              _ctx.closed ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 1,
                  onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickCloseIcon && _ctx.onClickCloseIcon(...args)),
                  class: vue.normalizeClass(["nutui-popup__close-icon", "nutui-popup__close-icon--" + _ctx.closeIconPosition])
                },
                [
                  vue.createVNode(_component_nut_icon, {
                    name: _ctx.closeIcon,
                    size: "12px"
                  }, null, 8, ["name"])
                ],
                2
                /* CLASS */
              )) : vue.createCommentVNode("v-if", true)
            ],
            6
            /* CLASS, STYLE */
          ), [
            [vue.vShow, _ctx.visible]
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["name", "onAfterEnter", "onAfterLeave"])
    ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
      _ctx.overlay ? (vue.openBlock(), vue.createBlock(_component_nut_overlay, {
        key: 0,
        visible: _ctx.visible,
        "close-on-click-overlay": _ctx.closeOnClickOverlay,
        overlayClass: _ctx.overlayClass,
        overlayStyle: _ctx.overlayStyle,
        "z-index": _ctx.zIndex,
        "lock-scroll": _ctx.lockScroll,
        duration: _ctx.duration,
        onClick: _ctx.onClickOverlay
      }, null, 8, ["visible", "close-on-click-overlay", "overlayClass", "overlayStyle", "z-index", "lock-scroll", "duration", "onClick"])) : vue.createCommentVNode("v-if", true),
      vue.createVNode(vue.Transition, {
        name: _ctx.transitionName,
        onAfterEnter: _ctx.onOpened,
        onAfterLeave: _ctx.onClosed,
        persisted: ""
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["nutLeftSlideIn", _ctx.classes]),
              style: vue.normalizeStyle(_ctx.popStyle),
              onClick: _cache[3] || (_cache[3] = (...args) => _ctx.onClick && _ctx.onClick(...args))
            },
            [
              _ctx.showSlot ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : vue.createCommentVNode("v-if", true),
              _ctx.closed ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 1,
                  onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onClickCloseIcon && _ctx.onClickCloseIcon(...args)),
                  class: vue.normalizeClass(["nutui-popup__close-icon", "nutui-popup__close-icon--" + _ctx.closeIconPosition])
                },
                [
                  vue.createVNode(_component_nut_icon, {
                    name: _ctx.closeIcon,
                    size: "12px"
                  }, null, 8, ["name"])
                ],
                2
                /* CLASS */
              )) : vue.createCommentVNode("v-if", true)
            ],
            6
            /* CLASS, STYLE */
          ), [
            [vue.vShow, _ctx.visible]
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["name", "onAfterEnter", "onAfterLeave"])
    ]));
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$a], ["__scopeId", "data-v-ce54da7a"], ["__file", "D:/prgraming/myproject/ihome/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/popup/index.vue"]]);
  const { componentName: componentName$1, create: create$1 } = createComponent("menu-item");
  const _sfc_main$g = create$1({
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
      [__easycom_0$3.name]: __easycom_0$3,
      [__easycom_1$2.name]: __easycom_1$2
    },
    emits: ["update:modelValue", "change"],
    setup(props2, { emit, slots }) {
      const state = vue.reactive({
        showPopup: false,
        transition: true,
        showWrapper: false,
        isShowPlaceholderElement: false
      });
      const useParent = () => {
        const parent2 = vue.inject("menuParent", null);
        if (parent2) {
          const instance = vue.getCurrentInstance();
          const { link: link2 } = parent2;
          link2(instance);
          return {
            parent: parent2
          };
        }
      };
      const { parent } = useParent();
      const parentOffset = vue.computed(() => {
        return parent.offset.value;
      });
      const classes = vue.computed(() => {
        const prefixCls = componentName$1;
        return {
          [prefixCls]: true
        };
      });
      const placeholderElementStyle = vue.computed(() => {
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
        if (props2.title) {
          return props2.title;
        }
        const match = (_a = props2.options) == null ? void 0 : _a.find((option) => option.value === props2.modelValue);
        return match ? match.text : "";
      };
      const onClick = (option) => {
        state.showPopup = false;
        state.isShowPlaceholderElement = false;
        if (option.value !== props2.modelValue) {
          emit("update:modelValue", option.value);
          emit("change", option.value);
        }
      };
      const handleClose = () => {
        formatAppLog("log", "at uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/menuitem/index.vue:180", "onclose");
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
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_icon = resolveEasycom(vue.resolveDynamicComponent("nut-icon"), __easycom_0$3);
    const _component_nut_popup = resolveEasycom(vue.resolveDynamicComponent("nut-popup"), __easycom_1$2);
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(_ctx.classes)
      },
      [
        vue.withDirectives(vue.createElementVNode(
          "div",
          {
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClickOutside && _ctx.handleClickOutside(...args)),
            class: vue.normalizeClass(["placeholder-element", { up: _ctx.parent.props.direction === "up" }]),
            style: vue.normalizeStyle(_ctx.placeholderElementStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        ), [
          [vue.vShow, _ctx.state.isShowPlaceholderElement]
        ]),
        vue.createVNode(_component_nut_popup, vue.mergeProps({
          popStyle: _ctx.parent.props.direction === "down" ? { top: "calc(var(--window-top) + " + _ctx.parent.offset.value + "px)" } : { bottom: "calc(var(--window-bottom) + " + _ctx.parent.offset.value + "px)", top: "auto" },
          overlayStyle: _ctx.parent.props.direction === "down" ? { top: "calc(var(--window-top) + " + _ctx.parent.offset.value + "px)" } : { bottom: "calc(var(--window-bottom) + " + _ctx.parent.offset.value + "px)", top: "auto" }
        }, _ctx.$attrs, {
          visible: _ctx.state.showPopup,
          "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => _ctx.state.showPopup = $event),
          position: _ctx.parent.props.direction === "down" ? "topMenu" : "bottomMenu",
          duration: _ctx.parent.props.duration,
          "pop-class": "nut-menu__pop",
          overlayClass: "nut-menu__overlay",
          overlay: _ctx.parent.props.overlay,
          onClose: _ctx.handleClose,
          lockScroll: _ctx.parent.props.lockScroll,
          isWrapTeleport: false,
          "close-on-click-overlay": _ctx.parent.props.closeOnClickOverlay
        }), {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "nut-menu-item__content" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(_ctx.options, (option, index2) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index2,
                    class: vue.normalizeClass(["nut-menu-item__option", [{ active: option.value === _ctx.modelValue }]]),
                    style: vue.normalizeStyle({ "flex-basis": 100 / _ctx.cols + "%" }),
                    onClick: ($event) => _ctx.onClick(option)
                  }, [
                    option.value === _ctx.modelValue ? (vue.openBlock(), vue.createBlock(_component_nut_icon, {
                      key: 0,
                      class: vue.normalizeClass({ activeTitleClass: option.value === _ctx.modelValue, inactiveTitleClass: option.value !== _ctx.modelValue }),
                      name: _ctx.optionIcon,
                      color: _ctx.parent.props.activeColor
                    }, null, 8, ["class", "name", "color"])) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass({ activeTitleClass: option.value === _ctx.modelValue, inactiveTitleClass: option.value !== _ctx.modelValue }),
                        style: vue.normalizeStyle({ color: option.value === _ctx.modelValue ? _ctx.parent.props.activeColor : "" })
                      },
                      vue.toDisplayString(option.text),
                      7
                      /* TEXT, CLASS, STYLE */
                    )
                  ], 14, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 16, ["popStyle", "overlayStyle", "visible", "position", "duration", "overlay", "onClose", "lockScroll", "close-on-click-overlay"])
      ],
      2
      /* CLASS */
    )), [
      [vue.vShow, _ctx.state.showWrapper && _ctx.parentOffset > 0]
    ]);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$9], ["__scopeId", "data-v-8f4b114a"], ["__file", "D:/prgraming/myproject/ihome/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/menuitem/index.vue"]]);
  const { componentName, create } = createComponent("menu");
  const _sfc_main$f = create({
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
          uni.createSelectorQuery().in(this).select(".nut-menu__bar.opened").boundingClientRect((rect) => {
            if (this.direction === "down") {
              this.offset = rect.bottom;
            } else {
              this.offset = uni.getSystemInfoSync().windowHeight - rect.top;
            }
          }).exec();
        }, 100);
      },
      toggleItem(active) {
        this.children.forEach((item, index2) => {
          if (index2 === active) {
            this.updateOffset();
            item.toggle();
          } else if (item.state.showPopup) {
            item.toggle(false, { immediate: true });
          }
        });
      }
    },
    setup(props2) {
      const barRef = vue.ref();
      const offset = vue.ref(0);
      const isScrollFixed = vue.ref(false);
      const useChildren = () => {
        const publicChildren = vue.reactive([]);
        const internalChildren = vue.reactive([]);
        const linkChildren2 = (value2) => {
          const link2 = (child) => {
            if (child.proxy) {
              internalChildren.push(child);
              publicChildren.push(child.proxy);
            }
          };
          vue.provide(
            "menuParent",
            Object.assign(
              {
                link: link2,
                children: publicChildren,
                internalChildren
              },
              value2
            )
          );
        };
        return {
          children: publicChildren,
          linkChildren: linkChildren2
        };
      };
      const { children, linkChildren } = useChildren();
      const opened = vue.computed(() => children.some((item) => item.state.showWrapper));
      const classes = vue.computed(() => {
        const prefixCls = componentName;
        return {
          [prefixCls]: true,
          "scroll-fixed": isScrollFixed.value
        };
      });
      linkChildren({ props: props2, offset });
      const onScroll = (res) => {
        const { scrollFixed } = props2;
        const scrollTop = res.scrollTop;
        isScrollFixed.value = scrollTop > (typeof scrollFixed === "boolean" ? 30 : Number(scrollFixed));
      };
      const getClasses = (showPopup) => {
        let str = "";
        const { titleClass } = props2;
        if (showPopup) {
          str += "active";
        }
        if (titleClass) {
          str += ` ${titleClass}`;
        }
        return str;
      };
      onPageScroll((res) => {
        const { scrollFixed } = props2;
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
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nut_icon = resolveEasycom(vue.resolveDynamicComponent("nut-icon"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(_ctx.classes)
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["nut-menu__bar", { opened: _ctx.opened }]),
            ref: "barRef"
          },
          [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(_ctx.children, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index2,
                  class: vue.normalizeClass(["nut-menu__item", { disabled: item.disabled, active: item.state.showPopup }]),
                  onClick: ($event) => !item.disabled && _ctx.toggleItem(index2),
                  style: vue.normalizeStyle({ color: item.state.showPopup ? _ctx.activeColor : "" })
                }, [
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(["nut-menu__title", _ctx.getClasses(item.state.showPopup)])
                    },
                    [
                      vue.createElementVNode(
                        "view",
                        { class: "nut-menu__title-text" },
                        vue.toDisplayString(item.renderTitle()),
                        1
                        /* TEXT */
                      ),
                      vue.createVNode(_component_nut_icon, {
                        name: item.titleIcon || (_ctx.direction === "up" ? "arrow-up" : "down-arrow"),
                        size: "10",
                        class: "nut-menu__title-icon"
                      }, null, 8, ["name"])
                    ],
                    2
                    /* CLASS */
                  )
                ], 14, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        ),
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$8], ["__scopeId", "data-v-3b380ba4"], ["__file", "D:/prgraming/myproject/ihome/uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/menu/index.vue"]]);
  const props$5 = {
    props: {
      // 指示器的整体宽度
      indicatorWidth: {
        type: [String, Number],
        default: props$a.scrollList.indicatorWidth
      },
      // 滑块的宽度
      indicatorBarWidth: {
        type: [String, Number],
        default: props$a.scrollList.indicatorBarWidth
      },
      // 是否显示面板指示器
      indicator: {
        type: Boolean,
        default: props$a.scrollList.indicator
      },
      // 指示器非激活颜色
      indicatorColor: {
        type: String,
        default: props$a.scrollList.indicatorColor
      },
      // 指示器的激活颜色
      indicatorActiveColor: {
        type: String,
        default: props$a.scrollList.indicatorActiveColor
      },
      // 指示器样式，可通过bottom，left，right进行定位
      indicatorStyle: {
        type: [String, Object],
        default: props$a.scrollList.indicatorStyle
      }
    }
  };
  const block0 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("wxs");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["wxs"] = "7f9de7cc";
  };
  const _sfc_main$e = {
    name: "u-scroll-list",
    mixins: [mpMixin, mixin, props$5],
    data() {
      return {
        scrollInfo: {
          scrollLeft: 0,
          scrollWidth: 0
        },
        scrollWidth: 0
      };
    },
    computed: {
      // 指示器为线型的样式
      barStyle() {
        const style = {};
        style.width = uni.$u.addUnit(this.indicatorBarWidth);
        style.backgroundColor = this.indicatorActiveColor;
        return style;
      },
      lineStyle() {
        const style = {};
        style.width = uni.$u.addUnit(this.indicatorWidth);
        style.backgroundColor = this.indicatorColor;
        return style;
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.getComponentWidth();
      },
      //
      scrollEvent(status) {
        this.$emit(status);
      },
      // 获取组件的宽度
      async getComponentWidth() {
        await uni.$u.sleep(30);
        this.$uGetRect(".u-scroll-list").then((size) => {
          this.scrollWidth = size.width;
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-scroll-list",
        ref: "u-scroll-list"
      },
      [
        vue.createCommentVNode(" 以上平台，支持wxs "),
        vue.createElementVNode("scroll-view", {
          class: "u-scroll-list__scroll-view",
          "scroll-x": "",
          onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.wxs.scroll && _ctx.wxs.scroll(...args)),
          onScrolltoupper: _cache[1] || (_cache[1] = (...args) => _ctx.wxs.scrolltoupper && _ctx.wxs.scrolltoupper(...args)),
          onScrolltolower: _cache[2] || (_cache[2] = (...args) => _ctx.wxs.scrolltolower && _ctx.wxs.scrolltolower(...args)),
          "data-scrollWidth": $data.scrollWidth,
          "data-barWidth": _ctx.$u.getPx(_ctx.indicatorBarWidth),
          "data-indicatorWidth": _ctx.$u.getPx(_ctx.indicatorWidth),
          "show-scrollbar": false,
          "upper-threshold": 0,
          "lower-threshold": 0
        }, [
          vue.createElementVNode("view", { class: "u-scroll-list__scroll-view__content" }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ], 40, ["data-scrollWidth", "data-barWidth", "data-indicatorWidth"]),
        _ctx.indicator ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: "u-scroll-list__indicator",
            style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.indicatorStyle)])
          },
          [
            vue.createElementVNode(
              "view",
              {
                class: "u-scroll-list__indicator__line",
                style: vue.normalizeStyle([$options.lineStyle])
              },
              [
                vue.createElementVNode(
                  "view",
                  {
                    class: "u-scroll-list__indicator__line__bar",
                    style: vue.normalizeStyle([$options.barStyle]),
                    ref: "u-scroll-list__indicator__line__bar"
                  },
                  null,
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            )
          ],
          4
          /* STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      512
      /* NEED_PATCH */
    );
  }
  if (typeof block0 === "function")
    block0(_sfc_main$e);
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$7], ["__scopeId", "data-v-fea2b4f4"], ["__file", "D:/prgraming/myproject/ihome/node_modules/uview-plus/components/u-scroll-list/u-scroll-list.vue"]]);
  const _sfc_main$d = {
    name: "UniCard",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "10px"
      },
      margin: {
        type: String,
        default: "15px"
      },
      spacing: {
        type: String,
        default: "0 10px"
      },
      extra: {
        type: String,
        default: ""
      },
      cover: {
        type: String,
        default: ""
      },
      thumbnail: {
        type: String,
        default: ""
      },
      isFull: {
        // 内容区域是否通栏
        type: Boolean,
        default: false
      },
      isShadow: {
        // 是否开启阴影
        type: Boolean,
        default: true
      },
      shadow: {
        type: String,
        default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick(type) {
        this.$emit("click", type);
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
        style: vue.normalizeStyle({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" })
      },
      [
        vue.createCommentVNode(" 封面 "),
        vue.renderSlot(_ctx.$slots, "cover", {}, () => [
          $props.cover ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__cover"
          }, [
            vue.createElementVNode("image", {
              class: "uni-card__cover-image",
              mode: "widthFix",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
              src: $props.cover
            }, null, 8, ["src"])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.renderSlot(_ctx.$slots, "title", {}, () => [
          $props.title || $props.extra ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__header"
          }, [
            vue.createCommentVNode(" 卡片标题 "),
            vue.createElementVNode("view", {
              class: "uni-card__header-box",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
            }, [
              $props.thumbnail ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-card__header-avatar"
              }, [
                vue.createElementVNode("image", {
                  class: "uni-card__header-avatar-image",
                  src: $props.thumbnail,
                  mode: "aspectFit"
                }, null, 8, ["src"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "uni-card__header-content" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-card__header-content-title uni-ellipsis" },
                  vue.toDisplayString($props.title),
                  1
                  /* TEXT */
                ),
                $props.title && $props.subTitle ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "uni-card__header-content-subtitle uni-ellipsis"
                  },
                  vue.toDisplayString($props.subTitle),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            vue.createElementVNode("view", {
              class: "uni-card__header-extra",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
            }, [
              vue.createElementVNode(
                "text",
                { class: "uni-card__header-extra-text" },
                vue.toDisplayString($props.extra),
                1
                /* TEXT */
              )
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.createCommentVNode(" 卡片内容 "),
        vue.createElementVNode(
          "view",
          {
            class: "uni-card__content",
            style: vue.normalizeStyle({ padding: $props.padding }),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        ),
        vue.createElementVNode("view", {
          class: "uni-card__actions",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
        }, [
          vue.renderSlot(_ctx.$slots, "actions", {}, void 0, true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$6], ["__scopeId", "data-v-ae4bee67"], ["__file", "D:/prgraming/myproject/ihome/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);
  const props$4 = {
    props: {
      // 用于滚动到指定item
      anchor: {
        type: [String, Number],
        default: props$a.listItem.anchor
      }
    }
  };
  const _sfc_main$c = {
    name: "u-list-item",
    mixins: [mpMixin, mixin, props$4],
    data() {
      return {
        // 节点信息
        rect: {},
        index: 0,
        show: true,
        sys: uni.$u.sys()
      };
    },
    computed: {},
    inject: ["uList"],
    watch: {
      "uList.innerScrollTop"(n) {
        const preLoadScreen = this.uList.preLoadScreen;
        const windowHeight = this.sys.windowHeight;
        if (n <= windowHeight * preLoadScreen) {
          this.parent.updateOffsetFromChild(0);
        } else if (this.rect.top <= n - windowHeight * preLoadScreen) {
          this.parent.updateOffsetFromChild(this.rect.top);
        }
      }
    },
    created() {
      this.parent = {};
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.updateParentData();
        this.index = this.parent.children.indexOf(this);
        this.resize();
      },
      updateParentData() {
        this.getParentData("u-list");
      },
      resize() {
        this.queryRect(`u-list-item-${this.anchor}`).then((size) => {
          const lastChild = this.parent.children[this.index - 1];
          this.rect = size;
          const preLoadScreen = this.uList.preLoadScreen;
          const windowHeight = this.sys.windowHeight;
          if (lastChild) {
            this.rect.top = lastChild.rect.top + lastChild.rect.height;
          }
          if (size.top >= this.uList.innerScrollTop + (1 + preLoadScreen) * windowHeight)
            this.show = false;
        });
      },
      // 查询元素尺寸
      queryRect(el) {
        return new Promise((resolve) => {
          this.$uGetRect(`.${el}`).then((size) => {
            resolve(size);
          });
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-list-item", [`u-list-item-${_ctx.anchor}`]]),
      ref: `u-list-item-${_ctx.anchor}`,
      anchor: `u-list-item-${_ctx.anchor}`
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 10, ["anchor"]);
  }
  const __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$5], ["__scopeId", "data-v-32197ac9"], ["__file", "D:/prgraming/myproject/ihome/node_modules/uview-plus/components/u-list-item/u-list-item.vue"]]);
  const props$3 = {
    props: {
      // 控制是否出现滚动条，仅nvue有效
      showScrollbar: {
        type: Boolean,
        default: props$a.list.showScrollbar
      },
      // 距底部多少时触发scrolltolower事件
      lowerThreshold: {
        type: [String, Number],
        default: props$a.list.lowerThreshold
      },
      // 距顶部多少时触发scrolltoupper事件，非nvue有效
      upperThreshold: {
        type: [String, Number],
        default: props$a.list.upperThreshold
      },
      // 设置竖向滚动条位置
      scrollTop: {
        type: [String, Number],
        default: props$a.list.scrollTop
      },
      // 控制 onscroll 事件触发的频率，仅nvue有效
      offsetAccuracy: {
        type: [String, Number],
        default: props$a.list.offsetAccuracy
      },
      // 启用 flexbox 布局。开启后，当前节点声明了display: flex就会成为flex container，并作用于其孩子节点，仅微信小程序有效
      enableFlex: {
        type: Boolean,
        default: props$a.list.enableFlex
      },
      // 是否按分页模式显示List，默认值false
      pagingEnabled: {
        type: Boolean,
        default: props$a.list.pagingEnabled
      },
      // 是否允许List滚动
      scrollable: {
        type: Boolean,
        default: props$a.list.scrollable
      },
      // 值应为某子元素id（id不能以数字开头）
      scrollIntoView: {
        type: String,
        default: props$a.list.scrollIntoView
      },
      // 在设置滚动条位置时使用动画过渡
      scrollWithAnimation: {
        type: Boolean,
        default: props$a.list.scrollWithAnimation
      },
      // iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只对微信小程序有效
      enableBackToTop: {
        type: Boolean,
        default: props$a.list.enableBackToTop
      },
      // 列表的高度
      height: {
        type: [String, Number],
        default: props$a.list.height
      },
      // 列表宽度
      width: {
        type: [String, Number],
        default: props$a.list.width
      },
      // 列表前后预渲染的屏数，1代表一个屏幕的高度，1.5代表1个半屏幕高度
      preLoadScreen: {
        type: [String, Number],
        default: props$a.list.preLoadScreen
      }
      // vue下，是否开启虚拟列表
    }
  };
  const _sfc_main$b = {
    name: "u-list",
    mixins: [mpMixin, mixin, props$3],
    watch: {
      scrollIntoView(n) {
        this.scrollIntoViewById(n);
      }
    },
    data() {
      return {
        // 记录内部滚动的距离
        innerScrollTop: 0,
        // vue下，scroll-view在上拉加载时的偏移值
        offset: 0,
        sys: uni.$u.sys()
      };
    },
    computed: {
      listStyle() {
        const style = {}, addUnit2 = uni.$u.addUnit;
        if (this.width != 0)
          style.width = addUnit2(this.width);
        if (this.height != 0)
          style.height = addUnit2(this.height);
        if (!style.height)
          style.height = addUnit2(this.sys.windowHeight, "px");
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    provide() {
      return {
        uList: this
      };
    },
    created() {
      this.refs = [];
      this.children = [];
      this.anchors = [];
    },
    mounted() {
    },
    methods: {
      updateOffsetFromChild(top) {
        this.offset = top;
      },
      onScroll(e) {
        let scrollTop = 0;
        scrollTop = e.detail.scrollTop;
        this.innerScrollTop = scrollTop;
        this.$emit("scroll", Math.abs(scrollTop));
      },
      scrollIntoViewById(id) {
      },
      // 滚动到底部触发事件
      scrolltolower(e) {
        uni.$u.sleep(30).then(() => {
          this.$emit("scrolltolower");
        });
      },
      // 滚动到底部时触发，非nvue有效
      scrolltoupper(e) {
        uni.$u.sleep(30).then(() => {
          this.$emit("scrolltoupper");
          this.offset = 0;
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("scroll-view", {
      class: "u-list",
      "scroll-into-view": _ctx.scrollIntoView,
      style: vue.normalizeStyle([$options.listStyle]),
      "scroll-y": "",
      "scroll-top": Number(_ctx.scrollTop),
      "lower-threshold": Number(_ctx.lowerThreshold),
      "upper-threshold": Number(_ctx.upperThreshold),
      "show-scrollbar": _ctx.showScrollbar,
      "enable-back-to-top": _ctx.enableBackToTop,
      "scroll-with-animation": _ctx.scrollWithAnimation,
      onScroll: _cache[0] || (_cache[0] = (...args) => $options.onScroll && $options.onScroll(...args)),
      onScrolltolower: _cache[1] || (_cache[1] = (...args) => $options.scrolltolower && $options.scrolltolower(...args)),
      onScrolltoupper: _cache[2] || (_cache[2] = (...args) => $options.scrolltoupper && $options.scrolltoupper(...args))
    }, [
      vue.createElementVNode("view", null, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ], 44, ["scroll-into-view", "scroll-top", "lower-threshold", "upper-threshold", "show-scrollbar", "enable-back-to-top", "scroll-with-animation"]);
  }
  const __easycom_7 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$4], ["__scopeId", "data-v-9ad03670"], ["__file", "D:/prgraming/myproject/ihome/node_modules/uview-plus/components/u-list/u-list.vue"]]);
  const _sfc_main$a = {
    name: "status-bar"
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "status-bar" });
  }
  const StatusBar = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$3], ["__scopeId", "data-v-826a6678"], ["__file", "D:/prgraming/myproject/ihome/components/statusBar.vue"]]);
  const _sfc_main$9 = {
    __name: "VR",
    setup(__props) {
      const state = vue.reactive({
        options1: [
          {
            text: "设计费",
            value: 0
          },
          {
            text: "新款商品",
            value: 1
          },
          {
            text: "活动商品",
            value: 2
          }
        ],
        options2: [
          {
            text: "风格",
            value: 0
          },
          {
            text: "新款商品",
            value: 1
          },
          {
            text: "活动商品",
            value: 2
          }
        ],
        options3: [
          {
            text: "施工",
            value: 0
          },
          {
            text: "新款商品",
            value: 1
          },
          {
            text: "活动商品",
            value: 2
          }
        ],
        options4: [
          {
            text: "筛选",
            value: 0
          },
          {
            text: "好评排序",
            value: "b"
          },
          {
            text: "销量排序",
            value: "c"
          }
        ],
        value1: 0
      }, {
        options1: [
          {
            text: "设计费",
            value: 0
          },
          {
            text: "新款商品",
            value: 1
          },
          {
            text: "活动商品",
            value: 2
          }
        ],
        options2: [
          {
            text: "风格",
            value: 0
          },
          {
            text: "新款商品",
            value: 1
          },
          {
            text: "活动商品",
            value: 2
          }
        ],
        options3: [
          {
            text: "施工",
            value: 0
          },
          {
            text: "新款商品",
            value: 1
          },
          {
            text: "活动商品",
            value: 2
          }
        ],
        options4: [
          {
            text: "筛选",
            value: 0
          },
          {
            text: "好评排序",
            value: "b"
          },
          {
            text: "销量排序",
            value: "c"
          }
        ],
        value1: 0
      }, {
        options1: [
          {
            text: "设计费",
            value: 0
          },
          {
            text: "新款商品",
            value: 1
          },
          {
            text: "活动商品",
            value: 2
          }
        ],
        options2: [
          {
            text: "风格",
            value: 0
          },
          {
            text: "新款商品",
            value: 1
          },
          {
            text: "活动商品",
            value: 2
          }
        ],
        options3: [
          {
            text: "施工",
            value: 0
          },
          {
            text: "新款商品",
            value: 1
          },
          {
            text: "活动商品",
            value: 2
          }
        ],
        options4: [
          {
            text: "筛选",
            value: 0
          },
          {
            text: "好评排序",
            value: "b"
          },
          {
            text: "销量排序",
            value: "c"
          }
        ],
        value1: 0
      }, {
        options1: [
          {
            text: "设计费",
            value: 0
          },
          {
            text: "新款商品",
            value: 1
          },
          {
            text: "活动商品",
            value: 2
          }
        ],
        options2: [
          {
            text: "风格",
            value: 0
          },
          {
            text: "新款商品",
            value: 1
          },
          {
            text: "活动商品",
            value: 2
          }
        ],
        options3: [
          {
            text: "施工",
            value: 0
          },
          {
            text: "新款商品",
            value: 1
          },
          {
            text: "活动商品",
            value: 2
          }
        ],
        options4: [
          {
            text: "筛选",
            value: 0
          },
          {
            text: "好评排序",
            value: "b"
          },
          {
            text: "销量排序",
            value: "c"
          }
        ],
        value1: 0
      });
      const left = () => {
        formatAppLog("log", "at pages/VR/VR.vue:295", "left");
      };
      const right = () => {
        formatAppLog("log", "at pages/VR/VR.vue:298", "right");
      };
      const scrolltolower = () => {
        formatAppLog("log", "at pages/VR/VR.vue:301", "scrolltolower");
        for (let i = 0; i < 5; i++) {
          listBoundless.value.push(i);
        }
      };
      const listBoundless = vue.ref([]);
      for (let i = 0; i < 5; i++) {
        listBoundless.value.push(i);
      }
      const list2 = vue.ref(
        [
          {
            price: "230.5",
            thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"
          },
          {
            price: "74.1",
            thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"
          },
          {
            price: "8457",
            thumb: "https://cdn.uviewui.com/uview/goods/6.jpg"
          },
          {
            price: "1442",
            thumb: "https://cdn.uviewui.com/uview/goods/5.jpg"
          },
          {
            price: "541",
            thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"
          },
          {
            price: "234",
            thumb: "https://cdn.uviewui.com/uview/goods/3.jpg"
          },
          {
            price: "562",
            thumb: "https://cdn.uviewui.com/uview/goods/4.jpg"
          },
          {
            price: "251.5",
            thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"
          }
        ]
      );
      return (_ctx, _cache) => {
        const _component_publicTabBar = resolveEasycom(vue.resolveDynamicComponent("publicTabBar"), publicTabBar);
        const _component_nut_menu_item = resolveEasycom(vue.resolveDynamicComponent("nut-menu-item"), __easycom_1$1);
        const _component_nut_menu = resolveEasycom(vue.resolveDynamicComponent("nut-menu"), __easycom_2);
        const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$5);
        const _component_u_scroll_list = resolveEasycom(vue.resolveDynamicComponent("u-scroll-list"), __easycom_4);
        const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_5);
        const _component_u_list_item = resolveEasycom(vue.resolveDynamicComponent("u-list-item"), __easycom_6);
        const _component_u_list = resolveEasycom(vue.resolveDynamicComponent("u-list"), __easycom_7);
        return vue.openBlock(), vue.createElementBlock("view", { class: "systemBox" }, [
          vue.createElementVNode("view", { class: "battar" }, [
            vue.createVNode(_component_publicTabBar, { activePage: 1 })
          ]),
          vue.createVNode(vue.unref(StatusBar)),
          vue.createElementVNode("view", { class: "menu" }, [
            vue.createVNode(_component_nut_menu, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_nut_menu_item, {
                  modelValue: state.value1,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.value1 = $event),
                  options: state.options1
                }, null, 8, ["modelValue", "options"]),
                vue.createVNode(_component_nut_menu_item, {
                  modelValue: state.value1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.value1 = $event),
                  options: state.options2
                }, null, 8, ["modelValue", "options"]),
                vue.createVNode(_component_nut_menu_item, {
                  modelValue: state.value1,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => state.value1 = $event),
                  options: state.options3
                }, null, 8, ["modelValue", "options"]),
                vue.createVNode(_component_nut_menu_item, {
                  modelValue: state.value1,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => state.value1 = $event),
                  options: state.options4
                }, null, 8, ["modelValue", "options"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          vue.createCommentVNode("        把u-list放到一个ulist中，就不担心上面的滚动了，我他妈怎么没想到"),
          vue.createVNode(_component_u_list, {
            class: "postion",
            height: "calc(100vh - 110rpx - 48px)",
            onScrolltolower: scrolltolower
          }, {
            default: vue.withCtx(() => [
              vue.createCommentVNode("解决下面baar的馊主意"),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(listBoundless.value, (item, index2) => {
                  return vue.openBlock(), vue.createBlock(
                    _component_u_list_item,
                    { key: index2 },
                    {
                      default: vue.withCtx(() => [
                        vue.createVNode(
                          _component_uni_card,
                          {
                            isFull: true,
                            extra: "额外信息",
                            "sub-title": "副标题",
                            thumbnail: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
                            title: "基础卡片"
                          },
                          {
                            default: vue.withCtx(() => [
                              vue.createElementVNode("text", null, "这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。"),
                              vue.createCommentVNode('        <view v-for="(item, index) in list" :key="index" @scrolltolower="scrolltolower" :key="index">'),
                              vue.createVNode(
                                _component_u_scroll_list,
                                {
                                  indicator: false,
                                  onLeft: left,
                                  onRight: right
                                },
                                {
                                  default: vue.withCtx(() => [
                                    vue.createElementVNode("view", {
                                      class: "scroll-list",
                                      style: { "flex-direction": "row" }
                                    }, [
                                      (vue.openBlock(true), vue.createElementBlock(
                                        vue.Fragment,
                                        null,
                                        vue.renderList(list2.value, (item2, index3) => {
                                          return vue.openBlock(), vue.createElementBlock(
                                            "view",
                                            {
                                              key: index3,
                                              class: vue.normalizeClass([[index3 === 9 && "scroll-list__goods-item--no-margin-right"], "scroll-list__goods-item"])
                                            },
                                            [
                                              vue.createElementVNode("image", {
                                                src: item2.thumb,
                                                class: "scroll-list__goods-item__image"
                                              }, null, 8, ["src"]),
                                              vue.createElementVNode(
                                                "text",
                                                { class: "scroll-list__goods-item__text" },
                                                "￥" + vue.toDisplayString(item2.price),
                                                1
                                                /* TEXT */
                                              )
                                            ],
                                            2
                                            /* CLASS */
                                          );
                                        }),
                                        128
                                        /* KEYED_FRAGMENT */
                                      )),
                                      vue.createElementVNode("view", { class: "scroll-list__show-more" }, [
                                        vue.createElementVNode("text", { class: "scroll-list__show-more__text" }, "查看更多"),
                                        vue.createVNode(_component_u_icon, {
                                          color: "#f56c6c",
                                          name: "arrow-leftward",
                                          size: "12"
                                        })
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              ),
                              vue.createCommentVNode("        </view>")
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  };
  const PagesVRVR = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "D:/prgraming/myproject/ihome/pages/VR/VR.vue"]]);
  const _sfc_main$8 = {
    __name: "scanReturn",
    setup(__props) {
      const currentSlide = vue.ref(0);
      const slides = [
        {
          image: "https://cdn.uviewui.com/uview/swiper/swiper3.png",
          description: "Slide 1 description"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/swiper2.png",
          description: "Slide 2 description"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
          description: "Slide 3 description"
        }
      ];
      const onSwiperChange = (e) => {
        currentSlide.value = e.detail.current;
      };
      const setCurrentSlide = (index2) => {
        currentSlide.value = index2;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createElementVNode("swiper", {
            current: currentSlide.value,
            circular: "",
            class: "swiper",
            onChange: onSwiperChange
          }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(slides, (slide, index2) => {
                return vue.createElementVNode("swiper-item", { key: index2 }, [
                  vue.createElementVNode("image", {
                    src: slide.image,
                    class: "slide-image"
                  }, null, 8, ["src"])
                ]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ], 40, ["current"]),
          vue.createElementVNode("view", { class: "text-container" }, [
            vue.createElementVNode(
              "text",
              null,
              vue.toDisplayString(slides[currentSlide.value].description),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "indicators" }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(slides, (slide, index2) => {
                return vue.createElementVNode("view", {
                  key: index2,
                  class: vue.normalizeClass([{ active: index2 === currentSlide.value }, "indicator"]),
                  onClick: ($event) => setCurrentSlide(index2)
                }, null, 10, ["onClick"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const ComponentsScanScanReturn = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-7d4095bd"], ["__file", "D:/prgraming/myproject/ihome/components/scan/scanReturn.vue"]]);
  const _sfc_main$7 = {
    __name: "news",
    setup(__props) {
      const click = () => {
        formatAppLog("log", "at pages/news/news.vue:34", "click");
        uni.scanCode({
          autoDecodeCharset: true,
          success: function(res) {
            formatAppLog("log", "at pages/news/news.vue:40", "success");
          },
          fail: function(res) {
            formatAppLog("log", "at pages/news/news.vue:43", "fail");
          },
          complete: function(res) {
            formatAppLog("log", "at pages/news/news.vue:46", "complete");
            uni.navigateTo({
              url: "/components/scan/scanReturn",
              success: function(res2) {
                formatAppLog("log", "at pages/news/news.vue:51", "navigateTo success");
              },
              fail: function(res2) {
                formatAppLog("log", "at pages/news/news.vue:54", "navigateTo fail");
              }
            });
          }
        });
      };
      const handleSettingsClick = () => {
        formatAppLog("log", "at pages/news/news.vue:61", "Settings button clicked");
        uni.navigateTo({
          url: "/components/scan/scanReturn",
          success: function(res) {
            formatAppLog("log", "at pages/news/news.vue:65", "navigateTo success");
          },
          fail: function(res) {
            formatAppLog("log", "at pages/news/news.vue:68", "navigateTo fail");
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_publicTabBar = resolveEasycom(vue.resolveDynamicComponent("publicTabBar"), publicTabBar);
        return vue.openBlock(), vue.createElementBlock("view", { class: "systemBox" }, [
          vue.createVNode(vue.unref(StatusBar)),
          vue.createElementVNode("view", { class: "header" }, [
            vue.createElementVNode("text", { class: "title" }, "消息中心"),
            vue.createElementVNode("view", {
              class: "settings-icon",
              onClick: handleSettingsClick
            }, [
              vue.createElementVNode("image", { src: "/static/message/setting.png" })
            ])
          ]),
          vue.createElementVNode("view", { class: "notification-list" }, [
            vue.createElementVNode("view", { class: "notification-item" }, [
              vue.createElementVNode("view", { class: "icon" }, [
                vue.createElementVNode("image", { src: "/static/message/wuLiu.png" })
              ]),
              vue.createElementVNode("text", { class: "item-title" }, "交易物流")
            ]),
            vue.createElementVNode("div", { class: "divider" }),
            vue.createElementVNode("view", { class: "notification-item" }, [
              vue.createElementVNode("view", { class: "icon" }, [
                vue.createElementVNode("image", { src: "/static/message/xiaoXi.png" })
              ]),
              vue.createElementVNode("text", { class: "item-title" }, "活动消息")
            ])
          ]),
          vue.createElementVNode("button", {
            class: "scan-button",
            onClick: click
          }, "扫一扫"),
          vue.createVNode(_component_publicTabBar, { activePage: 2 })
        ]);
      };
    }
  };
  const PagesNewsNews = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-24bc9d41"], ["__file", "D:/prgraming/myproject/ihome/pages/news/news.vue"]]);
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = { ...defaultSettings };
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value2) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value2));
          } catch (e) {
          }
          currentSettings = value2;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value2) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value2);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list2 = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list2.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.1.0
   * (c) 2022 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function useStore(key) {
    if (key === void 0)
      key = null;
    return vue.inject(key !== null ? key : storeKey);
  }
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject$1(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i = subs.indexOf(fn);
      if (i > -1) {
        subs.splice(i, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    var oldScope = store2._scope;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    var computedCache = {};
    var scope = vue.effectScope(true);
    scope.run(function() {
      forEachValue(wrappedGetters, function(fn, key) {
        computedObj[key] = partial(fn, store2);
        computedCache[key] = vue.computed(function() {
          return computedObj[key]();
        });
        Object.defineProperty(store2.getters, key, {
          get: function() {
            return computedCache[key].value;
          },
          enumerable: true
          // for local getters
        });
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    store2._scope = scope;
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
    if (oldScope) {
      oldScope.stop();
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn(
              '[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"'
            );
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store3) {
      return rawGetter(
        local.state,
        // local state
        local.getters,
        // local getters
        store3.state,
        // root state
        store3.getters
        // root getters
      );
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject$1(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app, store2) {
    setupDevtoolsPlugin(
      {
        id: "org.vuejs.vuex",
        app,
        label: "Vuex",
        homepage: "https://next.vuex.vuejs.org/",
        logo: "https://vuejs.org/images/icons/favicon-96x96.png",
        packageName: "vuex",
        componentStateTypes: [LABEL_VUEX_BINDINGS]
      },
      function(api) {
        api.addTimelineLayer({
          id: MUTATIONS_LAYER_ID,
          label: "Vuex Mutations",
          color: COLOR_LIME_500
        });
        api.addTimelineLayer({
          id: ACTIONS_LAYER_ID,
          label: "Vuex Actions",
          color: COLOR_LIME_500
        });
        api.addInspector({
          id: INSPECTOR_ID,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores..."
        });
        api.on.getInspectorTree(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            if (payload.filter) {
              var nodes = [];
              flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
              payload.rootNodes = nodes;
            } else {
              payload.rootNodes = [
                formatStoreForInspectorTree(store2._modules.root, "")
              ];
            }
          }
        });
        api.on.getInspectorState(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            makeLocalGetters(store2, modulePath);
            payload.state = formatStoreForInspectorState(
              getStoreModule(store2._modules, modulePath),
              modulePath === "root" ? store2.getters : store2._makeLocalGettersCache,
              modulePath
            );
          }
        });
        api.on.editInspectorState(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            var path = payload.path;
            if (modulePath !== "root") {
              path = modulePath.split("/").filter(Boolean).concat(path);
            }
            store2._withCommit(function() {
              payload.set(store2._state.data, path, payload.state.value);
            });
          }
        });
        store2.subscribe(function(mutation, state) {
          var data = {};
          if (mutation.payload) {
            data.payload = mutation.payload;
          }
          data.state = state;
          api.notifyComponentUpdate();
          api.sendInspectorTree(INSPECTOR_ID);
          api.sendInspectorState(INSPECTOR_ID);
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: mutation.type,
              data
            }
          });
        });
        store2.subscribeAction({
          before: function(action, state) {
            var data = {};
            if (action.payload) {
              data.payload = action.payload;
            }
            action._id = actionId++;
            action._time = Date.now();
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: action._time,
                title: action.type,
                groupId: action._id,
                subtitle: "start",
                data
              }
            });
          },
          after: function(action, state) {
            var data = {};
            var duration = Date.now() - action._time;
            data.duration = {
              _custom: {
                type: "duration",
                display: duration + "ms",
                tooltip: "Action duration",
                value: duration
              }
            };
            if (action.payload) {
              data.payload = action.payload;
            }
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: Date.now(),
                title: action.type,
                groupId: action._id,
                subtitle: "end",
                data
              }
            });
          }
        });
      }
    );
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      // all modules end with a `/`, we want the last segment only
      // cart/ -> cart
      // nested/cart/ -> cart
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(
        function(moduleName) {
          return formatStoreForInspectorTree(
            module._children[moduleName],
            path + moduleName + "/"
          );
        }
      )
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
      return n;
    });
    return names.reduce(
      function(module, moduleName, i) {
        var child = module[moduleName];
        if (!child) {
          throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
        }
        return i === names.length - 1 ? child : child._children;
      },
      path === "root" ? moduleMap : moduleMap.root._children
    );
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn(
          "[vuex] trying to unregister module '" + key + "', which is not registered"
        );
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn(
              "[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed"
            );
          }
          return;
        }
        update(
          path.concat(key),
          targetModule.getChild(key),
          newModule.modules[key]
        );
      }
    }
  }
  var functionAssert = {
    assert: function(value2) {
      return typeof value2 === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value2) {
      return typeof value2 === "function" || typeof value2 === "object" && typeof value2.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value2, type) {
        assert(
          assertOptions.assert(value2),
          makeAssertionMessage(path, key, type, value2, assertOptions.expected)
        );
      });
    });
  }
  function makeAssertionMessage(path, key, type, value2, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value2) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._scope = null;
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install2(app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn(
        "[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
      );
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve(res);
      }, function(error2) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error2);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error2);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  const _sfc_main$6 = {
    __name: "main",
    setup(__props) {
      const store2 = useStore();
      const isLogin = vue.ref(store2.state.userInfo.isLogin);
      const profile = vue.ref("https://images.freeimages.com/365/images/previews/af5/funny-cat-vector-illustration-25725.jpg");
      const functionList = vue.reactive([{
        aim: "comment",
        word: "发布的评论"
      }, {
        aim: "decorationInformation",
        word: "装修信息"
      }, {
        aim: "like",
        word: "我的点赞"
      }, {
        aim: "collect",
        word: "我的收藏"
      }, {
        aim: "article",
        word: "发布的文章"
      }, {
        aim: "novicesGuide",
        word: "新手攻略"
      }, {
        aim: "shoppingCart",
        word: "购物车"
      }, {
        aim: "orders",
        word: "我的订单"
      }]);
      function login() {
        uni.navigateTo({
          url: "/pages/subpages/login/login",
          fail: (res) => {
            formatAppLog("log", "at pages/main/main.vue:141", res);
          }
        });
      }
      return (_ctx, _cache) => {
        const _component_u_avatar = resolveEasycom(vue.resolveDynamicComponent("u-avatar"), __easycom_0$4);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 去除手机状态栏变化 "),
            vue.createElementVNode("view", { class: "status-bar" }),
            vue.createElementVNode("view", { class: "systemBox" }, [
              vue.createElementVNode("scroll-view", {
                class: "pageBox",
                "scroll-y": "true"
              }, [
                vue.createVNode(publicTabBar, { activePage: 3 }),
                isLogin.value ? (vue.openBlock(), vue.createElementBlock("view", { key: isLogin.value }, [
                  vue.createCommentVNode(" 头像与用户名 "),
                  vue.createElementVNode("view", {
                    class: "loginState",
                    onClick: login
                  }, [
                    vue.createElementVNode("view", { class: "profileView" }, [
                      vue.createVNode(_component_u_avatar, {
                        src: profile.value,
                        shape: "circle",
                        size: "150"
                      }, null, 8, ["src"])
                    ]),
                    vue.createCommentVNode(' <navigator url="../subpages/login/testLogin.vue">\r\n						{{ $store.state.userInfo.name }}{{ isLogin }}\r\n					</navigator> '),
                    vue.createElementVNode(
                      "view",
                      { class: "" },
                      vue.toDisplayString(_ctx.$store.state.userInfo.name) + vue.toDisplayString(isLogin.value),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "loginInfo" }, [
                    vue.createElementVNode("view", { class: "Info" }, " 关注：0 "),
                    vue.createElementVNode("view", { class: "Info" }, " 粉丝：0 "),
                    vue.createElementVNode("view", { class: "Info3" }, " 被赞或收藏：0 ")
                  ])
                ])) : vue.createCommentVNode("v-if", true),
                !isLogin.value ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: isLogin.value,
                  class: "emptyUser"
                }, [
                  vue.createElementVNode("view", null, "登录IhomeAPP"),
                  vue.createElementVNode("view", null, "体验更多新奇功能，尽享高级家装服务"),
                  vue.createElementVNode("view", {
                    class: "btn",
                    onClick: login
                  }, " 立即登录 ")
                ])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("view", { class: "functionsBox" }, [
                  vue.createElementVNode("view", { class: "functionsTitle" }, [
                    vue.createElementVNode("text", null, "常用工具")
                  ]),
                  vue.createElementVNode("view", { class: "functions" }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(functionList, (func2) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          key: func2.aim,
                          onClick: _cache[0] || (_cache[0] = () => {
                          }),
                          class: "functioinItem"
                        }, [
                          vue.createCommentVNode(" 微信无法使用本地图片，需要通过接口返回 "),
                          vue.createElementVNode("image", {
                            style: { "width": "100%", "height": "100%" },
                            src: `../../static/main/${func2.aim}.png`,
                            mode: "aspectFit"
                          }, null, 8, ["src"]),
                          vue.createElementVNode(
                            "view",
                            { class: "functionsText" },
                            vue.toDisplayString(func2.word),
                            1
                            /* TEXT */
                          )
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ]),
                vue.createElementVNode("view", {
                  class: "topic hot",
                  style: {}
                }, [
                  vue.createElementVNode("view", { class: "topicTitle" }, "热门话题"),
                  vue.createElementVNode("view", { class: "topicText" }, "#提升生活品质的小家电"),
                  vue.createElementVNode("view", { class: "topicText" }, "装修时我最后后悔遗憾的事")
                ]),
                vue.createElementVNode("view", { class: "topic new" }, [
                  vue.createElementVNode("view", { class: "topicTitle" }, "最新话题"),
                  vue.createElementVNode("view", { class: "topicText" }, "#皮质沙发怎么养护？"),
                  vue.createElementVNode("view", { class: "topicText" }, "#有没有空气炸锅推荐呀~")
                ]),
                vue.createElementVNode("view", { class: "gap" })
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesMainMain = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "D:/prgraming/myproject/ihome/pages/main/main.vue"]]);
  const props$2 = {
    props: {
      // 显示的内容，字符串
      text: {
        type: [Array],
        default: props$a.columnNotice.text
      },
      // 是否显示左侧的音量图标
      icon: {
        type: String,
        default: props$a.columnNotice.icon
      },
      // 通告模式，link-显示右箭头，closable-显示右侧关闭图标
      mode: {
        type: String,
        default: props$a.columnNotice.mode
      },
      // 文字颜色，各图标也会使用文字颜色
      color: {
        type: String,
        default: props$a.columnNotice.color
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: props$a.columnNotice.bgColor
      },
      // 字体大小，单位px
      fontSize: {
        type: [String, Number],
        default: props$a.columnNotice.fontSize
      },
      // 水平滚动时的滚动速度，即每秒滚动多少px(px)，这有利于控制文字无论多少时，都能有一个恒定的速度
      speed: {
        type: [String, Number],
        default: props$a.columnNotice.speed
      },
      // direction = row时，是否使用步进形式滚动
      step: {
        type: Boolean,
        default: props$a.columnNotice.step
      },
      // 滚动一个周期的时间长，单位ms
      duration: {
        type: [String, Number],
        default: props$a.columnNotice.duration
      },
      // 是否禁止用手滑动切换
      // 目前HX2.6.11，只支持App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序
      disableTouch: {
        type: Boolean,
        default: props$a.columnNotice.disableTouch
      }
    }
  };
  const _sfc_main$5 = {
    mixins: [mpMixin, mixin, props$2],
    watch: {
      text: {
        immediate: true,
        handler(newValue, oldValue) {
          if (!uni.$u.test.array(newValue)) {
            uni.$u.error("noticebar组件direction为column时，要求text参数为数组形式");
          }
        }
      }
    },
    computed: {
      // 文字内容的样式
      textStyle() {
        let style = {};
        style.color = this.color;
        style.fontSize = uni.$u.addUnit(this.fontSize);
        return style;
      },
      // 垂直或者水平滚动
      vertical() {
        if (this.mode == "horizontal")
          return false;
        else
          return true;
      }
    },
    data() {
      return {
        index: 0
      };
    },
    methods: {
      noticeChange(e) {
        this.index = e.detail.current;
      },
      // 点击通告栏
      clickHandler() {
        this.$emit("click", this.index);
      },
      // 点击关闭按钮
      close() {
        this.$emit("close");
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-notice",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "icon", {}, () => [
        _ctx.icon ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-notice__left-icon"
        }, [
          vue.createVNode(_component_u_icon, {
            name: _ctx.icon,
            color: _ctx.color,
            size: "19"
          }, null, 8, ["name", "color"])
        ])) : vue.createCommentVNode("v-if", true)
      ], true),
      vue.createElementVNode("swiper", {
        "disable-touch": _ctx.disableTouch,
        vertical: _ctx.step ? false : true,
        circular: "",
        interval: _ctx.duration,
        autoplay: true,
        class: "u-notice__swiper",
        onChange: _cache[0] || (_cache[0] = (...args) => $options.noticeChange && $options.noticeChange(...args))
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(_ctx.text, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", {
              key: index2,
              class: "u-notice__swiper__item"
            }, [
              vue.createElementVNode(
                "text",
                {
                  class: "u-notice__swiper__item__text u-line-1",
                  style: vue.normalizeStyle([$options.textStyle])
                },
                vue.toDisplayString(item),
                5
                /* TEXT, STYLE */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 40, ["disable-touch", "vertical", "interval"]),
      ["link", "closable"].includes(_ctx.mode) ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "u-notice__right-icon"
      }, [
        _ctx.mode === "link" ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
          key: 0,
          name: "arrow-right",
          size: 17,
          color: _ctx.color
        }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true),
        _ctx.mode === "closable" ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
          key: 1,
          name: "close",
          size: 16,
          color: _ctx.color,
          onClick: $options.close
        }, null, 8, ["color", "onClick"])) : vue.createCommentVNode("v-if", true)
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$2], ["__scopeId", "data-v-6c9dce4e"], ["__file", "D:/prgraming/myproject/ihome/node_modules/uview-plus/components/u-column-notice/u-column-notice.vue"]]);
  const props$1 = {
    props: {
      // 显示的内容，字符串
      text: {
        type: String,
        default: props$a.rowNotice.text
      },
      // 是否显示左侧的音量图标
      icon: {
        type: String,
        default: props$a.rowNotice.icon
      },
      // 通告模式，link-显示右箭头，closable-显示右侧关闭图标
      mode: {
        type: String,
        default: props$a.rowNotice.mode
      },
      // 文字颜色，各图标也会使用文字颜色
      color: {
        type: String,
        default: props$a.rowNotice.color
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: props$a.rowNotice.bgColor
      },
      // 字体大小，单位px
      fontSize: {
        type: [String, Number],
        default: props$a.rowNotice.fontSize
      },
      // 水平滚动时的滚动速度，即每秒滚动多少px(rpx)，这有利于控制文字无论多少时，都能有一个恒定的速度
      speed: {
        type: [String, Number],
        default: props$a.rowNotice.speed
      }
    }
  };
  const _sfc_main$4 = {
    name: "u-row-notice",
    mixins: [mpMixin, mixin, props$1],
    data() {
      return {
        animationDuration: "0",
        // 动画执行时间
        animationPlayState: "paused",
        // 动画的开始和结束执行
        // nvue下，内容发生变化，导致滚动宽度也变化，需要标志为是否需要重新计算宽度
        // 不能在内容变化时直接重新计算，因为nvue的animation模块上一次的滚动不是刚好结束，会有影响
        nvueInit: true,
        show: true
      };
    },
    watch: {
      text: {
        immediate: true,
        handler(newValue, oldValue) {
          this.vue();
          if (!uni.$u.test.string(newValue)) {
            uni.$u.error("noticebar组件direction为row时，要求text参数为字符串形式");
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
      // 文字内容的样式
      textStyle() {
        let style = {};
        style.color = this.color;
        style.fontSize = uni.$u.addUnit(this.fontSize);
        return style;
      },
      animationStyle() {
        let style = {};
        style.animationDuration = this.animationDuration;
        style.animationPlayState = this.animationPlayState;
        return style;
      },
      // 内部对用户传入的数据进一步分割，放到多个text标签循环，否则如果用户传入的字符串很长（100个字符以上）
      // 放在一个text标签中进行滚动，在低端安卓机上，动画可能会出现抖动现象，需要分割到多个text中可解决此问题
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
      var pages2 = getCurrentPages();
      var page2 = pages2[pages2.length - 1];
      var currentWebview = page2.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
      this.init();
    },
    methods: {
      init() {
        this.vue();
        if (!uni.$u.test.string(this.text)) {
          uni.$u.error("noticebar组件direction为row时，要求text参数为字符串形式");
        }
      },
      // vue版处理
      async vue() {
        let textWidth = 0;
        await uni.$u.sleep();
        textWidth = (await this.$uGetRect(".u-notice__content__text")).width;
        (await this.$uGetRect(".u-notice__content")).width;
        this.animationDuration = `${textWidth / uni.$u.getPx(this.speed)}s`;
        this.animationPlayState = "paused";
        setTimeout(() => {
          this.animationPlayState = "running";
        }, 10);
      },
      // nvue版处理
      async nvue() {
      },
      loopAnimation(textWidth, boxWidth) {
      },
      getNvueRect(el) {
      },
      // 点击通告栏
      clickHandler(index2) {
        this.$emit("click");
      },
      // 点击右侧按钮，需要判断点击的是关闭图标还是箭头图标
      close() {
        this.$emit("close");
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-notice",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "icon", {}, () => [
        _ctx.icon ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-notice__left-icon"
        }, [
          vue.createVNode(_component_u_icon, {
            name: _ctx.icon,
            color: _ctx.color,
            size: "19"
          }, null, 8, ["name", "color"])
        ])) : vue.createCommentVNode("v-if", true)
      ], true),
      vue.createElementVNode(
        "view",
        {
          class: "u-notice__content",
          ref: "u-notice__content"
        },
        [
          vue.createElementVNode(
            "view",
            {
              ref: "u-notice__content__text",
              class: "u-notice__content__text",
              style: vue.normalizeStyle([$options.animationStyle])
            },
            [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($options.innerText, (item, index2) => {
                  return vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: index2,
                      style: vue.normalizeStyle([$options.textStyle])
                    },
                    vue.toDisplayString(item),
                    5
                    /* TEXT, STYLE */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            4
            /* STYLE */
          )
        ],
        512
        /* NEED_PATCH */
      ),
      ["link", "closable"].includes(_ctx.mode) ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "u-notice__right-icon"
      }, [
        _ctx.mode === "link" ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
          key: 0,
          name: "arrow-right",
          size: 17,
          color: _ctx.color
        }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true),
        _ctx.mode === "closable" ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
          key: 1,
          onClick: $options.close,
          name: "close",
          size: 16,
          color: _ctx.color
        }, null, 8, ["onClick", "color"])) : vue.createCommentVNode("v-if", true)
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$1], ["__scopeId", "data-v-462e724c"], ["__file", "D:/prgraming/myproject/ihome/node_modules/uview-plus/components/u-row-notice/u-row-notice.vue"]]);
  const props = {
    props: {
      // 显示的内容，数组
      text: {
        type: [Array, String],
        default: props$a.noticeBar.text
      },
      // 通告滚动模式，row-横向滚动，column-竖向滚动
      direction: {
        type: String,
        default: props$a.noticeBar.direction
      },
      // direction = row时，是否使用步进形式滚动
      step: {
        type: Boolean,
        default: props$a.noticeBar.step
      },
      // 是否显示左侧的音量图标
      icon: {
        type: String,
        default: props$a.noticeBar.icon
      },
      // 通告模式，link-显示右箭头，closable-显示右侧关闭图标
      mode: {
        type: String,
        default: props$a.noticeBar.mode
      },
      // 文字颜色，各图标也会使用文字颜色
      color: {
        type: String,
        default: props$a.noticeBar.color
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: props$a.noticeBar.bgColor
      },
      // 水平滚动时的滚动速度，即每秒滚动多少px(px)，这有利于控制文字无论多少时，都能有一个恒定的速度
      speed: {
        type: [String, Number],
        default: props$a.noticeBar.speed
      },
      // 字体大小
      fontSize: {
        type: [String, Number],
        default: props$a.noticeBar.fontSize
      },
      // 滚动一个周期的时间长，单位ms
      duration: {
        type: [String, Number],
        default: props$a.noticeBar.duration
      },
      // 是否禁止用手滑动切换
      // 目前HX2.6.11，只支持App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序
      disableTouch: {
        type: Boolean,
        default: props$a.noticeBar.disableTouch
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: props$a.noticeBar.url
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: props$a.noticeBar.linkType
      }
    }
  };
  const _sfc_main$3 = {
    name: "u-notice-bar",
    mixins: [mpMixin, mixin, props],
    data() {
      return {
        show: true
      };
    },
    methods: {
      // 点击通告栏
      click(index2) {
        this.$emit("click", index2);
        if (this.url && this.linkType) {
          this.openPage();
        }
      },
      // 点击关闭按钮
      close() {
        this.show = false;
        this.$emit("close");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_column_notice = resolveEasycom(vue.resolveDynamicComponent("u-column-notice"), __easycom_0$1);
    const _component_u_row_notice = resolveEasycom(vue.resolveDynamicComponent("u-row-notice"), __easycom_1);
    return $data.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: "u-notice-bar",
        style: vue.normalizeStyle([{
          backgroundColor: _ctx.bgColor
        }, _ctx.$u.addStyle(_ctx.customStyle)])
      },
      [
        _ctx.direction === "column" || _ctx.direction === "row" && _ctx.step ? (vue.openBlock(), vue.createBlock(_component_u_column_notice, {
          key: 0,
          color: _ctx.color,
          bgColor: _ctx.bgColor,
          text: _ctx.text,
          mode: _ctx.mode,
          step: _ctx.step,
          icon: _ctx.icon,
          "disable-touch": _ctx.disableTouch,
          fontSize: _ctx.fontSize,
          duration: _ctx.duration,
          onClose: $options.close,
          onClick: $options.click
        }, null, 8, ["color", "bgColor", "text", "mode", "step", "icon", "disable-touch", "fontSize", "duration", "onClose", "onClick"])) : (vue.openBlock(), vue.createBlock(_component_u_row_notice, {
          key: 1,
          color: _ctx.color,
          bgColor: _ctx.bgColor,
          text: _ctx.text,
          mode: _ctx.mode,
          fontSize: _ctx.fontSize,
          speed: _ctx.speed,
          url: _ctx.url,
          linkType: _ctx.linkType,
          icon: _ctx.icon,
          onClose: $options.close,
          onClick: $options.click
        }, null, 8, ["color", "bgColor", "text", "mode", "fontSize", "speed", "url", "linkType", "icon", "onClose", "onClick"]))
      ],
      4
      /* STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render], ["__scopeId", "data-v-63dbbc8e"], ["__file", "D:/prgraming/myproject/ihome/node_modules/uview-plus/components/u-notice-bar/u-notice-bar.vue"]]);
  const _sfc_main$2 = {
    __name: "testLogin",
    setup(__props) {
      const store2 = useStore();
      function login() {
        uni.$u.http.post("http://43.140.203.85:8102/user/login", {
          loginName: "test",
          password: "a1915f03b38bf54926700dfc9ea699f8"
        }).then((res) => {
          formatAppLog("log", "at pages/subpages/login/testLogin.vue:27", res);
          if (res) {
            formatAppLog("log", "at pages/subpages/login/testLogin.vue:29", "登录成功");
          } else {
            uni.showToast({
              icon: "none",
              title: "登录失败",
              // 如果msg不存在，就显示请求失败
              duration: 2e3
            });
          }
          store2.commit("storeLogin", res.data.content);
          uni.reLaunch({
            url: "/pages/main/main"
          });
        }).catch((err) => {
          uni.showToast({
            icon: "none",
            title: "请求失败",
            // 如果msg不存在，就显示请求失败
            duration: 2e3
          });
        });
      }
      function logout() {
        store2.commit("storeLogout");
        formatAppLog("log", "at pages/subpages/login/testLogin.vue:53", "成功退出登录");
        uni.reLaunch({
          url: "/pages/main/main"
        });
      }
      const text1 = vue.ref("uview-plus UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用");
      return (_ctx, _cache) => {
        const _component_u_notice_bar = resolveEasycom(vue.resolveDynamicComponent("u-notice-bar"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "view",
              null,
              " 测试登录状态：" + vue.toDisplayString(_ctx.$store.state.userInfo),
              1
              /* TEXT */
            ),
            vue.createElementVNode("button", { onClick: login }, " 点击提交登录 "),
            vue.createElementVNode("button", { onClick: logout }, " 点击退出登录 "),
            vue.createCommentVNode(" uview-plus组件使用 "),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_u_notice_bar, { text: text1.value }, null, 8, ["text"])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesSubpagesLoginTestLogin = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "D:/prgraming/myproject/ihome/pages/subpages/login/testLogin.vue"]]);
  const _sfc_main$1 = {
    __name: "login",
    setup(__props) {
      const store2 = useStore();
      vue.reactive([]);
      const account = vue.ref("");
      const password = vue.ref("");
      function bindLogin() {
        const userAccount = account.value.trim();
        password.value.trim();
        if (!userAccount.length) {
          alert2("请输入账号");
          formatAppLog("log", "at pages/subpages/login/login.vue:117", "请输入账号");
          return false;
        }
        if (password.length < 6) {
          alert2("密码最短为 6 个字符");
          formatAppLog("log", "at pages/subpages/login/login.vue:127", "密码最短为 6 个字符");
          return false;
        }
        uni.showLoading({
          title: "登录中"
        });
        formatAppLog("log", "at pages/subpages/login/login.vue:136", account.value + "," + password.value);
        uni.$u.http.post("http://43.140.203.85:8102/user/login", {
          loginName: account.value,
          password: password.value
          // loginName: 'test',
          // password: 'a1915f03b38bf54926700dfc9ea699f8'
        }).then((res) => {
          formatAppLog("log", "at pages/subpages/login/login.vue:143", res);
          if (res) {
            formatAppLog("log", "at pages/subpages/login/login.vue:145", "登录成功");
          } else {
            uni.showToast({
              icon: "none",
              title: "登录失败",
              // 如果msg不存在，就显示请求失败
              duration: 2e3
            });
          }
          store2.commit("storeLogin", res.data.content);
          uni.reLaunch({
            url: "/pages/index/index"
          });
        }).catch((err) => {
          uni.showToast({
            icon: "none",
            title: "请求失败",
            // 如果msg不存在，就显示请求失败
            duration: 2e3
          });
          formatAppLog("log", "at pages/subpages/login/login.vue:164", err);
        });
        uni.hideLoading();
      }
      function alert2(msg) {
        uni.showToast({
          icon: "none",
          title: msg
        });
      }
      function tip() {
        uni.showToast({
          icon: "none",
          title: "服务尚未完善"
        });
      }
      return (_ctx, _cache) => {
        const _component_u_avatar = resolveEasycom(vue.resolveDynamicComponent("u-avatar"), __easycom_0$4);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", { class: "profileView" }, [
            vue.createVNode(_component_u_avatar, {
              shape: "circle",
              size: "150"
            })
          ]),
          vue.createElementVNode("view", { class: "login-form" }, [
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                class: "input-row js-input-numer",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => account.value = $event),
                maxlength: "20",
                placeholder: "输入账号"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, account.value]
            ]),
            vue.createCommentVNode(' <input class="input-row js-input-numer" v-model="account" type="number" maxlength="11" placeholder="输入手机号"/> '),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                class: "input-row",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => password.value = $event),
                onConfirm: bindLogin,
                type: "password",
                maxlength: "32",
                placeholder: "输入密码",
                "confirm-type": "登录"
              },
              null,
              544
              /* HYDRATE_EVENTS, NEED_PATCH */
            ), [
              [vue.vModelText, password.value]
            ]),
            vue.createElementVNode("button", {
              type: "button",
              class: "login-btn",
              onClick: bindLogin
            }, "登录"),
            vue.createElementVNode("view", { class: "bot" }, [
              vue.createCommentVNode(" 待接口完成后完善 "),
              vue.createElementVNode("view", {
                class: "forget",
                "hover-class": "none",
                onClick: tip
              }, " 忘记密码? "),
              vue.createElementVNode("view", {
                class: "sign",
                "hover-class": "none",
                onClick: tip
              }, " 立即注册 ")
            ])
          ]),
          vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const PagesSubpagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "D:/prgraming/myproject/ihome/pages/subpages/login/login.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/VR/VR", PagesVRVR);
  __definePage("components/scan/scanReturn", ComponentsScanScanReturn);
  __definePage("pages/news/news", PagesNewsNews);
  __definePage("pages/main/main", PagesMainMain);
  __definePage("pages/subpages/login/testLogin", PagesSubpagesLoginTestLogin);
  __definePage("pages/subpages/login/login", PagesSubpagesLoginLogin);
  useStore();
  const _sfc_main = {
    onLaunch: function() {
      uni.hideTabBar();
      uni.getStorage({
        key: "userInfo",
        success: (res) => {
          formatAppLog("log", "at App.vue:11", JSON.parse(res.data));
          this.$store.commit("storeLogin", JSON.parse(res.data));
        },
        fail: (err) => {
          formatAppLog("log", "at App.vue:15", err);
          this.$store.commit("storeLogout");
        }
      });
    },
    onShow: function() {
    },
    onHide: function() {
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/prgraming/myproject/ihome/App.vue"]]);
  const store = createStore({
    state: {
      // 用户信息
      userInfo: {
        isLogin: false,
        //是否登录状态
        id: "",
        // profile: '',//用户头像信息
        loginName: "",
        name: "",
        token: ""
      }
    },
    mutations: {
      //定义操作isLogin状态的方法
      storeLogin(state, res) {
        const temp = {
          isLogin: true,
          id: res.id,
          loginName: res.loginName,
          name: res.name,
          token: res.token
        };
        state.userInfo = Object.assign({}, state.userInfo, temp);
        uni.setStorageSync("userInfo", JSON.stringify(state.userInfo));
      },
      storeLogout(state) {
        const temp = {
          isLogin: false,
          id: "",
          loginName: "",
          name: "",
          token: ""
        };
        state.userInfo = Object.assign({}, state.userInfo, temp);
        uni.removeStorageSync("userInfo");
      }
    }
  });
  const { toString } = Object.prototype;
  function isArray(val) {
    return toString.call(val) === "[object Array]";
  }
  function isObject(val) {
    return val !== null && typeof val === "object";
  }
  function isDate(val) {
    return toString.call(val) === "[object Date]";
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (let i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  function deepMerge$1() {
    const result = {};
    function assignValue(val, key) {
      if (typeof result[key] === "object" && typeof val === "object") {
        result[key] = deepMerge$1(result[key], val);
      } else if (typeof val === "object") {
        result[key] = deepMerge$1({}, val);
      } else {
        result[key] = val;
      }
    }
    for (let i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function encode(val) {
    return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url2, params) {
    if (!params) {
      return url2;
    }
    let serializedParams;
    if (isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      const parts = [];
      forEach(params, (val, key) => {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (isArray(val)) {
          key = `${key}[]`;
        } else {
          val = [val];
        }
        forEach(val, (v) => {
          if (isDate(v)) {
            v = v.toISOString();
          } else if (isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(`${encode(key)}=${encode(v)}`);
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      const hashmarkIndex = url2.indexOf("#");
      if (hashmarkIndex !== -1) {
        url2 = url2.slice(0, hashmarkIndex);
      }
      url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url2;
  }
  function isAbsoluteURL(url2) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
  }
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? `${baseURL.replace(/\/+$/, "")}/${relativeURL.replace(/^\/+/, "")}` : baseURL;
  }
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  function settle(resolve, reject, response) {
    const { validateStatus } = response.config;
    const status = response.statusCode;
    if (status && (!validateStatus || validateStatus(status))) {
      resolve(response);
    } else {
      reject(response);
    }
  }
  const mergeKeys$1 = (keys, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      }
    });
    return config3;
  };
  const adapter = (config2) => new Promise((resolve, reject) => {
    const fullPath = buildURL(buildFullPath(config2.baseURL, config2.url), config2.params);
    const _config = {
      url: fullPath,
      header: config2.header,
      complete: (response) => {
        config2.fullPath = fullPath;
        response.config = config2;
        try {
          if (typeof response.data === "string") {
            response.data = JSON.parse(response.data);
          }
        } catch (e) {
        }
        settle(resolve, reject, response);
      }
    };
    let requestTask;
    if (config2.method === "UPLOAD") {
      delete _config.header["content-type"];
      delete _config.header["Content-Type"];
      const otherConfig = {
        filePath: config2.filePath,
        name: config2.name
      };
      const optionalKeys = [
        "files",
        "timeout",
        "formData"
      ];
      requestTask = uni.uploadFile({ ..._config, ...otherConfig, ...mergeKeys$1(optionalKeys, config2) });
    } else if (config2.method === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        _config.timeout = config2.timeout;
      }
      requestTask = uni.downloadFile(_config);
    } else {
      const optionalKeys = [
        "data",
        "method",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      requestTask = uni.request({ ..._config, ...mergeKeys$1(optionalKeys, config2) });
    }
    if (config2.getTask) {
      config2.getTask(requestTask, config2);
    }
  });
  const dispatchRequest = (config2) => adapter(config2);
  function InterceptorManager() {
    this.handlers = [];
  }
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    });
    return this.handlers.length - 1;
  };
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager.prototype.forEach = function forEach2(fn) {
    this.handlers.forEach((h) => {
      if (h !== null) {
        fn(h);
      }
    });
  };
  const mergeKeys = (keys, globalsConfig, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      } else if (!isUndefined(globalsConfig[prop])) {
        config3[prop] = globalsConfig[prop];
      }
    });
    return config3;
  };
  const mergeConfig = (globalsConfig, config2 = {}) => {
    const method = config2.method || globalsConfig.method || "GET";
    let config3 = {
      baseURL: globalsConfig.baseURL || "",
      method,
      url: config2.url || "",
      params: config2.params || {},
      custom: { ...globalsConfig.custom || {}, ...config2.custom || {} },
      header: deepMerge$1(globalsConfig.header || {}, config2.header || {})
    };
    const defaultToConfig2Keys = ["getTask", "validateStatus"];
    config3 = { ...config3, ...mergeKeys(defaultToConfig2Keys, globalsConfig, config2) };
    if (method === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        config3.timeout = config2.timeout;
      } else if (!isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else if (method === "UPLOAD") {
      delete config3.header["content-type"];
      delete config3.header["Content-Type"];
      const uploadKeys = [
        "files",
        "filePath",
        "name",
        "timeout",
        "formData"
      ];
      uploadKeys.forEach((prop) => {
        if (!isUndefined(config2[prop])) {
          config3[prop] = config2[prop];
        }
      });
      if (isUndefined(config3.timeout) && !isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else {
      const defaultsKeys = [
        "data",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      config3 = { ...config3, ...mergeKeys(defaultsKeys, globalsConfig, config2) };
    }
    return config3;
  };
  const defaults = {
    baseURL: "",
    header: {},
    method: "GET",
    dataType: "json",
    responseType: "text",
    custom: {},
    timeout: 6e4,
    sslVerify: true,
    firstIpv4: false,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  var clone = function() {
    function _instanceof(obj, type) {
      return type != null && obj instanceof type;
    }
    var nativeMap;
    try {
      nativeMap = Map;
    } catch (_) {
      nativeMap = function() {
      };
    }
    var nativeSet;
    try {
      nativeSet = Set;
    } catch (_) {
      nativeSet = function() {
      };
    }
    var nativePromise;
    try {
      nativePromise = Promise;
    } catch (_) {
      nativePromise = function() {
      };
    }
    function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
      if (typeof circular === "object") {
        depth = circular.depth;
        prototype = circular.prototype;
        includeNonEnumerable = circular.includeNonEnumerable;
        circular = circular.circular;
      }
      var allParents = [];
      var allChildren = [];
      var useBuffer = typeof Buffer != "undefined";
      if (typeof circular == "undefined")
        circular = true;
      if (typeof depth == "undefined")
        depth = Infinity;
      function _clone(parent2, depth2) {
        if (parent2 === null)
          return null;
        if (depth2 === 0)
          return parent2;
        var child;
        var proto;
        if (typeof parent2 != "object") {
          return parent2;
        }
        if (_instanceof(parent2, nativeMap)) {
          child = new nativeMap();
        } else if (_instanceof(parent2, nativeSet)) {
          child = new nativeSet();
        } else if (_instanceof(parent2, nativePromise)) {
          child = new nativePromise(function(resolve, reject) {
            parent2.then(function(value2) {
              resolve(_clone(value2, depth2 - 1));
            }, function(err) {
              reject(_clone(err, depth2 - 1));
            });
          });
        } else if (clone2.__isArray(parent2)) {
          child = [];
        } else if (clone2.__isRegExp(parent2)) {
          child = new RegExp(parent2.source, __getRegExpFlags(parent2));
          if (parent2.lastIndex)
            child.lastIndex = parent2.lastIndex;
        } else if (clone2.__isDate(parent2)) {
          child = new Date(parent2.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent2)) {
          if (Buffer.from) {
            child = Buffer.from(parent2);
          } else {
            child = new Buffer(parent2.length);
            parent2.copy(child);
          }
          return child;
        } else if (_instanceof(parent2, Error)) {
          child = Object.create(parent2);
        } else {
          if (typeof prototype == "undefined") {
            proto = Object.getPrototypeOf(parent2);
            child = Object.create(proto);
          } else {
            child = Object.create(prototype);
            proto = prototype;
          }
        }
        if (circular) {
          var index2 = allParents.indexOf(parent2);
          if (index2 != -1) {
            return allChildren[index2];
          }
          allParents.push(parent2);
          allChildren.push(child);
        }
        if (_instanceof(parent2, nativeMap)) {
          parent2.forEach(function(value2, key) {
            var keyChild = _clone(key, depth2 - 1);
            var valueChild = _clone(value2, depth2 - 1);
            child.set(keyChild, valueChild);
          });
        }
        if (_instanceof(parent2, nativeSet)) {
          parent2.forEach(function(value2) {
            var entryChild = _clone(value2, depth2 - 1);
            child.add(entryChild);
          });
        }
        for (var i in parent2) {
          var attrs = Object.getOwnPropertyDescriptor(parent2, i);
          if (attrs) {
            child[i] = _clone(parent2[i], depth2 - 1);
          }
          try {
            var objProperty = Object.getOwnPropertyDescriptor(parent2, i);
            if (objProperty.set === "undefined") {
              continue;
            }
            child[i] = _clone(parent2[i], depth2 - 1);
          } catch (e) {
            if (e instanceof TypeError) {
              continue;
            } else if (e instanceof ReferenceError) {
              continue;
            }
          }
        }
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(parent2);
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
            if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
              continue;
            }
            child[symbol] = _clone(parent2[symbol], depth2 - 1);
            Object.defineProperty(child, symbol, descriptor);
          }
        }
        if (includeNonEnumerable) {
          var allPropertyNames = Object.getOwnPropertyNames(parent2);
          for (var i = 0; i < allPropertyNames.length; i++) {
            var propertyName = allPropertyNames[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
            if (descriptor && descriptor.enumerable) {
              continue;
            }
            child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
            Object.defineProperty(child, propertyName, descriptor);
          }
        }
        return child;
      }
      return _clone(parent, depth);
    }
    clone2.clonePrototype = function clonePrototype(parent) {
      if (parent === null)
        return null;
      var c = function() {
      };
      c.prototype = parent;
      return new c();
    };
    function __objToStr(o) {
      return Object.prototype.toString.call(o);
    }
    clone2.__objToStr = __objToStr;
    function __isDate(o) {
      return typeof o === "object" && __objToStr(o) === "[object Date]";
    }
    clone2.__isDate = __isDate;
    function __isArray(o) {
      return typeof o === "object" && __objToStr(o) === "[object Array]";
    }
    clone2.__isArray = __isArray;
    function __isRegExp(o) {
      return typeof o === "object" && __objToStr(o) === "[object RegExp]";
    }
    clone2.__isRegExp = __isRegExp;
    function __getRegExpFlags(re) {
      var flags = "";
      if (re.global)
        flags += "g";
      if (re.ignoreCase)
        flags += "i";
      if (re.multiline)
        flags += "m";
      return flags;
    }
    clone2.__getRegExpFlags = __getRegExpFlags;
    return clone2;
  }();
  class Request {
    /**
    * @param {Object} arg - 全局配置
    * @param {String} arg.baseURL - 全局根路径
    * @param {Object} arg.header - 全局header
    * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
    * @param {String} arg.dataType = [json] - 全局默认的dataType
    * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。支付宝小程序不支持
    * @param {Object} arg.custom - 全局默认的自定义参数
    * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认60000。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
    * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
    * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
    * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
    * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
    */
    constructor(arg = {}) {
      if (!isPlainObject(arg)) {
        arg = {};
        formatAppLog("warn", "at node_modules/uview-plus/libs/luch-request/core/Request.js:39", "设置全局参数必须接收一个Object");
      }
      this.config = clone({ ...defaults, ...arg });
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    /**
    * @Function
    * @param {Request~setConfigCallback} f - 设置全局默认配置
    */
    setConfig(f) {
      this.config = f(this.config);
    }
    middleware(config2) {
      config2 = mergeConfig(this.config, config2);
      const chain = [dispatchRequest, void 0];
      let promise2 = Promise.resolve(config2);
      this.interceptors.request.forEach((interceptor) => {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      this.interceptors.response.forEach((interceptor) => {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
      while (chain.length) {
        promise2 = promise2.then(chain.shift(), chain.shift());
      }
      return promise2;
    }
    /**
    * @Function
    * @param {Object} config - 请求配置项
    * @prop {String} options.url - 请求路径
    * @prop {Object} options.data - 请求参数
    * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
    * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
    * @prop {Object} [options.header = config.header] - 请求header
    * @prop {Object} [options.method = config.method] - 请求方法
    * @returns {Promise<unknown>}
    */
    request(config2 = {}) {
      return this.middleware(config2);
    }
    get(url2, options = {}) {
      return this.middleware({
        url: url2,
        method: "GET",
        ...options
      });
    }
    post(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "POST",
        ...options
      });
    }
    put(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "PUT",
        ...options
      });
    }
    delete(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "DELETE",
        ...options
      });
    }
    options(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "OPTIONS",
        ...options
      });
    }
    upload(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "UPLOAD";
      return this.middleware(config2);
    }
    download(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "DOWNLOAD";
      return this.middleware(config2);
    }
  }
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        // navigateBack页面后退时,回退的层数
        params: {},
        // 传递的参数
        animationType: "pop-in",
        // 窗口动画,只在APP有效
        animationDuration: 300,
        // 窗口动画持续时间,单位毫秒,只在APP有效
        intercept: false
        // 是否需要拦截
      };
      this.route = this.route.bind(this);
    }
    // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    // 整合路由参数
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = uni.$u.queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = uni.$u.queryParams(params);
      return url2 += query;
    }
    // 对外的方法名称
    async route(options = {}, params = {}) {
      let mergeConfig2 = {};
      if (typeof options === "string") {
        mergeConfig2.url = this.mixinParam(options, params);
        mergeConfig2.type = "navigateTo";
      } else {
        mergeConfig2 = uni.$u.deepMerge(options, this.config);
        mergeConfig2.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig2.url === uni.$u.page())
        return;
      if (params.intercept) {
        this.config.intercept = params.intercept;
      }
      mergeConfig2.params = params;
      mergeConfig2 = uni.$u.deepMerge(this.config, mergeConfig2);
      if (typeof uni.$u.routeIntercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          uni.$u.routeIntercept(mergeConfig2, resolve);
        });
        isNext && this.openPage(mergeConfig2);
      } else {
        this.openPage(mergeConfig2);
      }
    }
    // 执行路由跳转
    openPage(config2) {
      const {
        url: url2,
        type,
        delta,
        animationType,
        animationDuration
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  const route = new Router().route;
  function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    const startRGB = hexToRgb(startColor, false);
    const startR = startRGB[0];
    const startG = startRGB[1];
    const startB = startRGB[2];
    const endRGB = hexToRgb(endColor, false);
    const endR = endRGB[0];
    const endG = endRGB[1];
    const endB = endRGB[2];
    const sR = (endR - startR) / step;
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr = [];
    for (let i = 0; i < step; i++) {
      let hex = rgbToHex(`rgb(${Math.round(sR * i + startR)},${Math.round(sG * i + startG)},${Math.round(sB * i + startB)})`);
      if (i === 0)
        hex = rgbToHex(startColor);
      if (i === step - 1)
        hex = rgbToHex(endColor);
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = String(sColor).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      if (!str) {
        return sColorChange;
      }
      return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
    }
    if (/^(rgb|RGB)/.test(sColor)) {
      const arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      return arr.map((val) => Number(val));
    }
    return sColor;
  }
  function rgbToHex(rgb) {
    const _this = rgb;
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      const aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
        hex = String(hex).length == 1 ? `${0}${hex}` : hex;
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    }
    if (reg.test(_this)) {
      const aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      }
      if (aNum.length === 3) {
        let numHex = "#";
        for (let i = 0; i < aNum.length; i += 1) {
          numHex += aNum[i] + aNum[i];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }
  function colorToRgba(color2, alpha) {
    color2 = rgbToHex(color2);
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = String(color2).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      return `rgba(${sColorChange.join(",")},${alpha})`;
    }
    return sColor;
  }
  const colorGradient$1 = {
    colorGradient,
    hexToRgb,
    rgbToHex,
    colorToRgba
  };
  function email(value2) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value2);
  }
  function mobile(value2) {
    return /^1[23456789]\d{9}$/.test(value2);
  }
  function url(value2) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value2);
  }
  function date(value2) {
    if (!value2)
      return false;
    if (number(value2))
      value2 = +value2;
    return !/Invalid|NaN/.test(new Date(value2).toString());
  }
  function dateISO(value2) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value2);
  }
  function number(value2) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value2);
  }
  function string(value2) {
    return typeof value2 === "string";
  }
  function digits(value2) {
    return /^\d+$/.test(value2);
  }
  function idCard(value2) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value2
    );
  }
  function carNo(value2) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value2.length === 7) {
      return creg.test(value2);
    }
    if (value2.length === 8) {
      return xreg.test(value2);
    }
    return false;
  }
  function amount(value2) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value2);
  }
  function chinese(value2) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value2);
  }
  function letter(value2) {
    return /^[a-zA-Z]*$/.test(value2);
  }
  function enOrNum(value2) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value2);
  }
  function contains(value2, param) {
    return value2.indexOf(param) >= 0;
  }
  function range$1(value2, param) {
    return value2 >= param[0] && value2 <= param[1];
  }
  function rangeLength(value2, param) {
    return value2.length >= param[0] && value2.length <= param[1];
  }
  function landline(value2) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value2);
  }
  function empty(value2) {
    switch (typeof value2) {
      case "undefined":
        return true;
      case "string":
        if (value2.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value2)
          return true;
        break;
      case "number":
        if (value2 === 0 || isNaN(value2))
          return true;
        break;
      case "object":
        if (value2 === null || value2.length === 0)
          return true;
        for (const i in value2) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value2) {
    if (typeof value2 === "string") {
      try {
        const obj = JSON.parse(value2);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value2) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value2);
    }
    return Object.prototype.toString.call(value2) === "[object Array]";
  }
  function object(value2) {
    return Object.prototype.toString.call(value2) === "[object Object]";
  }
  function code(value2, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value2);
  }
  function func(value2) {
    return typeof value2 === "function";
  }
  function promise(value2) {
    return object(value2) && func(value2.then) && func(value2.catch);
  }
  function image(value2) {
    const newValue = value2.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value2) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value2);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  const test = {
    email,
    mobile,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range: range$1,
    rangeLength,
    empty,
    isEmpty: empty,
    jsonString,
    landline,
    object,
    array,
    code,
    func,
    promise,
    video,
    image,
    regExp,
    string
  };
  let timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  let flag;
  function throttle(func2, wait = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at node_modules/uview-plus/libs/function/digit.js:45", `${num} 超出了精度限制，结果可能不正确`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  function range(min = 0, max = 0, value2 = 0) {
    return Math.max(min, Math.min(max, Number(value2)));
  }
  function getPx(value2, unit = false) {
    if (test.number(value2)) {
      return unit ? `${value2}px` : Number(value2);
    }
    if (/(rpx|upx)$/.test(value2)) {
      return unit ? `${uni.upx2px(parseInt(value2))}px` : Number(uni.upx2px(parseInt(value2)));
    }
    return unit ? `${parseInt(value2)}px` : parseInt(value2);
  }
  function sleep(value2 = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value2);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (test.empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item = styleArray[i].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    for (const i in customStyle) {
      const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
      string2 += `${key}:${customStyle[i]};`;
    }
    return trim(string2);
  }
  function addUnit(value2 = "auto", unit = "") {
    if (!unit) {
      unit = uni.$u.config.unit || "px";
    }
    value2 = String(value2);
    return test.number(value2) ? `${value2}${unit}` : value2;
  }
  function deepClone(obj) {
    if ([null, void 0, NaN, false].includes(obj))
      return obj;
    if (typeof obj !== "object" && typeof obj !== "function") {
      return obj;
    }
    const o = test.array(obj) ? [] : {};
    for (const i in obj) {
      if (obj.hasOwnProperty(i)) {
        o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
      }
    }
    return o;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else if (typeof source[prop] !== "object") {
          target[prop] = source[prop];
        } else if (target[prop].concat && source[prop].concat) {
          target[prop] = target[prop].concat(source[prop]);
        } else {
          target[prop] = deepMerge(target[prop], source[prop]);
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function error(err) {
    {
      formatAppLog("error", "at node_modules/uview-plus/libs/function/index.js:238", `uView提示：${err}`);
    }
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError(
          "fillString must be String"
        );
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date2;
    if (!dateTime) {
      date2 = new Date();
    } else if (/^\d{10}$/.test(dateTime.toString().trim())) {
      date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date2 = new Date(Number(dateTime));
    } else {
      date2 = new Date(
        typeof dateTime === "string" ? dateTime.replace(/-/g, "/") : dateTime
      );
    }
    const timeSource = {
      "y": date2.getFullYear().toString(),
      // 年
      "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
      // 月
      "d": date2.getDate().toString().padStart(2, "0"),
      // 日
      "h": date2.getHours().toString().padStart(2, "0"),
      // 时
      "M": date2.getMinutes().toString().padStart(2, "0"),
      // 分
      "s": date2.getSeconds().toString().padStart(2, "0")
      // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = new Date().getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "刚刚";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}分钟前`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}小时前`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}天前`;
        break;
      default:
        if (format === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}个月前`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}年前`;
          }
        } else {
          tips = timeFormat(timestamp, format);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value2 = data[key];
      if (["", void 0, null].indexOf(value2) >= 0) {
        continue;
      }
      if (value2.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i = 0; i < value2.length; i++) {
              _result.push(`${key}[${i}]=${value2[i]}`);
            }
            break;
          case "brackets":
            value2.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value2.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value2.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value2.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value2}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1)
      type = "success";
    let iconName = "";
    switch (type) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
    const n = !isFinite(+number2) ? 0 : +number2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s = "";
    s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, `$1${sep}$2`);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
  function getDuration(value2, unit = true) {
    const valueNum = parseInt(value2);
    if (unit) {
      if (/s$/.test(value2))
        return value2;
      return value2 > 30 ? `${value2}ms` : `${value2}s`;
    }
    if (/ms$/.test(value2))
      return valueNum;
    if (/s$/.test(value2))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value2) {
    return `00${value2}`.slice(-2);
  }
  function formValidate(instance, event) {
    const formItem2 = uni.$u.$parent.call(instance, "u-form-item");
    const form2 = uni.$u.$parent.call(instance, "u-form");
    if (formItem2 && form2) {
      form2.validateField(formItem2.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (!obj) {
      return;
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i = 1; i < keys.length; i++) {
        if (firstObj) {
          firstObj = firstObj[keys[i]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value2) {
    if (!obj) {
      return;
    }
    const inFn = function(_obj, keys, v) {
      if (keys.length === 1) {
        _obj[keys[0]] = v;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value2);
    } else {
      obj[key] = value2;
    }
  }
  function page() {
    const pages2 = getCurrentPages();
    return `/${pages2[pages2.length - 1].route || ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  function setConfig({
    props: props2 = {},
    config: config2 = {},
    color: color2 = {},
    zIndex: zIndex2 = {}
  }) {
    const {
      deepMerge: deepMerge2
    } = uni.$u;
    uni.$u.config = deepMerge2(uni.$u.config, config2);
    uni.$u.props = deepMerge2(uni.$u.props, props2);
    uni.$u.color = deepMerge2(uni.$u.color, color2);
    uni.$u.zIndex = deepMerge2(uni.$u.zIndex, zIndex2);
  }
  const index = {
    range,
    getPx,
    sleep,
    os,
    sys,
    random,
    guid,
    $parent,
    addStyle,
    addUnit,
    deepClone,
    deepMerge,
    error,
    randomArray,
    timeFormat,
    timeFrom,
    trim,
    queryParams,
    toast,
    type2icon,
    priceFormat,
    getDuration,
    padZero,
    formValidate,
    getProperty,
    setProperty,
    page,
    pages,
    setConfig
  };
  const zIndex = {
    toast: 10090,
    noNetwork: 10080,
    // popup包含popup，actionsheet，keyboard，picker的值
    popup: 10075,
    mask: 10070,
    navbar: 980,
    topTips: 975,
    sticky: 970,
    indexListSticky: 965
  };
  let platform = "none";
  platform = "vue3";
  platform = "plus";
  const platform$1 = platform;
  const $u = {
    route,
    date: index.timeFormat,
    // 另名date
    colorGradient: colorGradient$1.colorGradient,
    hexToRgb: colorGradient$1.hexToRgb,
    rgbToHex: colorGradient$1.rgbToHex,
    colorToRgba: colorGradient$1.colorToRgba,
    test,
    type: ["primary", "success", "error", "warning", "info"],
    http: new Request(),
    config,
    // uView配置信息相关，比如版本号
    zIndex,
    debounce,
    throttle,
    mixin,
    mpMixin,
    props: props$a,
    ...index,
    color,
    platform: platform$1
  };
  uni.$u = $u;
  const install = (Vue2) => {
    Vue2.config.globalProperties.$u = $u;
    Vue2.config.globalProperties.$nextTick = (cb) => {
      cb();
    };
    Vue2.mixin(mixin);
  };
  const uviewPlus = {
    install
  };
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(store);
    app.use(uviewPlus);
    app.config.globalProperties.msg = "hello";
    uni.$u.config.unit = "rpx";
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
