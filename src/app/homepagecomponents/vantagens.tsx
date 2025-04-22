import { Droplets, Leaf, Scan, Zap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const cardsData = [
  {
    id: 1,
    icon: Droplets,
    title: 'Economia de Água',
    subtitle: 'Sustentabilidade',
    description:
      'Sistemas hidropônicos usam até 70% menos água que métodos convencionais de cultivo, reciclando e reaproveitando a água, o que torna esta técnica extremamente sustentável e ideal para regiões com escassez hídrica.',
    imageSrc: '/sustentabilidade.png',
    imageAlt: 'Imagem de sustentabilidade',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Crescimento Acelerado',
    subtitle: 'Produtividade',
    description:
      'As plantas cultivadas em sistemas hidropônicos crescem até 50% mais  rápido, uma vez que recebem diretamente os nutrientes necessários, sem  precisar buscar no solo. Isso resulta em ciclos de produção mais curtos e maior produtividade.',
    imageSrc: '/produtividade.png',
    imageAlt: 'Imagem de nutrição otimizada',
  },
  {
    id: 3,
    icon: Leaf,
    title: 'Sem uso de Pesticidas',
    subtitle: 'Qualidade',
    description:
      'O ambiente controlado da hidroponia reduz drasticamente a necessidade de pesticidas e herbicidas, resultando em produtos mais saudáveis e livres de químicos nocivos, atendendo à crescente demanda por alimentos orgânicos. Proporcionando maior qualidade para os produtos.',
    imageSrc: '/banner3.png',
    imageAlt: 'Imagem de nutrição otimizada',
  },
  {
    id: 4,
    icon: Scan,
    title: 'Otimização de Espaço',
    subtitle: 'Produtividade',
    description:
      'Cultivos hidropônicos permitem aproveitar espaços verticais e podem ser  instalados em áreas urbanas, telhados ou pequenos espaços, tornando possível produzir alimentos frescos mesmo em ambientes com limitação de  área.',
    imageSrc: '/espaco.png',
    imageAlt: 'Imagem de nutrição otimizada',
  },
]

export default function Vantagens() {
  return (
    <div className="flex flex-col border-b border-white/50">
      {cardsData.map((card, index) => (
        <div
          key={card.id}
          className={`flex flex-col md:h-[440px] md:flex-row ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          <div id="text" className="md:w-1/2  my-auto flex flex-col ">
            <div className="lg:w-4/5 mx-auto p-4 lg:p-0 space-y-3">
              <div
                className="flex lg:gap-2 gap-1 items-center"
                id="card-header"
              >
                <card.icon size={20} />
                <div className="tracking-wide font-tiempos-italic opacity-80 brightness-110">
                  {card.title}
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <span className="font-tiempos-italic text-3xl">
                  {card.subtitle}
                </span>
                <p className="tracking-wide">{card.description}</p>
              </div>
            </div>
          </div>
          <div id="image" className="md:w-1/2">
            <Image
              src={card.imageSrc}
              width={719}
              height={331}
              // unoptimized
              className="object-cover w-full h-full"
              alt={card.imageAlt}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
