import styled from 'styled-components'

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.fontPrimary};
  color: ${(props) => props.theme.textPrimary};
  padding: 5vh 5vw;

  .logo {
    font-size: 1.6rem;
  }

  .connect {
    position: relative;
    font-size: 1rem;

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

export default HeaderLayout
