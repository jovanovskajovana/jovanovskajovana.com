import React from 'react'

import { TitleXL } from '../styles/Typography'

import { work } from '../constants/content'

const ListMarquee = () => (
  <div className="marquee">
    {work.map((item, index) => (
      <div key={index} className="link-item">
        <TitleXL>
          <a href={item.url} target="_blank">
            {item.title}
          </a>
        </TitleXL>
      </div>
    ))}
  </div>
)

export default ListMarquee
