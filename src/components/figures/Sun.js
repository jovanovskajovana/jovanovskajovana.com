import React from 'react'

import theme from '../../constants/theme'

import { Svg } from '../../styles/PageLayout'

const Sun = ({ color = theme.textHighlight, top, left, right }) => (
  <Svg
    width="180"
    height="180"
    viewBox="0 0 180 180"
    fill="none"
    top={top}
    left={left}
    right={right}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="90" cy="90" r="90" fill={color} />
  </Svg>
)

export default Sun
