module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'@nuxtjs',
		'prettier',
		'prettier/vue',
		'plugin:prettier/recommended',
		'plugin:nuxt/recommended',
		'plugin:vue-a11y/recommended'
	],
	plugins: ['prettier', 'vue-a11y'],
	// add your custom rules here
	rules: {
		'no-console': 'off',
		'prettier/prettier': [
			'error',
			{
				useTabs: true
			}
		],
		'vue-a11y/alt-text': 2
	}
}
