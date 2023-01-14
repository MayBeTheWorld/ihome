"use strict";
const pxCheck = (value) => {
  return isNaN(Number(value)) ? String(value) : `${value}px`;
};
exports.pxCheck = pxCheck;
