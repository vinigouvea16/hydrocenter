import Image from 'next/image'
import React from 'react'

export default function Clientes() {
  return (
    <div className="lg:h-[40vh] flex flex-col justify-around items-center ">
      <h1 className="font-copernicus-bold lg:text-3xl text-2xl opacity-75 text-center">
        Empresas que confiam em nós
      </h1>
      <div className="flex lg:flex-row flex-col justify-evenly w-full items-center space-y-12 my-10 lg:my-0">
        <Image
          alt=""
          src="/festval.png"
          height={300}
          width={292}
          className="mix-blend-luminosity hover:mix-blend-normal max-w-[40%] lg:max-w-[20%]"
        />

        <Image
          alt=""
          src="/carrefour.png"
          height={300}
          width={292}
          className="mix-blend-luminosity hover:mix-blend-normal max-w-[40%] lg:max-w-[20%] "
        />

        <Image
          alt=""
          src="/armazem.png"
          height={300}
          width={292}
          className="mix-blend-luminosity hover:mix-blend-normal max-w-[40%] lg:max-w-[20%]"
        />

        <Image
          alt=""
          src="/nacional.png"
          height={300}
          width={292}
          className="mix-blend-luminosity hover:mix-blend-normal max-w-[40%] lg:max-w-[20%]"
        />
      </div>
    </div>
  )
}
