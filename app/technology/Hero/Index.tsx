import Image from 'next/image'

export default function Hero() {
	return (
		<div className='flex flex-col xl:flex-row gap-4'>
			<Image
				src='images/hero-image.svg'
				alt='Картинка Роутер Mrnet'
				width={563}
				height={452}
			/>
			<div
				className='flex flex-col w-full items-start justify-between gap-8 p-5 rounded-lg border border-[#00E4F0] pr-20'
				style={{
					background:
						'linear-gradient(246.99deg, #00E4F0 3.34%, rgba(0, 0, 0, 0) 75.22%)',
				}}
			>
				<h2 className='uppercase text-[18px] xl:text-[24px] leading-[35px] tracking-[5%]'>
					РЕШЕНИЕ mrnet С ТЕХНОЛОГИЕЙ BONDING ОБЪЕДИНЯЕТ ВСЕ ДОСТУПНЫЕ КАНАЛЫ
					СВЯЗИ В ЕДИНЫЙ ВИРТУАЛЬНЫЙ КАНАЛ, СУММИРУЕТ СКОРОСТЬ ПЕРЕДАЧИ ДАННЫХ
					И ПОВЫШАЕТ НАДЕЖНОСТЬ СОЕДИНЕНИЯ
				</h2>

				<button className='bg-[#00E4F0] text-black py-1 px-16 rounded-full leading-[140%] tracking-[7%] uppercase cursor-pointer hover:bg-[#04c2cc] transition-all'>
					Оставить заявку
				</button>

				<p className='text-[18px] leading-[22.2px] tracking-[-1%]'>
					Оставьте заявку и с вами свяжется менеджер и договорится о запуске
					пилота. Без необходимости отключения от текущего провайдера и
					заключения договора. Все цены рассчитываются индивидуально под клиента
				</p>
			</div>
		</div>
	)
}
