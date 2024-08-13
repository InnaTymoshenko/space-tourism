import React, { useState, useEffect } from 'react'

export const SCREEN_SIZES = {
	MOBILE: 'mobile',
	TABLET: 'tablet',
	PC: 'pc'
}

const BREAKPOINTS = {
	MOBILE_MAX: 767,
	TABLET_MIN: 768,
	TABLET_MAX: 1023,
	PC_MIN: 1024
}

export const useScreenSize = () => {
	const [screenSize, setScreenSize] = useState<string>(getScreenSize())

	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getScreenSize())
		}

		global.addEventListener('resize', handleResize)
		return () => global.removeEventListener('resize', handleResize)
	}, [])

	return screenSize
}

const getScreenSize = (): string => {
	const width = global.innerWidth
	if (width <= BREAKPOINTS.MOBILE_MAX) {
		return SCREEN_SIZES.MOBILE
	} else if (width >= BREAKPOINTS.TABLET_MIN && width <= BREAKPOINTS.TABLET_MAX) {
		return SCREEN_SIZES.TABLET
	} else {
		return SCREEN_SIZES.PC
	}
}
