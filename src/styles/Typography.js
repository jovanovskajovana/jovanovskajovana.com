import styled from 'styled-components'

const Headline = styled.h1`
  font-size: 7vw;
  font-weight: 400;
  line-height: 1.4;
  font-family: ${(props) => props.theme.fontPrimary};
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`

const Subtitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
`

const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.8;
  letter-spacing: 0.04em;
  font-family: ${(props) => props.theme.fontSecondary};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
`

export { Headline, Title, Subtitle, Paragraph }
