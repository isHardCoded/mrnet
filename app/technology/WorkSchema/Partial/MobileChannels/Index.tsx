import Image from "next/image"

export function MobileChannels() {
  const speeds = [20, 15, 5, 50]
  return (
    <div className='flex items-center flex-col gap-10'>
      {speeds.map((s, i) => (
        <div key={i} className='flex flex-col items-center gap-1'>
          <p className='text-sm text-center'>Мобильная сеть</p>
          <p className='text-[#00E4F0] leading-[22px] text-center'>{s} Мбит/c</p>
          <Image
            src='images/work-schema/arrow.svg'
            alt='Стрелка'
            width={133}
            height={9}
          />
        </div>
      ))}
    </div>
  )
}