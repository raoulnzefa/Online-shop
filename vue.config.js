module.exports = {
	lintOnSave: false,
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/styles/styles.scss";`
			},
		}
	}
};
