import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import faviconPng from '../assets/images/favicon.png'
import faviconIco from '../assets/images/favicon.ico'
// import imgHero from '../assets/images/home-hero.jpg'

const SEO = ({ children, title, description, image, location }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <Helmet titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href={faviconPng} />
      <link rel="icon" href={faviconIco} />
      <meta name="description" content={site.siteMetadata.description} />
      <title>{title}</title>

      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta propery="og:site_name" content={site.siteMetadata.title} key="ogsitename" />
      {/* <meta property="og:image" content={image || imgHero} /> */}
      {location && <meta property="og:url" content={location.href} />}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={site.siteMetadata.description} />
      <meta name="twitter:site_name" content={site.siteMetadata.title} />
      {/* <meta name="twitter:image" content={image || imgHero} /> */}
      <meta name="twitter:creator" content={site.siteMetadata.author} />

      {children}
    </Helmet>
  )
}

export default SEO
