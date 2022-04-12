const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				brand: {
					100: '#fbefef',
					200: '#f7ecec',
					500: '#f981a3',
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
