'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import IntroText from './animation/intro-text-'

export default function Hero() {
  const [animationStage, setAnimationStage] = useState<
    'initial' | 'text' | 'final'
  >('initial')

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationStage('text')
    }, 1000)

    const timer2 = setTimeout(() => {
      setAnimationStage('final')
    }, 3500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  // const imageVariants = {
  //   initial: {
  //     y: 0,
  //     scale: 1.4,
  //     height: '100vh',
  //     width: '100vw',
  //   },
  //   final: {
  //     y: 0,
  //     scale: 1,
  //     height: '600px',
  //     width: '100%',
  //   },
  // }

  return (
    <>
      <IntroText isVisible={animationStage === 'text'} />

      <motion.main
        className="flex flex-col items-center lg:justify-center lg:h-[100vh] max-w-[1560px] h-lvh mx-auto mb-10 lg:mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3.7 }}
        id="hero"
      >
        <div className="grid lg:grid-cols-3 grid-cols-1 items-center gap-2 w-full pt-10 lg:pt-0">
          <motion.div
            className="md:w-4/5 mx-auto lg:pb-20 pl-10"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4 }}
          >
            <h2 className="font-bergen lg:text-3xl xl:text-4xl text-lg lg:w-1/2 text-center lg:text-left uppercase p-4 lg:p-0 self-center">
              trabalho constante para entregar sempre o produto de maior
              qualidade
            </h2>
          </motion.div>

          <div className="flex flex-col items-center space-y-4">
            <motion.img
              src="/hero.png"
              alt="Hidroponia"
              className="object-cover rounded-sm lg:w-full w-2/3 h-[400px] lg:h-[600px]"
              initial={{ y: '100vh' }}
              animate={{
                y: 0,
                scale: animationStage === 'initial' ? 1.2 : 1,
              }}
              transition={{
                y: { duration: 0.8, ease: 'easeOut' },
                scale: { duration: 0.8, delay: 5 },
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4.3 }}
            >
              <h1 className="font-copernicus-book lg:text-7xl xl:text-8xl text-5xl pt-8">
                Hydrocenter
              </h1>
              <div className="h-[1px] mx-auto bg-gradient-to-r from-[#77B1C2]/5 via-[#77B1C2] to-[#77B1C2]/5" />
            </motion.div>
            <motion.h4
              className="font-tiempos xl:text-2xl text-xl text-[#77B1C2]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 4.3 }}
            >
              Planeta Água, Nutrição Sustentável
            </motion.h4>
          </div>

          <motion.div
            className="flex flex-col mx-auto lg:pb-20"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4 }}
          >
            <h3 className="font-tiempos xl:text-xl lg:text-base lg:w-1/2 w-11/12 text-sm tracking-wider opacity-75 p-4 lg:p-0 text-center lg:text-left self-center">
              Unimos a expertise no cultivo hidropônico com um profundo respeito
              pelo meio ambiente. Nossa dedicação se traduz em produtos frescos,
              nutritivos e cultivados de forma sustentável, levando até você o
              melhor da natureza com a garantia de qualidade que você merece.
            </h3>
          </motion.div>
        </div>
      </motion.main>
    </>
  )
}
