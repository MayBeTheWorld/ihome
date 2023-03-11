"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-list-item",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$3],
  data() {
    return {
      // 节点信息
      rect: {},
      index: 0,
      show: true,
      sys: common_vendor.index.$u.sys()
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: `u-list-item-${_ctx.anchor}`,
    b: `u-list-item-${_ctx.anchor}`,
    c: common_vendor.n(`u-list-item-${_ctx.anchor}`)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-32197ac9"], ["__file", "D:/prgraming/myproject/ihome/node_modules/uview-plus/components/u-list-item/u-list-item.vue"]]);
wx.createComponent(Component);
