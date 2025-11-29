'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IMaskInput } from 'react-imask'

const schema = yup.object({
	name: yup.string().required('Введите имя'),
	phone: yup
		.string()
		.matches(
			/^\+7 \(\d{3}\)\d{3}-\d{2}-\d{2}$/,
			'Введите телефон в формате +7 (123)456-78-90'
		)
		.required('Введите телефон'),
	tg: yup.string().required('Введите ник в Telegram'),
	consent: yup.bool().oneOf([true], 'Необходимо согласие').required(),
})

type FormData = yup.InferType<typeof schema>

export default function Form() {
	const [submitted, setSubmitted] = useState(false)

	const {
		register,
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
		mode: 'onChange',
	})

	const onSubmit = (data: FormData) => {
		console.log('Форма отправлена:', data)
		setSubmitted(true)
	}

	return (
		<div className='relative col-span-8'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={`flex flex-col gap-5 border border-[#00E4F0] p-5 rounded-xl transition-all duration-500 ease-in-out ${
					submitted
						? 'opacity-0 max-h-0 overflow-hidden'
						: 'opacity-100 max-h-[1000px]'
				}`}
				style={{
					background:
						'linear-gradient(246.99deg, #00E4F0 3.34%, rgba(0, 0, 0, 0) 50%)',
				}}
			>
				<h3 className='uppercase text-[20px]'>
					Услуга доступна только для юридических лиц
				</h3>

				<div className='flex flex-col'>
					<input
						{...register('name')}
						type='text'
						placeholder='Ваше имя'
						className={`border p-2 rounded-full pl-[30px] bg-black ${
							errors.name ? 'border-red-500' : 'border-[#00E4F0]'
						}`}
					/>
				</div>

				<p className='ml-5 text-[18px]'>Оставьте ваши контакты</p>

				<div className='flex flex-col'>
					<Controller
						name='phone'
						control={control}
						render={({ field }) => (
							<IMaskInput
								{...field}
								mask='+7 (000)000-00-00'
								placeholder='Ваш телефон +7 (___)___-__-__ *'
								className={`border p-2 rounded-full pl-[30px] bg-black ${
									errors.phone ? 'border-red-500' : 'border-[#00E4F0]'
								}`}
								onAccept={(value: string) => field.onChange(value)}
								overwrite
							/>
						)}
					/>
				</div>

				<div className='flex flex-col'>
					<input
						{...register('tg')}
						type='text'
						placeholder='Ваш ник в Telegram'
						className={`border p-2 rounded-full pl-[30px] bg-black ${
							errors.tg ? 'border-red-500' : 'border-[#00E4F0]'
						}`}
					/>
				</div>

				<label className='flex items-start gap-3 cursor-pointer'>
					<div className='relative'>
						<input
							type='checkbox'
							{...register('consent')}
							className='appearance-none w-5 h-5 border border-[#00E4F0] checked:bg-[#00E4F0] checked:border-[#00E4F0] focus:outline-none'
						/>
						<svg
							className='absolute top-0 left-0 w-5 h-5 pointer-events-none'
							viewBox='0 0 24 24'
							fill='none'
							stroke='white'
							strokeWidth='3'
							strokeLinecap='round'
							strokeLinejoin='round'
							style={{ display: 'none' }}
						>
							<polyline points='20 6 9 17 4 12' />
						</svg>
					</div>
					<div className='flex flex-col'>
						<p className='text-xs text-[#B0B0B0]'>
							Я даю согласие на обработку моих персональных данных в форме
							обращения на странице сайта. Ознакомиться с условиями Политики
							обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН»
						</p>
						<p className='text-xs text-[#B0B0B0] mt-2'>
							* Поля, обязательные для заполнения
						</p>
					</div>
				</label>

				<button
					className='bg-blue-600 text-black px-20 py-2 uppercase disabled:bg-gray-400 rounded-full cursor-pointer mx-auto xl:mx-0 xl:max-w-80'
					type='submit'
					disabled={!isValid}
					style={{
						background:
							'linear-gradient(252.6deg, #FF4C00 20.57%, #B38BCE 60.25%, #00E4F0 86.93%)',
					}}
				>
					Начать!
				</button>
			</form>

			{submitted && (
				<div className='transition-opacity duration-500 opacity-100 mt-4 text-white text-center text-[30px] font-semibold'>
					Спасибо за заявку! Наши менеджеры уже взяли её в работу и скоро
					свяжутся с вами.
				</div>
			)}
		</div>
	)
}
