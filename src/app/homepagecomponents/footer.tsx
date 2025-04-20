import { ChevronsUp, Mail, Phone } from 'lucide-react'
import Instagram from './svg/instagram'
import React from 'react'

export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row bg-[#162308] justify-around h-[60vh] lg:py-0 py-10">
      <div
        id="brand"
        className="flex flex-col space-y-4 items-center justify-center"
      >
        <div className="">
          <h1 className="font-copernicus-book lg:text-5xl xl:text-7xl text-5xl uppercase text-[#EBFE94]">
            hydrocenter
          </h1>
          <div className="h-[1px] w-11/12 mx-auto bg-gradient-to-r from-[#77B1C2]-hover/5 via-[#77B1C2] to-brain-[#77B1C2]/5 " />
        </div>
        <h2 className="text-[#77B1C2] xl:text-2xl text-xl">
          Planeta Água, Nutrição Sustentável
        </h2>
        <a href="https://www.instagram.com/hydrocenter_/">
          <Instagram className="lg:text-3xl text-2xl mt-2" />
        </a>
      </div>
      <div className="flex flex-col lg:flex-row text-center lg:text-left lg:gap-20 gap-12 justify-center align-bottom items-center">
        <div id="contact" className="">
          <div className="flex flex-col items-center lg:items-start space-y-1">
            <span className="font-albra tracking-wide text-white text-2xl">
              Contato
            </span>
            <a
              className="text-white flex gap-2 items-center font-tiempos tracking-wide "
              href="mailto:hidrofortuna@gmail.com"
            >
              <Mail color="#77B1C2" /> hidrofortuna@gmail.com
            </a>
            <a
              className="text-white flex gap-2 items-center font-tiempos tracking-wide "
              href="#blank"
            >
              <Phone color="#77B1C2" />
              +55(41)99999999
            </a>
          </div>
        </div>
        <div id="atendimento" className="text-white flex flex-col space-y-1">
          <span className="font-albra text-xl tracking-wide">
            Horário de Atendimento
          </span>
          <p className="font-tiempos tracking-wide">
            Segunda a Sexta: 7h - 16h
          </p>
          <p className="font-tiempos tracking-wide">Sábados: 7h - 11h</p>
        </div>
        <div className="rounded-full border-white/40 p-4 border hover:bg-[#EBFE94]/20">
          <a href="#hero">
            <ChevronsUp color="#EAE1D0" />
          </a>
        </div>
      </div>
    </div>
  )
}
