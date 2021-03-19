import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    word-wrap: break-word;
  }

  html {
    min-height: 100%;
  }

  html,
  body {
    font-size: 16px;
    font-style: normal;
    font-stretch: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: normal;
    margin: 0;
    padding: 0;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-y: none;
    cursor: none;
  }

  ul,
  menu,
  dir {
    padding-left: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: none;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  figure {
    margin: 0;
  }

  *:focus,
  *:active {
    outline: 0 !important;
  }

  ::-moz-selection { 
    color: #f5f5f5;
    background: #f95b5b;
  }

  ::selection {
    color: #f5f5f5;
    background: #f95b5b;
  }

  img,
  video {
    max-width: 100%;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }

  /* Locomotive Scroll */

  html.has-scroll-smooth {
    overflow: hidden; 
  }

  html.has-scroll-dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 
  }

  .has-scroll-smooth body {
    overflow: hidden; 
  }

  .has-scroll-smooth [data-scroll-container] {
    min-height: 100vh; 
  }
  
  .c-scrollbar {
    position: absolute;
    right: 0;
    top: 0;
    width: 8px;
    height: 100%;
    background: transparent;
  }

  .c-scrollbar_thumb {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #000;
    opacity: 0.2;
    width: 8px;
    border-radius: 4px;
    margin: 2px;
    cursor: -webkit-grab;
    cursor: grab; 
    transition: opacity 0.2s linear;
  }

  .c-scrollbar_thumb:hover {
    opacity: 0.5;
  }  
`

export default GlobalStyles
