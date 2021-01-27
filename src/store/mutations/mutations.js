import Vue from 'vue'

export default {

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


}