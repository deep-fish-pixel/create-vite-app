import base from '../../../plugins/vue2/base/handler.js';
import precss from '../../../plugins/vue2/precss/handler.js';
import terminal from '../../../plugins/vue2/terminal/handler.js';
import pwa from '../../../plugins/vue2/pwa/handler.js';
import i18n from '../../../plugins/vue2/i18n/handler.js';
import test from '../../../plugins/vue2/test/handler.js';
import spa from "../../../spa/questions/spa.js";

export default {
  base,
  precss,
  terminal,
  pwa,
  i18n,
  test,
  spa: spa.handler,
};
