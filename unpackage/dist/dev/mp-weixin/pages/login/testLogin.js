"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    login() {
      this.$store.commit("storeLogin", bool);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t(_ctx.$store.state.isLogin),
    b: common_vendor.o(($event) => $options.login(true)),
    c: common_vendor.o(($event) => _ctx.logout(false))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Projects/\u7231\u4F73\u88C5/pages/login/testLogin.vue"]]);
wx.createPage(MiniProgramPage);
