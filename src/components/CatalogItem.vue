<template>
	<div class="catalog-item">
		<img class="catalog-item__img" :src="require(`../assets/images/${product_data.image}`)"  alt="img">
		<p class="catalog-item__name">{{product_data.name}}</p>
		<p class="catalog-item__price">Price: {{product_data.price}} &#8381;</p>
		<button 
			class="catalog-item__btn btn" 
			@click="sendDataToParent">
			Add to cart
		</button>
	</div>
</template>

<script>
	export default {
		name: 'catalog-item',
		components: {

		},
		props: {
			product_data: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {

			}
		},
		computed: {

		},
		methods: {
			sendDataToParent() {
				this.$emit('sendArticle', this.product_data.article)
			}
		},
		watch: {

		},
		mounted() { }
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