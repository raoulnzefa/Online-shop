<template>
	<div class="cart-item">
		<img class="cart-item__img" :src="require(`../assets/images/${cartItemData.image}`)"  alt="img">

		<div class="cart-item__info">
			<p>{{ cartItemData.name }}</p>
			<p>{{ cartItemData.price }}</p>
			<p>{{ cartItemData.article }}</p>
		</div>
		
		<div class="cart-item__quantity">
			<p>Quantity:</p>
			<button class="btn" @click="decrementItem">-</button>
			<span>  {{ cartItemData.quantity }}  </span>
			<button class="btn" @click="incrementItem">+</button>
		</div>

		<button class="btn" @click="deleteFromCart">&times;</button>
	</div>
</template>

<script>
	export default {
		name: 'cart-item',
		components: {

		},
		props: {
			cartItemData: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {}
		},
		computed: {},
		methods: {
			deleteFromCart() {
				this.$emit('deleteFromCart')
			},

			incrementItem() {
				this.$emit('incrementItem')
			},

			decrementItem() {
				this.$emit('decrementItem')
			}
		},
		watch: {},
		mounted() {}
	}
</script>

<style lang="scss">

	.cart-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: nowrap;
		box-shadow: 0 0 8px #e0e0e0;
		padding: $padding*2;
		margin-top: $margin*2;

		&__img {
			max-width: 60px;
		}
	}

</style>