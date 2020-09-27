module.exports = {
	purge: {
		content: ['./src/**/*.js'],
	},
	theme: {
		extend: {
			spacing: {
				'3/5': '60%',
			},
		},
		fontFamily: {
			body: ['Quicksand', 'Arial', 'sans-serif'],
		},
		colors: {
			primary: 'var(--color-primary)',
			secondary: 'var(--color-secondary)',
			ternary: 'var(--color-ternary)',
			quaternary: 'var(--color-quaternary)',
		},
	},
	variants: {},
	plugins: [],
};
