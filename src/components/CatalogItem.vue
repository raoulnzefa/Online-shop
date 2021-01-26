<template>
	<div class="catalog-item">
		<img class="catalog-item__img" :src="require(`../assets/images/${productData.image}`)"  alt="img">
		<p class="catalog-item__name">{{ productData.name }}</p>
		<p class="catalog-item__price">Price: {{ Math.floor(productData.price) }} &#8381;</p>
		<button 
			class="catalog-item__btn btn" 
			@click="addToCart">
			Add to cart
		</button>
	</div>
</template>

<script>
	export default {
		name: 'catalog-item',
		components: {},
		props: {
			productData: {
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
			addToCart() {
				this.$emit('addToCart', this.productData)
			}
		},
		watch: {},
		mounted() {
		}
	}
</script>

<style lang="scss">
	.catalog-item {
		flex-basis: 25%;
		box-shadow: 0 0 8px #e0e0e0;
		padding: $padding*2;
		margin-top: $margin*2;
		&__img {
			width: 100px;
		}
	}
</style>