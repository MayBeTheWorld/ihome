// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/mixin/mixin.js
var mixin_default = {
  props: {
    customStyle: {
      type: [Object, String],
      default: () => ({})
    },
    customClass: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    },
    linkType: {
      type: String,
      default: "navigateTo"
    }
  },
  data() {
    return {};
  },
  onLoad() {
    this.$u.getRect = this.$uGetRect;
  },
  created() {
    this.$u.getRect = this.$uGetRect;
  },
  computed: {
    $u() {
      return uni.$u.deepMerge(uni.$u, {
        props: void 0,
        http: void 0,
        mixin: void 0
      });
    },
    bem() {
      return function(name, fixed, change) {
        const prefix = `u-${name}--`;
        const classes = {};
        if (fixed) {
          fixed.map((item) => {
            classes[prefix + this[item]] = true;
          });
        }
        if (change) {
          change.map((item) => {
            this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
          });
        }
        return Object.keys(classes);
      };
    }
  },
  methods: {
    openPage(urlKey = "url") {
      const url2 = this[urlKey];
      if (url2) {
        uni[this.linkType]({
          url: url2
        });
      }
    },
    $uGetRect(selector, all) {
      return new Promise((resolve) => {
        uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    },
    getParentData(parentName = "") {
      if (!this.parent)
        this.parent = {};
      this.parent = uni.$u.$parent.call(this, parentName);
      if (this.parent.children) {
        this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
      }
      if (this.parent && this.parentData) {
        Object.keys(this.parentData).map((key) => {
          this.parentData[key] = this.parent[key];
        });
      }
    },
    preventEvent(e) {
      e && typeof e.stopPropagation === "function" && e.stopPropagation();
    },
    noop(e) {
      this.preventEvent(e);
    }
  },
  onReachBottom() {
    uni.$emit("uOnReachBottom");
  },
  beforeDestroy() {
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      const childrenList = this.parent.children;
      childrenList.map((child, index) => {
        if (child === this) {
          childrenList.splice(index, 1);
        }
      });
    }
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/mixin/mpMixin.js
var mpMixin_default = {};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/luch-request/utils.js
var { toString } = Object.prototype;
function isArray(val) {
  return toString.call(val) === "[object Array]";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isURLSearchParams(val) {
  return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function deepMerge() {
  const result = {};
  function assignValue(val, key) {
    if (typeof result[key] === "object" && typeof val === "object") {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === "object") {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }
  for (let i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}
function isUndefined(val) {
  return typeof val === "undefined";
}

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/luch-request/helpers/buildURL.js
function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url2, params) {
  if (!params) {
    return url2;
  }
  let serializedParams;
  if (isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    const parts = [];
    forEach(params, (val, key) => {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (isArray(val)) {
        key = `${key}[]`;
      } else {
        val = [val];
      }
      forEach(val, (v) => {
        if (isDate(v)) {
          v = v.toISOString();
        } else if (isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(`${encode(key)}=${encode(v)}`);
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    const hashmarkIndex = url2.indexOf("#");
    if (hashmarkIndex !== -1) {
      url2 = url2.slice(0, hashmarkIndex);
    }
    url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url2;
}

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/luch-request/helpers/isAbsoluteURL.js
function isAbsoluteURL(url2) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
}

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/luch-request/helpers/combineURLs.js
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? `${baseURL.replace(/\/+$/, "")}/${relativeURL.replace(/^\/+/, "")}` : baseURL;
}

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/luch-request/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/luch-request/core/settle.js
function settle(resolve, reject, response) {
  const { validateStatus: validateStatus2 } = response.config;
  const status = response.statusCode;
  if (status && (!validateStatus2 || validateStatus2(status))) {
    resolve(response);
  } else {
    reject(response);
  }
}

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/luch-request/adapters/index.js
var mergeKeys = (keys, config2) => {
  const config = {};
  keys.forEach((prop) => {
    if (!isUndefined(config2[prop])) {
      config[prop] = config2[prop];
    }
  });
  return config;
};
var adapters_default = (config) => new Promise((resolve, reject) => {
  const fullPath = buildURL(buildFullPath(config.baseURL, config.url), config.params);
  const _config = {
    url: fullPath,
    header: config.header,
    complete: (response) => {
      config.fullPath = fullPath;
      response.config = config;
      try {
        if (typeof response.data === "string") {
          response.data = JSON.parse(response.data);
        }
      } catch (e) {
      }
      settle(resolve, reject, response);
    }
  };
  let requestTask;
  if (config.method === "UPLOAD") {
    delete _config.header["content-type"];
    delete _config.header["Content-Type"];
    const otherConfig = {
      filePath: config.filePath,
      name: config.name
    };
    const optionalKeys = [
      "files",
      "file",
      "timeout",
      "formData"
    ];
    requestTask = uni.uploadFile({ ..._config, ...otherConfig, ...mergeKeys(optionalKeys, config) });
  } else if (config.method === "DOWNLOAD") {
    if (!isUndefined(config.timeout)) {
      _config.timeout = config.timeout;
    }
    requestTask = uni.downloadFile(_config);
  } else {
    const optionalKeys = [
      "data",
      "method",
      "timeout",
      "dataType",
      "responseType",
      "withCredentials"
    ];
    requestTask = uni.request({ ..._config, ...mergeKeys(optionalKeys, config) });
  }
  if (config.getTask) {
    config.getTask(requestTask, config);
  }
});

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/luch-request/core/dispatchRequest.js
var dispatchRequest_default = (config) => adapters_default(config);

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/luch-request/core/InterceptorManager.js
function InterceptorManager() {
  this.handlers = [];
}
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled,
    rejected
  });
  return this.handlers.length - 1;
};
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager.prototype.forEach = function forEach2(fn) {
  this.handlers.forEach((h) => {
    if (h !== null) {
      fn(h);
    }
  });
};
var InterceptorManager_default = InterceptorManager;

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/luch-request/core/mergeConfig.js
var mergeKeys2 = (keys, globalsConfig, config2) => {
  const config = {};
  keys.forEach((prop) => {
    if (!isUndefined(config2[prop])) {
      config[prop] = config2[prop];
    } else if (!isUndefined(globalsConfig[prop])) {
      config[prop] = globalsConfig[prop];
    }
  });
  return config;
};
var mergeConfig_default = (globalsConfig, config2 = {}) => {
  const method = config2.method || globalsConfig.method || "GET";
  let config = {
    baseURL: globalsConfig.baseURL || "",
    method,
    url: config2.url || "",
    params: config2.params || {},
    custom: { ...globalsConfig.custom || {}, ...config2.custom || {} },
    header: deepMerge(globalsConfig.header || {}, config2.header || {})
  };
  const defaultToConfig2Keys = ["getTask", "validateStatus"];
  config = { ...config, ...mergeKeys2(defaultToConfig2Keys, globalsConfig, config2) };
  if (method === "DOWNLOAD") {
    if (!isUndefined(config2.timeout)) {
      config.timeout = config2.timeout;
    } else if (!isUndefined(globalsConfig.timeout)) {
      config.timeout = globalsConfig.timeout;
    }
  } else if (method === "UPLOAD") {
    delete config.header["content-type"];
    delete config.header["Content-Type"];
    const uploadKeys = [
      "files",
      "file",
      "filePath",
      "name",
      "timeout",
      "formData"
    ];
    uploadKeys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config[prop] = config2[prop];
      }
    });
    if (isUndefined(config.timeout) && !isUndefined(globalsConfig.timeout)) {
      config.timeout = globalsConfig.timeout;
    }
  } else {
    const defaultsKeys = [
      "data",
      "timeout",
      "dataType",
      "responseType",
      "withCredentials"
    ];
    config = { ...config, ...mergeKeys2(defaultsKeys, globalsConfig, config2) };
  }
  return config;
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/luch-request/core/defaults.js
var defaults_default = {
  baseURL: "",
  header: {},
  method: "GET",
  dataType: "json",
  responseType: "text",
  custom: {},
  timeout: 6e4,
  withCredentials: false,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/luch-request/utils/clone.js
var clone = function() {
  "use strict";
  function _instanceof(obj, type) {
    return type != null && obj instanceof type;
  }
  var nativeMap;
  try {
    nativeMap = Map;
  } catch (_) {
    nativeMap = function() {
    };
  }
  var nativeSet;
  try {
    nativeSet = Set;
  } catch (_) {
    nativeSet = function() {
    };
  }
  var nativePromise;
  try {
    nativePromise = Promise;
  } catch (_) {
    nativePromise = function() {
    };
  }
  function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
    if (typeof circular === "object") {
      depth = circular.depth;
      prototype = circular.prototype;
      includeNonEnumerable = circular.includeNonEnumerable;
      circular = circular.circular;
    }
    var allParents = [];
    var allChildren = [];
    var useBuffer = typeof Buffer != "undefined";
    if (typeof circular == "undefined")
      circular = true;
    if (typeof depth == "undefined")
      depth = Infinity;
    function _clone(parent2, depth2) {
      if (parent2 === null)
        return null;
      if (depth2 === 0)
        return parent2;
      var child;
      var proto;
      if (typeof parent2 != "object") {
        return parent2;
      }
      if (_instanceof(parent2, nativeMap)) {
        child = new nativeMap();
      } else if (_instanceof(parent2, nativeSet)) {
        child = new nativeSet();
      } else if (_instanceof(parent2, nativePromise)) {
        child = new nativePromise(function(resolve, reject) {
          parent2.then(function(value) {
            resolve(_clone(value, depth2 - 1));
          }, function(err) {
            reject(_clone(err, depth2 - 1));
          });
        });
      } else if (clone2.__isArray(parent2)) {
        child = [];
      } else if (clone2.__isRegExp(parent2)) {
        child = new RegExp(parent2.source, __getRegExpFlags(parent2));
        if (parent2.lastIndex)
          child.lastIndex = parent2.lastIndex;
      } else if (clone2.__isDate(parent2)) {
        child = new Date(parent2.getTime());
      } else if (useBuffer && Buffer.isBuffer(parent2)) {
        if (Buffer.from) {
          child = Buffer.from(parent2);
        } else {
          child = new Buffer(parent2.length);
          parent2.copy(child);
        }
        return child;
      } else if (_instanceof(parent2, Error)) {
        child = Object.create(parent2);
      } else {
        if (typeof prototype == "undefined") {
          proto = Object.getPrototypeOf(parent2);
          child = Object.create(proto);
        } else {
          child = Object.create(prototype);
          proto = prototype;
        }
      }
      if (circular) {
        var index = allParents.indexOf(parent2);
        if (index != -1) {
          return allChildren[index];
        }
        allParents.push(parent2);
        allChildren.push(child);
      }
      if (_instanceof(parent2, nativeMap)) {
        parent2.forEach(function(value, key) {
          var keyChild = _clone(key, depth2 - 1);
          var valueChild = _clone(value, depth2 - 1);
          child.set(keyChild, valueChild);
        });
      }
      if (_instanceof(parent2, nativeSet)) {
        parent2.forEach(function(value) {
          var entryChild = _clone(value, depth2 - 1);
          child.add(entryChild);
        });
      }
      for (var i in parent2) {
        var attrs = Object.getOwnPropertyDescriptor(parent2, i);
        if (attrs) {
          child[i] = _clone(parent2[i], depth2 - 1);
        }
        try {
          var objProperty = Object.getOwnPropertyDescriptor(parent2, i);
          if (objProperty.set === "undefined") {
            continue;
          }
          child[i] = _clone(parent2[i], depth2 - 1);
        } catch (e) {
          if (e instanceof TypeError) {
            continue;
          } else if (e instanceof ReferenceError) {
            continue;
          }
        }
      }
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(parent2);
        for (var i = 0; i < symbols.length; i++) {
          var symbol = symbols[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
          if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
            continue;
          }
          child[symbol] = _clone(parent2[symbol], depth2 - 1);
          Object.defineProperty(child, symbol, descriptor);
        }
      }
      if (includeNonEnumerable) {
        var allPropertyNames = Object.getOwnPropertyNames(parent2);
        for (var i = 0; i < allPropertyNames.length; i++) {
          var propertyName = allPropertyNames[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
          if (descriptor && descriptor.enumerable) {
            continue;
          }
          child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
          Object.defineProperty(child, propertyName, descriptor);
        }
      }
      return child;
    }
    return _clone(parent, depth);
  }
  clone2.clonePrototype = function clonePrototype(parent) {
    if (parent === null)
      return null;
    var c = function() {
    };
    c.prototype = parent;
    return new c();
  };
  function __objToStr(o) {
    return Object.prototype.toString.call(o);
  }
  clone2.__objToStr = __objToStr;
  function __isDate(o) {
    return typeof o === "object" && __objToStr(o) === "[object Date]";
  }
  clone2.__isDate = __isDate;
  function __isArray(o) {
    return typeof o === "object" && __objToStr(o) === "[object Array]";
  }
  clone2.__isArray = __isArray;
  function __isRegExp(o) {
    return typeof o === "object" && __objToStr(o) === "[object RegExp]";
  }
  clone2.__isRegExp = __isRegExp;
  function __getRegExpFlags(re) {
    var flags = "";
    if (re.global)
      flags += "g";
    if (re.ignoreCase)
      flags += "i";
    if (re.multiline)
      flags += "m";
    return flags;
  }
  clone2.__getRegExpFlags = __getRegExpFlags;
  return clone2;
}();
var clone_default = clone;

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/luch-request/core/Request.js
var Request = class {
  constructor(arg = {}) {
    if (!isPlainObject(arg)) {
      arg = {};
      console.warn("\u8BBE\u7F6E\u5168\u5C40\u53C2\u6570\u5FC5\u987B\u63A5\u6536\u4E00\u4E2AObject");
    }
    this.config = clone_default({ ...defaults_default, ...arg });
    this.interceptors = {
      request: new InterceptorManager_default(),
      response: new InterceptorManager_default()
    };
  }
  setConfig(f) {
    this.config = f(this.config);
  }
  middleware(config) {
    config = mergeConfig_default(this.config, config);
    const chain = [dispatchRequest_default, void 0];
    let promise2 = Promise.resolve(config);
    this.interceptors.request.forEach((interceptor) => {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    this.interceptors.response.forEach((interceptor) => {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });
    while (chain.length) {
      promise2 = promise2.then(chain.shift(), chain.shift());
    }
    return promise2;
  }
  request(config = {}) {
    return this.middleware(config);
  }
  get(url2, options = {}) {
    return this.middleware({
      url: url2,
      method: "GET",
      ...options
    });
  }
  post(url2, data, options = {}) {
    return this.middleware({
      url: url2,
      data,
      method: "POST",
      ...options
    });
  }
  put(url2, data, options = {}) {
    return this.middleware({
      url: url2,
      data,
      method: "PUT",
      ...options
    });
  }
  delete(url2, data, options = {}) {
    return this.middleware({
      url: url2,
      data,
      method: "DELETE",
      ...options
    });
  }
  connect(url2, data, options = {}) {
    return this.middleware({
      url: url2,
      data,
      method: "CONNECT",
      ...options
    });
  }
  head(url2, data, options = {}) {
    return this.middleware({
      url: url2,
      data,
      method: "HEAD",
      ...options
    });
  }
  options(url2, data, options = {}) {
    return this.middleware({
      url: url2,
      data,
      method: "OPTIONS",
      ...options
    });
  }
  trace(url2, data, options = {}) {
    return this.middleware({
      url: url2,
      data,
      method: "TRACE",
      ...options
    });
  }
  upload(url2, config = {}) {
    config.url = url2;
    config.method = "UPLOAD";
    return this.middleware(config);
  }
  download(url2, config = {}) {
    config.url = url2;
    config.method = "DOWNLOAD";
    return this.middleware(config);
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/luch-request/index.js
var luch_request_default = Request;

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/util/route.js
var Router = class {
  constructor() {
    this.config = {
      type: "navigateTo",
      url: "",
      delta: 1,
      params: {},
      animationType: "pop-in",
      animationDuration: 300,
      intercept: false
    };
    this.route = this.route.bind(this);
  }
  addRootPath(url2) {
    return url2[0] === "/" ? url2 : `/${url2}`;
  }
  mixinParam(url2, params) {
    url2 = url2 && this.addRootPath(url2);
    let query = "";
    if (/.*\/.*\?.*=.*/.test(url2)) {
      query = uni.$u.queryParams(params, false);
      return url2 += `&${query}`;
    }
    query = uni.$u.queryParams(params);
    return url2 += query;
  }
  async route(options = {}, params = {}) {
    let mergeConfig = {};
    if (typeof options === "string") {
      mergeConfig.url = this.mixinParam(options, params);
      mergeConfig.type = "navigateTo";
    } else {
      mergeConfig = uni.$u.deepMerge(options, this.config);
      mergeConfig.url = this.mixinParam(options.url, options.params);
    }
    if (mergeConfig.url === uni.$u.page())
      return;
    if (params.intercept) {
      this.config.intercept = params.intercept;
    }
    mergeConfig.params = params;
    mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
    if (typeof uni.$u.routeIntercept === "function") {
      const isNext = await new Promise((resolve, reject) => {
        uni.$u.routeIntercept(mergeConfig, resolve);
      });
      isNext && this.openPage(mergeConfig);
    } else {
      this.openPage(mergeConfig);
    }
  }
  openPage(config) {
    const {
      url: url2,
      type,
      delta,
      animationType,
      animationDuration
    } = config;
    if (config.type == "navigateTo" || config.type == "to") {
      uni.navigateTo({
        url: url2,
        animationType,
        animationDuration
      });
    }
    if (config.type == "redirectTo" || config.type == "redirect") {
      uni.redirectTo({
        url: url2
      });
    }
    if (config.type == "switchTab" || config.type == "tab") {
      uni.switchTab({
        url: url2
      });
    }
    if (config.type == "reLaunch" || config.type == "launch") {
      uni.reLaunch({
        url: url2
      });
    }
    if (config.type == "navigateBack" || config.type == "back") {
      uni.navigateBack({
        delta
      });
    }
  }
};
var route_default = new Router().route;

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/function/colorGradient.js
function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
  const startRGB = hexToRgb(startColor, false);
  const startR = startRGB[0];
  const startG = startRGB[1];
  const startB = startRGB[2];
  const endRGB = hexToRgb(endColor, false);
  const endR = endRGB[0];
  const endG = endRGB[1];
  const endB = endRGB[2];
  const sR = (endR - startR) / step;
  const sG = (endG - startG) / step;
  const sB = (endB - startB) / step;
  const colorArr = [];
  for (let i = 0; i < step; i++) {
    let hex = rgbToHex(`rgb(${Math.round(sR * i + startR)},${Math.round(sG * i + startG)},${Math.round(sB * i + startB)})`);
    if (i === 0)
      hex = rgbToHex(startColor);
    if (i === step - 1)
      hex = rgbToHex(endColor);
    colorArr.push(hex);
  }
  return colorArr;
}
function hexToRgb(sColor, str = true) {
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = String(sColor).toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = "#";
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    const sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
    }
    if (!str) {
      return sColorChange;
    }
    return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
  }
  if (/^(rgb|RGB)/.test(sColor)) {
    const arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map((val) => Number(val));
  }
  return sColor;
}
function rgbToHex(rgb) {
  const _this = rgb;
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    const aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    let strHex = "#";
    for (let i = 0; i < aColor.length; i++) {
      let hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? `${0}${hex}` : hex;
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  }
  if (reg.test(_this)) {
    const aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    }
    if (aNum.length === 3) {
      let numHex = "#";
      for (let i = 0; i < aNum.length; i += 1) {
        numHex += aNum[i] + aNum[i];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}
function colorToRgba(color6, alpha) {
  color6 = rgbToHex(color6);
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  let sColor = String(color6).toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = "#";
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    const sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
    }
    return `rgba(${sColorChange.join(",")},${alpha})`;
  }
  return sColor;
}
var colorGradient_default = {
  colorGradient,
  hexToRgb,
  rgbToHex,
  colorToRgba
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/function/test.js
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}
function mobile(value) {
  return /^1[23456789]\d{9}$/.test(value);
}
function url(value) {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
}
function date(value) {
  if (!value)
    return false;
  if (number(value))
    value = +value;
  return !/Invalid|NaN/.test(new Date(value).toString());
}
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}
function number(value) {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
}
function string(value) {
  return typeof value === "string";
}
function digits(value) {
  return /^\d+$/.test(value);
}
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
    value
  );
}
function carNo(value) {
  const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  }
  if (value.length === 8) {
    return xreg.test(value);
  }
  return false;
}
function amount(value) {
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}
function chinese(value) {
  const reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}
function enOrNum(value) {
  const reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}
function contains(value, param) {
  return value.indexOf(param) >= 0;
}
function range(value, param) {
  return value >= param[0] && value <= param[1];
}
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}
function landline(value) {
  const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}
