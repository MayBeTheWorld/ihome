"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_publicTabBar2 = common_vendor.resolveComponent("publicTabBar");
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_custom_waterfalls_flow2 = common_vendor.resolveComponent("custom-waterfalls-flow");
  (_easycom_publicTabBar2 + _easycom_u_avatar2 + _easycom_u_icon2 + _easycom_custom_waterfalls_flow2)();
}
const _easycom_publicTabBar = () => "../../components/publicTabBar/publicTabBar.js";
const _easycom_u_avatar = () => "../../node-modules/uview-plus/components/u-avatar/u-avatar.js";
const _easycom_u_icon = () => "../../node-modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_custom_waterfalls_flow = () => "../../uni_modules/custom-waterfalls-flow/components/custom-waterfalls-flow/custom-waterfalls-flow.js";
if (!Math) {
  (_easycom_publicTabBar + _easycom_u_avatar + _easycom_u_icon + _easycom_custom_waterfalls_flow)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref();
    common_vendor.ref(false);
    function openScan() {
      common_vendor.index.scanCode({
        success: function() {
          console.log("扫码成功");
        }
      });
    }
    const m = () => {
      console.log(styleItem.value);
    };
    let styleItem = common_vendor.ref(0);
    common_vendor.reactive({
      styleItem: 0
    });
    function swiperChange(e) {
      styleItem.value = e.detail.current;
      console.log(e.detail.current);
    }
    function chooseStyle(num) {
      if (styleItem.value == num) {
        return false;
      } else {
        common_vendor.nextTick$1(() => {
          styleItem.value = num;
        });
      }
    }
    const data = common_vendor.reactive({
      list0: [{
        image: "https://p3.itc.cn/q_70/images03/20210228/77c2895860cd4b8a84d4a7047a48e92d.jpeg",
        title: "",
        desc: "该建筑位于郑州的一个休闲中心，以地势地貌为依托，将建筑、环境、人文汇聚于此。虽然没有使用坡屋顶，但是出挑的屋檐，庭院都有中国传统建筑的意味。",
        id: 1001
      }, {
        image: "https://p0.itc.cn/q_70/images03/20210228/3bac3025b3664ccd85faa83503e5c50b.jpeg",
        title: "",
        desc: "阿丽拉乌镇酒店的设计，是一场传统江南元素的转译。除了平面布局以传统江南水乡聚落空间为原型，设计还提取了村芯、水口、巷道、水渠等标志性的公共空间元素 ，并延续了传统街巷空间的尺度体系。",
        id: 1002
      }, {
        image: "https://image.16pic.com/00/11/59/16pic_1159705_s.jpg?imageView2/0/format/png",
        title: "",
        desc: "这个二层别墅是个外观不出挑的简欧风格，比起看到的很多华丽造型的欧式建筑，这个简欧住宅更偏向于一种复古的氛围感，浅黄色墙面砖就素雅了许多，拱形门洞也给人欧式古堡感觉，虽大体上比较现代化，但氛围感却十足",
        id: 1003
      }, {
        image: "https://pic2.zhimg.com/80/v2-cfb06f7201d22fb67b1c6e1a7c6db419_1440w.webp",
        title: "",
        desc: "建筑为欧式风格，整体造型方正雅致，颜色舒适淡雅，立面造型以暖色调进行上下分层，搭配褐色线条划分开，使得整体空间尽显庄严大气。",
        id: 1004
      }, {
        image: "https://p0.itc.cn/q_70/images03/20210228/3bac3025b3664ccd85faa83503e5c50b.jpeg",
        title: "",
        desc: "阿丽拉乌镇酒店的设计，是一场传统江南元素的转译。除了平面布局以传统江南水乡聚落空间为原型，设计还提取了村芯、水口、巷道、水渠等标志性的公共空间元素 ，并延续了传统街巷空间的尺度体系。",
        id: 1005
      }, {
        image: "https://p3.itc.cn/q_70/images03/20210228/77c2895860cd4b8a84d4a7047a48e92d.jpeg",
        title: "",
        desc: "该建筑位于郑州的一个休闲中心，以地势地貌为依托，将建筑、环境、人文汇聚于此。虽然没有使用坡屋顶，但是出挑的屋檐，庭院都有中国传统建筑的意味。",
        id: 1006
      }, {
        image: "https://pic2.zhimg.com/80/v2-cfb06f7201d22fb67b1c6e1a7c6db419_1440w.webp",
        title: "",
        desc: "建筑为欧式风格，整体造型方正雅致，颜色舒适淡雅，立面造型以暖色调进行上下分层，搭配褐色线条划分开，使得整体空间尽显庄严大气。",
        id: 1007
      }, {
        image: "https://image.16pic.com/00/11/59/16pic_1159705_s.jpg?imageView2/0/format/png",
        title: "",
        desc: "这个二层别墅是个外观不出挑的简欧风格，比起看到的很多华丽造型的欧式建筑，这个简欧住宅更偏向于一种复古的氛围感，浅黄色墙面砖就素雅了许多，拱形门洞也给人欧式古堡感觉，虽大体上比较现代化，但氛围感却十足",
        id: 1008
      }]
    });
    const column = common_vendor.ref(2);
    const listStyle = {
      "box-shadow": "0px 0px 10px rgba(0, 0, 0, 0.1)"
    };
    const waterfallsFlowRef = common_vendor.ref(null);
    const profile = common_vendor.ref("../../static/main/mine.png");
    const src = common_vendor.ref("https://cdn.uviewui.com/uview/album/1.jpg");
    const collectIds = common_vendor.reactive([]);
    function saveArticle(item) {
      if (collectIds.indexOf(item.id) == -1) {
        collectIds.push(item.id);
        console.log("收藏成功");
      } else {
        collectIds.splice(collectIds.indexOf(item.id), 1);
        console.log("收藏取消");
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          activePage: 0
        }),
        b: profile.value,
        c: common_vendor.o(m),
        d: common_vendor.o(openScan),
        e: common_vendor.unref(styleItem) == 0 ? "#FEB814" : "#363636",
        f: common_vendor.o(($event) => chooseStyle(0)),
        g: common_vendor.unref(styleItem) == 1 ? "#FEB814" : "#363636",
        h: common_vendor.o(($event) => chooseStyle(1)),
        i: common_vendor.unref(styleItem) == 2 ? "#FEB814" : "#363636",
        j: common_vendor.o(($event) => chooseStyle(2)),
        k: common_vendor.unref(styleItem) == 3 ? "#FEB814" : "#363636",
        l: common_vendor.o(($event) => chooseStyle(3)),
        m: common_vendor.unref(styleItem) == 4 ? "#FEB814" : "#363636",
        n: common_vendor.o(($event) => chooseStyle(4)),
        o: common_vendor.f(data.list0, (item, index, i0) => {
          return {
            a: common_vendor.t(item.desc),
            b: "4e53b9a0-2-" + i0 + ",4e53b9a0-1",
            c: "4e53b9a0-3-" + i0 + ",4e53b9a0-1",
            d: common_vendor.p({
              color: collectIds.includes(item.id) ? "#FEB814" : "#363636",
              name: collectIds.includes(item.id) ? "star-fill" : "star",
              size: "40"
            }),
            e: common_vendor.o(($event) => saveArticle(item), index),
            f: index
          };
        }),
        p: common_vendor.p({
          src: src.value,
          shape: "circle",
          size: "40"
        }),
        q: common_vendor.sr(waterfallsFlowRef, "4e53b9a0-1", {
          "k": "waterfallsFlowRef"
        }),
        r: common_vendor.p({
          column: column.value,
          listStyle,
          value: data.list0
        }),
        s: common_vendor.f(data.list0, (item, index, i0) => {
          return {
            a: common_vendor.t(item.desc),
            b: "4e53b9a0-5-" + i0 + ",4e53b9a0-4",
            c: "4e53b9a0-6-" + i0 + ",4e53b9a0-4",
            d: common_vendor.p({
              color: collectIds.includes(item.id) ? "#FEB814" : "#363636",
              name: collectIds.includes(item.id) ? "star-fill" : "star",
              size: "40"
            }),
            e: common_vendor.o(($event) => saveArticle(item), index),
            f: index
          };
        }),
        t: common_vendor.p({
          src: src.value,
          shape: "circle",
          size: "40"
        }),
        v: common_vendor.sr(waterfallsFlowRef, "4e53b9a0-4", {
          "k": "waterfallsFlowRef"
        }),
        w: common_vendor.p({
          column: column.value,
          listStyle,
          value: data.list0
        }),
        x: common_vendor.f(data.list0, (item, index, i0) => {
          return {
            a: common_vendor.t(item.desc),
            b: "4e53b9a0-8-" + i0 + ",4e53b9a0-7",
            c: "4e53b9a0-9-" + i0 + ",4e53b9a0-7",
            d: common_vendor.p({
              color: collectIds.includes(item.id) ? "#FEB814" : "#363636",
              name: collectIds.includes(item.id) ? "star-fill" : "star",
              size: "40"
            }),
            e: common_vendor.o(($event) => saveArticle(item), index),
            f: index
          };
        }),
        y: common_vendor.p({
          src: src.value,
          shape: "circle",
          size: "40"
        }),
        z: common_vendor.sr(waterfallsFlowRef, "4e53b9a0-7", {
          "k": "waterfallsFlowRef"
        }),
        A: common_vendor.p({
          column: column.value,
          listStyle,
          value: data.list0
        }),
        B: common_vendor.f(data.list0, (item, index, i0) => {
          return {
            a: common_vendor.t(item.desc),
            b: "4e53b9a0-11-" + i0 + ",4e53b9a0-10",
            c: "4e53b9a0-12-" + i0 + ",4e53b9a0-10",
            d: common_vendor.p({
              color: collectIds.includes(item.id) ? "#FEB814" : "#363636",
              name: collectIds.includes(item.id) ? "star-fill" : "star",
              size: "40"
            }),
            e: common_vendor.o(($event) => saveArticle(item), index),
            f: index
          };
        }),
        C: common_vendor.p({
          src: src.value,
          shape: "circle",
          size: "40"
        }),
        D: common_vendor.sr(waterfallsFlowRef, "4e53b9a0-10", {
          "k": "waterfallsFlowRef"
        }),
        E: common_vendor.p({
          column: column.value,
          listStyle,
          value: data.list0
        }),
        F: common_vendor.f(data.list0, (item, index, i0) => {
          return {
            a: common_vendor.t(item.desc),
            b: "4e53b9a0-14-" + i0 + ",4e53b9a0-13",
            c: "4e53b9a0-15-" + i0 + ",4e53b9a0-13",
            d: common_vendor.p({
              color: collectIds.includes(item.id) ? "#FEB814" : "#363636",
              name: collectIds.includes(item.id) ? "star-fill" : "star",
              size: "40"
            }),
            e: common_vendor.o(($event) => saveArticle(item), index),
            f: index
          };
        }),
        G: common_vendor.p({
          src: src.value,
          shape: "circle",
          size: "40"
        }),
        H: common_vendor.sr(waterfallsFlowRef, "4e53b9a0-13", {
          "k": "waterfallsFlowRef"
        }),
        I: common_vendor.p({
          column: column.value,
          listStyle,
          value: data.list0
        }),
        J: common_vendor.unref(styleItem),
        K: common_vendor.o(swiperChange)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/prgraming/myproject/ihome/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
