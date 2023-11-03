import type { Router } from 'vue-router';
import MultiNProgress from '@/router/helper/MultiNProgress';

/**
 * Routing with progress
 * @param router
 */
export default function createProgressGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    if (to.meta?.loaded) {
      return true;
    }
//<---#if(csr)--->
    MultiNProgress.start();
//<---#if--->
//<---#if(ssg)--->
    MultiNProgress.start();
//<---#if--->
//<---#if(ssr)--->
    if (!import.meta.env.SSR) {
      MultiNProgress.start();
    }
//<---#if--->
    next();
  });

  router.afterEach(async () => {
//<---#if(csr)--->
    MultiNProgress.done();
//<---#if--->
//<---#if(ssg)--->
    MultiNProgress.done();
//<---#if--->
//<---#if(ssr)--->
    if (!import.meta.env.SSR) {
      MultiNProgress.done();
    }
//<---#if--->
  });
}
