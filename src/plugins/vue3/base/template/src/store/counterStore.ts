import { defineStore } from 'pinia';

const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  getters: {
    getCount: (state) => state.count,
  },
  actions: {
    increment() {
      // 可以直接修改值
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
  },
});

export default useCounterStore;
