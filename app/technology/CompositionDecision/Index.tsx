import Image from 'next/image'

export default function CompositionDecision() {
	return (
		<div className='pt-[75px]'>
			<h2 className='text-[32px] leading-[39px] tracking-[5%] uppercase'>
				Состав решения
			</h2>

			<div className='grid grid-cols-1 xl:grid-cols-3 xl:flex-row gap-5 mt-5'>
				<div
					className='border border-[#00E4F0] p-5 bg-line rounded-lg'
					style={{
						background:
							'linear-gradient(62.92deg, #00E4F0 2.17%, rgba(0, 0, 0, 0) 66.31%)',
					}}
				>
					<header>
						<div className='flex gap-1.5'>
							<span className='border border-white rounded-full flex items-center justify-center p-1 px-3.5 text-[10px]'>
								1
							</span>
							<p className='uppercase border border-white rounded-full flex items-center justify-center p-2 px-6 text-[10px]'>
								У клиента
							</p>
						</div>
					</header>
					<h3 className='uppercase text-[26px] mt-3'>Мультироутер</h3>

					<Image
						src='images/composition-decision/multirouter.svg'
						alt='Мультироутер'
						width={290}
						height={220}
						className='mt-3'
					/>

					<p className='text-[18px] mt-3'>
						Подключается к LTE-соединениям и передает данные параллельно по
						нескольким независимым каналам связи. Скорость суммируется — до 250
						Мбит/с с четырех каналов связи
					</p>
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
							<span className='border border-white rounded-full flex items-center justify-center p-1 px-3.5 text-[10px]'>
								2
							</span>

							<div className='flex items-center gap-2'>
								<p className='uppercase border border-white rounded-full flex items-center justify-center p-2 px-6 text-[10px]'>
									В дата центре
								</p>
								<span className='text-[10px]'>или</span>
								<p className='uppercase border border-white rounded-full flex items-center justify-center p-2 px-6 text-[10px]'>
									У клиента
								</p>
							</div>
						</div>

						<h3 className='uppercase text-[26px] mt-3'>ПО «Бондинг»</h3>

						<h5 className='text-[20px] text-[#00E4F0] leading-[27px] tracking-[9%]'>
							(№ 25726 Реестр Российского программного обеспечения)
						</h5>
					</header>

					<div className='flex flex-col justify-between mt-7 gap-4'>
						<p className='text-[18px]'>
							Обеспечивает передачу данных с Мультироутера с использованием
							одновременно всех подключенных каналов до «суммирующего сервера» и
							обратно. Суммирующий сервер можно установить на ресурсах клиента.
							C / C++ / Bash
						</p>

						<p className='mt-3 text-[18px]'>
							Функциональные характеристики ПО «Бондинг»
						</p>

						<p className='mt-3 text-[18px]'>
							Цены на ПО «Бондинг» рассчитываются индивидуально под клиента. Для
							запроса цены оставьте заявку
						</p>
					</div>
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
							<span className='border border-white rounded-full flex items-center justify-center p-1 px-3.5 text-[10px]'>
								3
							</span>

							<div className='flex items-center gap-2'>
								<p className='uppercase border border-white rounded-full flex items-center justify-center p-2 px-6 text-[10px]'>
									В облаке
								</p>
							</div>
						</div>

						<h3 className='uppercase text-[26px] mt-3'>ПО «Бондинг»</h3>

						<h5 className='text-[20px] text-[#00E4F0] leading-[27px] tracking-[9%]'>
							(№ 25726 Реестр Российского программного обеспечения)
						</h5>
					</header>

					<div className='flex flex-col justify-between mt-7 gap-4'>
						<p className='text-[18px]'>
							Web-интерфейс с дашбордом для мониторинга и удаленного управления
							мультироутеров mrnet и настройки сети. Python / JavaScript /
							TypeScript
						</p>

						<p className='mt-3 text-[18px]'>
							Функциональные характеристики ПО «Платформа управления сетевыми
							устройствами»
						</p>

						<p className='mt-3 text-[18px]'>
							Цены на ПО «Платформа управления сетевыми устройствами»
							рассчитываются индивидуально под клиента. Для запроса цены
							оставьте заявку
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
