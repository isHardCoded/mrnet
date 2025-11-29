import Image from 'next/image'

export default function Footer() {
	return (
		<footer className='relative uppercase text-[20px] pb-20'>
			<h2 className='py-25'>Дефолтный подвал</h2>
			<div className='flex flex-col xl:flex-row gap-20'>
				<div>
					<p className='text-[12px] leading-[19.6px] tracking-[1%]'>
						ООО «Ньюком Дистрибьюшн»,
						<br />
						ОГРН: 1207700420784, <br />
						Юридический адрес: 119017, Российская Федерация, <br />
						г. Москва, <br />
						ул. Большая Ордынка, д. 54 стр. 2
					</p>
					<div className='hidden xl:block'>
						<Image
							src='/mrnet-logo.svg'
							alt='Logo'
							loading='eager'
							width={185}
							height={41}
							className='pb-1.5 mt-20'
						/>
						<p className='mt-4'>
							КАТЕГОРИЧЕСКИ НОВЫЙ
							<br />
							ИНТЕРНЕТ ДЛЯ БИЗНЕСА
						</p>
					</div>
				</div>

				<div>
					<p className='text-[12px] leading-[19.6px] tracking-[1%]'>
						Почта: info@mrnet.ru
						<br /> График работы: по будням
						<br /> с 9:00 до 19:00 по Москве
						<br />
					</p>
					<p className='text-[12px] mt-14 leading-[19.6px] tracking-[1%]'>
						Служба поддержки: <br /> Тел: 8 (495) 308-41-51
						<br /> Тел: 8 (800) 600-35-38
						<br /> Почта: helpdesk@mrnet.ru
						<br /> График работы: 24/7
					</p>
					<p className='text-[12px] mt-17 leading-[19.6px] tracking-[1%]'>
						©2025 mrnet.ru Все права защищены
					</p>
				</div>

				<div className='flex flex-col gap-1'>
					<a
						href='#'
						className='underline text-[12px] leading-[19.6px] tracking-[1%]'
					>
						Пользовательское соглашение
					</a>
					<a
						href='#'
						className='underline text-[12px] leading-[19.6px] tracking-[1%]'
					>
						Политика в отношении обработки персональных данных
					</a>
					<a
						href='#'
						className='underline text-[12px] leading-[19.6px] tracking-[1%]'
					>
						Соглашение об обработке данных
					</a>
					<a
						href='#'
						className='underline text-[12px] leading-[19.6px] tracking-[1%]'
					>
						Соглашение о порядке оказания услуг
					</a>
					<a
						href='#'
						className='underline text-[12px] leading-[19.6px] tracking-[1%]'
					>
						Соглашение о технической поддержке
					</a>
					<a
						href='#'
						className='underline text-[12px] leading-[19.6px] tracking-[1%]'
					>
						Требования по эксплуатации оборудования mrnet
					</a>
					<a
						href='#'
						className='underline text-[12px] leading-[19.6px] tracking-[1%]'
					>
						Требования к серверным ресурсам для установки ПО
					</a>
					<a
						href='#'
						className='underline text-[12px] mt-5 leading-[19.6px] tracking-[1%]'
					>
						Инструкция по работе с личным кабинетом
					</a>
					<a
						href='#'
						className='underline text-[12px] leading-[19.6px] tracking-[1%]'
					>
						Инструкция по эксплуатации мультироутера 04
					</a>
					<a
						href='#'
						className='underline text-[12px] leading-[19.6px] tracking-[1%]'
					>
						Инструкция по эксплуатации мультироутера 05
					</a>
					<a
						href='#'
						className='underline text-[12px] leading-[19.6px] tracking-[1%]'
					>
						Инструкция по эксплуатации мультироутера 06
					</a>
					<a
						href='#'
						className='underline text-[12px] leading-[19.6px] tracking-[1%]'
					>
						Инструкция по эксплуатации мультироутера 07
					</a>
				</div>
				<div className='flex items-start xl:hidden'>
					<div>
						<Image
							src='/mrnet-logo.svg'
							alt='Logo'
							loading='eager'
							width={185}
							height={41}
							className='pb-1.5 mt-5'
						/>
						<p className='mt-4'>
							КАТЕГОРИЧЕСКИ НОВЫЙ
							<br />
							ИНТЕРНЕТ ДЛЯ БИЗНЕСА
						</p>
					</div>
					<p className='text-[12px] mt-5 leading-[19.6px] tracking-[1%]'>
						©2025 mrnet.ru Все права защищены
					</p>
				</div>
			</div>
			<Image
				src='/big-logo.svg'
				alt='Logo'
				loading='eager'
				width={375}
				height={269}
				className='hidden xl:block absolute -right-63 bottom-0'
			/>
		</footer>
	)
}
