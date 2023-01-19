"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_custom_waterfalls_flow2 = common_vendor.resolveComponent("custom-waterfalls-flow");
  (_easycom_u_avatar2 + _easycom_u_icon2 + _easycom_custom_waterfalls_flow2)();
}
const _easycom_u_avatar = () => "../../node-modules/uview-plus/components/u-avatar/u-avatar.js";
const _easycom_u_icon = () => "../../node-modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_custom_waterfalls_flow = () => "../../uni_modules/custom-waterfalls-flow/components/custom-waterfalls-flow/custom-waterfalls-flow.js";
if (!Math) {
  (publicTabBar + _easycom_u_avatar + _easycom_u_icon + _easycom_custom_waterfalls_flow)();
}
const publicTabBar = () => "../../components/publicTabBar/publicTabBar.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref();
    common_vendor.ref(false);
    function openScan() {
      common_vendor.index.scanCode({
        success: function() {
          console.log("\u626B\u7801\u6210\u529F");
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
        common_vendor.nextTick(() => {
          styleItem.value = num;
        });
      }
    }
    const data = common_vendor.reactive({
      list0: [{
        image: "https://p3.itc.cn/q_70/images03/20210228/77c2895860cd4b8a84d4a7047a48e92d.jpeg",
        title: "",
        desc: "\u8BE5\u5EFA\u7B51\u4F4D\u4E8E\u90D1\u5DDE\u7684\u4E00\u4E2A\u4F11\u95F2\u4E2D\u5FC3\uFF0C\u4EE5\u5730\u52BF\u5730\u8C8C\u4E3A\u4F9D\u6258\uFF0C\u5C06\u5EFA\u7B51\u3001\u73AF\u5883\u3001\u4EBA\u6587\u6C47\u805A\u4E8E\u6B64\u3002\u867D\u7136\u6CA1\u6709\u4F7F\u7528\u5761\u5C4B\u9876\uFF0C\u4F46\u662F\u51FA\u6311\u7684\u5C4B\u6A90\uFF0C\u5EAD\u9662\u90FD\u6709\u4E2D\u56FD\u4F20\u7EDF\u5EFA\u7B51\u7684\u610F\u5473\u3002",
        id: 1001
      }, {
        image: "https://p0.itc.cn/q_70/images03/20210228/3bac3025b3664ccd85faa83503e5c50b.jpeg",
        title: "",
        desc: "\u963F\u4E3D\u62C9\u4E4C\u9547\u9152\u5E97\u7684\u8BBE\u8BA1\uFF0C\u662F\u4E00\u573A\u4F20\u7EDF\u6C5F\u5357\u5143\u7D20\u7684\u8F6C\u8BD1\u3002\u9664\u4E86\u5E73\u9762\u5E03\u5C40\u4EE5\u4F20\u7EDF\u6C5F\u5357\u6C34\u4E61\u805A\u843D\u7A7A\u95F4\u4E3A\u539F\u578B\uFF0C\u8BBE\u8BA1\u8FD8\u63D0\u53D6\u4E86\u6751\u82AF\u3001\u6C34\u53E3\u3001\u5DF7\u9053\u3001\u6C34\u6E20\u7B49\u6807\u5FD7\u6027\u7684\u516C\u5171\u7A7A\u95F4\u5143\u7D20 \uFF0C\u5E76\u5EF6\u7EED\u4E86\u4F20\u7EDF\u8857\u5DF7\u7A7A\u95F4\u7684\u5C3A\u5EA6\u4F53\u7CFB\u3002",
        id: 1002
      }, {
        image: "https://image.16pic.com/00/11/59/16pic_1159705_s.jpg?imageView2/0/format/png",
        title: "",
        desc: "\u8FD9\u4E2A\u4E8C\u5C42\u522B\u5885\u662F\u4E2A\u5916\u89C2\u4E0D\u51FA\u6311\u7684\u7B80\u6B27\u98CE\u683C\uFF0C\u6BD4\u8D77\u770B\u5230\u7684\u5F88\u591A\u534E\u4E3D\u9020\u578B\u7684\u6B27\u5F0F\u5EFA\u7B51\uFF0C\u8FD9\u4E2A\u7B80\u6B27\u4F4F\u5B85\u66F4\u504F\u5411\u4E8E\u4E00\u79CD\u590D\u53E4\u7684\u6C1B\u56F4\u611F\uFF0C\u6D45\u9EC4\u8272\u5899\u9762\u7816\u5C31\u7D20\u96C5\u4E86\u8BB8\u591A\uFF0C\u62F1\u5F62\u95E8\u6D1E\u4E5F\u7ED9\u4EBA\u6B27\u5F0F\u53E4\u5821\u611F\u89C9\uFF0C\u867D\u5927\u4F53\u4E0A\u6BD4\u8F83\u73B0\u4EE3\u5316\uFF0C\u4F46\u6C1B\u56F4\u611F\u5374\u5341\u8DB3",
        id: 1003
      }, {
        image: "https://pic2.zhimg.com/80/v2-cfb06f7201d22fb67b1c6e1a7c6db419_1440w.webp",
        title: "",
        desc: "\u5EFA\u7B51\u4E3A\u6B27\u5F0F\u98CE\u683C\uFF0C\u6574\u4F53\u9020\u578B\u65B9\u6B63\u96C5\u81F4\uFF0C\u989C\u8272\u8212\u9002\u6DE1\u96C5\uFF0C\u7ACB\u9762\u9020\u578B\u4EE5\u6696\u8272\u8C03\u8FDB\u884C\u4E0A\u4E0B\u5206\u5C42\uFF0C\u642D\u914D\u8910\u8272\u7EBF\u6761\u5212\u5206\u5F00\uFF0C\u4F7F\u5F97\u6574\u4F53\u7A7A\u95F4\u5C3D\u663E\u5E84\u4E25\u5927\u6C14\u3002",
        id: 1004
      }, {
        image: "https://p0.itc.cn/q_70/images03/20210228/3bac3025b3664ccd85faa83503e5c50b.jpeg",
        title: "",
        desc: "\u963F\u4E3D\u62C9\u4E4C\u9547\u9152\u5E97\u7684\u8BBE\u8BA1\uFF0C\u662F\u4E00\u573A\u4F20\u7EDF\u6C5F\u5357\u5143\u7D20\u7684\u8F6C\u8BD1\u3002\u9664\u4E86\u5E73\u9762\u5E03\u5C40\u4EE5\u4F20\u7EDF\u6C5F\u5357\u6C34\u4E61\u805A\u843D\u7A7A\u95F4\u4E3A\u539F\u578B\uFF0C\u8BBE\u8BA1\u8FD8\u63D0\u53D6\u4E86\u6751\u82AF\u3001\u6C34\u53E3\u3001\u5DF7\u9053\u3001\u6C34\u6E20\u7B49\u6807\u5FD7\u6027\u7684\u516C\u5171\u7A7A\u95F4\u5143\u7D20 \uFF0C\u5E76\u5EF6\u7EED\u4E86\u4F20\u7EDF\u8857\u5DF7\u7A7A\u95F4\u7684\u5C3A\u5EA6\u4F53\u7CFB\u3002",
        id: 1005
      }, {
        image: "https://p3.itc.cn/q_70/images03/20210228/77c2895860cd4b8a84d4a7047a48e92d.jpeg",
        title: "",
        desc: "\u8BE5\u5EFA\u7B51\u4F4D\u4E8E\u90D1\u5DDE\u7684\u4E00\u4E2A\u4F11\u95F2\u4E2D\u5FC3\uFF0C\u4EE5\u5730\u52BF\u5730\u8C8C\u4E3A\u4F9D\u6258\uFF0C\u5C06\u5EFA\u7B51\u3001\u73AF\u5883\u3001\u4EBA\u6587\u6C47\u805A\u4E8E\u6B64\u3002\u867D\u7136\u6CA1\u6709\u4F7F\u7528\u5761\u5C4B\u9876\uFF0C\u4F46\u662F\u51FA\u6311\u7684\u5C4B\u6A90\uFF0C\u5EAD\u9662\u90FD\u6709\u4E2D\u56FD\u4F20\u7EDF\u5EFA\u7B51\u7684\u610F\u5473\u3002",
        id: 1006
      }, {
        image: "https://pic2.zhimg.com/80/v2-cfb06f7201d22fb67b1c6e1a7c6db419_1440w.webp",
        title: "",
        desc: "\u5EFA\u7B51\u4E3A\u6B27\u5F0F\u98CE\u683C\uFF0C\u6574\u4F53\u9020\u578B\u65B9\u6B63\u96C5\u81F4\uFF0C\u989C\u8272\u8212\u9002\u6DE1\u96C5\uFF0C\u7ACB\u9762\u9020\u578B\u4EE5\u6696\u8272\u8C03\u8FDB\u884C\u4E0A\u4E0B\u5206\u5C42\uFF0C\u642D\u914D\u8910\u8272\u7EBF\u6761\u5212\u5206\u5F00\uFF0C\u4F7F\u5F97\u6574\u4F53\u7A7A\u95F4\u5C3D\u663E\u5E84\u4E25\u5927\u6C14\u3002",
        id: 1007
      }, {
        image: "https://image.16pic.com/00/11/59/16pic_1159705_s.jpg?imageView2/0/format/png",
        title: "",
        desc: "\u8FD9\u4E2A\u4E8C\u5C42\u522B\u5885\u662F\u4E2A\u5916\u89C2\u4E0D\u51FA\u6311\u7684\u7B80\u6B27\u98CE\u683C\uFF0C\u6BD4\u8D77\u770B\u5230\u7684\u5F88\u591A\u534E\u4E3D\u9020\u578B\u7684\u6B27\u5F0F\u5EFA\u7B51\uFF0C\u8FD9\u4E2A\u7B80\u6B27\u4F4F\u5B85\u66F4\u504F\u5411\u4E8E\u4E00\u79CD\u590D\u53E4\u7684\u6C1B\u56F4\u611F\uFF0C\u6D45\u9EC4\u8272\u5899\u9762\u7816\u5C31\u7D20\u96C5\u4E86\u8BB8\u591A\uFF0C\u62F1\u5F62\u95E8\u6D1E\u4E5F\u7ED9\u4EBA\u6B27\u5F0F\u53E4\u5821\u611F\u89C9\uFF0C\u867D\u5927\u4F53\u4E0A\u6BD4\u8F83\u73B0\u4EE3\u5316\uFF0C\u4F46\u6C1B\u56F4\u611F\u5374\u5341\u8DB3",
        id: 1008
      }]
    });
    const column = common_vendor.ref(2);
    const listStyle = {
      "box-shadow": "0px 0px 10px rgba(0, 0, 0, 0.1)"
    };
    const waterfallsFlowRef = common_vendor.ref(null);
    const profile = common_vendor.ref("../../static/my/\u6211\u7684.png");
    const src = common_vendor.ref("https://cdn.uviewui.com/uview/album/1.jpg");
    const collectIds = common_vendor.reactive([]);
    function saveArticle(item) {
      if (collectIds.indexOf(item.id) == -1) {
        collectIds.push(item.id);
        console.log("\u6536\u85CF\u6210\u529F");
      } else {
        collectIds.splice(collectIds.indexOf(item.id), 1);
        console.log("\u6536\u85CF\u53D6\u6D88");
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
        e: common_vendor.o(($event) => chooseStyle(0)),
        f: common_vendor.unref(styleItem) == 0 ? "#FEB814" : "#363636",
        g: common_vendor.o(($event) => chooseStyle(1)),
        h: common_vendor.unref(styleItem) == 1 ? "#FEB814" : "#363636",
        i: common_vendor.o(($event) => chooseStyle(2)),
        j: common_vendor.unref(styleItem) == 2 ? "#FEB814" : "#363636",
        k: common_vendor.o(($event) => chooseStyle(3)),
        l: common_vendor.unref(styleItem) == 3 ? "#FEB814" : "#363636",
        m: common_vendor.o(($event) => chooseStyle(4)),
        n: common_vendor.unref(styleItem) == 4 ? "#FEB814" : "#363636",
        o: common_vendor.f(data.list0, (item, index, i0) => {
          return {
            a: common_vendor.t(item.desc),
            b: "40860e84-2-" + i0 + ",40860e84-1",
            c: "40860e84-3-" + i0 + ",40860e84-1",
            d: common_vendor.p({
              name: collectIds.includes(item.id) ? "star-fill" : "star",
              color: collectIds.includes(item.id) ? "#FEB814" : "#363636",
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
        q: common_vendor.sr(waterfallsFlowRef, "40860e84-1", {
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
            b: "40860e84-5-" + i0 + ",40860e84-4",
            c: "40860e84-6-" + i0 + ",40860e84-4",
            d: common_vendor.p({
              name: collectIds.includes(item.id) ? "star-fill" : "star",
              color: collectIds.includes(item.id) ? "#FEB814" : "#363636",
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
        v: common_vendor.sr(waterfallsFlowRef, "40860e84-4", {
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
            b: "40860e84-8-" + i0 + ",40860e84-7",
            c: "40860e84-9-" + i0 + ",40860e84-7",
            d: common_vendor.p({
              name: collectIds.includes(item.id) ? "star-fill" : "star",
              color: collectIds.includes(item.id) ? "#FEB814" : "#363636",
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
        z: common_vendor.sr(waterfallsFlowRef, "40860e84-7", {
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
            b: "40860e84-11-" + i0 + ",40860e84-10",
            c: "40860e84-12-" + i0 + ",40860e84-10",
            d: common_vendor.p({
              name: collectIds.includes(item.id) ? "star-fill" : "star",
              color: collectIds.includes(item.id) ? "#FEB814" : "#363636",
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
        D: common_vendor.sr(waterfallsFlowRef, "40860e84-10", {
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
            b: "40860e84-14-" + i0 + ",40860e84-13",
            c: "40860e84-15-" + i0 + ",40860e84-13",
            d: common_vendor.p({
              name: collectIds.includes(item.id) ? "star-fill" : "star",
              color: collectIds.includes(item.id) ? "#FEB814" : "#363636",
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
        H: common_vendor.sr(waterfallsFlowRef, "40860e84-13", {
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Projects/\u7231\u4F73\u88C5/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
