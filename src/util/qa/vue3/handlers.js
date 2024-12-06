import base from '../../../plugins/vue3/base/handler.js';
import precss from '../../../plugins/vue3/precss/handler.js';
import terminal from '../../../plugins/vue3/terminal/handler.js';
import pwa from '../../../plugins/vue3/pwa/handler.js';
import render from '../../../plugins/vue3/render/handler.js';
import i18n from '../../../plugins/vue3/i18n/handler.js';
import test from '../../../plugins/vue3/test/handler.js';
import spa from '../../../spa/questions/spa.js';

export default {
  base,
  precss,
  terminal,
  pwa,
  render,
  i18n,
  test,
  spa: spa.handler,
};
