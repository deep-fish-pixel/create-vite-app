import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 总计
let total = 0;
// 剩余计数器
let count = 0;
// 延迟器id
let timer: null | ReturnType<typeof setTimeout> = null;

export default {
  /**
   * 启动显示，如果已启动，则增加进度
   */
  start() {
    count++;
    total++;
    timer && clearTimeout(timer);
    if (total === 1) {
      NProgress.remove();
      NProgress.start();
    } else if (total > 1) {
      NProgress.inc(1 / (total * 3));
    }
  },
  /**
   * 完成进度
   */
  done() {
    count--;
    if (count < 0) {
      count = 0;
    }
    if (count === 0) {
      timer && clearTimeout(timer);
      if (total > 1) {
        NProgress.inc(1 / (total * 2));
      }
      timer = setTimeout(() => {
        total = 0;
        NProgress.done();
      }, 300);
    } else {
      NProgress.inc(1 / (total * 2));
    }
  },
};
