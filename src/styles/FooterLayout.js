import styled from 'styled-components'

const FooterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fontSecondary};
  color: ${({ theme }) => theme.textPrimary};
  padding: 2% 5vw;

  .copy {
    font-size: 0.8vw;
    letter-spacing: 0.04em;
  }
`

export default FooterLayout
