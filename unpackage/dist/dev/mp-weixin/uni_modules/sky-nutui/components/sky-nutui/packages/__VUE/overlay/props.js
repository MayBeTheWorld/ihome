"use strict";
const overlayProps = {
  visible: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  duration: {
    type: [Number, String],
    default: 0.3
  },
  overlayClass: {
    type: String,
    default: ""
  },
  lockScroll: {
    type: Boolean,
    default: false
  },
  overlayStyle: {
    type: Object
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
};
exports.overlayProps = overlayProps;
