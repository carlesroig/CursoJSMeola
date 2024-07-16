export default {
    namespaced: true,
    state() {
      return {
        items: [],
        total: 0,
        qty: 0,
      };
    },
    mutations: {
      addProductToCart(state, payload) {
        if (!payload || !payload.product) {
          console.error('Payload is missing or does not contain product.');
          return;
        }
        
        const productData = payload.product;
        
        if (!productData.id) {
          console.error('Product data is missing an id.');
          return;
        }
  
        const productInCartIndex = state.items.findIndex(
          (ci) => ci.productId === productData.id
        );
  
        if (productInCartIndex >= 0) {
          state.items[productInCartIndex].qty++;
        } else {
          const newItem = {
            productId: productData.id,
            title: productData.title,
            image: productData.image,
            price: productData.price,
            qty: 1,
          };
          state.items.push(newItem);
        }
        state.qty++;
        state.total += productData.price;
      },
  
      removeProductFromCart(state, payload) {
        const prodId = payload.productId;
        const productInCartIndex = state.items.findIndex(
          (cartItem) => cartItem.productId === prodId
        );
        const prodData = state.items[productInCartIndex];
        state.items.splice(productInCartIndex, 1);
        state.qty -= prodData.qty;
        state.total -= prodData.price * prodData.qty;
      },
    },
    actions: {
      anadir(context, payload) {
        const proId=payload.id
        const products=context.rootGetters['prods/products']
        const product =products.find(prod=> prod.id===proId)
        context.commit('addProductToCart', product);
      },
      eliminar(context, payload) {
        context.commit('removeProductFromCart', payload);
      }
    },
    getters: {
      products(state) {
        return state.items;
      },
      total(state) {
        return state.total;
      },
      cantidad(state) {
        return state.qty;
      }
    }
  };
  