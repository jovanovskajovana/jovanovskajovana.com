import styled, { keyframes } from 'styled-components'

import { Container } from './PageLayout'

const sunMove = keyframes`
  0% {
    opacity: 0;
    transform: rotate(10deg);
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: rotate(-35deg);
  }
`

const wavesReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const titleReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const listMarquee = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
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
    top: 20vh;
    right: 0;
    width: 60vw;
    height: 60vw;
    display: flex;
    justify-content: flex-end;
    transform: rotate(10deg);
    animation: ${sunMove} 3.5s ease-out forwards 1.2s;
    opacity: 0;
  }

  .waves-left {
    position: absolute;
    top: 20vh;
    left: -4vw;
    opacity: 0;
    transform: translateY(100px);
    animation: ${wavesReveal} 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) 1s forwards;
  }

  .waves-right {
    position: absolute;
    top: 35vh;
    right: -4vw;
    opacity: 0;
    transform: translateY(100px);
    animation: ${wavesReveal} 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) 1s forwards;
  }

  .title {
    opacity: 0;
    transform: translateY(100px);
    animation: ${titleReveal} 1s cubic-bezier(0.215, 0.61, 0.355, 1) 1.2s forwards;
  }

  .subtitle {
    margin-left: 1rem;
    max-width: 250px;
    opacity: 0;
    transform: translateY(60px);
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);

    &.is-inview {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const SectionTwo = styled(Container)`
  padding: 0 5vw 0 5.5vw;
  margin-bottom: 40vh;
  color: ${(props) => props.theme.textPrimary};

  .content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    opacity: 0;
    transform: translateY(100px);
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s;

    &.is-inview {
      opacity: 1;
      transform: translateY(0);

      p:after {
        transform: scaleX(1);
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
  }

  .section-title {
    margin-bottom: 2rem;
    opacity: 0;
    transform: translateY(100px);
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);

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
      transform: scaleX(0);
      transform-origin: left;
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
        will-change: opacity, visibility, transform;
        transition: opacity 0.1s, visibility 0.1s, transform 1s ease 0.2s;
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
  }

  .floating-img {
    position: fixed;
    max-width: 20vw;
    pointer-events: none;
    overflow: hidden;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .section-title {
    margin-bottom: 3rem;
    opacity: 0;
    transform: translateY(100px);
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);

    &.is-inview {
      opacity: 1;
      transform: translateY(0);
    }
  }

  p {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: translateY(100px);
    will-change: opacity, transform;
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  h1 {
    line-height: 0.8;
    margin-left: 4vw;
    margin-bottom: 4.2rem;
    opacity: 0;
    transform: translateY(100px);
    will-change: opacity, transform;
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .links.is-inview {
    h1,
    p {
      opacity: 1;
      transform: translateY(0);
    }

    .link-item {
      &:nth-child(1) h1,
      &:nth-child(1) p {
        transition-delay: 0.1s;
      }
      &:nth-child(2) h1,
      &:nth-child(2) p {
        transition-delay: 0.2s;
      }
      &:nth-child(3) h1,
      &:nth-child(3) p {
        transition-delay: 0.3s;
      }
      &:nth-child(4) h1,
      &:nth-child(4) p {
        transition-delay: 0.4s;
      }
    }
  }
`

const SectionFour = styled(Container)`
  position: relative;
  padding: 0 5vw;
  margin-bottom: 45vh;
  color: ${(props) => props.theme.textPrimary};

  .content {
    position: absolute;
    top: 3rem;
    display: flex;
    min-width: 100%;

    &:hover .marquee {
      animation-play-state: paused;
    }
  }

  .marquee {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    transform: translateX(0);
    animation: ${listMarquee} 20s linear infinite;
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

  .section-title {
    margin-bottom: 1.5rem;
    opacity: 0;
    transform: translateY(100px);
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);

    &.is-inview {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .link-item {
    opacity: 0;
    transform: translateY(100px);
    will-change: opacity, transform;
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .links.is-inview {
    .link-item {
      opacity: 1;
      transform: translateY(0);

      &:nth-child(1) {
        transition-delay: 0.1s;
      }
      &:nth-child(2) {
        transition-delay: 0.2s;
      }
      &:nth-child(3) {
        transition-delay: 0.3s;
      }
      &:nth-child(4) {
        transition-delay: 0.4s;
      }
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

    &.is-inview {
      video {
        opacity: 1;
        transform: scale(1);
      }

      .overlay {
        opacity: 0.2;
        transform: scale(1);
      }

      h1 {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  video {
    max-height: 100%;
    opacity: 0;
    transform: scale(0.8);
    transition: all 1.5s ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.backgroundDark};
    opacity: 0;
    transform: scale(0.8);
    transition: all 1.5s ease;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding-left: 12vw;
    padding-top: 12.5vh;
    height: 80vh;

    &.is-inview {
      h2,
      h3 {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  h1 {
    position: absolute;
    z-index: 1;
    opacity: 0;
    transform: translateY(-100px);
    transition: all 1s ease 0.2s;

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
    opacity: 0;
    transform: translateY(150px);
    will-change: opacity, transform;
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  h3 {
    opacity: 0;
    transform: translateY(150px);
    will-change: opacity, transform;
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s;
  }
`

const SectionSeven = styled(Container)`
  padding: 0 5vw;
  margin-bottom: 30vh;
  color: ${(props) => props.theme.textPrimary};

  &.is-inview {
    h2,
    p {
      opacity: 1;
      transform: scale(1);
    }

    a:after {
      transform: scaleX(1);
    }
  }

  h2 {
    opacity: 0;
    transform: scale(1.3);
    transform-origin: bottom;
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

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
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
    }
  }

  p {
    padding-top: 1.2rem;
    opacity: 0;
    transform: scale(1.3);
    transform-origin: bottom;
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`

export { SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix, SectionSeven }
