'use client'

import { SCREEN_SIZES, useScreenSize } from '@/utils/hook'

export default function Home() {
	const screenSize = useScreenSize()

	return (
		<section
			className={`w-full h-full ${
				screenSize === SCREEN_SIZES.MOBILE
					? 'bg-mobile'
					: screenSize === SCREEN_SIZES.TABLET
					? 'bg-tablet'
					: 'bg-desktop'
			}`}
		>
			<div className="shell flex lg:flex-row sx:flex-col justify-between lg:items-end sx:items-center px-8 lg:pb-32 sx:pb-8 lg:pt-0 sx:pt-[12rem]">
				<div className="lg:w-[45%] md2:w-[80%] sx:w-full mx-auto flex flex-col lg:items-start sx:items-center gap-4  p-4">
					<p className="text-3xl text-gray-25 tracking-[.2em] uppercase font-thin">So, you want to travel to</p>
					<h1 className="text-5xl text-white tracking-wider uppercase">Space</h1>
					<p className="text-2xl text-gray-25 font-light tracking-widest lg:text-left sx:text-center">
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
						of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
					</p>
				</div>
				<div className="lg:w-[300px] lg:h-[300px] sx:w-[250px] sx:h-[250px] rounded-full bg-white flex justify-center items-center text-gray-50 text-3xl font-mono tracking-wider m-4 hover:shadow-3xl transition-shadow duration-500 ease-in-out">
					EXPLORE
				</div>
			</div>
		</section>
	)
}
