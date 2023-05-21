import styled from 'styled-components'

import breakpoints from '../constants/breakpoints'

const FooterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fontSecondary};
  color: ${({ theme }) => theme.textPrimary};
  padding: 2% 5vw;

  @media (max-width: ${breakpoints.screenLG}) {
    padding: 4% 5vw;
  }

  @media (max-width: ${breakpoints.screenSM}) {
    padding: 10% 5vw;
  }

  .copy {
    font-size: 0.8vw;
    letter-spacing: 0.04em;

    @media (max-width: ${breakpoints.screenLG}) {
      font-size: 1.8vw;
    }

    @media (max-width: ${breakpoints.screenSM}) {
      font-size: 3.3vw;
    }
  }
`

export default FooterLayout
