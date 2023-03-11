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
    function login() {
      common_vendor.index.$u.http.post("http://43.140.203.85:8102/user/login", {
        loginName: "test",
        password: "a1915f03b38bf54926700dfc9ea699f8"
      }).then((res) => {
        console.log(res);
        if (res) {
          console.log("\u767B\u5F55\u6210\u529F");
        } else {
          common_vendor.index.showToast({
            icon: "none",
            title: "\u767B\u5F55\u5931\u8D25",
            duration: 2e3
          });
        }
        store.commit("storeLogin", res.data.content);
        common_vendor.index.reLaunch({
          url: "/pages/main/main"
        });
      }).catch((err) => {
        common_vendor.index.showToast({
          icon: "none",
          title: "\u8BF7\u6C42\u5931\u8D25",
          duration: 2e3
        });
      });
    }
    function logout() {
      store.commit("storeLogout");
      console.log("\u6210\u529F\u9000\u51FA\u767B\u5F55");
      common_vendor.index.reLaunch({
        url: "/pages/main/main"
      });
    }
    const text1 = common_vendor.ref("uview-plus UI\u4F17\u591A\u7EC4\u4EF6\u8986\u76D6\u5F00\u53D1\u8FC7\u7A0B\u7684\u5404\u4E2A\u9700\u6C42\uFF0C\u7EC4\u4EF6\u529F\u80FD\u4E30\u5BCC\uFF0C\u591A\u7AEF\u517C\u5BB9\u3002\u8BA9\u60A8\u5FEB\u901F\u96C6\u6210\uFF0C\u5F00\u7BB1\u5373\u7528");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(_ctx.$store.state.userInfo),
        b: common_vendor.o(login),
        c: common_vendor.o(logout),
        d: common_vendor.p({
          text: text1.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/desktop/ihome2/pages/login/testLogin.vue"]]);
wx.createPage(MiniProgramPage);
