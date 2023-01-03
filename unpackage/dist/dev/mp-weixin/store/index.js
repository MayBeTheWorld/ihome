"use strict";
const common_vendor = require("../common/vendor.js");
const store = new common_vendor.index.Store({
  state: {
    isLogin: false
  },
  mutations: {
    storeLogin(state, payload) {
      state.isLogin = payload;
    }
  }
});
exports.store = store;
