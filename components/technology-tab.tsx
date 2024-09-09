/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/utils/cn'
import { TechnologyImage } from './technology-image'

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
	const [technology, setTechnology] = useState<ITechnology>({
		name: '',
		images: {
			portrait: '',
			landscape: ''
		},
		description: ''
	})

	const technoAnimation = {
		hidden: { opacity: 0, scale: 0.5 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 2,
				delay: 0.5,
				ease: [0, 0.71, 0.2, 1.01]
			}
		}
	}

	const handleTechnologyTitle = (value: React.SetStateAction<string> | null) => {
		if (value) {
			setTitle(value)
		}
	}

	useEffect(() => {
		if (title) {
			const technology = items.find(t => t.name.toLowerCase() === title.toLowerCase())
			if (technology) {
				setTechnology(technology)
			} else {
				setTechnology({
					name: items[0].name,
					images: {
						portrait: items[0].images.portrait,
						landscape: items[0].images.landscape
					},
					description: items[0].description
				})
			}
		} else {
			setTitle(items[0].name.toLowerCase())
		}
	}, [items, title])

	return (
		<motion.div
			initial={'hidden'}
			whileInView={'visible'}
			className="shell relative flex flex-col lg:justify-between sx:justify-end lg:gap-4 sx:gap-12 items-start 3xl:pb-20 sx:pb-8 md2:pt-[13rem] sx:pt-[8rem]"
		>
			<div className="lg:pl-16 sx:px-6">
				<h2 className="text-white md2:text-2xl sx:text-lg tracking-widest uppercase">
					<strong className="text-gray-200/50 font-semibold mr-4">03</strong>Space launch 101
				</h2>
			</div>
			<div className="w-full flex lg:flex-row sx:flex-col-reverse justify-between items-center pb-8 gap-8">
				<div className="lg:w-[60%] sx:w-full lg:mx-0 h-full flex lg:flex-col justify-between items-start md2:gap-20 sx:gap-12 lg:pl-16 sx:px-6 pt-4">
					<div className="w-full flex lg:flex-row-reverse sx:flex-col-reverse md2:gap-16 sx:gap-8">
						{items.map(item => {
							if (item.name.toLowerCase().replace(/ /g, '-') === technology.name.toLowerCase().replace(/ /g, '-')) {
								return (
									<motion.div
										key={item.name}
										className="flex flex-col justify-center sx:items-center lg:items-start gap-2 pt-4"
										initial={'hidden'}
										whileInView={'visible'}
									>
										<motion.p variants={technoAnimation} className="description uppercase mb-6">
											The terminology...
										</motion.p>
										<motion.h1
											variants={technoAnimation}
											className="2xl:text-[3.5rem] md2:text-[2.5rem] sx:text-2xl font-thin text-white tracking-wider uppercase mb-4"
										>
											{technology?.name}
										</motion.h1>
										<motion.p variants={technoAnimation} className="description mb-8 lg:pr-[4.75rem] ">
											{technology?.description}
										</motion.p>
									</motion.div>
								)
							}
						})}

						<div className="lg:w-[30%] sx:w-full flex lg:flex-col sx:flex-row justify-center gap-8">
							{items.map((item, index) => (
								<motion.div
									className="h-full uppercase"
									key={item.name.replace(/ /g, '-')}
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
										duration: 1,
										delay: 0.5,
										ease: [0, 0.71, 0.2, 1.01]
									}}
								>
									<TechnologyTab
										onClick={e => handleTechnologyTitle(item.name)}
										selected={
											title === ''
												? item.name.toLowerCase() === items[0].name.toLowerCase()
												: item.name.toLowerCase().includes(String(title).toLowerCase())
										}
									>
										{index + 1}
									</TechnologyTab>
								</motion.div>
							))}
						</div>
					</div>
				</div>
				<TechnologyImage items={items} name={technology.name} />
			</div>
		</motion.div>
	)
}

TechnologyTabs.displayName = 'TechnologyTabs'

export { TechnologyTabs }
