import { motion, AnimatePresence } from 'framer-motion'

const IntroText = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden h-lvh"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="/hero.png"
            alt="Hidroponia"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0.2, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            className="absolute top-20 left-20 space-y-4 max-w-[400px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ul className="lg:text-6xl text-4xl font-bold space-y-8 mb-6 font-posterman uppercase text-[#EAE1D0] tracking-wider">
              <li>Sustentabilidade</li>
              <li>Qualidade</li>
              <li>Produtividade</li>
            </ul>
            <p className="lg:text-2xl text-xl font-albra tracking-wide text-white">
              Acreditamos fielmente nesses três pilares da agricultura moderna
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroText
