import { createStore } from 'vuex';
import product from './modules/product';
import cart from './modules/cart';

const store = createStore({
  modules: {
    prods: product,
    cart: cart,
  },
});

export default store;
