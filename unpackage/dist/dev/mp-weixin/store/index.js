"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
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
