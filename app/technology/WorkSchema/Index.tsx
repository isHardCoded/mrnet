import DesktopVerison from "./Partial/DesktopVersion";
import MobileVersion from "./Partial/MobileVersion";

export default function WorkSchema() {
	return (
		<div className='pt-[75px]'>
			<h2 className='text-[32px] leading-[39px] tracking-[5%] uppercase'>
				Схема работы решения mrnet
			</h2>

			<div className="hidden lg:block">
				<DesktopVerison />
			</div>

			<div className="block lg:hidden">
				<MobileVersion />
			</div>
		</div>
	)
}