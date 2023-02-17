"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_publicTabBar2 = common_vendor.resolveComponent("publicTabBar");
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_list_item2 = common_vendor.resolveComponent("u-list-item");
  const _easycom_u_list2 = common_vendor.resolveComponent("u-list");
  (_easycom_publicTabBar2 + _easycom_u_avatar2 + _easycom_u_cell2 + _easycom_u_list_item2 + _easycom_u_list2)();
}
const _easycom_publicTabBar = () => "../../components/publicTabBar/publicTabBar.js";
const _easycom_u_avatar = () => "../../node-modules/uview-plus/components/u-avatar/u-avatar.js";
const _easycom_u_cell = () => "../../node-modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_list_item = () => "../../node-modules/uview-plus/components/u-list-item/u-list-item.js";
const _easycom_u_list = () => "../../node-modules/uview-plus/components/u-list/u-list.js";
if (!Math) {
  (_easycom_publicTabBar + _easycom_u_avatar + _easycom_u_cell + _easycom_u_list_item + _easycom_u_list)();
}
const _sfc_main = {
  __name: "community",
  setup(__props) {
    const state = common_vendor.reactive({
      indexList: [],
      urls: [
        "https://cdn.uviewui.com/uview/album/1.jpg",
        "https://cdn.uviewui.com/uview/album/2.jpg",
        "https://cdn.uviewui.com/uview/album/3.jpg",
        "https://cdn.uviewui.com/uview/album/4.jpg",
        "https://cdn.uviewui.com/uview/album/5.jpg",
        "https://cdn.uviewui.com/uview/album/6.jpg",
        "https://cdn.uviewui.com/uview/album/7.jpg",
        "https://cdn.uviewui.com/uview/album/8.jpg",
        "https://cdn.uviewui.com/uview/album/9.jpg",
        "https://cdn.uviewui.com/uview/album/10.jpg"
      ]
    });
    const scrolltolower = () => {
      this.loadmore();
    };
    common_vendor.onMounted(() => {
      loadmore();
    });
    const loadmore = () => {
      for (let i = 0; i < 30; i++) {
        this.indexList.push({
          url: this.urls[common_vendor.index.$u.random(0, this.urls.length - 1)]
        });
      }
      console.log("loadmore");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          activePage: 2
        }),
        b: common_vendor.f(state.indexList, (item, index, i0) => {
          return {
            a: "5b877681-4-" + i0 + "," + ("5b877681-3-" + i0),
            b: common_vendor.p({
              shape: "square",
              size: "35",
              src: item.url,
              customStyle: "margin: -3px 5px -3px 0"
            }),
            c: "5b877681-3-" + i0 + "," + ("5b877681-2-" + i0),
            d: common_vendor.p({
              title: `\u5217\u8868\u957F\u5EA6-${index + 1}`
            }),
            e: index,
            f: "5b877681-2-" + i0 + ",5b877681-1"
          };
        }),
        c: common_vendor.o(scrolltolower)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/desktop/ihome2/pages/community/community.vue"]]);
wx.createPage(MiniProgramPage);
