'use client'

import { SCREEN_SIZES, useScreenSize } from '@/utils/hook'

export default function Home() {
	const screenSize = useScreenSize()

	return (
		<section
			className={`w-full  ${
				screenSize === SCREEN_SIZES.MOBILE
					? 'bg-mobile h-[120vh]'
					: screenSize === SCREEN_SIZES.TABLET
					? 'bg-tablet'
					: 'bg-desktop h-screen'
			}`}
		>
			<div className="shell flex lg:flex-row sx:flex-col justify-between lg:items-end sx:items-center  lg:pb-32 sx:pb-8 lg:pt-0 sx:pt-[10rem]">
				<div className="lg:w-[45%] md2:w-[80%] sx:w-full md2:mx-auto lg:mx-0 flex flex-col lg:items-start sx:items-center gap-4 sx:pl-2 md:pl-16 py-4">
					<p className="lg:text-3xl md:text-2xl sx:text-xl text-gray-25 tracking-[.2em] uppercase font-thin">
						So, you want to travel to
					</p>
					<h1 className="lg:text-5xl md:text-4xl sx:text-[6rem] sx:leading-none text-white tracking-wider uppercase">
						Space
					</h1>
					<p className="description px-0">
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
						of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
					</p>
				</div>
				<div className="lg:w-[300px] lg:h-[300px] sx:w-[200px] md2:w-[250px] md2:h-[250px] sx:h-[200px] rounded-full bg-white flex justify-center items-center text-gray-50 text-3xl font-mono tracking-wider m-4 hover:shadow-3xl transition-shadow duration-500 ease-in-out">
					EXPLORE
				</div>
			</div>
		</section>
	)
}
