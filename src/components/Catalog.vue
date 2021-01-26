<template>
	<div class="catalog">
		<router-link :to="{name: 'cart', params: {cartData: CART}}">
			<div class="catalog__link">Cart: {{ totalCart }}</div>
		</router-link>
		
		<h1>Catalog</h1>

		<div class="catalog__list">
			<CatalogItem 
				v-for="product in PRODUCTS"
				:key="product.article"
				:productData="product"
				@addToCart="addToCart"
			/>
		</div>
	</div>
</template>

<script>
	import CatalogItem from './CatalogItem'
	import {mapActions, mapGetters} from 'vuex'

	export default {
		name: 'catalog',
		components: {
			CatalogItem
		},
		props: {},
		data() {
			return {
				
			}
		},
		computed: {
			...mapGetters([
				'PRODUCTS',
				'CART'
			]),
			totalCart() {
				if (this.CART.length) {
					let result = []
					
					for (let item of this.CART) {
						result.push(item.quantity) 
					}
					
					result = result.reduce((sum, el) => {
						return sum + el
					})

					return result
				} else {
					return 0
				}
			}
		},
		methods: {
			...mapActions([
				'GET_RRODUCTS_FROM_API',
				'ADD_TO_CART'
			]),

			addToCart(data) {
				this.ADD_TO_CART(data)
			},
		},
		watch: {},
		mounted() { 
			this.GET_RRODUCTS_FROM_API()
			.then((response) => {
				if (response) {
					console.log('Data arrivd!')
				}
			})
		}
	}
</script>

<style lang="scss">
	.catalog {
		&__list {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
		}

		&__link {
			position: absolute;
			top: 10px;
			right: 10px;
			padding: $padding*2;
			border: 1px solid #aeaeae
		}
	}
</style>