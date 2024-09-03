'use client'

import { SCREEN_SIZES, useScreenSize } from '@/utils/hook'
import data from '@/data/data.json'
import { DestinationTabs } from '@/components/destination-tab'

type Props = {}

const DestinationPage = (props: Props) => {
	const screenSize = useScreenSize()
	const planets = data.destinations

	return (
		<section
			className={`w-full ${
				screenSize === SCREEN_SIZES.MOBILE
					? 'bg-dest-mobile h-[170vh]'
					: screenSize === SCREEN_SIZES.TABLET
					? 'bg-dest-tablet h-[180vh]'
					: 'bg-dest-desktop h-screen'
			}`}
		>
			<DestinationTabs items={planets} />
		</section>
	)
}

export default DestinationPage
