<template>
	<div class="cart">
		<router-link :to="{name: 'catalog'}">
			<div class="catalog__link">Back to catalog</div>
		</router-link>

		<h1>Cart</h1>

		<p v-if="!cartData.length">Cart is empty...</p>

		<CartItem 
			v-for="(item, index) in cartData"
			:key="item.article"
			:cartItemData="item"
			@deleteFromCart="deleteFromCart(index)"
			@incrementItem="incrementItem(index)"
			@decrementItem="decrementItem(index)"
		/>

		<div class="cart__total">
			<p class="total__name">Total:</p>
			<p>{{ cartTotalCost }} &#8381;</p>
		</div>
	</div>
</template>

<script>
	import CartItem from './CartItem'
	import {mapActions} from 'vuex'

	export default {
		name: 'cart',
		components: {
			CartItem
		},
		props: {
			cartData: {
				type: Array,
				default(){
					return []
				}
			}
		},
		data() {
			return {}
		},
		computed: {
			cartTotalCost() {
				if (this.cartData.length) {
					let result = []

					for (let item of this.cartData) {
						result.push(item.price * item.quantity) 
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
				'DELITE_FROM_CART',
				'DECREMENT_CART_ITEM',
				'INCREMENT_CART_ITEM'
			]),

			deleteFromCart(index) {
				this.DELITE_FROM_CART(index)
			},

			incrementItem(index) {
				this.INCREMENT_CART_ITEM(index)
			},

			decrementItem(index) {
				this.DECREMENT_CART_ITEM(index)
			}
		},
		watch: {},
		mounted() {}
	}
</script>

<style lang="scss">

	.cart {
		margin-bottom: 100px;
		&__total {
			position: fixed;
			bottom: 0;
			right: 0;
			left: 0;
			padding: $padding*2;
			display: flex;
			justify-content: center;
			color: #ffff;
			font-weight: bold;
			background: rgb(0, 255, 59);
			font-size: 20px;
		}	
	}

	.total__name {
		font-weight: bold;
		color: #ffff;
		margin-right: 10px;
	}
</style>