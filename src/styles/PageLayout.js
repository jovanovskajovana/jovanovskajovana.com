import styled from 'styled-components'

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.textPrimary};
  width: 100vw;
  min-height: 100vh;
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

export { PageLayout, Container, Svg, SocialWrapper }
