"use strict";
let count = 0;
const useLockScroll = (isLock) => {
  const lock = () => {
    if (isLock()) {
      //!count && document.body.classList.add(CLSNAME);
      count++;
    }
  };
  const unlock = () => {
    if (isLock() && count) {
      count--;
      //!count && document.body.classList.remove(CLSNAME);
    }
  };
  return [lock, unlock];
};
exports.useLockScroll = useLockScroll;
