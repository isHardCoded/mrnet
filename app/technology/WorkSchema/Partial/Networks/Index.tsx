import Image from "next/image"

export function Networks() {
  return (
    <div className='flex flex-col gap-5 pt-10'>
      {[1, 2, 3, 4].map(i => (
        <Image
          key={i}
          src='images/work-schema/network.svg'
          alt='Сеть'
          width={48}
          height={73}
        />
      ))}
    </div>
  )
}