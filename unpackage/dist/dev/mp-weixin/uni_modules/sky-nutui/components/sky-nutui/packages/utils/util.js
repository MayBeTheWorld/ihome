"use strict";
const isFunction = (val) => typeof val === "function";
const isObject = (val) => val !== null && typeof val === "object";
const getPropByPath = (obj, keyPath) => {
  try {
    return keyPath.split(".").reduce((prev, curr) => prev[curr], obj);
  } catch (error) {
    return "";
  }
};
const deepMerge = (target, newObj) => {
  Object.keys(newObj).forEach((key) => {
    let targetValue = target[key];
    let newObjValue = newObj[key];
    if (isObject(targetValue) && isObject(newObjValue)) {
      deepMerge(targetValue, newObjValue);
    } else {
      target[key] = newObjValue;
    }
  });
  return target;
};
exports.deepMerge = deepMerge;
exports.getPropByPath = getPropByPath;
exports.isFunction = isFunction;
