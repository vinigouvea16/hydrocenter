'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Images } from 'lucide-react'
import Image from 'next/image'

type ImageData = {
  id: string
  url: string
  alt: string
}

export default function GalleryCTA() {
  const [galleryImages, setGalleryImages] = useState<ImageData[]>([])

  useEffect(() => {
    fetch('/api/cloudinary')
      .then(res => res.json())
      .then((data: ImageData[]) => setGalleryImages(data.slice(0, 6))) // pega só as primeiras 6 imagens
      .catch(err => console.error('Erro ao carregar imagens:', err))
  }, [])

  return (
    <section className="relative py-20 px-4 lg:h-[60vh] bg-gradient-to-b from-[#F2FBE1]/5 via-[#F2FBE1]/60 to-[#F2FBE1]/5 overflow-hidden text-foreground flex items-center">
      {/* Grid de imagens ao fundo */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 h-full w-full p-4">
          {galleryImages.map(img => (
            <div key={img.id} className="relative w-full h-full">
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>

      {/* Conteúdo por cima */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col justify-middle items-center space-y-8"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl md:text-5xl font-albra">
          Conheça Nossa Produção
        </h2>
        <p className="text-lg md:text-xl font-sans opacity-90 max-w-2xl mx-auto">
          Confira nossa galeria de fotos e conheça um pouco da nosso processo e
          espaço.
        </p>
        <Link href="/galeria">
          <button
            type="button"
            className="bg-[#8A9A5B] hover:brightness-110 text-white rounded-2xl px-6 py-4 flex items-center gap-2 text-lg font-copernicus-book"
          >
            <Images />
            <span>Ver Galeria</span>
          </button>
        </Link>
      </motion.div>
    </section>
  )
}
