var __wxsModules={};

__wxsModules["7f9de7cc"] = (() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // <stdin>
  var require_stdin = __commonJS({
    "<stdin>"(exports, module) {
      function scroll(event, ownerInstance) {
        var detail = event.detail;
        var scrollWidth = detail.scrollWidth;
        var scrollLeft = detail.scrollLeft;
        var dataset = event.currentTarget.dataset;
        var scrollComponentWidth = dataset.scrollWidth || dataset.scrollwidth || 0;
        var indicatorWidth = dataset.indicatorWidth || dataset.indicatorwidth || 0;
        var barWidth = dataset.barWidth || dataset.barwidth || 0;
        var x = scrollLeft / (scrollWidth - scrollComponentWidth) * (indicatorWidth - barWidth);
        setBarStyle(ownerInstance, x);
      }
      function scrolltolower(event, ownerInstance) {
        ownerInstance.callMethod("scrollEvent", "right");
        var dataset = event.currentTarget.dataset;
        var indicatorWidth = dataset.indicatorWidth || dataset.indicatorwidth || 0;
        var barWidth = dataset.barWidth || dataset.barwidth || 0;
        setBarStyle(ownerInstance, indicatorWidth - barWidth);
      }
      function scrolltoupper(event, ownerInstance) {
        ownerInstance.callMethod("scrollEvent", "left");
        setBarStyle(ownerInstance, 0);
      }
      function setBarStyle(ownerInstance, x) {
        ownerInstance.selectComponent(".u-scroll-list__indicator__line__bar") && ownerInstance.selectComponent(".u-scroll-list__indicator__line__bar").setStyle({
          transform: "translateX(" + x + "px)"
        });
      }
      module.exports = {
        scroll,
        scrolltolower,
        scrolltoupper
      };
    }
  });
  return require_stdin();
})();
