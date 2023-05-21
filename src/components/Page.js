import React, { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { ThemeProvider } from 'styled-components'

import theme from '../constants/theme'

import GlobalStyles from '../styles/GlobalStyles'
import FontFace from '../styles/FontFace'
import { PageLayout } from '../styles/PageLayout'

import Cursor from './Cursor'
import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'

const Page = ({ children }) => {
  const containerRef = useRef(null)

  return (
    <>
      <GlobalStyles />
      <FontFace />
      <ThemeProvider theme={theme}>
        <SEO />
        <Cursor />
        <LocomotiveScrollProvider
          options={{ smooth: true }}
          watch={[]}
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>
            <PageLayout data-scroll-section>
              <Header />
              {children}
              <Footer />
            </PageLayout>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  )
}

export default Page
