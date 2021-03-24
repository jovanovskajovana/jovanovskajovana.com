import React, { useState, useEffect, useRef } from 'react'

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
      left: linkRef.current.getBoundingClientRect().left - 100,
    })
  }, [isHovering])

  return (
    <div className="link-item">
      <TextM>{item.id}</TextM>
      <div
        href={item.url}
        target="_blank"
        ref={linkRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <TitleXXL>
          <a href={item.url} target="_blank">
            {item.title}
          </a>
        </TitleXXL>
        <div
          className="floating-img"
          style={{
            transform: `translate(${x - linkPosition.left}px, ${y - linkPosition.top}px)`,
          }}
        >
          <div
            style={{
              opacity: isHovering ? 1 : 0,
              transform: `scale(${isHovering ? 1 : 0.5})`,
              transition: `transform 2.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.2s linear`,
            }}
          >
            <img
              style={{
                transform: `scale(${isHovering ? 1 : 1.5})`,
                transition: `transform 2.5s cubic-bezier(0.19, 1, 0.22, 1)`,
              }}
              src={item.img}
              alt="Project"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListWithImage
