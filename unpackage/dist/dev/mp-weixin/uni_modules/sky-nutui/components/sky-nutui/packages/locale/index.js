"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_skyNutui_components_skyNutui_packages_locale_lang_zhCN = require("./lang/zh-CN.js");
const uni_modules_skyNutui_components_skyNutui_packages_locale_lang_enUS = require("./lang/en-US.js");
const uni_modules_skyNutui_components_skyNutui_packages_utils_util = require("../utils/util.js");
const langs = common_vendor.reactive({
  "zh-CN": new uni_modules_skyNutui_components_skyNutui_packages_locale_lang_zhCN.Lang(),
  "en-US": new uni_modules_skyNutui_components_skyNutui_packages_locale_lang_enUS.Lang()
});
class Locale {
  static languages() {
    return langs[this.currentLang.value];
  }
  static use(lang, newLanguages) {
    if (newLanguages) {
      langs[lang] = new newLanguages();
    }
    this.currentLang.value = lang;
  }
  static merge(lang, newLanguages) {
    if (newLanguages) {
      if (langs[lang]) {
        uni_modules_skyNutui_components_skyNutui_packages_utils_util.deepMerge(langs[lang], newLanguages);
      } else {
        this.use(lang, newLanguages);
      }
    }
  }
}
Locale.currentLang = common_vendor.ref("zh-CN");
exports.Locale = Locale;
