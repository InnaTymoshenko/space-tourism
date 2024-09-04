/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/utils/cn'
import { useScreenSize, SCREEN_SIZES } from '@/utils/hook'

export const technologyStyles = cva(
	[
		'2xl:w-[100px] 2xl:h-[100px] md2:w-[80px] md2:h-[80px] sx:w-[60px] sx:h-[60px] bg-transparent rounded-full flex justify-center items-center text-2xl text-white border-2 border-gray-200 cursor-pointer'
	],
	{
		variants: {
			selected: {
				true: 'bg-white text-gray-50'
			}
		}
	}
)

export const TechnologyTab = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof technologyStyles>
>(({ className, children, selected, ...props }, ref) => (
	<div ref={ref} className={cn(technologyStyles({ selected }), className)} {...props}>
		{children}
	</div>
))
TechnologyTab.displayName = 'TechnologyTab'

interface TechnologyTabsProps extends React.HTMLAttributes<HTMLDivElement> {
	items: ITechnology[]
}

const TechnologyTabs = ({ className, children, items, ...props }: TechnologyTabsProps) => {
	const [title, setTitle] = useState('')
	const [technology, setTechnology] = useState<ITechnology>()
	const screenSize = useScreenSize()

	const handleTechnologyTitle = (value: React.SetStateAction<string> | null) => {
		if (value) {
			setTitle(value)
		}
	}

	useEffect(() => {
		if (title) {
			const technology = items.find(t => t.name === title)
			if (technology) {
				setTechnology(technology)
			} else {
				setTechnology({
					name: 'Launch vehicle',
					images: {
						portrait: './assets/technology/image-launch-vehicle-portrait.jpg',
						landscape: './assets/technology/image-launch-vehicle-landscape.jpg'
					},
					description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`
				})
			}
		} else {
			setTitle('Launch vehicle')
		}
	}, [items, title])

	return (
		<div className="shell relative flex flex-col lg:justify-between sx:justify-end lg:gap-4 sx:gap-12 items-start 3xl:pb-20 sx:pb-8 md2:pt-[13rem] sx:pt-[8rem]">
			<div className="lg:pl-16 sx:px-6">
				<h2 className="text-white md2:text-2xl sx:text-lg tracking-widest uppercase">
					<strong className="text-gray-200/50 font-semibold mr-4">03</strong>Space launch 101
				</h2>
			</div>
			<div className="w-full flex lg:flex-row sx:flex-col-reverse justify-between items-center pb-8 gap-8">
				<div className="lg:w-[60%] sx:w-full lg:mx-0 h-full flex lg:flex-col justify-between items-start md2:gap-20 sx:gap-12 lg:pl-16 sx:px-6 pt-4">
					<div className="w-full flex lg:flex-row-reverse sx:flex-col-reverse md2:gap-16 sx:gap-8">
						<div className="flex flex-col justify-center sx:items-center lg:items-start gap-2 pt-4">
							<p className="description uppercase mb-6">The terminology...</p>
							<h1 className="2xl:text-[3.5rem] md2:text-[2.5rem] sx:text-2xl font-thin text-white tracking-wider uppercase mb-4">
								{technology?.name}
							</h1>
							<p className="description mb-8 lg:pr-[4.75rem] ">{technology?.description}</p>
						</div>
						<div className="lg:w-[30%] sx:w-full flex lg:flex-col sx:flex-row justify-center gap-8">
							{items.map((item, index) => (
								<div className="h-full uppercase" key={item.name}>
									<TechnologyTab
										onClick={e => handleTechnologyTitle(item.name)}
										selected={
											title === '' ? item.name.toLowerCase() === 'Launch vehicle' : item.name.includes(String(title))
										}
									>
										{index + 1}
									</TechnologyTab>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="lg:w-[40%] sx:w-full">
					<img
						src={screenSize === SCREEN_SIZES.PC ? technology?.images.portrait : technology?.images.landscape}
						alt={technology?.name}
						className="w-full h-auto"
					/>
				</div>
			</div>
		</div>
	)
}

TechnologyTabs.displayName = 'TechnologyTabs'

export { TechnologyTabs }
