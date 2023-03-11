"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  _easycom_u_avatar2();
}
const _easycom_u_avatar = () => "../../node-modules/uview-plus/components/u-avatar/u-avatar.js";
if (!Math) {
  (publicTabBar + _easycom_u_avatar)();
}
const publicTabBar = () => "../../components/publicTabBar/publicTabBar.js";
const _sfc_main = {
  __name: "main",
  setup(__props) {
    const store = common_vendor.useStore();
    const isLogin = common_vendor.ref(store.state.userInfo.isLogin);
    const profile = common_vendor.ref("https://images.freeimages.com/365/images/previews/af5/funny-cat-vector-illustration-25725.jpg");
    const functionList = common_vendor.reactive([{
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
      common_vendor.index.navigateTo({
        url: "/pages/subpages/login/login",
        fail: (res) => {
          console.log(res);
        }
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          activePage: 3
        }),
        b: isLogin.value
      }, isLogin.value ? {
        c: common_vendor.p({
          src: profile.value,
          shape: "circle",
          size: "150"
        }),
        d: common_vendor.t(_ctx.$store.state.userInfo.name),
        e: common_vendor.t(isLogin.value),
        f: common_vendor.o(login),
        g: isLogin.value
      } : {}, {
        h: !isLogin.value
      }, !isLogin.value ? {
        i: common_vendor.o(login),
        j: isLogin.value
      } : {}, {
        k: common_vendor.f(functionList, (func, k0, i0) => {
          return {
            a: `../../static/main/${func.aim}.png`,
            b: common_vendor.t(func.word),
            c: func.aim,
            d: common_vendor.o(() => {
            }, func.aim)
          };
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/prgraming/myproject/ihome/pages/main/main.vue"]]);
wx.createPage(MiniProgramPage);
