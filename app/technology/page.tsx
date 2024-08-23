'use client'

import { SCREEN_SIZES, useScreenSize } from '@/utils/hook'

type Props = {}

const TechnologyPage = (props: Props) => {
	const screenSize = useScreenSize()

	return (
		<section
			className={`w-full h-screen ${
				screenSize === SCREEN_SIZES.MOBILE
					? 'bg-technology-mobile'
					: screenSize === SCREEN_SIZES.TABLET
					? 'bg-technology-tablet'
					: 'bg-technology-desktop'
			}`}
		>
			<div className="shell flex justify-between items-end px-8 pb-32"></div>
		</section>
	)
}

export default TechnologyPage
