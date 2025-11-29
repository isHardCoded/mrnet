type ClientSideProps = {
	isMobile?: boolean
}

export function ClientSide({ isMobile }: ClientSideProps) {
	return (
		<div className='flex items-center justify-between'>
			<div>
				<p className='uppercase text-center pb-5'>
					На стороне
					<br />
					клиента
				</p>
				<div className='w-px h-5 bg-[#00E4F0] mx-auto'></div>
				<div
					className={`flex justify-between ${
						isMobile ? 'max-w-[378px]' : 'w-[378px]'
					} bg-[#00E4F0] h-px`}
				>
					<div className='w-px h-3 bg-[#00E4F0]'></div>
					<div className='w-px h-3 bg-[#00E4F0]'></div>
				</div>
			</div>
		</div>
	)
}
