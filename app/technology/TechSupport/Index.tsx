import Image from 'next/image'

export default function TechSupport() {
	return (
		<div className='pt-[75px]'>
			<h2 className='text-[32px] leading-[39px] tracking-[5%] uppercase'>
				Техподдержка 24/7
			</h2>

			<div className='grid grid-cols-1 xl:grid-cols-2 gap-3 mt-5'>
				<div
					className='flex items-start justify-between border border-[#FF4C00] rounded-xl p-5'
					style={{
						background:
							'linear-gradient(250.93deg, rgba(0, 0, 0, 0) 17.65%, #FF4C00 100%)',
					}}
				>
					<div className='flex flex-col gap-5'>
						<h3 className='uppercase text-[26px] tracking-[5%]'>видим</h3>
						<ul className='list-disc pl-5'>
							<li>
								<p>Работоспособность устройств</p>
							</li>
							<li>
								<p>Уровень сигнала на устройстве</p>
							</li>
							<li>
								<p>Доступность канала передачи и узла связи</p>
							</li>
						</ul>
					</div>
					<Image
						src='images/tech-support/sup-router.svg'
						alt='Роутер'
						width={81}
						height={60}
					/>
				</div>
				<div
					className='flex items-start justify-between border border-[#FF4C00] rounded-xl p-5'
					style={{
						background:
							'linear-gradient(250.93deg, rgba(0, 0, 0, 0) 17.65%, #FF4C00 100%)',
					}}
				>
					<div className='flex flex-col gap-5'>
						<h3 className='uppercase text-[26px] tracking-[5%]'>
							Делаем удаленно
						</h3>
						<ul className='list-disc pl-5'>
							<li>
								<p>Настройку устройств</p>
							</li>
							<li>
								<p>Перезагрузку устройств</p>
							</li>
							<li>
								<p>Обновление ПО</p>
							</li>
						</ul>
					</div>
					<Image
						src='images/tech-support/refresh.svg'
						alt='Роутер'
						width={63}
						height={60}
					/>
				</div>
			</div>
		</div>
	)
}
