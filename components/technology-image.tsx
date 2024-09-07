/* eslint-disable @next/next/no-img-element */

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScreenSize, SCREEN_SIZES } from '@/utils/hook'

type TechnologyImageProps = {
	items: ITechnology[]
	name: string
}

type ImageProps = {
	slide: string
}

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`

const ImageMotion = ({ slide }: ImageProps) => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [isInView, setIsInView] = useState(false)
	const screenSize = useScreenSize()

	return (
		<motion.div
			initial={false}
			animate={
				isLoaded && isInView
					? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
					: { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
			}
			transition={{ duration: 1, delay: 0.5 }}
			viewport={{ once: true }}
			onViewportEnter={() => setIsInView(true)}
		>
			{screenSize === SCREEN_SIZES.PC && (
				<img
					src={`./assets/technology/image-${slide}-portrait.jpg`}
					alt={''}
					className="w-full h-auto"
					onLoad={() => setIsLoaded(true)}
				/>
			)}
			{screenSize === SCREEN_SIZES.MOBILE && (
				<img
					src={`./assets/technology/image-${slide}-landscape.jpg`}
					alt={''}
					className="w-full h-auto"
					onLoad={() => setIsLoaded(true)}
				/>
			)}
			{screenSize === SCREEN_SIZES.TABLET && (
				<img
					src={`./assets/technology/image-${slide}-landscape.jpg`}
					alt={''}
					className="w-full h-auto"
					onLoad={() => setIsLoaded(true)}
				/>
			)}
		</motion.div>
	)
}

export function TechnologyImage({ items, name }: TechnologyImageProps) {
	return (
		<>
			{items.map(item => {
				if (item.name === name) {
					const slide: string = item.name.toLowerCase().replace(/ /g, '-')
					return (
						<div key={slide} className="lg:w-[40%] sx:w-full">
							<ImageMotion slide={slide} />
						</div>
					)
				}
			})}
		</>
	)
}
