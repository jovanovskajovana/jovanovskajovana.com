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
      left: linkRef.current.getBoundingClientRect().left,
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
              transform: `scale(${isHovering ? 1 : 0.3})`,
              transition: `transform 2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s linear`,
            }}
          >
            <img
              style={{
                transform: `scale(${isHovering ? 1 : 1.7})`,
                transition: `transform 2s cubic-bezier(0.16, 1, 0.3, 1)`,
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
