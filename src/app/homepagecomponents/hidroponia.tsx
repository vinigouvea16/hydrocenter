import { Droplets, Zap, Leaf, Scan } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Hidroponia() {
  return (
    <div className="flex flex-col border-b border-white/70">
      <div className="max-w-[1440px] mx-auto space-y-4 py-14 px-4 xl:px-0">
        <h1 className="font-bold lg:text-2xl text-xl">O que é a hidroponia?</h1>
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
          <h2 className="lg:w-2/3 font-tiempos-italic lg:text-[40px] text-2xl ">
            Cultivo de plantas sem solo, utilizando soluções nutritivas em água.
          </h2>
          <p className="lg:w-1/4 font-tiempos opacity-70 lg:text-lg tracking-widest">
            Alimentos cultivados com cuidado e precisão, garantido sabor e
            qualidade superiores.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-white/70">
        <Image
          src="/hidroponia.png"
          alt={''}
          className="object-cover w-full h-full"
          width={710}
          height={324}
          // unoptimized
        />

        <div className="flex flex-col items-center justify-center text-center lg:pr-16 lg:pl-6 gap-8 p-4 ">
          <p className="font-tiempos opacity-70 xl:text-xl tracking-wider ">
            Embora o termo <span className="italic">hidroponia</span> seja
            relativamente novo, as técnicas de cultivo sem solo têm raízes
            antigas. Acredita-se que os Jardins Suspensos da Babilônia, uma das
            Sete Maravilhas do Mundo Antigo, utilizavam um sistema rudimentar de
            hidroponia. Além disso, há evidências de que os antigos egípcios
            praticavam o cultivo de plantas em água ao longo do Rio Nilo.
          </p>
          <p className="font-tiempos-italic xl:text-4xl text-2xl pb-3">
            Prepare-se para colher os benefícios de uma agricultura moderna e
            consciente, que respeita o planeta e nutre você de verdade.
          </p>
        </div>
      </div>

      {/* // CARDS */}
      <div className="flex flex-col lg:h-[200px] lg:flex-row justify-evenly items-center border-t border-white/70">
        {/* // card 1 */}
        <div className="flex flex-col gap-2 p-4 xl:p-0 max-w-[573px]">
          <div className="flex gap-2 items-center" id="card-header">
            <Droplets size={24} />
            <div className="xl:text-2xl text-xl tracking-wider font-tiempos-italic">
              Economia de Água
            </div>
          </div>
          <p className="opacity-70 xl:max-w-[300px] tracking-wide">
            Reaproveitamento da água de irrigação, reduzindo em até 70% o
            consumo hídrico
          </p>
        </div>

        {/* // card 2 */}
        <div className="flex flex-col gap-2 p-4 xl:p-0 max-w-[573px]">
          <div className="flex gap-2 items-center " id="card-header">
            <Zap size={24} />
            <div className="xl:text-2xl text-xl tracking-wider font-tiempos-italic">
              Crescimento acelerado
            </div>
          </div>
          <p className="opacity-70 xl:max-w-[300px] tracking-wide">
            Estufas desenvolvidas para otimizar o metabolismo das plantas,
            proporcionando ciclos menores
          </p>
        </div>

        {/* // card 3 */}
        <div className="flex flex-col gap-2 p-4 xl:p-0  ">
          <div className="flex gap-2 items-center" id="card-header">
            <Leaf size={24} />
            <div className="xl:text-2xl text-xl tracking-wider font-tiempos-italic">
              Sem uso de pesticidas
            </div>
          </div>
          <p className="opacity-70 xl:max-w-[300px] tracking-wide">
            Estufas equipadas com telas antiafídios, impedindo o acesso de
            pragas.
          </p>
        </div>

        {/* // card 4 */}
        <div className="flex flex-col gap-2 p-4 xl:p-0  ">
          <div className="flex gap-2 items-center" id="card-header">
            <Scan size={24} />
            <div className="xl:text-2xl text-xl tracking-wider font-tiempos-italic">
              Otimização de Espaço
            </div>
          </div>
          <p className="opacity-70 xl:max-w-[300px] tracking-wide">
            Cultivo independete de solo, capaz de ser produzido em áreas urbanas
          </p>
        </div>
      </div>
    </div>
  )
}
