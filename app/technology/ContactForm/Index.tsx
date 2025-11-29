import Form from './Partial/Form'

export default function ContactForm() {
	return (
		<div className='pt-[75px]'>
			<h2 className='text-[32px] leading-[39px] tracking-[5%] uppercase'>
				Наши специалисты на связи круглосуточно. <br />
				Отвечают по телефону, в почте и Telegram
			</h2>
			<div className='flex flex-col xl:flex-row gap-4 pt-10'>
				<div
					className='p-5 rounded-xl col-span-4 max-w-[500px]'
					style={{
						background:
							'linear-gradient(68.23deg, #FF4C00 9.46%, #B38BCE 52.36%, #00E4F0 91.95%)',
					}}
				>
					<p className='uppercase text-[32px] text-black leading-10 tracking-[4%]'>
						Хотите узнать больше, рассчитать стоимость или забрать устройство
						на бесплатный тест?
					</p>
				</div>
				<Form />
			</div>
		</div>
	)
}
