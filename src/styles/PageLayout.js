import styled from 'styled-components'

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.textPrimary};
  width: 100vw;
  height: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  min-height: ${(props) => (props.minHeight ? props.minHeight : '100%')};
  min-width: ${(props) => (props.minWidth ? props.minWidth : '100%')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
`

const Svg = styled.svg`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`

const Cursor = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 10;

  .pointer {
    width: 1.2rem;
    height: 1.2rem;
    background-color: ${(props) => props.theme.backgroundDark};
    border-radius: 100%;
    opacity: ${(props) => (props.isHovering ? 0.8 : 1)};
    transform: ${(props) => (props.isHovering ? `scale(2.2)` : `scale(1)`)};
    transition: transform 0.2s linear;
  }
`

const SocialWrapper = styled.div`
  display: flex;
  font-family: ${(props) => props.theme.fontPrimary};
  color: ${(props) => props.theme.textPrimary};
  padding-right: 5.5vw;
  margin-top: auto;
  margin-left: auto;

  a {
    position: relative;
    font-size: 1rem;
    line-height: 1.8;
    margin-left: 2.4vw;

    &:after {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: ${(props) => props.theme.textPrimary};
    }
  }
`

export { PageLayout, Container, Svg, Cursor, SocialWrapper }
