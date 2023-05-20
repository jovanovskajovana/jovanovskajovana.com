import styled from 'styled-components'

import breakpoints from '../constants/breakpoints'

const TitleXXL = styled.h1`
  font-size: 8vw; //130
  font-weight: 400;
  line-height: 1.5;
  font-family: ${({ theme }) => theme.fontPrimary};

  @media (max-width: ${breakpoints.screenLG}) {
    font-size: 9vw;
  }

  @media (max-width: ${breakpoints.screenSM}) {
    font-size: 15vw;
  }
`

const TitleXL = styled.h2`
  font-size: 3.6vw; //64
  font-weight: 400;
  line-height: 1.4;
  font-family: ${({ theme }) => theme.fontPrimary};

  @media (max-width: ${breakpoints.screenLG}) {
  }
`

const TitleL = styled.h3`
  font-size: 2vw; //36
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.04em;
  font-family: ${({ theme }) => theme.fontSecondary};

  @media (max-width: ${breakpoints.screenLG}) {
  }
`

const TitleM = styled.h3`
  font-size: 1.8vw; //32
  font-weight: 400;
  line-height: 1.8;
  font-family: ${({ theme }) => theme.fontPrimary};

  @media (max-width: ${breakpoints.screenLG}) {
  }
`

const TextL = styled.p`
  font-size: 1.6vw; //28
  font-weight: 400;
  line-height: 1.8;
  letter-spacing: 0.04em;
  font-family: ${({ theme }) => theme.fontSecondary};

  @media (max-width: ${breakpoints.screenLG}) {
    font-size: 2.6vw;
  }

  @media (max-width: ${breakpoints.screenSM}) {
    font-size: 7vw;
  }
`

const TextM = styled.p`
  font-size: 1.5vw; //26
  font-weight: 400;
  line-height: 1.4;
  font-family: ${({ theme }) => theme.fontPrimary};

  @media (max-width: ${breakpoints.screenLG}) {
    font-size: 2.5vw;
  }

  @media (max-width: ${breakpoints.screenSM}) {
    font-size: 4vw;
  }
`

const TextS = styled.p`
  font-size: 1vw; //16
  font-weight: 400;
  line-height: 1.85;
  letter-spacing: 0.04em;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};

  @media (max-width: ${breakpoints.screenLG}) {
    font-size: 2vw;
  }

  @media (max-width: ${breakpoints.screenSM}) {
    font-size: 4vw;
  }
`

const TextXS = styled.span`
  font-size: 0.8vw; //12
  font-weight: 400;
  line-height: 1.8;
  font-family: ${({ theme }) => theme.fontPrimary};

  @media (max-width: ${breakpoints.screenLG}) {
    font-size: 1.8vw;
  }

  @media (max-width: ${breakpoints.screenSM}) {
    font-size: 3.3vw;
  }
`

export { TitleXXL, TitleXL, TitleL, TitleM, TextL, TextM, TextS, TextXS }
