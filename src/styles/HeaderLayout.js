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
    min-width: 3rem;
    min-height: 3rem;
  }

  .connect {
    display: flex;
    justify-content: flex-end;
    min-width: 3rem;
    min-height: 3rem;

    span {
      position: relative;
      font-size: 1rem;
      line-height: 1.8;

      &:after {
        position: absolute;
        content: '';
        left: 0;
        bottom: 1.2rem;
        width: 100%;
        height: 1px;
        background-color: ${(props) => props.theme.textPrimary};
      }
    }
  }
`

export default HeaderLayout
