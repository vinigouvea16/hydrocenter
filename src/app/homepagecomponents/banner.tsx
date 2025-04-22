import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
      <Image
        src="/banner1.png"
        width={539}
        height={360}
        alt=""
        priority
        quality={100}
        className="w-full h-auto object-cover"
      />
      <Image
        src="/banner2.png"
        width={539}
        height={360}
        alt=""
        priority
        quality={100}
        className="w-full h-auto object-cover"
      />
      <Image
        src="/banner3.png"
        width={539}
        height={360}
        alt=""
        priority
        quality={100}
        className="w-full h-auto object-cover"
      />
      <Image
        src="/banner4.png"
        width={539}
        height={360}
        alt=""
        priority
        quality={100}
        className="w-full h-auto object-cover"
      />
    </div>
  )
}
