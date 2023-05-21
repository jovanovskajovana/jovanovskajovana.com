import styled from 'styled-components'

import breakpoints from '../constants/breakpoints'

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.backgroundPrimary};
  color: ${({ theme }) => theme.textPrimary};
  width: 100vw;
  height: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '100%')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : '100%')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'center'};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  overflow: hidden;
`

const Cursor = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 10;

  .pointer {
    width: 1.5vw;
    height: 1.5vw;
    background-color: ${({ theme }) => theme.backgroundDark};
    border-radius: 100%;
    transition: transform 0.2s linear;
  }

  @media (max-width: ${breakpoints.screenMD}) {
    display: none;
  }
`

const SocialWrapper = styled.div`
  display: flex;
  gap: 2.4vw;
  font-family: ${({ theme }) => theme.fontPrimary};
  color: ${({ theme }) => theme.textPrimary};
  margin-top: auto;
  margin-left: auto;

  @media (max-width: ${breakpoints.screenLG}) {
    gap: 3.4vw;
    margin-top: 8%;
    margin-left: 0;
  }

  @media (max-width: ${breakpoints.screenSM}) {
    margin-top: 10%;
    gap: 6.4vw;
  }

  .link {
    display: flex;

    @media (max-width: ${breakpoints.screenLG}) {
      opacity: 0;
      transform: translateY(120px);
      will-change: opacity, transform;
      transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);
      transition-delay: 0.4s;
    }
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
    }
  }
`

export { PageLayout, Container, Cursor, SocialWrapper }
