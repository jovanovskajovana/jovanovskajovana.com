import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/SEO'
import { Container } from '../styles/PageLayout'
import { TitleXXL } from '../styles/Typography'

const NotFoundPage = () => (
  <>
    <SEO title="Not Found" />
    <Container column>
      <TitleXXL>Oops, where did this page come from?</TitleXXL>
      <Link to="/">← go back home</Link>
    </Container>
  </>
)

export default NotFoundPage
