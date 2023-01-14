"use strict";
const uni_modules_skyNutui_components_skyNutui_packages_locale_lang_baseLang = require("./baseLang.js");
class Lang extends uni_modules_skyNutui_components_skyNutui_packages_locale_lang_baseLang.BaseLang {
  constructor() {
    super(...arguments);
    this.save = "Save";
    this.confirm = "Confirm";
    this.cancel = "Cancel";
    this.done = "Done";
    this.noData = "No Data";
    this.placeholder = "Placeholder";
    this.select = "Select";
    this.video = {
      errorTip: "Error Tip",
      clickRetry: "Click Retry"
    };
    this.fixednav = {
      activeText: "Close Nav",
      unActiveText: "Open Nav"
    };
    this.pagination = {
      prev: "Previous",
      next: "Next"
    };
    this.calendaritem = {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: (year, month) => `${year}/${month}`,
      today: "Today"
    };
    this.shortpassword = {
      title: "Please input a password",
      desc: "Verify",
      tips: "Forget password"
    };
    this.uploader = {
      ready: "Ready",
      readyUpload: "Ready to upload",
      waitingUpload: "Waiting for upload",
      uploading: "Uploading",
      success: "Upload successful",
      error: "Upload failed"
    };
    this.countdown = {
      day: " Day ",
      hour: " Hour ",
      minute: " Minute ",
      second: " Second "
    };
    this.address = {
      selectRegion: "Select Region",
      deliveryTo: "Delivery To",
      chooseAnotherAddress: "Choose Another Address"
    };
    this.signature = {
      reSign: "Re Sign",
      unSupportTpl: `Sorry, the current browser doesn't support canvas, so we can't use this control!`
    };
    this.ecard = {
      chooseText: "Select",
      otherValueText: "Other Value",
      placeholder: "Placeholder"
    };
    this.timeselect = {
      pickupTime: "Pickup Time"
    };
    this.sku = {
      buyNow: "Buy Now",
      buyNumber: "Buy Number",
      addToCart: "Add to Cart"
    };
    this.skuheader = {
      skuId: "Sku Number"
    };
    this.addresslist = {
      addAddress: "Add New Address",
      default: "default"
    };
    this.comment = {
      complaintsText: "I have a complaint",
      additionalReview: (day) => `Review after ${day} days of purchase`,
      additionalImages: (length) => `There are ${length} follow-up comments`
    };
    this.infiniteloading = {
      loading: "Loading...",
      pullTxt: "Loose to refresh",
      loadMoreTxt: "Oops, this is the bottom"
    };
    this.datepicker = {
      year: "Year",
      month: "Month",
      day: "Day",
      hour: "Hour",
      min: "Minute",
      seconds: "Second"
    };
    this.audiooperate = {
      back: "Back",
      start: "Start",
      pause: "Pause",
      forward: "Forward",
      mute: "Mute"
    };
  }
}
exports.Lang = Lang;
