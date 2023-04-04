"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "scanReturn",
  setup(__props) {
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
    const onTouchStart = (e) => {
      startX.value = e.touches[0].clientX;
    };
    const onTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      const delta = startX.value - endX;
      if (delta > 50) {
        setCurrentSlide((currentSlide.value + 1) % slides.length);
      } else if (delta < -50) {
        setCurrentSlide((currentSlide.value - 1 + slides.length) % slides.length);
      }
    };
    const startX = common_vendor.ref(0);
    const setCurrentSlide = (index) => {
      currentSlide.value = index;
    };
    return (_ctx, _cache) => {
      return {
        a: slides[currentSlide.value].image,
        b: common_vendor.t(slides[currentSlide.value].description),
        c: common_vendor.f(slides, (slide, index, i0) => {
          return {
            a: index,
            b: index === currentSlide.value ? 1 : "",
            c: common_vendor.o(($event) => setCurrentSlide(index), index)
          };
        }),
        d: common_vendor.o(onTouchStart),
        e: common_vendor.o(onTouchEnd)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7d4095bd"], ["__file", "D:/prgraming/myproject/ihome/components/scan/scanReturn.vue"]]);
wx.createPage(MiniProgramPage);
