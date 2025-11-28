import Image from 'next/image'

export default function PrincipleCard({
	item,
	index,
}: {
	item: { content: string; imageUrl: string }
	index: number
}) {
	return (
		<div className='flex flex-col gap-10 p-5 border border-[#FF4C00] rounded-lg h-full'>
			<Image
				src={item.imageUrl}
				alt={`Принцип ${index + 1}`}
				width={408}
				height={200}
			/>
			<p className='uppercase text-[20px] leading-[100%] tracking-[5%]'>
				{item.content}
			</p>
		</div>
	)
}
