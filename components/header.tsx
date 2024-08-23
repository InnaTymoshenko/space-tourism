import React from 'react'
import { Logo } from './icons/logo'
import Link from 'next/link'
import { NavTabs } from './nav-tabs'
import { navTabsConfig } from '@/config/nav-tabs.config'

type Props = {}

const Header = (props: Props) => {
	return (
		<div className="fixed top-16 w-full h-28 z-50 header">
			<div className="shell flex gap-4 justify-between items-center px-8">
				<Logo />

				<div className="w-[40%] h-[1px] bg-gray-100/50"></div>
				<nav className="w-[47%] h-full">
					<NavTabs items={navTabsConfig} />
				</nav>
			</div>
		</div>
	)
}

export default Header
