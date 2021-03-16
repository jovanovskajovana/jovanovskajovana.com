import React from 'react'
import { motion } from 'framer-motion'

import useMousePosition from '../hooks/useMousePosition'

import { Cursor } from '../styles/PageLayout'

const CursorPosition = () => {
  const { x, y } = useMousePosition()

  return (
    <motion.div
      animate={{
        x: x - 12,
        y: y - 12,
      }}
      transition={{
        ease: 'linear',
        duration: 0.02,
      }}
    >
      <Cursor />
    </motion.div>
  )
}

export default CursorPosition
