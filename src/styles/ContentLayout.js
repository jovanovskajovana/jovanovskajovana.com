import styled, { keyframes } from 'styled-components'

import { Container } from './PageLayout'

const sunMove = keyframes`
  0% {
    opacity: 0;
    transform: rotate(25deg);
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: rotate(-30deg);
  }
`

const wavesReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);;
  }
`

const titleReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);;
  }
`

const SectionOne = styled(Container)`
  position: relative;
  padding-top: 63vh;
  margin-bottom: 10vh;
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
  }

  .sun {
    position: absolute;
    top: 10vh;
    right: 10vw;
    width: 45vw;
    height: 45vw;
    display: flex;
    justify-content: flex-end;
    transform: rotate(25deg);
    animation: ${sunMove} 3s ease-out forwards 1.4s;
    opacity: 0;
  }

  .waves-left {
    position: absolute;
    top: 20vh;
    left: -4vw;
    opacity: 0;
    transform: translateY(100px);
    animation: ${wavesReveal} 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s forwards;
  }

  .waves-right {
    position: absolute;
    top: 35vh;
    right: -4vw;
    opacity: 0;
    transform: translateY(100px);
    animation: ${wavesReveal} 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s forwards;
  }

  .title {
    opacity: 0;
    transform: translateY(100px);
    animation: ${titleReveal} 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 1s forwards;
  }

  .subtitle {
    margin-left: 1rem;
    max-width: 250px;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);

    &.is-inview {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const SectionTwo = styled(Container)`
  padding: 0 5vw 0 5.5vw;
  margin-bottom: 35vh;
  color: ${(props) => props.theme.textPrimary};

  .content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 2rem;
    opacity: 0;
    transform: translateY(150px);
    transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);

    &.is-inview {
      opacity: 1;
      transform: translateY(0);
    }
  }

  span {
    opacity: 0;
    transform: translateY(150px);
    transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);

    &.is-inview {
      opacity: 1;
      transform: translateY(0);
    }
  }

  p {
    position: relative;
    padding-left: 1vw;
    margin-right: 1.7vw;
    padding-bottom: 0.5rem;
    overflow: hidden;

    &:before {
      position: absolute;
      content: '';
      top: 40%;
      left: 0;
      height: 4px;
      width: 4px;
      background-color: ${(props) => props.theme.textPrimary};
    }

    &:after {
      position: absolute;
      content: '';
      left: 1.1rem;
      bottom: 6px;
      height: 2px;
      width: calc(100% - 1rem);
      background-color: ${(props) => props.theme.textHighlight};
      opacity: 0;
      visibility: hidden;
    }

    svg {
      position: absolute;
      left: 1.1rem;
      bottom: 0;
      opacity: 0;
      visibility: hidden;
      will-change: opacity, visibility;
      transition: all 0.1s;
    }

    &:nth-child(2),
    &:nth-child(12),
    &:nth-child(18),
    &:nth-child(20) {
      &:after {
        opacity: 1;
        visibility: visible;
        will-change: opacity, visibility;
        transition: all 0.1s;
      }
    }
  }

  &:hover {
    p:nth-child(2),
    p:nth-child(12),
    p:nth-child(18),
    p:nth-child(20) {
      &:after {
        opacity: 0;
        visibility: hidden;
        will-change: opacity, visibility;
        transition: all 0.1s;
      }
      svg {
        opacity: 1;
        visibility: visible;
        will-change: opacity, visibility;
        transition: all 0.3s;
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

  .floating-img {
    position: absolute;
    max-width: 20vw;
    pointer-events: none;
    overflow: hidden;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
  }

  p {
    position: absolute;
    top: 0;
    left: 0;
  }

  h1 {
    line-height: 0.8;
    margin-left: 4vw;
    margin-bottom: 4.2rem;
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
  margin-bottom: 38vh;
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
    height: 80vh;
  }

  video {
    max-height: 100%;
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
    display: flex;
    flex-direction: column;
    padding-left: 12vw;
    padding-top: 12.5vh;
    height: 80vh;
  }

  h1 {
    position: absolute;

    &:nth-child(1) {
      top: -0.65em;
      right: -0.68em;
    }

    &:nth-child(2) {
      top: 0.4em;
      right: -0.35em;
    }
  }

  h2 {
    padding-bottom: 2rem;
  }
`

const SectionSeven = styled(Container)`
  padding: 0 5vw;
  margin-bottom: 30vh;
  color: ${(props) => props.theme.textPrimary};

  a {
    position: relative;

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

  p {
    padding-top: 1.5rem;
  }
`

export { SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix, SectionSeven }
