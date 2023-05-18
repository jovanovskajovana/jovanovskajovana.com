import styled, { keyframes } from 'styled-components'

const reveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(150%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fontPrimary};
  color: ${({ theme }) => theme.textPrimary};
  padding: 2.5% 5vw;

  .logo {
    font-size: 1.8vw;
    opacity: 0;
    transform: translateY(150%);
    animation: ${reveal} 1s cubic-bezier(0.19, 1, 0.22, 1) 1s forwards;
  }

  .connect {
    display: flex;
    opacity: 0;
    transform: translateY(150%);
    animation: ${reveal} 1s cubic-bezier(0.19, 1, 0.22, 1) 1s forwards;

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
  }
`

export default HeaderLayout
