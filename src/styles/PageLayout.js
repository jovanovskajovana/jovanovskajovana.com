import styled from 'styled-components'

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundPrimary};
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

export { PageLayout, Container, Svg }
