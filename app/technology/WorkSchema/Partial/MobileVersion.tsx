import Image from 'next/image'

import { ClientSide } from '../Partial/ClientSide/Index'
import { Devices } from '../Partial/Devices/Index'
import { RouterBlock } from '../Partial/RouterBlock/Index'
import { SimCards } from '../Partial/SimCards/Index'
import { MobileChannels } from '../Partial/MobileChannels/Index'
import { Networks } from '../Partial/Networks/Index'
import { ServerBlock } from '../Partial/ServerBlock/Index'
import { InternetBlock } from '../Partial/InternetBlock/Index'

export default function MobileVersion() {
	return (
		<div className='flex flex-col gap-10 mt-[30px] border border-[#00E4F099] rounded-xl p-6 items-center'>
			<div className='mx-auto'>
				<ClientSide />
			</div>

			<div className='flex flex-col gap-30'>
				<div className='mx-auto'>
					<Devices />
				</div>

				<Image
					src='/images/work-schema/arrow.svg'
					alt='arrow'
					width={133}
					height={9}
					className='self-center rotate-90'
				/>
			</div>

			<div className='mt-20'>
				<RouterBlock />
			</div>

			<div className='flex justify-center gap-20 mt-15 mb-10'>
				<Image
					src='/images/work-schema/arrow.svg'
					alt='arrow'
					width={133}
					height={9}
					className='self-center -rotate-80'
				/>
				<Image
					src='/images/work-schema/arrow.svg'
					alt='arrow'
					width={133}
					height={9}
					className='self-center rotate-80'
				/>
			</div>

			<div className='flex items-center'>
				<div className='flex flex-col items-center'>
					<div className='flex flex-col items-center'>
						<p className='uppercase text-center text-sm pb-5'>
							SIM-карты <br /> и Ethernet-кабель
						</p>
						<div className='w-px h-5 bg-[#00E4F0] mx-auto'></div>
						<div className='flex justify-between w-20 bg-[#00E4F0] h-px'>
							<div className='w-px h-3 bg-[#00E4F0]'></div>
							<div className='w-px h-3 bg-[#00E4F0]'></div>
						</div>
					</div>
					<SimCards />
				</div>

				<div className='flex flex-col items-center mt-20 text-sm'>
					<MobileChannels />
				</div>

				<div className='flex flex-col items-center mt-1'>
					<div className='flex flex-col items-center'>
						<p className='uppercase text-sm text-center pb-5'>
							Разные <br /> операторы
						</p>
						<div className='w-px h-5 bg-[#00E4F0] mx-auto'></div>
						<div className='flex justify-between w-20 bg-[#00E4F0] h-px'>
							<div className='w-px h-3 bg-[#00E4F0]'></div>
							<div className='w-px h-3 bg-[#00E4F0]'></div>
						</div>
					</div>
					<Networks />
				</div>
			</div>

			<div className='flex justify-center gap-20 mt-15 mb-10'>
				<Image
					src='/images/work-schema/arrow.svg'
					alt='arrow'
					width={133}
					height={9}
					className='self-center rotate-80'
				/>
				<Image
					src='/images/work-schema/arrow.svg'
					alt='arrow'
					width={133}
					height={9}
					className='self-center -rotate-80'
				/>
			</div>
			<ServerBlock />

			<Image
				src='/images/work-schema/arrow.svg'
				alt='arrow'
				width={133}
				height={9}
				className='self-center rotate-90 mt-20 mb-20'
			/>

			{/* Интернет */}
			<InternetBlock />
		</div>
	)
}
