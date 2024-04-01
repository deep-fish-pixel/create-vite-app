import { defineComponent//<---#if(i18n)--->, getCurrentInstance//<---#if---> } from 'vue';
import useCounterStore from '@/store/counterStore';
//<---+importStyles--->

export default defineComponent({
  setup() {
    const store = useCounterStore();
    //<---#if(i18n)--->const instance = getCurrentInstance();//<---#if--->

    return () => (
      <p>
        <h2>{ store.count }</h2>
        <button
          class={styles.button}
          onClick={store.increment}>
          <!---=addReplace||增加--->
        </button>
        <button
          class={styles.button}
          onClick={store.decrement}>
          <!---=subReplace||减少--->
        </button>
        <button
          class={styles.button}
          onClick={store.reset}>
          <!---=resetReplace||重置--->
        </button>
      </p>
    );
  },
});

