'use client'

import React, { useState } from 'react'
import { Logo } from './icons/logo'
import { NavTabs } from './nav-tabs'
import { navTabsConfig } from '@/config/nav-tabs.config'
import { Close } from './icons/close'
import { Hamburger } from './icons/hamburger'

type Props = {}

const Header = (props: Props) => {
	const [isMobile, setIsMobile] = useState(false)

	return (
		<div className="fixed lg:top-12 md2:top-4 w-full h-28 z-50 header">
			<div className="shell flex gap-4 justify-between items-center px-8">
				<Logo />
				<div className="lg:block sx:hidden w-[40%] h-[1px] bg-gray-100/50"></div>
				<nav className="lg:w-[47%] md2:w-[60%] md2:block sx:hidden h-full">
					<NavTabs mobile={isMobile} setMobile={setIsMobile} items={navTabsConfig} />
				</nav>

				<div className="cursor-pointer md2:hidden sx:block z-20" onClick={() => setIsMobile(!isMobile)}>
					{isMobile ? <Close /> : <Hamburger />}
				</div>
			</div>
			<div
				className={`absolute top-0 w-full h-screen transition-all duration-500 ease-in-out bg-gray-50/70 ${
					isMobile ? 'left-0' : 'left-[-200vw]'
				}`}
			>
				<div className="w-[70%] h-full bg-gray-50">
					<NavTabs mobile={isMobile} setMobile={setIsMobile} items={navTabsConfig} />
				</div>
			</div>
		</div>
	)
}

export default Header
