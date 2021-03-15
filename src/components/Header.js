import React from 'react'
import { Link } from 'gatsby'

import HeaderLayout from '../styles/HeaderLayout'

const Header = () => (
  <HeaderLayout>
    <Link to="/" className="logo">
      J.
    </Link>
    <a href="mailto:hello@jovanovskajovana.com" className="connect">
      Hi
    </a>
  </HeaderLayout>
)

export default Header
