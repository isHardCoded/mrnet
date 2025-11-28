'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

import { navItems } from '@/app/shared/data/navItems'

import Image from 'next/image'
import Burger from './Partial/Burger'
import NavLink from './Partial/NavLink'
import MobileMenu from './Partial/MobileMenu'

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
	const pathname = usePathname()

	return (
		<header className='flex justify-between items-start xl:items-end pt-9 pb-12 relative'>
			<div className='flex-col xl:flex-row flex items-start xl:items-end gap-3.5 xl:gap-14'>
				<Image
					src='/mrnet-logo.svg'
					alt='Logo'
					loading='eager'
					width={185}
					height={41}
					className='pb-1.5'
				/>
				<a
					href='tel:+78006003538'
					className='text-[#00E4F0] tracking-[9%] leading-[140%] text-sm'
				>
					+7 (800) 600-35-38
				</a>
			</div>

			<nav>
				<ul className='hidden xl:flex gap-10'>
					{navItems.map(item => (
						<NavLink
							key={item.href}
							href={item.href}
							label={item.label}
							active={pathname === item.href}
						/>
					))}
				</ul>
			</nav>

			<Burger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
			<MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
		</header>
	)
}
