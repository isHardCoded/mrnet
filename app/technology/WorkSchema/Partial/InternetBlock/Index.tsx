import Image from "next/image"

export function InternetBlock() {
	return (
		<div className='flex flex-col gap-2.5 items-center'>
			<Image
				src='images/work-schema/internet.svg'
				alt='Интернет'
				width={69}
				height={69}
			/>
			<p className='text-[15px] leading-[19px] text-center'>интернет</p>
		</div>
	)
}
