/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/utils/cn'

export const destinationStyles = cva(
	[
		'h-full border-b-4 border-transparent md2:text-2xl sx:text-lg text-white/50 font-thin hover:text-white hover:border-b-gray-200 cursor-pointer px-2'
	],
	{
		variants: {
			selected: {
				true: 'text-white border-b-white '
			}
		}
	}
)

export const DestinationTab = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof destinationStyles>
>(({ className, children, selected, ...props }, ref) => (
	<div ref={ref} className={cn(destinationStyles({ selected }), className)} {...props}>
		{children}
	</div>
))
DestinationTab.displayName = 'DestinationTab'

interface DestinationTabsProps extends React.HTMLAttributes<HTMLDivElement> {
	items: IDestination[]
}

const DestinationTabs = ({ className, children, items, ...props }: DestinationTabsProps) => {
	const [title, setTitle] = useState('')
	const [planet, setPlanet] = useState<IDestination>({
		name: '',
		images: {
			png: '',
			webp: ''
		},
		description: '',
		distance: '',
		travel: ''
	})

	const handlePlanetName = (value: React.SetStateAction<string> | null) => {
		if (value) {
			setTitle(value)
		}
	}

	useEffect(() => {
		if (title) {
			const planet = items.find(pl => pl.name === title)
			if (planet) {
				setPlanet(planet)
			} else {
				setPlanet({
					name: 'Moon',
					images: {
						png: './assets/destination/image-moon.png',
						webp: './assets/destination/image-moon.webp'
					},
					description:
						'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites',
					distance: '384,400 km',
					travel: '3 days'
				})
			}
		} else {
			setTitle('Moon')
		}
	}, [items, title])

	return (
		<div className="shell flex lg:flex-row-reverse sx:flex-col-reverse lg:justify-between sx:justify-end gap-8 lg:items-end sx:items-center 3xl:pb-20 sx:pb-8 lg:pt-[13rem] sx:pt-[6rem]">
			<div className="lg:w-[40%] sx:w-full sx:px-4 flex flex-col justify-between sx:items-center tracking-wider lg:m-4 sx:m-0 ">
				<div className="w-full h-12 flex md2:gap-10 sx:gap-4 sx:justify-center lg:justify-start mb-8">
					{items.map(item => (
						<div className="h-full uppercase" key={item.distance}>
							<DestinationTab
								onClick={e => handlePlanetName(e.currentTarget.textContent)}
								selected={title === '' ? item.name.toLowerCase() === 'moon' : item.name.includes(String(title))}
							>
								{item.name}
							</DestinationTab>
						</div>
					))}
				</div>
				<h1 className="xl:text-4xl sx:text-3.5xl  text-white tracking-wider uppercase mb-4">{planet.name}</h1>
				<p className="description mb-8">{planet.description}</p>
				<div className="w-full border-t-2 border-t-gray-200 flex lg:flex-row sx:flex-col justify-between items-center gap-8 text-white pt-8">
					<div className="lg:w-[50%] sx:w-full flex flex-col lg:items-start sx:items-center gap-4 uppercase tracking-widest">
						<span className=" text-lg text-gray-25">Avg. distance</span>
						<span className="text-3xl font-light">{planet.distance}</span>
					</div>
					<div className="lg:w-[50%] sx:w-full flex flex-col lg:items-start sx:items-center gap-4 uppercase tracking-widest">
						<span className=" text-lg text-gray-25">Est. travel time</span>
						<span className="text-3xl font-light">{planet.travel}</span>
					</div>
				</div>
			</div>
			<div className="lg:w-[45%] sx:w-full lg:mx-0 flex flex-col items-start  md2:gap-20 sx:gap-12 lg:pl-16 sx:px-6 py-4">
				<h2 className="text-white md2:text-2xl sx:text-lg tracking-widest uppercase">
					<strong className="text-gray-200/50 font-semibold mr-4">01</strong>Pick your destination
				</h2>
				<div className="w-full h-[70%] flex lg:justify-end sx:justify-center">
					<img src={planet.images.png} alt={'moon'} className="w-auto h-auto" />
				</div>
			</div>
		</div>
	)
}

DestinationTabs.displayName = 'DestinationTabs'

export { DestinationTabs }
