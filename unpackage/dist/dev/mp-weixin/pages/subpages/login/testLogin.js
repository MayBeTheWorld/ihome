"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_u_notice_bar2 = common_vendor.resolveComponent("u-notice-bar");
  _easycom_u_notice_bar2();
}
const _easycom_u_notice_bar = () => "../../../node-modules/uview-plus/components/u-notice-bar/u-notice-bar.js";
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
          console.log("登录成功");
        } else {
          common_vendor.index.showToast({
            icon: "none",
            title: "登录失败",
            // 如果msg不存在，就显示请求失败
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
          title: "请求失败",
          // 如果msg不存在，就显示请求失败
          duration: 2e3
        });
      });
    }
    function logout() {
      store.commit("storeLogout");
      console.log("成功退出登录");
      common_vendor.index.reLaunch({
        url: "/pages/main/main"
      });
    }
    const text1 = common_vendor.ref("uview-plus UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用");
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/prgraming/myproject/ihome/pages/subpages/login/testLogin.vue"]]);
wx.createPage(MiniProgramPage);
