import { createGlobalStyle } from 'styled-components'

import fontIBMPlexMono from '../assets/fonts/IBMPlexMono-Medium.ttf'
import fontSourceSansPro from '../assets/fonts/SourceSansPro-Regular.ttf'
import fontSourceSansProItalic from '../assets/fonts/SourceSansPro-Italic.ttf'

const FontFace = createGlobalStyle`
  @font-face {
    font-family: 'IBM Plex Mono';
    src: url(${fontIBMPlexMono});
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Source Sans Pro';
    src: url(${fontSourceSansPro});
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Source Sans Pro';
    src: url(${fontSourceSansProItalic});
    font-style: italic;
    font-weight: 400;
  }
`

export default FontFace
