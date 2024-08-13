import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				desktop: "url('/images/background-home-desktop.jpg')",
				tablet: "url('/images/background-home-tablet.jpg')",
				mobile: "url('/images/background-home-mobile.jpg')",
				'dest-desktop': "url('/images/background-destination-desktop.jpg')",
				'dest-tablet': "url('/images/background-destination-tablet.jpg')",
				'dest-mobile': "url('/images/background-destination-mobile.jpg')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},
	plugins: []
}
export default config
