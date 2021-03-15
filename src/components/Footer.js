import React from 'react'
import moment from 'moment'

import FooterLayout from '../styles/FooterLayout'

const Footer = () => {
  const getYearsRange = () => {
    let range = '2020'
    const year = moment().year()

    if (year !== 2020) {
      range += ` - ${year}`
    }

    return range
  }

  return (
    <FooterLayout>
      <span className="copy">© {getYearsRange()} Jovanovska Jovana</span>
    </FooterLayout>
  )
}

export default Footer
