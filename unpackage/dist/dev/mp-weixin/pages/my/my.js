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
  __name: "my",
  setup(__props) {
    const profile = common_vendor.ref("https://cdn.uviewui.com/uview/album/1.jpg");
    const functionList = common_vendor.reactive([{
      aim: "comment",
      word: "\u53D1\u5E03\u7684\u8BC4\u8BBA"
    }, {
      aim: "decorationInformation",
      word: "\u88C5\u4FEE\u4FE1\u606F"
    }, {
      aim: "like",
      word: "\u6211\u7684\u70B9\u8D5E"
    }, {
      aim: "collect",
      word: "\u6211\u7684\u6536\u85CF"
    }, {
      aim: "article",
      word: "\u53D1\u5E03\u7684\u6587\u7AE0"
    }, {
      aim: "novicesGuide",
      word: "\u65B0\u624B\u653B\u7565"
    }, {
      aim: "shoppingCart",
      word: "\u8D2D\u7269\u8F66"
    }, {
      aim: "orders",
      word: "\u6211\u7684\u8BA2\u5355"
    }]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          activePage: 3
        }),
        b: common_vendor.p({
          src: profile.value,
          shape: "circle",
          size: "150"
        }),
        c: common_vendor.f(functionList, (func, k0, i0) => {
          return {
            a: `../../static/my/${func.aim}.png`,
            b: common_vendor.t(func.word),
            c: func.aim,
            d: common_vendor.o(() => {
            }, func.aim)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Projects/\u7231\u4F73\u88C5/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
