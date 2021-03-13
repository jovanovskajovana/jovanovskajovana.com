import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../constants/theme'

import GlobalStyles from '../styles/GlobalStyles'
import FontFace from '../styles/FontFace'
import { PageLayout } from '../styles/PageLayout'

import Header from './Header'

const Page = ({ children }) => (
  <>
    <GlobalStyles />
    <FontFace />
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Header />
        {children}
      </PageLayout>
    </ThemeProvider>
  </>
)

export default Page
