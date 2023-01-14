"use strict";
const common_vendor = require("../../../../../../../common/vendor.js");
const uni_modules_skyNutui_components_skyNutui_packages_locale_index = require("../../locale/index.js");
const uni_modules_skyNutui_components_skyNutui_packages_utils_util = require("../util.js");
function createComponent(name) {
  const componentName = "nut-" + name;
  return {
    componentName,
    translate(keyPath, ...args) {
      const languages = uni_modules_skyNutui_components_skyNutui_packages_locale_index.Locale.languages();
      const text = uni_modules_skyNutui_components_skyNutui_packages_utils_util.getPropByPath(languages, `${name.replace("-", "")}.${keyPath}`) || uni_modules_skyNutui_components_skyNutui_packages_utils_util.getPropByPath(languages, keyPath);
      return uni_modules_skyNutui_components_skyNutui_packages_utils_util.isFunction(text) ? text(...args) : text;
    },
    create: function(_component) {
      _component.baseName = name;
      _component.name = componentName;
      _component.install = (vue) => {
        vue.component(_component.name, _component);
      };
      return common_vendor.defineComponent(_component);
    },
    createDemo: function(_component) {
      _component.baseName = name;
      _component.name = "demo-" + name;
      return common_vendor.defineComponent(_component);
    }
  };
}
exports.createComponent = createComponent;
