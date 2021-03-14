import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../constants/theme'

import GlobalStyles from '../styles/GlobalStyles'
import FontFace from '../styles/FontFace'
import { PageLayout } from '../styles/PageLayout'

import Header from './Header'
import SEO from './SEO'

const Page = ({ children }) => (
  <>
    <GlobalStyles />
    <FontFace />
    <ThemeProvider theme={theme}>
      <PageLayout>
        <SEO />
        <Header />
        {children}
      </PageLayout>
    </ThemeProvider>
  </>
)

export default Page
