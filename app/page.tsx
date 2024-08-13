'use client'

import { SCREEN_SIZES, useScreenSize } from '@/utils/hook'

export default function Home() {
	const screenSize = useScreenSize()

	return (
		<main
			className={`w-full h-screen ${
				screenSize === SCREEN_SIZES.MOBILE
					? 'bg-mobile'
					: screenSize === SCREEN_SIZES.TABLET
					? 'bg-tablet'
					: 'bg-desktop'
			}`}
		></main>
	)
}
