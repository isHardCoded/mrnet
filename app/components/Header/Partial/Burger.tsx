export default function Burger({
	open,
	onClick,
}: {
	open: boolean
	onClick: () => void
}) {
	return (
		<button
			onClick={onClick}
			className='xl:hidden flex flex-col gap-2.5'
			aria-label='Toggle menu'
		>
			<span
				className={`block h-px w-7 bg-[#00E4F0] transition-transform ${
					open ? 'rotate-45 translate-y-2' : ''
				}`}
			/>
			<span
				className={`block h-px w-7 bg-[#00E4F0] transition-opacity ${
					open ? 'opacity-0' : ''
				}`}
			/>
			<span
				className={`block h-px w-7 bg-[#00E4F0] transition-transform ${
					open ? '-rotate-45 -translate-y-2' : ''
				}`}
			/>
		</button>
	)
}
