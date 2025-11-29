import Image from "next/image";

export default function CompositionDecision() {
  return (
		<div className='pt-[75px]'>
			<h2 className='text-[32px] leading-[39px] tracking-[5%] uppercase'>
				Состав решения
			</h2>
			<div className='flex flex-col xl:flex-row gap-5 mt-5'>
				<div
					className='border border-[#00E4F0] p-5 bg-line rounded-lg'
					style={{
						background:
							'linear-gradient(62.92deg, #00E4F0 2.17%, rgba(0, 0, 0, 0) 66.31%)',
					}}
				>
					<header>
						<div className='flex gap-1.5'>
							<span className='border border-white rounded-full flex items-center justify-center p-1 px-4'>
								1
							</span>
							<p className='uppercase border border-white rounded-full flex items-center justify-center p-2 px-6'>
								У клиента
							</p>
						</div>
						<h3 className='uppercase text-[26px]'>Мультироутер</h3>
						<Image
							src='images/composition-decision/multirouter.svg'
							alt='Мультироутер'
							width={290}
							height={220}
						/>
						<p className='text-[18px]'>
							Подключается к LTE-соединениям и передает данные параллельно по
							нескольким независимым каналам связи. Скорость суммируется — до
							250 Мбит/с с четырех каналов связи
						</p>
					</header>
				</div>
				<div
					className='border border-[#00E4F0] p-5 bg-line rounded-lg'
					style={{
						background:
							'linear-gradient(62.92deg, #00E4F0 2.17%, rgba(0, 0, 0, 0) 66.31%)',
					}}
				>
					<header>
						<div className='flex gap-1.5'>
							<span className='border border-white rounded-full flex items-center justify-center p-1 px-4'>
								1
							</span>
							<p className='uppercase border border-white rounded-full flex items-center justify-center p-2 px-6'>
								У клиента
							</p>
						</div>
						<h3 className='uppercase text-[26px]'>Мультироутер</h3>
						<Image
							src='images/composition-decision/multirouter.svg'
							alt='Мультироутер'
							width={290}
							height={220}
						/>
						<p className='text-[18px]'>
							Подключается к LTE-соединениям и передает данные параллельно по
							нескольким независимым каналам связи. Скорость суммируется — до
							250 Мбит/с с четырех каналов связи
						</p>
					</header>
				</div>
				<div
					className='border border-[#00E4F0] p-5 bg-line rounded-lg'
					style={{
						background:
							'linear-gradient(62.92deg, #00E4F0 2.17%, rgba(0, 0, 0, 0) 66.31%)',
					}}
				>
					<header>
						<div className='flex gap-1.5'>
							<span className='border border-white rounded-full flex items-center justify-center p-1 px-4'>
								1
							</span>
							<p className='uppercase border border-white rounded-full flex items-center justify-center p-2 px-6'>
								У клиента
							</p>
						</div>
						<h3 className='uppercase text-[26px]'>Мультироутер</h3>
						<Image
							src='images/composition-decision/multirouter.svg'
							alt='Мультироутер'
							width={290}
							height={220}
						/>
						<p className='text-[18px]'>
							Подключается к LTE-соединениям и передает данные параллельно по
							нескольким независимым каналам связи. Скорость суммируется — до
							250 Мбит/с с четырех каналов связи
						</p>
					</header>
				</div>
			</div>
		</div>
	)
}