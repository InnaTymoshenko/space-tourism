'use client'

import { SCREEN_SIZES, useScreenSize } from '@/utils/hook'
import { CrewTabs } from '@/components/crew-tab'
import data from '@/data/data.json'

type Props = {}

const CrewPage = (props: Props) => {
	const screenSize = useScreenSize()
	const crews: ICrew[] = data.crew

	return (
		<section
			className={`w-full min-h-[100vh] overflow-hidden ${
				screenSize === SCREEN_SIZES.MOBILE
					? 'bg-crew-mobile'
					: screenSize === SCREEN_SIZES.TABLET
					? 'bg-crew-tablet'
					: 'bg-crew-desktop'
			}`}
		>
			<CrewTabs items={crews} />
		</section>
	)
}

export default CrewPage
