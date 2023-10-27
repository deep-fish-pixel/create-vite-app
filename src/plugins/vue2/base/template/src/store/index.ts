import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';

const store = createPinia();

Vue.use(PiniaVuePlugin);

export default store;
