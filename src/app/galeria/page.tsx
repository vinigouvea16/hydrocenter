'use client'

import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState, type KeyboardEvent } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import StickyCursor from '../homepagecomponents/animation/sticky-cursort'

type ImageData = {
  id: string
  url: string
  alt: string
}

export default function Galeria() {
  const [images, setImages] = useState<ImageData[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const selectedImage =
    typeof selectedIndex === 'number' ? images[selectedIndex] : null

  useEffect(() => {
    fetch('/api/cloudinary')
      .then(res => res.json())
      .then((data: ImageData[]) => setImages(data))
      .catch(err => console.error('Erro ao carregar imagens:', err))
  }, [])

  const openImage = (index: number) => setSelectedIndex(index)
  const closeImage = () => setSelectedIndex(null)
  const showPrev = () =>
    setSelectedIndex(i => (i !== null && i > 0 ? i - 1 : i))
  const showNext = () =>
    setSelectedIndex(i => (i !== null && i < images.length - 1 ? i + 1 : i))

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') showPrev()
    if (e.key === 'ArrowRight') showNext()
    if (e.key === 'Escape') closeImage()
  }

  return (
    <div className="min-h-screen p-4 text-foreground/80">
      <StickyCursor />
      <div className="max-w-[1560px] border border-white/50 rounded-3xl min-h-screen mx-auto">
        <div className="flex flex-col p-4">
          <Link
            href="/"
            className="mb-8 mt-2 flex items-center gap-2 hover:underline hover:opacity-70"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-albra mb-6">
            Nossa Galeria
          </h1>
          <p className="text-lg opacity-80 mb-12">
            Aqui você encontra imagens da nossa hidroponia - plantação e
            chácara.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2 lg:px-4"
        >
          {images.map((img, index) => (
            <button
              key={img.id}
              type="button"
              onClick={() => openImage(index)}
              className="cursor-pointer"
              aria-label={`Abrir imagem ${index + 1}`}
            >
              <Image
                src={img.url}
                alt={img.alt}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-48"
              />
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedImage && (
            <motion.div
              key={selectedImage.url} // muda a key para animar a troca de imagem
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeIn' }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              onClick={closeImage}
              onKeyDown={handleKeyDown}
              // biome-ignore lint/a11y/useSemanticElements: <explanation>
              role="dialog"
              tabIndex={0}
            >
              <button
                type="button"
                className="absolute top-4 right-4 text-white cursor-pointer"
                onClick={e => {
                  e.stopPropagation()
                  closeImage()
                }}
                aria-label="Fechar imagem"
              >
                <X size={32} />
              </button>

              <button
                type="button"
                className="absolute left-4 text-white p-2 cursor-pointer"
                onClick={e => {
                  e.stopPropagation()
                  showPrev()
                }}
                aria-label="Imagem anterior"
                disabled={selectedIndex === 0}
              >
                <ChevronLeft size={36} />
              </button>

              {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <div
                className="max-w-4xl w-full p-4 flex items-center justify-center"
                onClick={e => e.stopPropagation()}
              >
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  width={1200}
                  height={1200}
                  className="max-h-[100vh] w-auto h-auto object-contain rounded-lg"
                />
              </div>

              <button
                type="button"
                className="absolute right-4 text-white p-2 cursor-pointer"
                onClick={e => {
                  e.stopPropagation()
                  showNext()
                }}
                aria-label="Próxima imagem"
                disabled={selectedIndex === images.length - 1}
              >
                <ChevronRight size={36} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
