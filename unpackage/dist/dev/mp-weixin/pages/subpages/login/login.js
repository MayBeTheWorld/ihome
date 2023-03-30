"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  _easycom_u_avatar2();
}
const _easycom_u_avatar = () => "../../../node-modules/uview-plus/components/u-avatar/u-avatar.js";
if (!Math) {
  _easycom_u_avatar();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const store = common_vendor.useStore();
    const hasProvider = false;
    common_vendor.reactive([]);
    const account = common_vendor.ref("");
    const password = common_vendor.ref("");
    function bindLogin() {
      const userAccount = account.value.trim();
      password.value.trim();
      if (!userAccount.length) {
        alert("请输入账号");
        console.log("请输入账号");
        return false;
      }
      if (password.length < 6) {
        alert("密码最短为 6 个字符");
        console.log("密码最短为 6 个字符");
        return false;
      }
      common_vendor.index.showLoading({
        title: "登录中"
      });
      console.log(account.value + "," + password.value);
      common_vendor.index.$u.http.post("http://43.140.203.85:8102/user/login", {
        loginName: account.value,
        password: password.value
        // loginName: 'test',
        // password: 'a1915f03b38bf54926700dfc9ea699f8'
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
          url: "/pages/index/index"
        });
      }).catch((err) => {
        common_vendor.index.showToast({
          icon: "none",
          title: "请求失败",
          // 如果msg不存在，就显示请求失败
          duration: 2e3
        });
        console.log(err);
      });
      common_vendor.index.hideLoading();
    }
    function alert(msg) {
      common_vendor.index.showToast({
        icon: "none",
        title: msg
      });
    }
    function tip() {
      common_vendor.index.showToast({
        icon: "none",
        title: "服务尚未完善"
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          shape: "circle",
          size: "150"
        }),
        b: account.value,
        c: common_vendor.o(($event) => account.value = $event.detail.value),
        d: common_vendor.o(bindLogin),
        e: password.value,
        f: common_vendor.o(($event) => password.value = $event.detail.value),
        g: common_vendor.o(bindLogin),
        h: common_vendor.o(tip),
        i: common_vendor.o(tip),
        j: hasProvider
      }, {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/prgraming/myproject/ihome/pages/subpages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
