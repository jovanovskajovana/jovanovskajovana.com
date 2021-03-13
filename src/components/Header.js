import React from 'react'
import { Link } from 'gatsby'

import HeaderLayout from '../styles/HeaderLayout'

const Header = () => (
  <HeaderLayout>
    <Link to="/" className="logo">
      J.
    </Link>
    <Link to="/contact" className="connect">
      Hi
    </Link>
  </HeaderLayout>
)

export default Header
