import axios from 'axios'

export default {
	async GET_RRODUCTS_FROM_API({
		commit
	}) {
		const url = 'http://localhost:3000/products'

		try {
			const products = await axios(url, {
				method: 'GET'
			})
			commit('SET_PRODUCTS_TO_STATE', products.data)
			return products.data

		} catch (error) {
			console.log(error)
			return error
		}
	}
}