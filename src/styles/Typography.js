import styled from 'styled-components'

const TitleXXL = styled.h1`
  font-size: 8vw; //130
  font-weight: 400;
  line-height: 1.5;
  font-family: ${({ theme }) => theme.fontPrimary};
`

const TitleXL = styled.h2`
  font-size: 3.6vw; //64
  font-weight: 400;
  line-height: 1.4;
  font-family: ${({ theme }) => theme.fontPrimary};
`

const TitleL = styled.h3`
  font-size: 2vw; //36
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.04em;
  font-family: ${({ theme }) => theme.fontSecondary};
`

const TitleM = styled.h3`
  font-size: 1.8vw; //32
  font-weight: 400;
  line-height: 1.8;
  font-family: ${({ theme }) => theme.fontPrimary};
`

const TextL = styled.p`
  font-size: 1.6vw; //28
  font-weight: 400;
  line-height: 1.8;
  letter-spacing: 0.04em;
  font-family: ${({ theme }) => theme.fontSecondary};
`

const TextM = styled.p`
  font-size: 1.5vw; //26
  font-weight: 400;
  line-height: 1.4;
  font-family: ${({ theme }) => theme.fontPrimary};
`

const TextS = styled.p`
  font-size: 1vw; //16
  font-weight: 400;
  line-height: 1.85;
  letter-spacing: 0.04em;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
`

const TextXS = styled.span`
  font-size: 0.8vw; //12
  font-weight: 400;
  line-height: 1.8;
  font-family: ${({ theme }) => theme.fontPrimary};
`

export { TitleXXL, TitleXL, TitleL, TitleM, TextL, TextM, TextS, TextXS }
