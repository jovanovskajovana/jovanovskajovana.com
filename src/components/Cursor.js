import { useTapGesture } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import useMousePosition from '../hooks/useMousePosition'

import { Cursor } from '../styles/PageLayout'

const CursorPosition = () => {
  const { x, y } = useMousePosition()

  const [isHovering, setIsHovering] = useState(false)
  const links = document.querySelectorAll('a')

  useEffect(() => {
    links.forEach((link) => {
      link.addEventListener('mouseenter', () => setIsHovering(true))
      link.addEventListener('mouseleave', () => setIsHovering(false))
    })
  }, [isHovering])

  return (
    <Cursor
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      isHovering={isHovering}
    >
      <div className="pointer" />
    </Cursor>
  )
}

export default CursorPosition
