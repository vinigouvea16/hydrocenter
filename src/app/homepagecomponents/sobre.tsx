'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Sobre() {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="w-[90%] flex flex-col justify-center mx-auto py-20 space-y-8"
      >
        <h4 className="font-copernicus-bold text-2xl opacity-75 xl:text-[40px] lg:text-3xl tracking-wider">
          Quem Somos?
        </h4>
        <div className="flex flex-col gap-2">
          <p
            className="font-sans opacity-90 brightness-105
          md:text-base xl:text-lg font-light xl:leading-8  first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold 
  first-letter:mr-3 first-letter:float-left tracking-wide"
          >
            A Hydrocenter nasceu em 1998, quando chegamos ao Paraná.
            Inicialmente, o cultivo hidropônico era um hobby, uma paixão do
            fundador, Paulo Gouvea. Em 1996, enquanto residia nos Estados
            Unidos, em Los Angeles, Paulo teve contato com a técnica da
            hidroponia por meio de um canadense, e ali se encantou com o
            processo. Começou com uma pequena estufa no quintal de casa,
            cultivando suas primeiras mudas de tomate. Ao retornar ao Brasil, em
            1998, mudou-se para o Paraná e adquiriu o terreno onde hoje a
            Hydrocenter está estabelecida.
          </p>
          <p className="font-sans font-light text-base xl:text-lg opacity-90 brightness-105 tracking-wide">
            A paixão e o compromisso com a qualidade logo renderam frutos, e a
            empresa conquistou espaço nas maiores redes de varejo de Curitiba,
            consolidando sua presença no mercado.
          </p>
          <p className="font-sans font-light text-base xl:text-lg opacity-90 brightness-105 tracking-wide">
            Nossa plantação conta, também, com 66 placas solares para
            abastecimento da rede elétrica, suprindo o consumo de energia da
            companhia elétrica da região. Essas placas também fornecem energia
            para as duas residências localizadas no terreno.
          </p>
          <p className="font-sans font-light text-base xl:text-lg opacity-90 brightness-105 tracking-wide">
            Além do cultivo hidropônico, o espaço abriga um pomar diversificado,
            com laranjas, limões, uvas, pêssegos e jabuticabas. Há também uma
            horta, onde cultivamos alimentos não comercializados, destinados ao
            consumo da família – algo que sempre valorizamos. Ao fim da
            propriedade, um tanque com tilápias e patos complementa o cenário. A
            água utilizada no cultivo provém de uma nascente natural, que também
            alimenta o tanque.
          </p>
        </div>
      </motion.div>
      <div className="flex lg:max-h-[491px] lg:flex-row flex-col" id="images">
        <Image
          alt=""
          src="/about1.jpg"
          className="object-cover lg:w-1/2"
          loading="lazy"
          quality={100}
          width={738}
          height={491}
        />

        <Image
          alt=""
          src="/about2.jpg"
          className="object-cover lg:w-1/2"
          loading="lazy"
          quality={100}
          width={738}
          height={491}
        />
      </div>
    </div>
  )
}
