import styled from 'styled-components'

import { Container } from './PageLayout'

const SectionOne = styled(Container)`
  position: relative;
  padding-top: 64vh;
  margin-bottom: 30vh;
  color: ${(props) => props.theme.textPrimary};

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
  padding: 0 5vw;
  margin-bottom: 30vh;
  color: ${(props) => props.theme.textPrimary};

  .content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 2rem;
  }

  h4 {
    position: relative;
    padding-left: 1rem;
    margin-right: 2rem;
    margin-bottom: 0.5rem;

    &:before {
      position: absolute;
      content: '';
      top: 50%;
      left: 0;
      height: 4px;
      width: 4px;
      background-color: ${(props) => props.theme.textPrimary};
    }

    &:after {
      position: absolute;
      content: '';
      right: 0;
      bottom: 0;
      height: 1px;
      width: calc(100% - 1rem);
      background-color: ${(props) => props.theme.textHiglight};
      display: none;
    }

    &:nth-child(2),
    &:nth-child(12),
    &:nth-child(18),
    &:nth-child(20) {
      &:after {
        display: block;
      }
    }
  }
`

export { SectionOne, SectionTwo }
