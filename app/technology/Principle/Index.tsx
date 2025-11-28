import { principleItems } from '@/app/shared/data/principleItems'
import PrincipleCard from './Partial/PrincipleCard'

export default function Principle() {
	return (
		<div className='pt-[75px]'>
			<h2 className='text-[32px] leading-[39px] tracking-[5%] uppercase'>
				Принцип работы
			</h2>
			<ul className='flex flex-col xl:flex-row justify-between gap-3 items-stretch pt-5'>
				{principleItems.map((item, index) => (
					<li key={index} className='flex-1'>
						<PrincipleCard item={item} index={index} />
					</li>
				))}
			</ul>
		</div>
	)
}
