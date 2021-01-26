import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },

  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products

      state.products.forEach(product => {
        product.price = Math.floor(product.price) 
      }) 
    },

    SET_CART: (state, product) => {
      
      const setQuantity = (product) => {
        Vue.set(product, 'quantity', 1)
      }
      
      if (state.cart.length) {
        let isProductExists = false

        state.cart.map(item => {
          if (item.article === product.article) {
            isProductExists = true
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.cart.push(product)  
          setQuantity(product)
        }
      } else {
        state.cart.push(product)
        setQuantity(product)
      }  
    },

    DELITE_ITEM_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },

    INCREMENT: (state, index) => {
      state.cart[index].quantity++
    },

    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      } else {
        state.cart.splice(index, 1)
      }
      
      
    }
  },

  actions: {
    async GET_RRODUCTS_FROM_API({ commit }) {
      const url = 'http://localhost:3000/products'

      try {
        const products = await axios(url, {
          method: 'GET'
        })
        commit('SET_PRODUCTS_TO_STATE', products.data)
        console.log(products.data)
        return products.data

      } catch (error) {
        console.log(error)
        return error
      }
    },

    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product)
    },

    DELITE_FROM_CART({commit}, index) {
      commit('DELITE_ITEM_FROM_CART', index)
    },

    INCREMENT_CART_ITEM({commit}, index) {
      commit('INCREMENT', index)
    },

    DECREMENT_CART_ITEM({ commit }, index) {
      commit('DECREMENT', index)
    }
  },

  getters: {
    PRODUCTS(state) {
      return state.products
    },

    CART(state) {
      return state.cart
    }
  }
})
