import { createVNode, render } from 'vue';
import Toast from '../index.vue';
const defaultOptions = {
  msg: '',
  id: '',
  duration: 2000, //显示时间(毫秒)
  center: true, // 未实现
  type: 'text',
  title: '',
  customClass: '', // 未实现
  bottom: '30px', // 未实现
  size: 'base', // 未实现
  iconSize: '20',
  icon: null, // 未实现
  textAlignCenter: true, // 未实现
  loadingRotate: true, // 未实现
  bgColor: 'rgba(0, 0, 0, .8)',
  onClose: null, // 未实现
  unmount: null,
  cover: false, //透明遮罩层 // 未实现
  coverColor: 'rgba(0, 0, 0, 0)', // 未实现
  closeOnClickOverlay: false // 未实现
};

let idsMap: string[] = [];
let optsMap: any[] = [];
const clearToast = (id?: string) => {
  if (id) {
    const container = document.getElementById(id);
    optsMap = optsMap.filter((item) => item.id !== id);
    idsMap = idsMap.filter((item) => item !== id);
    if (container) {
      document.body.removeChild(container);
    }
  } else {
    idsMap.forEach((item) => {
      const container = document.getElementById(item);
      if (container) {
        document.body.removeChild(container);
      }
    });
    optsMap = [];
    idsMap = [];
  }
};

const updateToast = (opts: any) => {
  const container = document.getElementById(opts.id);
  if (container) {
    const currentOpt = optsMap.find((item) => item.id === opts.id);
    if (currentOpt) {
      opts = { ...defaultOptions, ...currentOpt, ...opts };
    } else {
      opts = { ...defaultOptions, ...opts };
    }
    const instance: any = createVNode(Toast, opts);
    render(instance, container);
    return instance.component.ctx;
  }
};

const mountToast = (opts: any) => {
  opts.unmount = clearToast;
  let _id;
  // 如果是更新已有的toast
  if (opts.id) {
    _id = opts.id;
    if (idsMap.find((item) => item === opts.id)) {
      return updateToast(opts);
    }
  } else {
    _id = new Date().getTime() + '';
  }
  opts = { ...defaultOptions, ...opts };
  opts.id = _id;
  idsMap.push(opts.id);
  optsMap.push(opts);
  const container = document.createElement('div');
  container.id = opts.id;
  const instance: any = createVNode(Toast, opts);
  render(instance, container);
  document.body.appendChild(container);
  return instance.component.ctx;
};

const errorMsg = (msg: string) => {
  if (!msg) {
    console.warn('[NutUI Toast]: msg不能为空');
    return;
  }
};

export const ToastFunction = {
  text(msg: string, opts = {}) {
    errorMsg(msg);
    return mountToast({ ...opts, type: 'text', msg });
  },
  success(msg: string, opts = {}) {
    errorMsg(msg);
    return mountToast({ icon: 'success', ...opts, msg, type: 'success' });
  },
  fail(msg: string, opts = {}) {
    errorMsg(msg);
    return mountToast({ icon: 'failure', ...opts, msg, type: 'fail' });
  },
  warn(msg: string, opts = {}) {
    errorMsg(msg);
    return mountToast({ icon: 'tips', ...opts, msg, type: 'warn' });
  },
  loading(msg: string, opts = {}) {
    return mountToast({
      icon: 'loading',
      ...opts,
      msg,
      type: 'loading'
    });
  },
  hide(id?: string) {
    clearToast(id);
  },
  install(app: any): void {
    app.use(Toast);
    app.config.globalProperties.$toast = ToastFunction;
  }
};

export { Toast };
export default ToastFunction;
