'use client'

import React from 'react'
import { usePathname, useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/utils/cn'

export const tabStyles = cva(
	[
		'h-full flex gap-2 justify-between border-b-4 border-transparent hover:border-b-white/30 items-center tracking-widest text-xl text-white px-2'
	],
	{
		variants: {
			selected: {
				true: 'border-b-white border-b-4'
			}
		}
	}
)

export interface TabProps extends React.ComponentPropsWithoutRef<typeof Link>, VariantProps<typeof tabStyles> {}

const NavTab = React.forwardRef<React.ElementRef<typeof Link>, TabProps>(
	({ className, href, selected, children, ...props }, ref) => (
		<Link ref={ref} href={href} className={cn(tabStyles({ selected }), className)} {...props}>
			{children}
		</Link>
	)
)
NavTab.displayName = 'NavTab'

interface NavTabsProps extends React.HTMLAttributes<HTMLDivElement> {
	items: { title: string; href: string }[]
	mobile: boolean
	setMobile: (a: boolean) => void
}

const NavTabs = ({ className, children, items, mobile, setMobile, ...props }: NavTabsProps) => {
	const segment = useSelectedLayoutSegment()
	const pathname = usePathname()

	return (
		<div
			className={cn(
				`w-full h-full flex  ${
					mobile ? 'flex-col justify-start items-start pl-12 pt-20' : 'flex-row  justify-between items-center'
				} `,
				className
			)}
			{...props}
		>
			{items.map((item, index) => {
				return (
					<div key={item.title} className={`flex gap-4 items-center ${mobile ? 'h-20' : 'h-full'}`}>
						<NavTab
							onClick={() => setMobile(false)}
							href={item.href}
							selected={segment === null ? item.href === pathname : item.href.includes(String(segment))}
						>
							<span className="lg:block md2:hidden font-medium">{`0${index}`}</span>
							<span className="font-thin">{item.title.toUpperCase()}</span>
						</NavTab>
					</div>
				)
			})}
		</div>
	)
}
NavTabs.displayName = 'NavTabs'

export { NavTabs }
