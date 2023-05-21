import React from 'react'
import { Link } from 'gatsby'

import HeaderLayout from '../styles/HeaderLayout'

const Header = () => (
  <HeaderLayout>
    <Link to="/" className="logo">
      <span>J.</span>
    </Link>
    <a href="mailto:hello@jovanovskajovana.com" className="connect">
      <span>Hi</span>
    </a>
  </HeaderLayout>
)

export default Header
