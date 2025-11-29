import Image from "next/image"

export function SimCards() {
  return (
    <div className='flex flex-col gap-10 pt-10'>
      {[1, 2, 3].map(i => (
        <Image
          key={i}
          src='images/work-schema/sim.svg'
          alt='Сим-карта'
          width={45}
          height={75}
        />
      ))}
      <Image
        src='images/work-schema/ethernet.svg'
        alt='Ethernet'
        width={31}
        height={65}
      />
    </div>
  )
}
