import styled, { keyframes } from 'styled-components'

const reveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);;
  }
`

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
    opacity: 0;
    transform: translateY(50px);
    animation: ${reveal} 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s forwards;
  }

  .connect {
    display: flex;
    justify-content: flex-end;
    min-width: 3rem;
    min-height: 3rem;
    opacity: 0;
    transform: translateY(50px);
    animation: ${reveal} 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s forwards;

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
