import styled from 'styled-components'

import { Container } from './PageLayout'

const SectionOne = styled(Container)`
  position: relative;
  padding-top: 64vh;
  margin-bottom: 35vh;
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
  margin-bottom: 35vh;
  color: ${(props) => props.theme.textPrimary};

  .content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 2rem;
  }

  p {
    position: relative;
    padding-left: 1vw;
    margin-right: 2.2vw;
    margin-bottom: 0.4rem;

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

const SectionThree = styled(Container)`
  padding: 0 5vw;
  margin-bottom: 35vh;
  color: ${(props) => props.theme.textPrimary};

  .content {
    max-width: 100%;
    margin: auto;
  }

  .link-item {
    position: relative;

    &:nth-child(2) {
      margin-top: 3rem;
    }
  }

  p {
    position: absolute;
    top: 0;
    left: 0;
  }

  h1 {
    line-height: 0.8;
    padding-left: 4vw;
    padding-bottom: 4rem;
  }
`

const SectionFour = styled(Container)`
  padding: 0 5vw;
  margin-bottom: 35vh;
  color: ${(props) => props.theme.textPrimary};

  .content {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    padding-top: 2rem;
    margin-left: -9vw;
  }

  h2 {
    position: relative;
    padding-left: 3rem;
    padding-right: 5vw;

    &:before {
      position: absolute;
      content: '';
      top: calc(50% - 7px);
      left: 0;
      height: 14px;
      width: 14px;
      background-color: ${(props) => props.theme.textPrimary};
    }
  }
`

const SectionFive = styled(Container)`
  padding: 0 5vw;
  margin-bottom: 35vh;
  color: ${(props) => props.theme.textPrimary};

  .content {
    width: 40%;
  }

  .link-item {
    &:nth-child(2) {
      margin-top: 2rem;
    }
  }
`

const SectionSix = styled(Container)`
  padding: 0 5vw;
  margin-bottom: 35vh;
  color: ${(props) => props.theme.textPrimary};

  .video {
    position: relative;
  }

  video {
    max-height: 80vh;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.backgroundDark};
    opacity: 0.2;
  }

  .content {
    padding-left: 10vw;
    padding-top: 10vh;
  }

  h2 {
    padding-bottom: 2rem;
  }
`

export { SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix }
