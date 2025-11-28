import Link from 'next/link'

export default function NavLink({
	href,
	label,
	active,
}: {
	href: string
	label: string
	active?: boolean
}) {
	return (
		<li className='relative'>
			{active && (
				<div className='absolute h-1.5 w-1.5 bg-[#00E4F0] left-1/2 -top-2.5'></div>
			)}
			<Link href={href} className='hover:text-[#00E4F0] transition-all'>
				{label}
			</Link>
		</li>
	)
}
