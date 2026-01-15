import { ArrowRight } from 'lucide-react'
import { motion as Motion } from 'framer-motion'

export default function HeroContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <Motion.div
      className="relative z-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Motion.h1
        id="hero-heading"
        className="font-playfair font-bold text-6xl md:text-7xl leading-tight text-text-dark"
        variants={itemVariants}
      >
        The Exam is a Phase.{' '}
        <Motion.span
          className="italic text-ethos-gold"
          variants={itemVariants}
        >
          You are the Future.
        </Motion.span>
      </Motion.h1>

      <Motion.p
        className="mt-6 font-inter font-medium text-lg text-text-medium max-w-md"
        variants={itemVariants}
      >
        India's first adaptive platform that secures your career while you prepare. 
        Study for the Nation. Train for the World.
      </Motion.p>

      <Motion.div
        className="mt-8 flex flex-wrap gap-4"
        variants={itemVariants}
      >
        <Motion.a
          href="#preparation"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-blue text-white font-medium text-base shadow-lg
                     transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Learning
          <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
        </Motion.a>

        <Motion.a
          href="#career"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-ethos-gold text-diya-base font-medium
                     transition-all duration-300 hover:bg-[rgba(201,155,118,0.1)]
                     focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
          whileHover={{ x: 4 }}
        >
          Explore Plan B
          <ArrowRight
            className="w-5 h-5 transition-transform duration-300"
            strokeWidth={1.5}
          />
        </Motion.a>
      </Motion.div>
    </Motion.div>
  )
}
