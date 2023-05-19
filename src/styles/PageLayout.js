import styled from 'styled-components'

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
`

const SocialWrapper = styled.div`
  display: flex;
  gap: 2.4vw;
  font-family: ${({ theme }) => theme.fontPrimary};
  color: ${({ theme }) => theme.textPrimary};
  margin-top: auto;
  margin-left: auto;

  .link {
    display: flex;
  }

  span {
    position: relative;
    font-size: 1.05vw;
    line-height: 1.8;

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
