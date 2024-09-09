'use client'

import { SCREEN_SIZES, useScreenSize } from '@/utils/hook'
import { TechnologyTabs } from '@/components/technology-tab'
import data from '@/data/data.json'

type Props = {}

const TechnologyPage = (props: Props) => {
	const screenSize = useScreenSize()
	const technology: ITechnology[] = data.technology

	return (
		<section
			className={`w-full  min-h-[100vh]  overflow-hidden ${
				screenSize === SCREEN_SIZES.MOBILE
					? 'bg-technology-mobile'
					: screenSize === SCREEN_SIZES.TABLET
					? 'bg-technology-tablet'
					: 'bg-technology-desktop'
			}`}
		>
			<TechnologyTabs items={technology} />
		</section>
	)
}

export default TechnologyPage
