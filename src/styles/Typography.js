import styled from 'styled-components'

const TextXXL = styled.h1`
  font-size: 7vw;
  font-weight: 400;
  line-height: 1.4;
  font-family: ${(props) => props.theme.fontPrimary};
`

const TextXL = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`

const TextL = styled.h3`
  font-size: 1rem;
  font-weight: 400;
`

const TextM = styled.h4`
  font-size: 1.6vw;
  font-weight: 400;
  line-height: 1.8;
  letter-spacing: 0.04em;
  font-family: ${(props) => props.theme.fontSecondary};
`

const TextS = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.8;
  letter-spacing: 0.04em;
  font-family: ${(props) => props.theme.fontSecondary};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
`

const TextXS = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.8;
  font-family: ${(props) => props.theme.fontPrimary};
`

export { TextXXL, TextXL, TextL, TextM, TextS, TextXS }
