import Link from 'next/link'
import { navItems } from '@/app/shared/data/navItems'

export default function MobileMenu({
	open,
	onClose,
}: {
	open: boolean
	onClose: () => void
}) {
	return (
		<div
			className={`fixed top-0 right-0 h-full w-full bg-black/50 backdrop-blur-md z-50 transform transition-transform duration-300 xl:hidden flex flex-col items-center justify-center gap-6 ${
				open ? 'translate-x-0' : 'translate-x-full'
			}`}
		>
			<button
				className='absolute top-14 right-6 text-[#00E4F0] text-2xl font-bold cursor-pointer'
				onClick={onClose}
				aria-label='Close menu'
			>
				<div className='relative w-7 h-7'>
					<span className='absolute inset-0 bg-[#00E4F0] h-px w-full rotate-45'></span>
					<span className='absolute inset-0 bg-[#00E4F0] h-px w-full -rotate-45'></span>
				</div>
			</button>

			{navItems.map(item => (
				<Link
					key={item.href}
					href={item.href}
					className='text-white text-lg hover:text-[#00E4F0] transition-all'
					onClick={onClose}
				>
					{item.label}
				</Link>
			))}

			<p className='mt-8 text-[#00E4F0] tracking-tight text-base'>
				+7 (800) 600-35-38
			</p>
		</div>
	)
}
