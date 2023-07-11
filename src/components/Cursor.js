import React, { useEffect, useState } from 'react'

import useMousePosition from '../hooks/useMousePosition'

import { Cursor } from '../styles/PageLayout'

const CursorPosition = () => {
  const { x, y } = useMousePosition()

  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const links = document.querySelectorAll('a')
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
    >
      <div
        className="pointer"
        style={{
          opacity: isHovering ? 0.8 : 1,
          transform: `scale(${isHovering ? 4 : 1})`,
        }}
      />
    </Cursor>
  )
}

export default CursorPosition
