"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "scanReturn",
  setup(__props) {
    common_vendor.useRouter();
    const currentSlide = common_vendor.ref(0);
    const slides = [
      {
        image: "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        description: "Slide 1 description"
      },
      {
        image: "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        description: "Slide 2 description"
      },
      {
        image: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
        description: "Slide 3 description"
      }
    ];
    const onSwiperChange = (e) => {
      currentSlide.value = e.detail.current;
    };
    const setCurrentSlide = (index) => {
      currentSlide.value = index;
    };
    const navigateToVR = () => {
      common_vendor.index.switchTab({
        url: "/pages/VR/VR"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(slides, (slide, index, i0) => {
          return {
            a: slide.image,
            b: common_vendor.o(navigateToVR, index),
            c: index
          };
        }),
        b: currentSlide.value,
        c: common_vendor.o(onSwiperChange),
        d: common_vendor.t(slides[currentSlide.value].description),
        e: common_vendor.f(slides, (slide, index, i0) => {
          return {
            a: index,
            b: index === currentSlide.value ? 1 : "",
            c: common_vendor.o(($event) => setCurrentSlide(index), index)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7d4095bd"], ["__file", "D:/prgraming/myproject/ihome/components/scan/scanReturn.vue"]]);
wx.createPage(MiniProgramPage);
