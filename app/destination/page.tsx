'use client'

import { SCREEN_SIZES, useScreenSize } from '@/utils/hook'
import { DestinationTabs } from '@/components/destination-tab'
import data from '@/data/data.json'

type Props = {}

const DestinationPage = (props: Props) => {
	const screenSize = useScreenSize()
	const planets: IDestination[] = data.destinations

	return (
		<section
			className={`w-full min-h-[100vh] ${
				screenSize === SCREEN_SIZES.MOBILE
					? 'bg-dest-mobile'
					: screenSize === SCREEN_SIZES.TABLET
					? 'bg-dest-tablet'
					: 'bg-dest-desktop'
			}`}
		>
			<DestinationTabs items={planets} />
		</section>
	)
}

export default DestinationPage
