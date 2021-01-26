<template>
	<div class="main-wrapper">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'main-wrapper',
		components: {},
		props: {},
		data() {
			return {
				title: 'Main wrapper'
			}
		},
		computed: {
			...mapGetters(['CART'])
		},
		methods: {},
		watch: {},
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