function empty(value) {
  switch (typeof value) {
    case "undefined":
      return true;
    case "string":
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
        return true;
      break;
    case "boolean":
      if (!value)
        return true;
      break;
    case "number":
      if (value === 0 || isNaN(value))
        return true;
      break;
    case "object":
      if (value === null || value.length === 0)
        return true;
      for (const i in value) {
        return false;
      }
      return true;
  }
  return false;
}
function jsonString(value) {
  if (typeof value === "string") {
    try {
      const obj = JSON.parse(value);
      if (typeof obj === "object" && obj) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  return false;
}
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  }
  return Object.prototype.toString.call(value) === "[object Array]";
}
function object(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
function code(value, len = 6) {
  return new RegExp(`^\\d{${len}}$`).test(value);
}
function func(value) {
  return typeof value === "function";
}
function promise(value) {
  return object(value) && func(value.then) && func(value.catch);
}
function image(value) {
  const newValue = value.split("?")[0];
  const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
  return IMAGE_REGEXP.test(newValue);
}
function video(value) {
  const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
  return VIDEO_REGEXP.test(value);
}
function regExp(o) {
  return o && Object.prototype.toString.call(o) === "[object RegExp]";
}
var test_default = {
  email,
  mobile,
  url,
  date,
  dateISO,
  number,
  digits,
  idCard,
  carNo,
  amount,
  chinese,
  letter,
  enOrNum,
  contains,
  range,
  rangeLength,
  empty,
  isEmpty: empty,
  jsonString,
  landline,
  object,
  array,
  code,
  func,
  promise,
  video,
  image,
  regExp,
  string
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/function/debounce.js
var timeout = null;
function debounce(func2, wait = 500, immediate = false) {
  if (timeout !== null)
    clearTimeout(timeout);
  if (immediate) {
    const callNow = !timeout;
    timeout = setTimeout(() => {
      timeout = null;
    }, wait);
    if (callNow)
      typeof func2 === "function" && func2();
  } else {
    timeout = setTimeout(() => {
      typeof func2 === "function" && func2();
    }, wait);
  }
}
var debounce_default = debounce;

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/function/throttle.js
var timer;
var flag;
function throttle(func2, wait = 500, immediate = true) {
  if (immediate) {
    if (!flag) {
      flag = true;
      typeof func2 === "function" && func2();
      timer = setTimeout(() => {
        flag = false;
      }, wait);
    }
  } else if (!flag) {
    flag = true;
    timer = setTimeout(() => {
      flag = false;
      typeof func2 === "function" && func2();
    }, wait);
  }
}
var throttle_default = throttle;

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/function/digit.js
var _boundaryCheckingState = true;
function strip(num, precision = 15) {
  return +parseFloat(Number(num).toPrecision(precision));
}
function digitLength(num) {
  const eSplit = num.toString().split(/[eE]/);
  const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
  return len > 0 ? len : 0;
}
function float2Fixed(num) {
  if (num.toString().indexOf("e") === -1) {
    return Number(num.toString().replace(".", ""));
  }
  const dLen = digitLength(num);
  return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
}
function checkBoundary(num) {
  if (_boundaryCheckingState) {
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
      console.warn(`${num} \u8D85\u51FA\u4E86\u7CBE\u5EA6\u9650\u5236\uFF0C\u7ED3\u679C\u53EF\u80FD\u4E0D\u6B63\u786E`);
    }
  }
}
function iteratorOperation(arr, operation) {
  const [num1, num2, ...others] = arr;
  let res = operation(num1, num2);
  others.forEach((num) => {
    res = operation(res, num);
  });
  return res;
}
function times(...nums) {
  if (nums.length > 2) {
    return iteratorOperation(nums, times);
  }
  const [num1, num2] = nums;
  const num1Changed = float2Fixed(num1);
  const num2Changed = float2Fixed(num2);
  const baseNum = digitLength(num1) + digitLength(num2);
  const leftValue = num1Changed * num2Changed;
  checkBoundary(leftValue);
  return leftValue / Math.pow(10, baseNum);
}
function divide(...nums) {
  if (nums.length > 2) {
    return iteratorOperation(nums, divide);
  }
  const [num1, num2] = nums;
  const num1Changed = float2Fixed(num1);
  const num2Changed = float2Fixed(num2);
  checkBoundary(num1Changed);
  checkBoundary(num2Changed);
  return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}
function round(num, ratio) {
  const base = Math.pow(10, ratio);
  let result = divide(Math.round(Math.abs(times(num, base))), base);
  if (num < 0 && result !== 0) {
    result = times(result, -1);
  }
  return result;
}

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/function/index.js
function range2(min = 0, max = 0, value = 0) {
  return Math.max(min, Math.min(max, Number(value)));
}
function getPx(value, unit = false) {
  if (test_default.number(value)) {
    return unit ? `${value}px` : Number(value);
  }
  if (/(rpx|upx)$/.test(value)) {
    return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)));
  }
  return unit ? `${parseInt(value)}px` : parseInt(value);
}
function sleep(value = 30) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, value);
  });
}
function os() {
  return uni.getSystemInfoSync().platform.toLowerCase();
}
function sys() {
  return uni.getSystemInfoSync();
}
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    const gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  }
  return 0;
}
function guid(len = 32, firstU = true, radix = null) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  const uuid = [];
  radix = radix || chars.length;
  if (len) {
    for (let i = 0; i < len; i++)
      uuid[i] = chars[0 | Math.random() * radix];
  } else {
    let r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";
    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
      }
    }
  }
  if (firstU) {
    uuid.shift();
    return `u${uuid.join("")}`;
  }
  return uuid.join("");
}
function $parent(name = void 0) {
  let parent = this.$parent;
  while (parent) {
    if (parent.$options && parent.$options.name !== name) {
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}
function addStyle(customStyle, target = "object") {
  if (test_default.empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
    return customStyle;
  }
  if (target === "object") {
    customStyle = trim(customStyle);
    const styleArray = customStyle.split(";");
    const style = {};
    for (let i = 0; i < styleArray.length; i++) {
      if (styleArray[i]) {
        const item = styleArray[i].split(":");
        style[trim(item[0])] = trim(item[1]);
      }
    }
    return style;
  }
  let string2 = "";
  for (const i in customStyle) {
    const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
    string2 += `${key}:${customStyle[i]};`;
  }
  return trim(string2);
}
function addUnit(value = "auto", unit = "") {
  if (!unit) {
    unit = uni.$u.config.unit || "px";
  }
  value = String(value);
  return test_default.number(value) ? `${value}${unit}` : value;
}
function deepClone(obj) {
  if ([null, void 0, NaN, false].includes(obj))
    return obj;
  if (typeof obj !== "object" && typeof obj !== "function") {
    return obj;
  }
  const o = test_default.array(obj) ? [] : {};
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}
function deepMerge2(target = {}, source = {}) {
  target = deepClone(target);
  if (typeof target !== "object" || typeof source !== "object")
    return false;
  for (const prop in source) {
    if (!source.hasOwnProperty(prop))
      continue;
    if (prop in target) {
      if (typeof target[prop] !== "object") {
        target[prop] = source[prop];
      } else if (typeof source[prop] !== "object") {
        target[prop] = source[prop];
      } else if (target[prop].concat && source[prop].concat) {
        target[prop] = target[prop].concat(source[prop]);
      } else {
        target[prop] = deepMerge2(target[prop], source[prop]);
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}
function error(err) {
  if (true) {
    console.error(`uView\u63D0\u793A\uFF1A${err}`);
  }
}
function randomArray(array2 = []) {
  return array2.sort(() => Math.random() - 0.5);
}
if (!String.prototype.padStart) {
  String.prototype.padStart = function(maxLength, fillString = " ") {
    if (Object.prototype.toString.call(fillString) !== "[object String]") {
      throw new TypeError(
        "fillString must be String"
      );
    }
    const str = this;
    if (str.length >= maxLength)
      return String(str);
    const fillLength = maxLength - str.length;
    let times2 = Math.ceil(fillLength / fillString.length);
    while (times2 >>= 1) {
      fillString += fillString;
      if (times2 === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}
function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
  let date2;
  if (!dateTime) {
    date2 = new Date();
  } else if (/^\d{10}$/.test(dateTime.toString().trim())) {
    date2 = new Date(dateTime * 1e3);
  } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
    date2 = new Date(Number(dateTime));
  } else {
    date2 = new Date(
      typeof dateTime === "string" ? dateTime.replace(/-/g, "/") : dateTime
    );
  }
  const timeSource = {
    "y": date2.getFullYear().toString(),
    "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
    "d": date2.getDate().toString().padStart(2, "0"),
    "h": date2.getHours().toString().padStart(2, "0"),
    "M": date2.getMinutes().toString().padStart(2, "0"),
    "s": date2.getSeconds().toString().padStart(2, "0")
  };
  for (const key in timeSource) {
    const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
    if (ret) {
      const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
      formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
    }
  }
  return formatStr;
}
function timeFrom(timestamp = null, format = "yyyy-mm-dd") {
  if (timestamp == null)
    timestamp = Number(new Date());
  timestamp = parseInt(timestamp);
  if (timestamp.toString().length == 10)
    timestamp *= 1e3;
  let timer2 = new Date().getTime() - timestamp;
  timer2 = parseInt(timer2 / 1e3);
  let tips = "";
  switch (true) {
    case timer2 < 300:
      tips = "\u521A\u521A";
      break;
    case (timer2 >= 300 && timer2 < 3600):
      tips = `${parseInt(timer2 / 60)}\u5206\u949F\u524D`;
      break;
    case (timer2 >= 3600 && timer2 < 86400):
      tips = `${parseInt(timer2 / 3600)}\u5C0F\u65F6\u524D`;
      break;
    case (timer2 >= 86400 && timer2 < 2592e3):
      tips = `${parseInt(timer2 / 86400)}\u5929\u524D`;
      break;
    default:
      if (format === false) {
        if (timer2 >= 2592e3 && timer2 < 365 * 86400) {
          tips = `${parseInt(timer2 / (86400 * 30))}\u4E2A\u6708\u524D`;
        } else {
          tips = `${parseInt(timer2 / (86400 * 365))}\u5E74\u524D`;
        }
      } else {
        tips = timeFormat(timestamp, format);
      }
  }
  return tips;
}
function trim(str, pos = "both") {
  str = String(str);
  if (pos == "both") {
    return str.replace(/^\s+|\s+$/g, "");
  }
  if (pos == "left") {
    return str.replace(/^\s*/, "");
  }
  if (pos == "right") {
    return str.replace(/(\s*$)/g, "");
  }
  if (pos == "all") {
    return str.replace(/\s+/g, "");
  }
  return str;
}
function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
  const prefix = isPrefix ? "?" : "";
  const _result = [];
  if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
    arrayFormat = "brackets";
  for (const key in data) {
    const value = data[key];
    if (["", void 0, null].indexOf(value) >= 0) {
      continue;
    }
    if (value.constructor === Array) {
      switch (arrayFormat) {
        case "indices":
          for (let i = 0; i < value.length; i++) {
            _result.push(`${key}[${i}]=${value[i]}`);
          }
          break;
        case "brackets":
          value.forEach((_value) => {
            _result.push(`${key}[]=${_value}`);
          });
          break;
        case "repeat":
          value.forEach((_value) => {
            _result.push(`${key}=${_value}`);
          });
          break;
        case "comma":
          let commaStr = "";
          value.forEach((_value) => {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(`${key}=${commaStr}`);
          break;
        default:
          value.forEach((_value) => {
            _result.push(`${key}[]=${_value}`);
          });
      }
    } else {
      _result.push(`${key}=${value}`);
    }
  }
  return _result.length ? prefix + _result.join("&") : "";
}
function toast(title, duration = 2e3) {
  uni.showToast({
    title: String(title),
    icon: "none",
    duration
  });
}
function type2icon(type = "success", fill = false) {
  if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1)
    type = "success";
  let iconName = "";
  switch (type) {
    case "primary":
      iconName = "info-circle";
      break;
    case "info":
      iconName = "info-circle";
      break;
    case "error":
      iconName = "close-circle";
      break;
    case "warning":
      iconName = "error-circle";
      break;
    case "success":
      iconName = "checkmark-circle";
      break;
    default:
      iconName = "checkmark-circle";
  }
  if (fill)
    iconName += "-fill";
  return iconName;
}
function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
  number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
  const n = !isFinite(+number2) ? 0 : +number2;
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
  const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
  let s = "";
  s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
  const re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, `$1${sep}$2`);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}
function getDuration(value, unit = true) {
  const valueNum = parseInt(value);
  if (unit) {
    if (/s$/.test(value))
      return value;
    return value > 30 ? `${value}ms` : `${value}s`;
  }
  if (/ms$/.test(value))
    return valueNum;
  if (/s$/.test(value))
    return valueNum > 30 ? valueNum : valueNum * 1e3;
  return valueNum;
}
function padZero(value) {
  return `00${value}`.slice(-2);
}
function formValidate(instance, event) {
  const formItem = uni.$u.$parent.call(instance, "u-form-item");
  const form = uni.$u.$parent.call(instance, "u-form");
  if (formItem && form) {
    form.validateField(formItem.prop, () => {
    }, event);
  }
}
function getProperty(obj, key) {
  if (!obj) {
    return;
  }
  if (typeof key !== "string" || key === "") {
    return "";
  }
  if (key.indexOf(".") !== -1) {
    const keys = key.split(".");
    let firstObj = obj[keys[0]] || {};
    for (let i = 1; i < keys.length; i++) {
      if (firstObj) {
        firstObj = firstObj[keys[i]];
      }
    }
    return firstObj;
  }
  return obj[key];
}
function setProperty(obj, key, value) {
  if (!obj) {
    return;
  }
  const inFn = function(_obj, keys, v) {
    if (keys.length === 1) {
      _obj[keys[0]] = v;
      return;
    }
    while (keys.length > 1) {
      const k = keys[0];
      if (!_obj[k] || typeof _obj[k] !== "object") {
        _obj[k] = {};
      }
      const key2 = keys.shift();
      inFn(_obj[k], keys, v);
    }
  };
  if (typeof key !== "string" || key === "") {
  } else if (key.indexOf(".") !== -1) {
    const keys = key.split(".");
    inFn(obj, keys, value);
  } else {
    obj[key] = value;
  }
}
function page() {
  const pages2 = getCurrentPages();
  return `/${pages2[pages2.length - 1].route || ""}`;
}
function pages() {
  const pages2 = getCurrentPages();
  return pages2;
}
function setConfig({
  props = {},
  config = {},
  color: color6 = {},
  zIndex = {}
}) {
  const {
    deepMerge: deepMerge3
  } = uni.$u;
  uni.$u.config = deepMerge3(uni.$u.config, config);
  uni.$u.props = deepMerge3(uni.$u.props, props);
  uni.$u.color = deepMerge3(uni.$u.color, color6);
  uni.$u.zIndex = deepMerge3(uni.$u.zIndex, zIndex);
}
var function_default = {
  range: range2,
  getPx,
  sleep,
  os,
  sys,
  random,
  guid,
  $parent,
  addStyle,
  addUnit,
  deepClone,
  deepMerge: deepMerge2,
  error,
  randomArray,
  timeFormat,
  timeFrom,
  trim,
  queryParams,
  toast,
  type2icon,
  priceFormat,
  getDuration,
  padZero,
  formValidate,
  getProperty,
  setProperty,
  page,
  pages,
  setConfig
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/config.js
var version = "3.1.6";
if (true) {
  console.log(`
 %c uview-plus V${version} %c https://uiadmin.net/uview-plus 

`, "color: #ffffff; background: #3c9cff; padding:5px 0;", "color: #3c9cff;background: #ffffff; padding:5px 0;");
}
var config_default = {
  v: version,
  version,
  type: [
    "primary",
    "success",
    "info",
    "error",
    "warning"
  ],
  color: {
    "u-primary": "#2979ff",
    "u-warning": "#ff9900",
    "u-success": "#19be6b",
    "u-error": "#fa3534",
    "u-info": "#909399",
    "u-main-color": "#303133",
    "u-content-color": "#606266",
    "u-tips-color": "#909399",
    "u-light-color": "#c0c4cc"
  },
  unit: "px"
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/actionSheet.js
var actionSheet_default = {
  actionSheet: {
    show: false,
    title: "",
    description: "",
    actions: () => [],
    index: "",
    cancelText: "",
    closeOnClickAction: true,
    safeAreaInsetBottom: true,
    openType: "",
    closeOnClickOverlay: true,
    round: 0
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/album.js
var album_default = {
  album: {
    urls: () => [],
    keyName: "",
    singleSize: 180,
    multipleSize: 70,
    space: 6,
    singleMode: "scaleToFill",
    multipleMode: "aspectFill",
    maxCount: 9,
    previewFullImage: true,
    rowCount: 3,
    showMore: true
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/alert.js
var alert_default = {
  alert: {
    title: "",
    type: "warning",
    description: "",
    closable: false,
    showIcon: false,
    effect: "light",
    center: false,
    fontSize: 14
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/avatar.js
var avatar_default = {
  avatar: {
    src: "",
    shape: "circle",
    size: 40,
    mode: "scaleToFill",
    text: "",
    bgColor: "#c0c4cc",
    color: "#ffffff",
    fontSize: 18,
    icon: "",
    mpAvatar: false,
    randomBgColor: false,
    defaultUrl: "",
    colorIndex: "",
    name: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/avatarGroup.js
var avatarGroup_default = {
  avatarGroup: {
    urls: () => [],
    maxCount: 5,
    shape: "circle",
    mode: "scaleToFill",
    showMore: true,
    size: 40,
    keyName: "",
    gap: 0.5,
    extraValue: 0
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/backtop.js
var backtop_default = {
  backtop: {
    mode: "circle",
    icon: "arrow-upward",
    text: "",
    duration: 100,
    scrollTop: 0,
    top: 400,
    bottom: 100,
    right: 20,
    zIndex: 9,
    iconStyle: () => ({
      color: "#909399",
      fontSize: "19px"
    })
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/badge.js
var badge_default = {
  badge: {
    isDot: false,
    value: "",
    show: true,
    max: 999,
    type: "error",
    showZero: false,
    bgColor: null,
    color: null,
    shape: "circle",
    numberType: "overflow",
    offset: () => [],
    inverted: false,
    absolute: false
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/button.js
var button_default = {
  button: {
    hairline: false,
    type: "info",
    size: "normal",
    shape: "square",
    plain: false,
    disabled: false,
    loading: false,
    loadingText: "",
    loadingMode: "spinner",
    loadingSize: 15,
    openType: "",
    formType: "",
    appParameter: "",
    hoverStopPropagation: true,
    lang: "en",
    sessionFrom: "",
    sendMessageTitle: "",
    sendMessagePath: "",
    sendMessageImg: "",
    showMessageCard: false,
    dataName: "",
    throttleTime: 0,
    hoverStartTime: 0,
    hoverStayTime: 200,
    text: "",
    icon: "",
    iconColor: "",
    color: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/calendar.js
var calendar_default = {
  calendar: {
    title: "\u65E5\u671F\u9009\u62E9",
    showTitle: true,
    showSubtitle: true,
    mode: "single",
    startText: "\u5F00\u59CB",
    endText: "\u7ED3\u675F",
    customList: () => [],
    color: "#3c9cff",
    minDate: 0,
    maxDate: 0,
    defaultDate: null,
    maxCount: Number.MAX_SAFE_INTEGER,
    rowHeight: 56,
    formatter: null,
    showLunar: false,
    showMark: true,
    confirmText: "\u786E\u5B9A",
    confirmDisabledText: "\u786E\u5B9A",
    show: false,
    closeOnClickOverlay: false,
    readonly: false,
    showConfirm: true,
    maxRange: Number.MAX_SAFE_INTEGER,
    rangePrompt: "",
    showRangePrompt: true,
    allowSameDay: false,
    round: 0,
    monthNum: 3
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/carKeyboard.js
var carKeyboard_default = {
  carKeyboard: {
    random: false
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/cell.js
var cell_default = {
  cell: {
    customClass: "",
    title: "",
    label: "",
    value: "",
    icon: "",
    disabled: false,
    border: true,
    center: false,
    url: "",
    linkType: "navigateTo",
    clickable: false,
    isLink: false,
    required: false,
    arrowDirection: "",
    iconStyle: {},
    rightIconStyle: {},
    rightIcon: "arrow-right",
    titleStyle: {},
    size: "",
    stop: true,
    name: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/cellGroup.js
var cellGroup_default = {
  cellGroup: {
    title: "",
    border: true,
    customStyle: {}
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/checkbox.js
var checkbox_default = {
  checkbox: {
    name: "",
    shape: "",
    size: "",
    checkbox: false,
    disabled: "",
    activeColor: "",
    inactiveColor: "",
    iconSize: "",
    iconColor: "",
    label: "",
    labelSize: "",
    labelColor: "",
    labelDisabled: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/checkboxGroup.js
var checkboxGroup_default = {
  checkboxGroup: {
    name: "",
    value: () => [],
    shape: "square",
    disabled: false,
    activeColor: "#2979ff",
    inactiveColor: "#c8c9cc",
    size: 18,
    placement: "row",
    labelSize: 14,
    labelColor: "#303133",
    labelDisabled: false,
    iconColor: "#ffffff",
    iconSize: 12,
    iconPlacement: "left",
    borderBottom: false
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/circleProgress.js
var circleProgress_default = {
  circleProgress: {
    percentage: 30
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/code.js
var code_default = {
  code: {
    seconds: 60,
    startText: "\u83B7\u53D6\u9A8C\u8BC1\u7801",
    changeText: "X\u79D2\u91CD\u65B0\u83B7\u53D6",
    endText: "\u91CD\u65B0\u83B7\u53D6",
    keepRunning: false,
    uniqueKey: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/codeInput.js
var codeInput_default = {
  codeInput: {
    adjustPosition: true,
    maxlength: 6,
    dot: false,
    mode: "box",
    hairline: false,
    space: 10,
    value: "",
    focus: false,
    bold: false,
    color: "#606266",
    fontSize: 18,
    size: 35,
    disabledKeyboard: false,
    borderColor: "#c9cacc",
    disabledDot: true
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/col.js
var col_default = {
  col: {
    span: 12,
    offset: 0,
    justify: "start",
    align: "stretch",
    textAlign: "left"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/collapse.js
var collapse_default = {
  collapse: {
    value: null,
    accordion: false,
    border: true
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/collapseItem.js
var collapseItem_default = {
  collapseItem: {
    title: "",
    value: "",
    label: "",
    disabled: false,
    isLink: true,
    clickable: true,
    border: true,
    align: "left",
    name: "",
    icon: "",
    duration: 300
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/columnNotice.js
var columnNotice_default = {
  columnNotice: {
    text: "",
    icon: "volume",
    mode: "",
    color: "#f9ae3d",
    bgColor: "#fdf6ec",
    fontSize: 14,
    speed: 80,
    step: false,
    duration: 1500,
    disableTouch: true
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/countDown.js
var countDown_default = {
  countDown: {
    time: 0,
    format: "HH:mm:ss",
    autoStart: true,
    millisecond: false
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/countTo.js
var countTo_default = {
  countTo: {
    startVal: 0,
    endVal: 0,
    duration: 2e3,
    autoplay: true,
    decimals: 0,
    useEasing: true,
    decimal: ".",
    color: "#606266",
    fontSize: 22,
    bold: false,
    separator: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/datetimePicker.js
var datetimePicker_default = {
  datetimePicker: {
    show: false,
    showToolbar: true,
    value: "",
    title: "",
    mode: "datetime",
    maxDate: new Date(new Date().getFullYear() + 10, 0, 1).getTime(),
    minDate: new Date(new Date().getFullYear() - 10, 0, 1).getTime(),
    minHour: 0,
    maxHour: 23,
    minMinute: 0,
    maxMinute: 59,
    filter: null,
    formatter: null,
    loading: false,
    itemHeight: 44,
    cancelText: "\u53D6\u6D88",
    confirmText: "\u786E\u8BA4",
    cancelColor: "#909193",
    confirmColor: "#3c9cff",
    visibleItemCount: 5,
    closeOnClickOverlay: false,
    defaultIndex: () => []
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/divider.js
var divider_default = {
  divider: {
    dashed: false,
    hairline: true,
    dot: false,
    textPosition: "center",
    text: "",
    textSize: 14,
    textColor: "#909399",
    lineColor: "#dcdfe6"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/empty.js
var empty_default = {
  empty: {
    icon: "",
    text: "",
    textColor: "#c0c4cc",
    textSize: 14,
    iconColor: "#c0c4cc",
    iconSize: 90,
    mode: "data",
    width: 160,
    height: 160,
    show: true,
    marginTop: 0
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/form.js
var form_default = {
  form: {
    model: () => ({}),
    rules: () => ({}),
    errorType: "message",
    borderBottom: true,
    labelPosition: "left",
    labelWidth: 45,
    labelAlign: "left",
    labelStyle: () => ({})
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/formItem.js
var formItem_default = {
  formItem: {
    label: "",
    prop: "",
    borderBottom: "",
    labelWidth: "",
    rightIcon: "",
    leftIcon: "",
    required: false,
    leftIconStyle: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/gap.js
var gap_default = {
  gap: {
    bgColor: "transparent",
    height: 20,
    marginTop: 0,
    marginBottom: 0,
    customStyle: {}
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/grid.js
var grid_default = {
  grid: {
    col: 3,
    border: false,
    align: "left"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/gridItem.js
var gridItem_default = {
  gridItem: {
    name: null,
    bgColor: "transparent"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/icon.js
var {
  color
} = config_default;
var icon_default = {
  icon: {
    name: "",
    color: color["u-content-color"],
    size: "16px",
    bold: false,
    index: "",
    hoverClass: "",
    customPrefix: "uicon",
    label: "",
    labelPos: "right",
    labelSize: "15px",
    labelColor: color["u-content-color"],
    space: "3px",
    imgMode: "",
    width: "",
    height: "",
    top: 0,
    stop: false
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/image.js
var image_default = {
  image: {
    src: "",
    mode: "aspectFill",
    width: "300",
    height: "225",
    shape: "square",
    radius: 0,
    lazyLoad: true,
    showMenuByLongpress: true,
    loadingIcon: "photo",
    errorIcon: "error-circle",
    showLoading: true,
    showError: true,
    fade: true,
    webp: false,
    duration: 500,
    bgColor: "#f3f4f6"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/indexAnchor.js
var indexAnchor_default = {
  indexAnchor: {
    text: "",
    color: "#606266",
    size: 14,
    bgColor: "#dedede",
    height: 32
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/indexList.js
var indexList_default = {
  indexList: {
    inactiveColor: "#606266",
    activeColor: "#5677fc",
    indexList: () => [],
    sticky: true,
    customNavHeight: 0
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/input.js
var input_default = {
  input: {
    value: "",
    type: "text",
    fixed: false,
    disabled: false,
    disabledColor: "#f5f7fa",
    clearable: false,
    password: false,
    maxlength: -1,
    placeholder: null,
    placeholderClass: "input-placeholder",
    placeholderStyle: "color: #c0c4cc",
    showWordLimit: false,
    confirmType: "done",
    confirmHold: false,
    holdKeyboard: false,
    focus: false,
    autoBlur: false,
    disableDefaultPadding: false,
    cursor: -1,
    cursorSpacing: 30,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    inputAlign: "left",
    fontSize: "15px",
    color: "#303133",
    prefixIcon: "",
    prefixIconStyle: "",
    suffixIcon: "",
    suffixIconStyle: "",
    border: "surround",
    readonly: false,
    shape: "square",
    formatter: null
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/keyboard.js
var keyboard_default = {
  keyboard: {
    mode: "number",
    dotDisabled: false,
    tooltip: true,
    showTips: true,
    tips: "",
    showCancel: true,
    showConfirm: true,
    random: false,
    safeAreaInsetBottom: true,
    closeOnClickOverlay: true,
    show: false,
    overlay: true,
    zIndex: 10075,
    cancelText: "\u53D6\u6D88",
    confirmText: "\u786E\u5B9A",
    autoChange: false
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/line.js
var line_default = {
  line: {
    color: "#d6d7d9",
    length: "100%",
    direction: "row",
    hairline: true,
    margin: 0,
    dashed: false
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/lineProgress.js
var lineProgress_default = {
  lineProgress: {
    activeColor: "#19be6b",
    inactiveColor: "#ececec",
    percentage: 0,
    showText: true,
    height: 12
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/link.js
var {
  color: color2
} = config_default;
var link_default = {
  link: {
    color: color2["u-primary"],
    fontSize: 15,
    underLine: false,
    href: "",
    mpTips: "\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u6253\u5F00",
    lineColor: "",
    text: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/list.js
var list_default = {
  list: {
    showScrollbar: false,
    lowerThreshold: 50,
    upperThreshold: 0,
    scrollTop: 0,
    offsetAccuracy: 10,
    enableFlex: false,
    pagingEnabled: false,
    scrollable: true,
    scrollIntoView: "",
    scrollWithAnimation: false,
    enableBackToTop: false,
    height: 0,
    width: 0,
    preLoadScreen: 1
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/listItem.js
var listItem_default = {
  listItem: {
    anchor: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/loadingIcon.js
var {
  color: color3
} = config_default;
var loadingIcon_default = {
  loadingIcon: {
    show: true,
    color: color3["u-tips-color"],
    textColor: color3["u-tips-color"],
    vertical: false,
    mode: "spinner",
    size: 24,
    textSize: 15,
    text: "",
    timingFunction: "ease-in-out",
    duration: 1200,
    inactiveColor: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/loadingPage.js
var loadingPage_default = {
  loadingPage: {
    loadingText: "\u6B63\u5728\u52A0\u8F7D",
    image: "",
    loadingMode: "circle",
    loading: false,
    bgColor: "#ffffff",
    color: "#C8C8C8",
    fontSize: 19,
    iconSize: 28,
    loadingColor: "#C8C8C8"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/loadmore.js
var loadmore_default = {
  loadmore: {
    status: "loadmore",
    bgColor: "transparent",
    icon: true,
    fontSize: 14,
    iconSize: 17,
    color: "#606266",
    loadingIcon: "spinner",
    loadmoreText: "\u52A0\u8F7D\u66F4\u591A",
    loadingText: "\u6B63\u5728\u52A0\u8F7D...",
    nomoreText: "\u6CA1\u6709\u66F4\u591A\u4E86",
    isDot: false,
    iconColor: "#b7b7b7",
    marginTop: 10,
    marginBottom: 10,
    height: "auto",
    line: false,
    lineColor: "#E6E8EB",
    dashed: false
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/modal.js
var modal_default = {
  modal: {
    show: false,
    title: "",
    content: "",
    confirmText: "\u786E\u8BA4",
    cancelText: "\u53D6\u6D88",
    showConfirmButton: true,
    showCancelButton: false,
    confirmColor: "#2979ff",
    cancelColor: "#606266",
    buttonReverse: false,
    zoom: true,
    asyncClose: false,
    closeOnClickOverlay: false,
    negativeTop: 0,
    width: "650rpx",
    confirmButtonShape: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/color.js
var color4 = {
  primary: "#3c9cff",
  info: "#909399",
  default: "#909399",
  warning: "#f9ae3d",
  error: "#f56c6c",
  success: "#5ac725",
  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed"
};
var color_default = color4;

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/navbar.js
var navbar_default = {
  navbar: {
    safeAreaInsetTop: true,
    placeholder: false,
    fixed: true,
    border: false,
    leftIcon: "arrow-left",
    leftText: "",
    rightText: "",
    rightIcon: "",
    title: "",
    bgColor: "#ffffff",
    titleWidth: "400rpx",
    height: "44px",
    leftIconSize: 20,
    leftIconColor: color_default.mainColor,
    autoBack: false,
    titleStyle: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/noNetwork.js
var noNetwork_default = {
  noNetwork: {
    tips: "\u54CE\u5440\uFF0C\u7F51\u7EDC\u4FE1\u53F7\u4E22\u5931",
    zIndex: "",
    image: "data:image/png;base64,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"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/noticeBar.js
var noticeBar_default = {
  noticeBar: {
    text: () => [],
    direction: "row",
    step: false,
    icon: "volume",
    mode: "",
    color: "#f9ae3d",
    bgColor: "#fdf6ec",
    speed: 80,
    fontSize: 14,
    duration: 2e3,
    disableTouch: true,
    url: "",
    linkType: "navigateTo"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/notify.js
var notify_default = {
  notify: {
    top: 0,
    type: "primary",
    color: "#ffffff",
    bgColor: "",
    message: "",
    duration: 3e3,
    fontSize: 15,
    safeAreaInsetTop: false
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/numberBox.js
var numberBox_default = {
  numberBox: {
    name: "",
    value: 0,
    min: 1,
    max: Number.MAX_SAFE_INTEGER,
    step: 1,
    integer: false,
    disabled: false,
    disabledInput: false,
    asyncChange: false,
    inputWidth: 35,
    showMinus: true,
    showPlus: true,
    decimalLength: null,
    longPress: true,
    color: "#323233",
    buttonSize: 30,
    bgColor: "#EBECEE",
    cursorSpacing: 100,
    disableMinus: false,
    disablePlus: false,
    iconStyle: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/numberKeyboard.js
var numberKeyboard_default = {
  numberKeyboard: {
    mode: "number",
    dotDisabled: false,
    random: false
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/overlay.js
var overlay_default = {
  overlay: {
    show: false,
    zIndex: 10070,
    duration: 300,
    opacity: 0.5
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/parse.js
var parse_default = {
  parse: {
    copyLink: true,
    errorImg: "",
    lazyLoad: false,
    loadingImg: "",
    pauseVideo: true,
    previewImg: true,
    setTitle: true,
    showImgMenu: true
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/picker.js
var picker_default = {
  picker: {
    show: false,
    showToolbar: true,
    title: "",
    columns: () => [],
    loading: false,
    itemHeight: 44,
    cancelText: "\u53D6\u6D88",
    confirmText: "\u786E\u5B9A",
    cancelColor: "#909193",
    confirmColor: "#3c9cff",
    visibleItemCount: 5,
    keyName: "text",
    closeOnClickOverlay: false,
    defaultIndex: () => [],
    immediateChange: false
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/popup.js
var popup_default = {
  popup: {
    show: false,
    overlay: true,
    mode: "bottom",
    duration: 300,
    closeable: false,
    overlayStyle: () => {
    },
    closeOnClickOverlay: true,
    zIndex: 10075,
    safeAreaInsetBottom: true,
    safeAreaInsetTop: false,
    closeIconPos: "top-right",
    round: 0,
    zoom: true,
    bgColor: "",
    overlayOpacity: 0.5
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/radio.js
var radio_default = {
  radio: {
    name: "",
    shape: "",
    disabled: "",
    labelDisabled: "",
    activeColor: "",
    inactiveColor: "",
    iconSize: "",
    labelSize: "",
    label: "",
    labelColor: "",
    size: "",
    iconColor: "",
    placement: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/radioGroup.js
var radioGroup_default = {
  radioGroup: {
    value: "",
    disabled: false,
    shape: "circle",
    activeColor: "#2979ff",
    inactiveColor: "#c8c9cc",
    name: "",
    size: 18,
    placement: "row",
    label: "",
    labelColor: "#303133",
    labelSize: 14,
    labelDisabled: false,
    iconColor: "#ffffff",
    iconSize: 12,
    borderBottom: false,
    iconPlacement: "left"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/rate.js
var rate_default = {
  rate: {
    value: 1,
    count: 5,
    disabled: false,
    size: 18,
    inactiveColor: "#b2b2b2",
    activeColor: "#FA3534",
    gutter: 4,
    minCount: 1,
    allowHalf: false,
    activeIcon: "star-fill",
    inactiveIcon: "star",
    touchable: true
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/readMore.js
var readMore_default = {
  readMore: {
    showHeight: 400,
    toggle: false,
    closeText: "\u5C55\u5F00\u9605\u8BFB\u5168\u6587",
    openText: "\u6536\u8D77",
    color: "#2979ff",
    fontSize: 14,
    textIndent: "2em",
    name: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/row.js
var row_default = {
  row: {
    gutter: 0,
    justify: "start",
    align: "center"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/rowNotice.js
var rowNotice_default = {
  rowNotice: {
    text: "",
    icon: "volume",
    mode: "",
    color: "#f9ae3d",
    bgColor: "#fdf6ec",
    fontSize: 14,
    speed: 80
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/scrollList.js
var scrollList_default = {
  scrollList: {
    indicatorWidth: 50,
    indicatorBarWidth: 20,
    indicator: true,
    indicatorColor: "#f2f2f2",
    indicatorActiveColor: "#3c9cff",
    indicatorStyle: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/search.js
var search_default = {
  search: {
    shape: "round",
    bgColor: "#f2f2f2",
    placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57",
    clearabled: true,
    focus: false,
    showAction: true,
    actionStyle: () => ({}),
    actionText: "\u641C\u7D22",
    inputAlign: "left",
    inputStyle: () => ({}),
    disabled: false,
    borderColor: "transparent",
    searchIconColor: "#909399",
    searchIconSize: 22,
    color: "#606266",
    placeholderColor: "#909399",
    searchIcon: "search",
    margin: "0",
    animation: false,
    value: "",
    maxlength: "-1",
    height: 32,
    label: null
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/section.js
var section_default = {
  section: {
    title: "",
    subTitle: "\u66F4\u591A",
    right: true,
    fontSize: 15,
    bold: true,
    color: "#303133",
    subColor: "#909399",
    showLine: true,
    lineColor: "",
    arrow: true
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/skeleton.js
var skeleton_default = {
  skeleton: {
    loading: true,
    animate: true,
    rows: 0,
    rowsWidth: "100%",
    rowsHeight: 18,
    title: true,
    titleWidth: "50%",
    titleHeight: 18,
    avatar: false,
    avatarSize: 32,
    avatarShape: "circle"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/slider.js
var slider_default = {
  slider: {
    value: 0,
    blockSize: 18,
    min: 0,
    max: 100,
    step: 1,
    activeColor: "#2979ff",
    inactiveColor: "#c0c4cc",
    blockColor: "#ffffff",
    showValue: false,
    disabled: false,
    blockStyle: () => {
    }
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/statusBar.js
var statusBar_default = {
  statusBar: {
    bgColor: "transparent"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/steps.js
var steps_default = {
  steps: {
    direction: "row",
    current: 0,
    activeColor: "#3c9cff",
    inactiveColor: "#969799",
    activeIcon: "",
    inactiveIcon: "",
    dot: false
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/stepsItem.js
var stepsItem_default = {
  stepsItem: {
    title: "",
    desc: "",
    iconSize: 17,
    error: false
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/sticky.js
var sticky_default = {
  sticky: {
    offsetTop: 0,
    customNavHeight: 0,
    disabled: false,
    bgColor: "transparent",
    zIndex: "",
    index: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/subsection.js
var subsection_default = {
  subsection: {
    list: [],
    current: 0,
    activeColor: "#3c9cff",
    inactiveColor: "#303133",
    mode: "button",
    fontSize: 12,
    bold: true,
    bgColor: "#eeeeef",
    keyName: "name"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/swipeAction.js
var swipeAction_default = {
  swipeAction: {
    autoClose: true
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/swipeActionItem.js
var swipeActionItem_default = {
  swipeActionItem: {
    show: false,
    name: "",
    disabled: false,
    threshold: 20,
    autoClose: true,
    options: [],
    duration: 300
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/swiper.js
var swiper_default = {
  swiper: {
    list: () => [],
    indicator: false,
    indicatorActiveColor: "#FFFFFF",
    indicatorInactiveColor: "rgba(255, 255, 255, 0.35)",
    indicatorStyle: "",
    indicatorMode: "line",
    autoplay: true,
    current: 0,
    currentItemId: "",
    interval: 3e3,
    duration: 300,
    circular: false,
    previousMargin: 0,
    nextMargin: 0,
    acceleration: false,
    displayMultipleItems: 1,
    easingFunction: "default",
    keyName: "url",
    imgMode: "aspectFill",
    height: 130,
    bgColor: "#f3f4f6",
    radius: 4,
    loading: false,
    showTitle: false
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/swipterIndicator.js
var swipterIndicator_default = {
  swiperIndicator: {
    length: 0,
    current: 0,
    indicatorActiveColor: "",
    indicatorInactiveColor: "",
    indicatorMode: "line"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/switch.js
var switch_default = {
  switch: {
    loading: false,
    disabled: false,
    size: 25,
    activeColor: "#2979ff",
    inactiveColor: "#ffffff",
    value: false,
    activeValue: true,
    inactiveValue: false,
    asyncChange: false,
    space: 0
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/tabbar.js
var tabbar_default = {
  tabbar: {
    value: null,
    safeAreaInsetBottom: true,
    border: true,
    zIndex: 1,
    activeColor: "#1989fa",
    inactiveColor: "#7d7e80",
    fixed: true,
    placeholder: true
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/tabbarItem.js
var tabbarItem_default = {
  tabbarItem: {
    name: null,
    icon: "",
    badge: null,
    dot: false,
    text: "",
    badgeStyle: "top: 6px;right:2px;"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/tabs.js
var tabs_default = {
  tabs: {
    duration: 300,
    list: () => [],
    lineColor: "#3c9cff",
    activeStyle: () => ({
      color: "#303133"
    }),
    inactiveStyle: () => ({
      color: "#606266"
    }),
    lineWidth: 20,
    lineHeight: 3,
    lineBgSize: "cover",
    itemStyle: () => ({
      height: "44px"
    }),
    scrollable: true,
    current: 0,
    keyName: "name"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/tag.js
var tag_default = {
  tag: {
    type: "primary",
    disabled: false,
    size: "medium",
    shape: "square",
    text: "",
    bgColor: "",
    color: "",
    borderColor: "",
    closeColor: "#C6C7CB",
    name: "",
    plainFill: false,
    plain: false,
    closable: false,
    show: true,
    icon: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/text.js
var text_default = {
  text: {
    type: "",
    show: true,
    text: "",
    prefixIcon: "",
    suffixIcon: "",
    mode: "",
    href: "",
    format: "",
    call: false,
    openType: "",
    bold: false,
    block: false,
    lines: "",
    color: "#303133",
    size: 15,
    iconStyle: () => ({
      fontSize: "15px"
    }),
    decoration: "none",
    margin: 0,
    lineHeight: "",
    align: "left",
    wordWrap: "normal"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/textarea.js
var textarea_default = {
  textarea: {
    value: "",
    placeholder: "",
    placeholderClass: "textarea-placeholder",
    placeholderStyle: "color: #c0c4cc",
    height: 70,
    confirmType: "done",
    disabled: false,
    count: false,
    focus: false,
    autoHeight: false,
    fixed: false,
    cursorSpacing: 0,
    cursor: "",
    showConfirmBar: true,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    disableDefaultPadding: false,
    holdKeyboard: false,
    maxlength: 140,
    border: "surround",
    formatter: null
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/toast.js
var toast_default = {
  toast: {
    zIndex: 10090,
    loading: false,
    text: "",
    icon: "",
    type: "",
    loadingMode: "",
    show: "",
    overlay: false,
    position: "center",
    params: () => {
    },
    duration: 2e3,
    isTab: false,
    url: "",
    callback: null,
    back: false
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/toolbar.js
var toolbar_default = {
  toolbar: {
    show: true,
    cancelText: "\u53D6\u6D88",
    confirmText: "\u786E\u8BA4",
    cancelColor: "#909193",
    confirmColor: "#3c9cff",
    title: ""
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/tooltip.js
var tooltip_default = {
  tooltip: {
    text: "",
    copyText: "",
    size: 14,
    color: "#606266",
    bgColor: "transparent",
    direction: "top",
    zIndex: 10071,
    showCopy: true,
    buttons: () => [],
    overlay: true,
    showToast: true
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/transition.js
var transition_default = {
  transition: {
    show: false,
    mode: "fade",
    duration: "300",
    timingFunction: "ease-out"
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props/upload.js
var upload_default = {
  upload: {
    accept: "image",
    capture: () => ["album", "camera"],
    compressed: true,
    camera: "back",
    maxDuration: 60,
    uploadIcon: "camera-fill",
    uploadIconColor: "#D3D4D6",
    useBeforeRead: false,
    previewFullImage: true,
    maxCount: 52,
    disabled: false,
    imageMode: "aspectFill",
    name: "",
    sizeType: () => ["original", "compressed"],
    multiple: false,
    deletable: true,
    maxSize: Number.MAX_VALUE,
    fileList: () => [],
    uploadText: "",
    width: 80,
    height: 80,
    previewImage: true
  }
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/props.js
var {
  color: color5
} = config_default;
var props_default = {
  ...actionSheet_default,
  ...album_default,
  ...alert_default,
  ...avatar_default,
  ...avatarGroup_default,
  ...backtop_default,
  ...badge_default,
  ...button_default,
  ...calendar_default,
  ...carKeyboard_default,
  ...cell_default,
  ...cellGroup_default,
  ...checkbox_default,
  ...checkboxGroup_default,
  ...circleProgress_default,
  ...code_default,
  ...codeInput_default,
  ...col_default,
  ...collapse_default,
  ...collapseItem_default,
  ...columnNotice_default,
  ...countDown_default,
  ...countTo_default,
  ...datetimePicker_default,
  ...divider_default,
  ...empty_default,
  ...form_default,
  ...formItem_default,
  ...gap_default,
  ...grid_default,
  ...gridItem_default,
  ...icon_default,
  ...image_default,
  ...indexAnchor_default,
  ...indexList_default,
  ...input_default,
  ...keyboard_default,
  ...line_default,
  ...lineProgress_default,
  ...link_default,
  ...list_default,
  ...listItem_default,
  ...loadingIcon_default,
  ...loadingPage_default,
  ...loadmore_default,
  ...modal_default,
  ...navbar_default,
  ...noNetwork_default,
  ...noticeBar_default,
  ...notify_default,
  ...numberBox_default,
  ...numberKeyboard_default,
  ...overlay_default,
  ...parse_default,
  ...picker_default,
  ...popup_default,
  ...radio_default,
  ...radioGroup_default,
  ...rate_default,
  ...readMore_default,
  ...row_default,
  ...rowNotice_default,
  ...scrollList_default,
  ...search_default,
  ...section_default,
  ...skeleton_default,
  ...slider_default,
  ...statusBar_default,
  ...steps_default,
  ...stepsItem_default,
  ...sticky_default,
  ...subsection_default,
  ...swipeAction_default,
  ...swipeActionItem_default,
  ...swiper_default,
  ...swipterIndicator_default,
  ...switch_default,
  ...tabbar_default,
  ...tabbarItem_default,
  ...tabs_default,
  ...tag_default,
  ...text_default,
  ...textarea_default,
  ...toast_default,
  ...toolbar_default,
  ...tooltip_default,
  ...transition_default,
  ...upload_default
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/config/zIndex.js
var zIndex_default = {
  toast: 10090,
  noNetwork: 10080,
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965
};

// ../../../../Projects/爱佳装/node_modules/uview-plus/libs/function/platform.js
var platform = "none";
platform = "vue3";
platform = "h5";
var platform_default = platform;

// ../../../../Projects/爱佳装/node_modules/uview-plus/index.js
var $u = {
  route: route_default,
  date: function_default.timeFormat,
  colorGradient: colorGradient_default.colorGradient,
  hexToRgb: colorGradient_default.hexToRgb,
  rgbToHex: colorGradient_default.rgbToHex,
  colorToRgba: colorGradient_default.colorToRgba,
  test: test_default,
  type: ["primary", "success", "error", "warning", "info"],
  http: new luch_request_default(),
  config: config_default,
  zIndex: zIndex_default,
  debounce: debounce_default,
  throttle: throttle_default,
  mixin: mixin_default,
  mpMixin: mpMixin_default,
  props: props_default,
  ...function_default,
  color: color_default,
  platform: platform_default
};
uni.$u = $u;
var install = (Vue) => {
  Vue.config.globalProperties.$u = $u;
  Vue.config.globalProperties.$nextTick = (cb) => {
    cb();
  };
  Vue.mixin(mixin_default);
};
var uview_plus_default = {
  install
};

// dep:uview-plus
var uview_plus_default2 = uview_plus_default;
export {
  uview_plus_default2 as default
};
//# sourceMappingURL=uview-plus.js.map
