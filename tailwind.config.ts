import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			sx: '350px',
			sm: '480px',
			md: '640px',
			md2: '768px',
			lg: '976px',
			xl: '1200px',
			'2xl': '1440px',
			'3xl': '1600px'
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '2.5rem'
			}
		},
		borderRadius: {
			none: '0',
			sm: '.25rem',
			DEFAULT: '.75rem',
			lg: '1rem',
			full: '9999px'
		},
		fontSize: {
			us: ['10px', '12px'],
			sm: ['12px', '16px'],
			md: ['14px', '20px'],
			lg: ['16px', '24px'],
			xl: ['20px', '24px'],
			'2xl': ['24px', '28px'],
			'3xl': ['30px', '36px'],
			'4xl': ['40px', '40px'],
			'5xl': ['48px', '48px']
		},
		colors: {
			red: {
				100: 'hsl(14, 86%, 42%)'
			},
			green: {
				100: 'hsl(159, 69%, 38%)'
			},
			rose: {
				50: 'hsl(20, 50%, 98%)',
				100: 'hsl(13, 31%, 94%)',
				300: 'hsl(14, 25%, 72%)',
				400: 'hsl(7, 20%, 60%)',
				500: 'hsl(12, 20%, 44%)',
				900: 'hsl(14, 65%, 9%)'
			}
		},
		backgroundColor: ({ theme }) => ({
			...theme('colors'),
			primary: 'rgba(var(--color-white))'
		}),
		textColor: ({ theme }) => ({
			...theme('colors'),
			primary: 'rgba(var(--color-white))'
		}),
		borderColor: ({ theme }) => ({
			...theme('colors'),
			primary: 'rgba(var(--color-white))'
		}),
		extend: {
			backgroundImage: {
				desktop: "url('/assets/home/background-home-desktop.jpg')",
				tablet: "url('/assets/home/background-home-tablet.jpg')",
				mobile: "url('/assets/home/background-home-mobile.jpg')",
				'dest-desktop': "url('/assets/destination/background-destination-desktop.jpg')",
				'dest-tablet': "url('/assets/destination/background-destination-tablet.jpg')",
				'dest-mobile': "url('/assets/destination/background-destination-mobile.jpg')",
				'crew-desktop': "url('/assets/crew/background-crew-desktop.jpg')",
				'crew-tablet': "url('/assets/crew/background-crew-tablet.jpg')",
				'crew-mobile': "url('/assets/crew/background-crew-mobile.jpg')",
				'technology-desktop': "url('/assets/technology/background-technology-desktop.jpg')",
				'technology-tablet': "url('/assets/technology/background-technology-tablet.jpg')",
				'technology-mobile': "url('/assets/technology/background-technology-mobile.jpg')"
			}
		}
	},
	plugins: []
}
export default config
