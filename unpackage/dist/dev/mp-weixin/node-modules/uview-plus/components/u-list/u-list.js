"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-list",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$4],
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
      sys: common_vendor.index.$u.sys()
    };
  },
  computed: {
    listStyle() {
      const style = {}, addUnit = common_vendor.index.$u.addUnit;
      if (this.width != 0)
        style.width = addUnit(this.width);
      if (this.height != 0)
        style.height = addUnit(this.height);
      if (!style.height)
        style.height = addUnit(this.sys.windowHeight, "px");
      return common_vendor.index.$u.deepMerge(style, common_vendor.index.$u.addStyle(this.customStyle));
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
      common_vendor.index.$u.sleep(30).then(() => {
        this.$emit("scrolltolower");
      });
    },
    // 滚动到底部时触发，非nvue有效
    scrolltoupper(e) {
      common_vendor.index.$u.sleep(30).then(() => {
        this.$emit("scrolltoupper");
        this.offset = 0;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.scrollIntoView,
    b: common_vendor.s($options.listStyle),
    c: Number(_ctx.scrollTop),
    d: Number(_ctx.lowerThreshold),
    e: Number(_ctx.upperThreshold),
    f: _ctx.showScrollbar,
    g: _ctx.enableBackToTop,
    h: _ctx.scrollWithAnimation,
    i: common_vendor.o((...args) => $options.onScroll && $options.onScroll(...args)),
    j: common_vendor.o((...args) => $options.scrolltolower && $options.scrolltolower(...args)),
    k: common_vendor.o((...args) => $options.scrolltoupper && $options.scrolltoupper(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9ad03670"], ["__file", "D:/prgraming/myproject/ihome/node_modules/uview-plus/components/u-list/u-list.vue"]]);
wx.createComponent(Component);
