"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    userInfo: {
      isLogin: false,
      id: "",
      loginName: "",
      name: "",
      token: ""
    }
  },
  mutations: {
    storeLogin(state, res) {
      const temp = {
        isLogin: true,
        id: res.id,
        loginName: res.loginName,
        name: res.name,
        token: res.token
      };
      state.userInfo = Object.assign({}, state.userInfo, temp);
      common_vendor.index.setStorageSync("userInfo", JSON.stringify(state.userInfo));
    },
    storeLogout(state) {
      const temp = {
        isLogin: false,
        id: "",
        loginName: "",
        name: "",
        token: ""
      };
      state.userInfo = Object.assign({}, state.userInfo, temp);
      common_vendor.index.removeStorageSync("userInfo");
    }
  }
});
exports.store = store;
