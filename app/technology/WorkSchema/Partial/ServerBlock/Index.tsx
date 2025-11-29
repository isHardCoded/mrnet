	import Image from "next/image"

	export function ServerBlock() {
		return (
			<div className='flex flex-col items-center gap-3 pt-10'>
				<Image
					src='images/work-schema/server.svg'
					alt='Сервер'
					width={105}
					height={115}
				/>
				<p className='text-center'>
					mrnet
					<br />
					суммирующий
					<br />
					сервер
				</p>
			</div>
		)
	}
