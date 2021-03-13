import styled from 'styled-components'

import { Container } from './PageLayout'

const SectionOne = styled(Container)`
  position: relative;
  padding-top: 64vh;

  .intro {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    max-width: 40vw;
    margin-left: 14vw;
  }

  .text {
    display: flex;
    max-width: 80%;

    p {
      margin-left: 1rem;

      &:first-child {
        max-width: 250px;
      }

      &:last-child {
        max-width: 250px;
      }
    }
  }
`

const SectionTwo = styled(Container)`
  margin-top: 10vh;
`

export { SectionOne, SectionTwo }
