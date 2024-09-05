/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/utils/cn'

export const crewStyles = cva(
	[
		'w-[15px] h-[15px] bg-transparent rounded-full flex justify-center items-center text-2xl text-white border-2 border-gray-200 cursor-pointer'
	],
	{
		variants: {
			selected: {
				true: 'bg-white text-gray-50'
			}
		}
	}
)

export const CrewTab = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof crewStyles>
>(({ className, children, selected, ...props }, ref) => (
	<div ref={ref} className={cn(crewStyles({ selected }), className)} {...props}>
		{children}
	</div>
))
CrewTab.displayName = 'CrewTab'

interface CrewTabsProps extends React.HTMLAttributes<HTMLDivElement> {
	items: ICrew[]
}

const CrewTabs = ({ className, children, items, ...props }: CrewTabsProps) => {
	const [title, setTitle] = useState('')
	const [crew, setCrew] = useState<ICrew>()

	const handleCrewTitle = (value: React.SetStateAction<string> | null) => {
		if (value) {
			setTitle(value)
		}
	}

	useEffect(() => {
		if (title) {
			const crew = items.find(c => c.name === title)
			if (crew) {
				setCrew(crew)
			} else {
				setCrew({
					name: 'Douglas Hurley',
					images: {
						png: './assets/crew/image-douglas-hurley.png',
						webp: './assets/crew/image-douglas-hurley.webp'
					},
					role: 'Commander',
					bio: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`
				})
			}
		} else {
			setTitle('Douglas Hurley')
		}
	}, [items, title])

	return (
		<div className="shell relative flex flex-col lg:justify-between sx:justify-end lg:gap-4 sx:gap-12 items-start md2:pt-[13rem] sx:pt-[8rem]">
			<div className="lg:pl-16 sx:px-6">
				<h2 className="text-white md2:text-2xl sx:text-lg tracking-widest uppercase">
					<strong className="text-gray-200/50 font-semibold mr-4">02</strong>Meet your crew
				</h2>
			</div>
			<div className="w-full flex lg:flex-row sx:flex-col-reverse justify-between items-center gap-8">
				<div className="lg:w-[55%] sx:w-full lg:mx-0 h-full flex lg:flex-col flex-wrap justify-between items-start md2:gap-20 sx:gap-12 3xl:pb-20 sx:pb-8  lg:pl-16 sx:px-6 pt-4">
					<div className="w-full flex lg:flex-col sx:flex-col-reverse md2:gap-16 sx:gap-8">
						<div className="flex flex-col justify-center sx:items-center lg:items-start gap-2 pt-4">
							<p className="md2:px-6 sx:px-0 lg:px-0 lg:text-3xl sx:text-xl tracking-widest text-gray-200 uppercase">
								{crew?.role}
							</p>
							<h1 className="2xl:text-[3.25rem] md2:text-[2.5rem] sx:text-[24px] text-center font-thin text-white tracking-wider uppercase lg:mb-12 sx:mb-2">
								{crew?.name}
							</h1>
							<p className="lg:w-[70%] sx:w-full description mb-8 ">{crew?.bio}</p>
						</div>
						<div className="w-full flex lg:justify-start sx:justify-center gap-6">
							{items.map((item, index) => (
								<div className="h-full uppercase" key={item.name}>
									<CrewTab
										onClick={e => handleCrewTitle(item.name)}
										selected={
											title === '' ? item.name.toLowerCase() === 'Douglas Hurley' : item.name.includes(String(title))
										}
									></CrewTab>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="lg:w-[45%] sx:w-[90%] lg:border-transparent sx:border-b sx:border-gray-200 mx-auto px-4">
					<img src={crew?.images.png} alt={crew?.name} className="w-full h-auto" />
				</div>
			</div>
		</div>
	)
}

CrewTabs.displayName = 'CrewTabs'

export { CrewTabs }
