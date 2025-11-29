import Image from "next/image"

export function Devices() {
  return (
    <div className='flex flex-col gap-2.5'>
      <Image
        src='images/work-schema/laptop.svg'
        alt='Ноутбук'
        width={112}
        height={73}
      />
      <div className='flex gap-[9px]'>
        <Image
          src='images/work-schema/phone.svg'
          alt='Телефон'
          width={42}
          height={64}
        />
        <Image
          src='images/work-schema/tablet.svg'
          alt='Планшет'
          width={58}
          height={66}
        />
      </div>
      <p className='text-[15px] leading-[19px] text-center'>
        клиентские
        <br />
        устройства
      </p>
    </div>
  )
}