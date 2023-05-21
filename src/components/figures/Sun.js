import React from 'react'

import theme from '../../constants/theme'

const Sun = ({ color = theme.textHighlight, className }) => (
  <svg
    width="180"
    height="180"
    viewBox="0 0 180 180"
    fill="none"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="90" cy="90" r="90" fill={color} />
  </svg>
)

export default Sun
