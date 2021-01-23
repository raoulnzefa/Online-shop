<template>
	<div class="main-wrapper">
		<p>{{title}}</p>
		<Catalog />
		<Cart />
	</div>
</template>

<script>
	import Catalog from './Catalog'
	import Cart from './Cart'

	export default {
		name: 'main-wrapper',
		components: {
			Catalog,
			Cart
		},
		props: {},
		data() {
			return {
				title: 'Main wrapper'
			}
		},
		computed: {

		},
		methods: {

		},
		watch: {

		},
		mounted() {
			console.log('Hello i am alive!')
		}
	}
</script>

<style>
	.main-wrapper {
		max-width: 900px;
		margin: 0 auto;
	}
</style>