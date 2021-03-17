import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import useMousePosition from '../hooks/useMousePosition'

import { TitleXXL, TextM } from '../styles/Typography'

const ListWithImage = ({ item }) => {
  const { x, y } = useMousePosition()
  const linkRef = useRef()

  const [isHovering, setIsHovering] = useState(false)
  const [linkPosition, setLinkPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    setLinkPosition({
      top: linkRef.current.getBoundingClientRect().top + 250,
      left: linkRef.current.getBoundingClientRect().left,
    })
  }, [isHovering])

  return (
    <div className="link-item">
      <TextM>{item.id}</TextM>
      <motion.div
        href={item.url}
        target="_blank"
        ref={linkRef}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        <TitleXXL>
          <a href={item.url} target="_blank">
            {item.title}
          </a>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovering ? 1 : 0,
              x: x - linkPosition.left,
              y: y - linkPosition.top,
            }}
            transition={{ ease: 'linear' }}
            className="floating-img"
          >
            <img src={item.img} alt="Project" />
          </motion.div>
        </TitleXXL>
      </motion.div>
    </div>
  )
}

export default ListWithImage
