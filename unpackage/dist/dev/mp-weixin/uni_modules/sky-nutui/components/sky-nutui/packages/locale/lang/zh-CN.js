"use strict";
const uni_modules_skyNutui_components_skyNutui_packages_locale_lang_baseLang = require("./baseLang.js");
class Lang extends uni_modules_skyNutui_components_skyNutui_packages_locale_lang_baseLang.BaseLang {
  constructor() {
    super(...arguments);
    this.save = "保存";
    this.confirm = "确认";
    this.cancel = "取消";
    this.done = "完成";
    this.noData = "暂无数据";
    this.placeholder = "请输入";
    this.select = "请选择";
    this.video = {
      errorTip: "视频加载失败",
      clickRetry: "点击重试"
    };
    this.fixednav = {
      activeText: "收起导航",
      unActiveText: "快速导航"
    };
    this.pagination = {
      prev: "上一页",
      next: "下一页"
    };
    this.calendaritem = {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日历选择",
      monthTitle: (year, month) => `${year}年${month}月`,
      today: "今天"
    };
    this.shortpassword = {
      title: "请输入密码",
      desc: "您使用了虚拟资产，请进行验证",
      tips: "忘记密码"
    };
    this.uploader = {
      ready: "准备完成",
      readyUpload: "准备上传",
      waitingUpload: "等待上传",
      uploading: "上传中",
      success: "上传成功",
      error: "上传失败"
    };
    this.countdown = {
      day: "天",
      hour: "时",
      minute: "分",
      second: "秒"
    };
    this.address = {
      selectRegion: "请选择所在地区",
      deliveryTo: "配送至",
      chooseAnotherAddress: "选择其他地址"
    };
    this.signature = {
      reSign: "重签",
      unSupportTpl: "对不起，当前浏览器不支持Canvas，无法使用本控件！"
    };
    this.ecard = {
      chooseText: "请选择电子卡面值",
      otherValueText: "其他面值",
      placeholder: "请输入1-5000整数"
    };
    this.timeselect = {
      pickupTime: "取件时间"
    };
    this.sku = {
      buyNow: "立即购买",
      buyNumber: "购买数量",
      addToCart: "加入购物车"
    };
    this.skuheader = {
      skuId: "商品编号"
    };
    this.addresslist = {
      addAddress: "新建地址",
      default: "默认"
    };
    this.comment = {
      complaintsText: "我要投诉",
      additionalReview: (day) => `购买${day}天后追评`,
      additionalImages: (length) => `${length}张追评图片`
    };
    this.infiniteloading = {
      loading: "加载中...",
      pullTxt: "松开刷新",
      loadMoreTxt: "哎呀，这里是底部了啦"
    };
    this.datepicker = {
      year: "年",
      month: "月",
      day: "日",
      hour: "时",
      min: "分",
      seconds: "秒"
    };
    this.audiooperate = {
      back: "倒退",
      start: "开始",
      pause: "暂停",
      forward: "快进",
      mute: "静音"
    };
  }
}
exports.Lang = Lang;
