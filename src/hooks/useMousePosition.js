import { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [x, setX] = useState(-100)
  const [y, setY] = useState(-100)

  useEffect(() => {
    const updatePosition = (e) => {
      setX(e.clientX)
      setY(e.clientY)
    }

    window.addEventListener('mousemove', updatePosition)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
    }
  }, [setX, setY])

  return { x, y }
}

export default useMousePosition
