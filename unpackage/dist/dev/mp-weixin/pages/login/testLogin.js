"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_notice_bar2 = common_vendor.resolveComponent("u-notice-bar");
  _easycom_u_notice_bar2();
}
const _easycom_u_notice_bar = () => "../../node-modules/uview-plus/components/u-notice-bar/u-notice-bar.js";
if (!Math) {
  _easycom_u_notice_bar();
}
const _sfc_main = {
  __name: "testLogin",
  setup(__props) {
    const store = common_vendor.useStore();
    const login = (bool) => store.commit("storeLogin", bool);
    const text1 = common_vendor.ref("uview-plus UI\u4F17\u591A\u7EC4\u4EF6\u8986\u76D6\u5F00\u53D1\u8FC7\u7A0B\u7684\u5404\u4E2A\u9700\u6C42\uFF0C\u7EC4\u4EF6\u529F\u80FD\u4E30\u5BCC\uFF0C\u591A\u7AEF\u517C\u5BB9\u3002\u8BA9\u60A8\u5FEB\u901F\u96C6\u6210\uFF0C\u5F00\u7BB1\u5373\u7528");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(_ctx.$store.state.isLogin),
        b: common_vendor.o(($event) => login(true)),
        c: common_vendor.o(($event) => login(false)),
        d: common_vendor.p({
          text: text1.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Projects/\u7231\u4F73\u88C5/pages/login/testLogin.vue"]]);
wx.createPage(MiniProgramPage);
