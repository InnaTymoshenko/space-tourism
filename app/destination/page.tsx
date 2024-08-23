'us client'

import { SCREEN_SIZES, useScreenSize } from '@/utils/hook'

type Props = {}

const DestinationPage = (props: Props) => {
	const screenSize = useScreenSize()

	return (
		<section
			className={`w-full h-screen ${
				screenSize === SCREEN_SIZES.MOBILE
					? 'bg-mobile'
					: screenSize === SCREEN_SIZES.TABLET
					? 'bg-tablet'
					: 'bg-desktop'
			}`}
		>
			<div className="shell flex justify-between items-end px-8 pb-32">
				<div className="w-[45%] flex flex-col gap-4  p-4">
					<p className="text-3xl text-gray-100 tracking-[.2em] uppercase font-thin">So, you want to travel to</p>
					<h1 className="text-5xl text-white tracking-wider uppercase">Space</h1>
					<p className="text-2xl text-gray-100 font-light tracking-widest">
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
						of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
					</p>
				</div>
				<div className="w-[300px] h-[300px] rounded-full bg-white flex justify-center items-center text-3xl font-mono tracking-wider m-4 hover:shadow-3xl transition-shadow duration-500 ease-in-out">
					EXPLORE
				</div>
			</div>
		</section>
	)
}

export default DestinationPage
