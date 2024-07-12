import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const app = createApp(App);
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload){
        context.commit('increase',payload)
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(state) {
      const finalcounter = state.counter * 3;
      if (finalcounter < 0) {
        return 0;
      }
      if (finalcounter > 100) {
        return 100;
      }
      return finalcounter;
    },
  },
});
app.use(store);
app.mount('#app');
