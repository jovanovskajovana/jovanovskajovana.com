import React from 'react'

import theme from '../../constants/theme'

import { Svg } from '../../styles/PageLayout'

const Sun = ({ color = theme.textHiglight, top, left, right }) => (
  <Svg
    width="195"
    height="195"
    viewBox="0 0 195 195"
    fill="none"
    top={top}
    left={left}
    right={right}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="97.5" cy="97.5" r="97.5" fill={color} />
  </Svg>
)

export default Sun
