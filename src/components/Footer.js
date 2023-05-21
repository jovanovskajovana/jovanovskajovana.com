import React from 'react'
import moment from 'moment'

import FooterLayout from '../styles/FooterLayout'

const Footer = () => (
  <FooterLayout>
    <span className="copy">© {moment().year()} Jovanovska Jovana</span>
  </FooterLayout>
)

export default Footer
