// tailwind.config.js
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				slate: {
					850: '#151e2e',
					900: '#0f172a',
					950: '#020617',
				},
				primary: {
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					950: '#082f49',
				},
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
			},
		},
	},
	plugins: [],
};
