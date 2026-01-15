import { useState } from 'react'
import { motion as Motion } from 'framer-motion'

export default function DigitalDiya() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="img"
      aria-label="Digital Diya - A traditional oil lamp with glowing flame and orbiting concepts"
    >
      {/* Diya Base */}
      <Motion.div
        className="absolute bottom-8 w-40 h-20 md:w-48 md:h-24 rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, #C59B76 0%, #9A634E 50%, #7D4E3A 100%)',
          boxShadow: '0 20px 40px rgba(154, 99, 78, 0.4) inset, 0 10px 30px rgba(0,0,0,0.3)',
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      {/* Wick holder */}
      <Motion.div
        className="absolute bottom-24 w-4 h-6 bg-diya-base rounded-t-full"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      />

      {/* Flame */}
      <Motion.div
        className="absolute bottom-28 w-12 h-20 md:w-14 md:h-24"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1.15 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Outer glow */}
        <div 
          className="absolute inset-0 rounded-full blur-xl"
          style={{
            background: 'radial-gradient(ellipse at center bottom, rgba(255, 165, 0, 0.8) 0%, rgba(255, 69, 0, 0.4) 50%, transparent 70%)',
            filter: isHovered ? 'blur-xl' : 'blur-2xl',
            opacity: isHovered ? 1 : 0.8,
          }}
        />
        
        {/* Middle flame */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #FFA500 0%, #FF6347 50%, #FF4500 100%)',
            filter: 'blur(4px)',
          }}
        />
        
        {/* Core flame */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-10 md:w-7 md:h-12 rounded-full"
          style={{
            background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 50%, #FF6347 100%)',
            filter: 'blur(2px)',
          }}
        />
      </Motion.div>

      {/* Orbiting Bubbles */}
      <OrbitingBubbles />
    </div>
  )
}

function OrbitingBubbles() {
  const bubbles = [
    { label: 'UPSC', angle: 0 },
    { label: 'Skills', angle: 90 },
    { label: 'Leadership', angle: 180 },
    { label: 'Service', angle: 270 },
  ]

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      {bubbles.map((bubble, index) => (
        <Motion.div
          key={bubble.label}
          className="orbiting-bubble absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            animationDelay: `${index * 2}s`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.6 + index * 0.15,
          }}
        >
          <div
            className="flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-sm border border-brand-blue/30 rounded-full"
            style={{
              transform: `translateY(-90px)`,
            }}
          >
            <span className="text-xs font-semibold text-primary-blue whitespace-nowrap">
              {bubble.label}
            </span>
          </div>
        </Motion.div>
      ))}
    </div>
  )
}
