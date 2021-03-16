import { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })

  const handlePosition = (e) => {
    setMousePosition({ x: e.pageX, y: e.pageY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handlePosition)

    return () => {
      window.removeEventListener('mousemove', handlePosition)
    }
  }, [])

  return mousePosition
}

export default useMousePosition
