import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 超时重置
const timeout = 10 * 1000;
let lastDoneTime: number;
// 总计
let total = 0;
// 剩余计数器
let count = 0;
// 延迟器id
let timer: NodeJS.Timeout;
let log = 0;


export default {
  /**
   * 启动显示，如果已启动，则增加进度
   */
  start() {
    if (count && lastDoneTime && Date.now() - lastDoneTime > timeout) {
      count = 0;
      total = 0;
    }
    count++;
    total++;
    timer && clearTimeout(timer);
    if (total === 1) {
      NProgress.remove();
      NProgress.start();
    } else if (total > 1) {
      log += 1 / (total * 3);
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
        log += 1 / (total * 2);
        NProgress.inc(1 / (total * 2));
      }
      timer = setTimeout(() => {
        total = 0;
        NProgress.done();
      }, 300);
    } else {
      log += 1 / (total * 2);
      NProgress.inc(1 / (total * 2));
    }
    lastDoneTime = Date.now();
  },
};
