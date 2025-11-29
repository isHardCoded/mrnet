import Image from 'next/image'

interface ArrowsColumnProps {
	rotation: string[]
}

export function ArrowsColumn({ rotation }: ArrowsColumnProps) {
	return (
		<div className='flex flex-col gap-10'>
			{rotation.map((cls: string, i: number) => (
				<Image
					key={i}
					className={`${cls} mt-5`}
					src='images/work-schema/arrow.svg'
					alt='Стрелка'
					width={133}
					height={9}
				/>
			))}
		</div>
	)
}
