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
            animate={{
              x: x - linkPosition.left,
              y: y - linkPosition.top,
            }}
            transition={{ duration: 0 }}
            className="floating-img"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{
                opacity: isHovering ? 1 : 0,
                scale: isHovering ? 1 : 0.3,
              }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: isHovering ? 1.6 : 0.4 }}
            >
              <motion.img
                initial={{ scale: 1.7 }}
                animate={{
                  scale: isHovering ? 1 : 1.7,
                }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: isHovering ? 1.6 : 0.4 }}
                src={item.img}
                alt="Project"
              />
            </motion.div>
          </motion.div>
        </TitleXXL>
      </motion.div>
    </div>
  )
}

export default ListWithImage
