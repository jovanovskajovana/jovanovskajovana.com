import styled, { keyframes } from 'styled-components'

import breakpoints from '../constants/breakpoints'

const reveal = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fontPrimary};
  color: ${({ theme }) => theme.textPrimary};
  padding: 2.5% 5vw;

  @media (max-width: ${breakpoints.screenLG}) {
    padding: 5% 5vw;
  }

  .logo {
    font-size: 2vw;
    opacity: 0;
    transform: translateY(150%);
    animation: ${reveal} 1s cubic-bezier(0.19, 1, 0.22, 1) 1s forwards;

    @media (max-width: ${breakpoints.screenLG}) {
      font-size: 4vw;
      transform: translateY(50px);
    }

    @media (max-width: ${breakpoints.screenSM}) {
      font-size: 6vw;
    }
  }

  .connect {
    display: flex;
    opacity: 0;
    transform: translateY(150%);
    animation: ${reveal} 1s cubic-bezier(0.19, 1, 0.22, 1) 1s forwards;

    @media (max-width: ${breakpoints.screenLG}) {
      transform: translateY(50px);
    }

    span {
      position: relative;
      font-size: 1.05vw;
      line-height: 1.8;

      @media (max-width: ${breakpoints.screenLG}) {
        font-size: 2.5vw;
      }

      @media (max-width: ${breakpoints.screenSM}) {
        font-size: 3.5vw;
      }

      :after {
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0.06em;
        background-color: ${({ theme }) => theme.textPrimary};

        @media (max-width: ${breakpoints.screenLG}) {
          height: 1px;
        }
      }
    }
  }
`

export default HeaderLayout
