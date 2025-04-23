import Image from 'next/image'
import React from 'react'

export default function Logos() {
  return (
    <div className="lg:h-[70vh] flex justify-center ">
      <div className="flex lg:flex-row flex-col justify-evenly w-full items-center space-y-12 my-10 lg:my-0">
        <Image
          alt=""
          src="/hidrocenterlogo.png"
          height={300}
          width={292}
          className="lg:mix-blend-luminosity hover:mix-blend-normal mix-blend-normal max-w-[40%] lg:max-w-none"
        />

        <Image
          alt=""
          src="/Elitelogo.png"
          height={300}
          width={292}
          className="lg:mix-blend-luminosity hover:mix-blend-normal mix-blend-normal max-w-[40%] lg:max-w-none "
        />

        <Image
          alt=""
          src="/Freshlogo.png"
          height={300}
          width={292}
          className="lg:mix-blend-luminosity hover:mix-blend-normal mix-blend-normal max-w-[40%] lg:max-w-none"
        />
      </div>
    </div>
  )
}
