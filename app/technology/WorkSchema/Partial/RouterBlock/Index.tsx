import Image from "next/image"

export function RouterBlock() {
  return (
    <div className='flex flex-col items-center gap-3'>
      <Image
        src='images/work-schema/router.svg'
        alt='Роутер'
        width={95}
        height={74}
      />
      <p className='text-center'>mrnet мультироутер</p>
    </div>
  )
}