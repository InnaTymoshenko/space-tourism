'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SCREEN_SIZES, useScreenSize } from '@/utils/hook'

export default function Home() {
	const screenSize = useScreenSize()

	const mainAnimation = {
		hidden: {
			y: '-100vh',
			opacity: 0,
			scale: 0.1,
			skew: '80deg, 0deg'
		},
		visible: {
			y: '0',
			opacity: 1,
			scale: 1,
			skew: '0deg, 0deg',
			transition: { duration: 2 }
		}
	}

	const starAnimation = {
		hidden: {
			x: '200%',
			scale: 0.1,
			opasity: 0
		},
		visible: {
			x: '0',
			opasity: 1,
			scale: [0, 0.5, 0.8, 1],
			transition: { duration: 2 }
		}
	}

	return (
		<section
			className={`w-full overflow-hidden ${
				screenSize === SCREEN_SIZES.MOBILE
					? 'bg-mobile h-[120vh]'
					: screenSize === SCREEN_SIZES.TABLET
					? 'bg-tablet'
					: 'bg-desktop h-screen'
			}`}
		>
			<motion.div
				initial={'hidden'}
				whileInView={'visible'}
				className="shell flex lg:flex-row sx:flex-col justify-between lg:items-end sx:items-center  lg:pb-32 sx:pb-8 lg:pt-0 sx:pt-[10rem]"
			>
				<div className="lg:w-[45%] md2:w-[80%] sx:w-full md2:mx-auto lg:mx-0 flex flex-col lg:items-start sx:items-center gap-4 sx:pl-2 md:pl-16 py-4">
					<motion.p
						// variants={mainAnimation}
						className="lg:text-2xl md:text-2xl sx:text-xl text-white tracking-[.2em] uppercase font-thin"
					>
						So, you want to travel to
					</motion.p>
					<motion.h1
						// variants={mainAnimation}
						className="lg:text-5xl md:text-4xl sx:text-[6rem] sx:leading-none text-white tracking-wider uppercase"
					>
						Space
					</motion.h1>
					<motion.p
						//  variants={mainAnimation}
						className="description px-0"
					>
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
						of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
					</motion.p>
				</div>
				<motion.div
					whileHover={{ scale: 0.8 }}
					// variants={starAnimation}
					className="lg:w-[250px] lg:h-[250px] sx:w-[200px] md2:w-[250px] md2:h-[250px] sx:h-[200px] rounded-full bg-white m-4 hover:shadow-3xl transition-shadow duration-500 ease-in-out"
				>
					<Link
						href={'/destination'}
						className="w-full h-full  flex justify-center items-center text-gray-50 text-2xl font-mono tracking-wider"
					>
						EXPLORE
					</Link>
				</motion.div>
			</motion.div>
		</section>
	)
}
