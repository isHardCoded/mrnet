import Image from "next/image"

import { ArrowsColumn } from '../Partial/ArrowsColumn/Index'
import { ClientSide } from '../Partial/ClientSide/Index'
import { Devices } from '../Partial/Devices/Index'
import { InternetBlock } from '../Partial/InternetBlock/Index'
import { MobileChannels } from '../Partial/MobileChannels/Index'
import { Networks } from '../Partial/Networks/Index'
import { RouterBlock } from '../Partial/RouterBlock/Index'
import { ServerBlock } from '../Partial/ServerBlock/Index'
import { SimCards } from '../Partial/SimCards/Index'

export default function DesktopVerison() {
  return (
		<div className='flex flex-col gap-5 pt-30 border border-[#00E4F099] mt-[30px] rounded-xl p-10'>
			<div className='flex justify-between items-center'>
				<ClientSide />
				<div className='flex gap-8'>
					<div className='flex flex-col items-center ml-7'>
						<p className='uppercase text-center pb-5'>
							SIM-карты <br /> и Ethernet-кабель
						</p>
						<div className='w-px h-5 bg-[#00E4F0] mx-auto'></div>
						<div className='flex justify-between w-20 bg-[#00E4F0] h-px'>
							<div className='w-px h-3 bg-[#00E4F0]'></div>
							<div className='w-px h-3 bg-[#00E4F0]'></div>
						</div>
					</div>
					<div className='flex flex-col items-center pl-5'>
						<p className='uppercase text-center pb-5'>
							Разные <br /> операторы
						</p>
						<div className='w-px h-5 bg-[#00E4F0] mx-auto'></div>
						<div className='flex justify-between w-20 bg-[#00E4F0] h-px'>
							<div className='w-px h-3 bg-[#00E4F0]'></div>
							<div className='w-px h-3 bg-[#00E4F0]'></div>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center'>
					<p className='uppercase text-center pb-5'>
						Суммируем скорость <br /> по каналам
					</p>
					<div className='w-px h-5 bg-[#00E4F0] mx-auto'></div>
					<div className='flex justify-between w-[378px] bg-[#00E4F0] h-px'>
						<div className='w-px h-3 bg-[#00E4F0]'></div>
						<p className='text-[#00E4F0] pt-[8px]'>
							20 + 15 + 5 + 50 = 90 Мбит/с
						</p>
						<div className='w-px h-3 bg-[#00E4F0]'></div>
					</div>
				</div>
			</div>
			<div className='flex items-center gap-4'>
				<Devices />

				<div className='flex flex-col items-center gap-3'>
					<p>LAN или Wi-Fi</p>
					<Image
						src='images/work-schema/arrow.svg'
						alt='Стрелка'
						width={133}
						height={9}
					/>
				</div>

				<RouterBlock />
				<ArrowsColumn
					rotation={['-rotate-30', '-rotate-15', 'rotate-15', 'rotate-30']}
				/>
				<SimCards />
				<MobileChannels />
				<Networks />
				<ArrowsColumn
					rotation={['rotate-30', 'rotate-15', '-rotate-15', '-rotate-30']}
				/>
				<ServerBlock />

				<div className='flex flex-col items-center gap-3'>
					<p>Статичный IP</p>
					<Image
						src='images/work-schema/arrow.svg'
						alt='Стрелка'
						width={133}
						height={9}
					/>
				</div>

				<InternetBlock />
			</div>
		</div>
	)
}