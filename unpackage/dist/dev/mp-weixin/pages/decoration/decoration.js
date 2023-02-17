"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_publicTabBar2 = common_vendor.resolveComponent("publicTabBar");
  const _easycom_nut_menu_item2 = common_vendor.resolveComponent("nut-menu-item");
  const _easycom_nut_menu2 = common_vendor.resolveComponent("nut-menu");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_scroll_list2 = common_vendor.resolveComponent("u-scroll-list");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_u_list_item2 = common_vendor.resolveComponent("u-list-item");
  const _easycom_u_list2 = common_vendor.resolveComponent("u-list");
  (_easycom_publicTabBar2 + _easycom_nut_menu_item2 + _easycom_nut_menu2 + _easycom_u_icon2 + _easycom_u_scroll_list2 + _easycom_uni_card2 + _easycom_u_list_item2 + _easycom_u_list2)();
}
const _easycom_publicTabBar = () => "../../components/publicTabBar/publicTabBar.js";
const _easycom_nut_menu_item = () => "../../uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/menuitem/index.js";
const _easycom_nut_menu = () => "../../uni_modules/sky-nutui/components/sky-nutui/packages/__VUE/menu/index.js";
const _easycom_u_icon = () => "../../node-modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_scroll_list = () => "../../node-modules/uview-plus/components/u-scroll-list/u-scroll-list.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_u_list_item = () => "../../node-modules/uview-plus/components/u-list-item/u-list-item.js";
const _easycom_u_list = () => "../../node-modules/uview-plus/components/u-list/u-list.js";
if (!Math) {
  (_easycom_publicTabBar + _easycom_nut_menu_item + _easycom_nut_menu + _easycom_u_icon + _easycom_u_scroll_list + _easycom_uni_card + _easycom_u_list_item + _easycom_u_list)();
}
const _sfc_main = {
  __name: "decoration",
  setup(__props) {
    const state = common_vendor.reactive({
      options1: [
        { text: "\u8BBE\u8BA1\u8D39", value: 0 },
        { text: "\u65B0\u6B3E\u5546\u54C1", value: 1 },
        { text: "\u6D3B\u52A8\u5546\u54C1", value: 2 }
      ],
      options2: [
        { text: "\u98CE\u683C", value: 0 },
        { text: "\u65B0\u6B3E\u5546\u54C1", value: 1 },
        { text: "\u6D3B\u52A8\u5546\u54C1", value: 2 }
      ],
      options3: [
        { text: "\u65BD\u5DE5", value: 0 },
        { text: "\u65B0\u6B3E\u5546\u54C1", value: 1 },
        { text: "\u6D3B\u52A8\u5546\u54C1", value: 2 }
      ],
      options4: [
        { text: "\u7B5B\u9009", value: 0 },
        { text: "\u597D\u8BC4\u6392\u5E8F", value: "b" },
        { text: "\u9500\u91CF\u6392\u5E8F", value: "c" }
      ],
      value1: 0
    });
    const left = () => {
      console.log("left");
    };
    const right = () => {
      console.log("right");
    };
    const scrolltolower = () => {
      console.log("scrolltolower");
      for (let i = 0; i < 5; i++) {
        listBoundless.value.push(i);
      }
    };
    const listBoundless = common_vendor.ref([]);
    for (let i = 0; i < 5; i++) {
      listBoundless.value.push(i);
    }
    const list = common_vendor.ref(
      [
        {
          price: "230.5",
          thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"
        },
        {
          price: "74.1",
          thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"
        },
        {
          price: "8457",
          thumb: "https://cdn.uviewui.com/uview/goods/6.jpg"
        },
        {
          price: "1442",
          thumb: "https://cdn.uviewui.com/uview/goods/5.jpg"
        },
        {
          price: "541",
          thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"
        },
        {
          price: "234",
          thumb: "https://cdn.uviewui.com/uview/goods/3.jpg"
        },
        {
          price: "562",
          thumb: "https://cdn.uviewui.com/uview/goods/4.jpg"
        },
        {
          price: "251.5",
          thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"
        }
      ]
    );
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          activePage: 1
        }),
        b: common_vendor.o(($event) => state.value1 = $event),
        c: common_vendor.p({
          options: state.options1,
          modelValue: state.value1
        }),
        d: common_vendor.o(($event) => state.value1 = $event),
        e: common_vendor.p({
          options: state.options2,
          modelValue: state.value1
        }),
        f: common_vendor.o(($event) => state.value1 = $event),
        g: common_vendor.p({
          options: state.options3,
          modelValue: state.value1
        }),
        h: common_vendor.o(($event) => state.value1 = $event),
        i: common_vendor.p({
          options: state.options4,
          modelValue: state.value1
        }),
        j: common_vendor.f(listBoundless.value, (item, index, i0) => {
          return {
            a: common_vendor.f(list.value, (item2, index2, i1) => {
              return {
                a: item2.thumb,
                b: common_vendor.t(item2.price),
                c: index2,
                d: common_vendor.n(index2 === 9 && "scroll-list__goods-item--no-margin-right")
              };
            }),
            b: "5d887d2d-10-" + i0 + "," + ("5d887d2d-9-" + i0),
            c: common_vendor.o(right, index),
            d: common_vendor.o(left, index),
            e: "5d887d2d-9-" + i0 + "," + ("5d887d2d-8-" + i0),
            f: "5d887d2d-8-" + i0 + "," + ("5d887d2d-7-" + i0),
            g: index,
            h: "5d887d2d-7-" + i0 + ",5d887d2d-6"
          };
        }),
        k: common_vendor.p({
          name: "arrow-leftward",
          color: "#f56c6c",
          size: "12"
        }),
        l: common_vendor.p({
          indicator: false
        }),
        m: common_vendor.p({
          title: "\u57FA\u7840\u5361\u7247",
          isFull: true,
          ["sub-title"]: "\u526F\u6807\u9898",
          extra: "\u989D\u5916\u4FE1\u606F",
          thumbnail: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
        }),
        n: common_vendor.o(scrolltolower),
        o: common_vendor.p({
          height: "1000rpx"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/desktop/ihome2/pages/decoration/decoration.vue"]]);
wx.createPage(MiniProgramPage);
