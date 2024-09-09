/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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
	const [crew, setCrew] = useState<ICrew>({
		name: '',
		images: {
			png: '',
			webp: ''
		},
		role: '',
		bio: ''
	})

	const aboutAnimation = {
		hidden: {
			x: '-100%',
			opacity: 0
		},
		visible: (custom: number) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.3, duration: 1 }
		})
	}

	const imageAnimation = {
		hidden: {
			x: '100%',
			opacity: 0
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: { duration: 2 }
		}
	}

	const handleCrewTitle = (value: React.SetStateAction<string> | null) => {
		if (value) {
			setTitle(value)
		}
	}

	useEffect(() => {
		if (title) {
			const crew = items.find(c => c.name.toLowerCase() === title.toLowerCase())
			if (crew) {
				setCrew(crew)
			} else {
				setCrew({
					name: items[0].name,
					images: {
						png: items[0].images.png,
						webp: items[0].images.webp
					},
					role: items[0].role,
					bio: items[0].bio
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
			className="shell relative flex flex-col lg:justify-between sx:justify-end lg:gap-28 sx:gap-12 items-start md2:pt-[13rem] sx:pt-[8rem]"
		>
			<div className="lg:pl-16 sx:px-6">
				<h2 className="text-white md2:text-2xl sx:text-lg tracking-widest uppercase">
					<strong className="text-gray-200/50 font-semibold mr-4">02</strong>Meet your crew
				</h2>
			</div>
			<div className="w-full h-full flex lg:flex-row sx:flex-col-reverse justify-between items-center gap-8">
				<div className="lg:w-[55%] sx:w-full lg:mx-0 h-full flex lg:flex-col flex-wrap justify-between items-start md2:gap-20 sx:gap-12 3xl:pb-20 sx:pb-8  lg:pl-16 sx:px-6 pt-4">
					<div className="w-full flex lg:flex-col sx:flex-col-reverse md2:gap-16 sx:gap-8">
						{items.map(item => {
							if (item.name.toLowerCase().replace(/ /g, '-') === crew.name.toLowerCase().replace(/ /g, '-')) {
								return (
									<motion.div
										initial={'hidden'}
										whileInView={'visible'}
										key={item.name.toLowerCase().replace(/ /g, '-')}
										className="flex flex-col justify-center sx:items-center lg:items-start gap-2 pt-4"
									>
										<motion.p
											custom={1}
											variants={aboutAnimation}
											className="md2:px-6 sx:px-0 lg:px-0 lg:text-3xl sx:text-xl tracking-widest text-gray-200 uppercase"
										>
											{crew?.role}
										</motion.p>
										<motion.h1
											custom={2}
											variants={aboutAnimation}
											className="2xl:text-[3.25rem] md2:text-[2.5rem] sx:text-[24px] text-center font-thin text-white tracking-wider uppercase lg:mb-12 sx:mb-2"
										>
											{crew?.name}
										</motion.h1>
										<motion.p custom={3} variants={aboutAnimation} className="lg:w-[70%] sx:w-full description mb-8 ">
											{crew?.bio}
										</motion.p>
									</motion.div>
								)
							}
						})}

						<div className="w-full flex lg:justify-start sx:justify-center gap-6">
							{items.map((item, index) => (
								<div className="h-full uppercase" key={item.name.replace(/ /g, '-')}>
									<CrewTab
										onClick={e => handleCrewTitle(item.name)}
										selected={
											title === ''
												? item.name.toLowerCase() === items[0].name.toLowerCase()
												: item.name.toLowerCase().includes(String(title).toLowerCase())
										}
									></CrewTab>
								</div>
							))}
						</div>
					</div>
				</div>
				{items.map(item => {
					if (item.name.toLowerCase().replace(/ /g, '-') === crew.name.toLowerCase().replace(/ /g, '-')) {
						return (
							<motion.div
								key={item.name.replace(/ /g, '-')}
								initial={'hidden'}
								whileInView={'visible'}
								variants={imageAnimation}
								className="lg:w-[45%] sx:w-[90%] lg:border-transparent sx:border-b sx:border-gray-200 mx-auto px-4"
							>
								<img src={crew?.images.png} alt={crew?.name} className="w-full h-auto" />
							</motion.div>
						)
					}
				})}
			</div>
		</motion.div>
	)
}

CrewTabs.displayName = 'CrewTabs'

export { CrewTabs }
