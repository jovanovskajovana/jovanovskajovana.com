import styled from 'styled-components'

const FooterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fontSecondary};
  color: ${(props) => props.theme.textPrimary};
  padding: 4vh 5vw;

  .copy {
    font-size: 0.75rem;
    letter-spacing: 0.04em;
  }
`

export default FooterLayout
