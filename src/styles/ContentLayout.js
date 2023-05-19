import styled, { keyframes } from 'styled-components'

import breakpoints from '../constants/breakpoints'

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
    transform: rotate(-30deg);
  }
`

const wavesReveal = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const titleReveal = keyframes`
  to {
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
  padding-top: 32%;
  padding-bottom: 4%;
  color: ${({ theme }) => theme.textPrimary};

  @media (max-width: ${breakpoints.screenLG}) {
    padding-top: 48%;
  }

  @media (max-width: ${breakpoints.screenSM}) {
    padding-top: 100%;
  }

  .sun {
    position: absolute;
    top: 16%;
    right: 0;
    width: 60vw;
    height: 60vw;
    display: flex;
    justify-content: flex-end;
    transform: rotate(10deg);
    animation: ${sunMove} 3s ease-out forwards 1.3s;
    opacity: 0;

    @media (max-width: ${breakpoints.screenLG}) {
      top: 10%;
    }

    @media (max-width: ${breakpoints.screenSM}) {
      top: 10%;
      width: 80vw;
      height: 80vw;
    }
  }

  .sun-inner {
    width: 12vw;
    height: 12vw;

    @media (max-width: ${breakpoints.screenSM}) {
      width: 22vw;
      height: 22vw;
    }
  }

  .waves-left {
    position: absolute;
    top: 16%;
    left: 0;
    width: 48vw;
    opacity: 0;
    transform: translateY(20vh);
    animation: ${wavesReveal} 1.8s cubic-bezier(0.19, 1, 0.22, 1) 1s forwards;

    @media (max-width: ${breakpoints.screenLG}) {
      top: 10%;
      transform: translateY(150px);
    }

    @media (max-width: ${breakpoints.screenSM}) {
      top: 18%;
      width: 86vw;
    }
  }

  .waves-right {
    position: absolute;
    top: 30%;
    right: 0;
    width: 38vw;
    opacity: 0;
    transform: translateY(20vh);
    animation: ${wavesReveal} 1.8s cubic-bezier(0.19, 1, 0.22, 1) 1s forwards;

    @media (max-width: ${breakpoints.screenLG}) {
      top: 20%;
      transform: translateY(150px);
    }

    @media (max-width: ${breakpoints.screenSM}) {
      top: 36%;
      width: 60vw;

      .hide-sm {
        display: none;
      }
    }
  }

  .intro {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 12vw;

    @media (max-width: ${breakpoints.screenLG}) {
      align-items: flex-start;
      margin-left: 6vw;
    }
  }

  .text {
    display: flex;
    max-width: 80%;

    @media (max-width: ${breakpoints.screenLG}) {
      max-width: 100%;
    }

    @media (max-width: ${breakpoints.screenSM}) {
      flex-direction: column;
    }
  }

  .title {
    opacity: 0;
    transform: translateY(18vh);
    animation: ${titleReveal} 1.8s cubic-bezier(0.19, 1, 0.22, 1) 1.1s forwards;

    @media (max-width: ${breakpoints.screenLG}) {
      transform: translateY(130px);
    }
  }

  .subtitle {
    opacity: 0;
    transform: translateY(14vh);
    transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);

    @media (max-width: ${breakpoints.screenLG}) {
      opacity: 0;
      transform: translateY(130px);
      animation: ${titleReveal} 1.8s cubic-bezier(0.19, 1, 0.22, 1) 1.2s
        forwards;
    }

    :nth-child(1) {
      max-width: 14vw;
      margin-right: 3vw;

      @media (max-width: ${breakpoints.screenLG}) {
        max-width: 30vw;
        margin-left: 18vw;
        margin-top: 2%;
      }

      @media (max-width: ${breakpoints.screenSM}) {
        max-width: 65vw;
      }
    }

    :nth-child(2) {
      max-width: 16vw;

      @media (max-width: ${breakpoints.screenLG}) {
        max-width: 32vw;
        margin-top: 2%;
      }

      @media (max-width: ${breakpoints.screenSM}) {
        max-width: 65vw;
        margin-left: 18vw;
        margin-top: 6%;
      }
    }

    &.is-inview {
      opacity: 1;
      transform: translateY(0);

      @media (max-width: ${breakpoints.screenLG}) {
        opacity: 0;
        transform: translateY(130px);
      }
    }
  }
`

const SectionTwo = styled(Container)`
  padding: 0 5vw 16% 5.5vw;
  color: ${({ theme }) => theme.textPrimary};

  .content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    opacity: 0;
    transform: translateY(22vh);
    transition: all 1.8s cubic-bezier(0.19, 1, 0.22, 1) 0.1s;

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
      p:nth-child(19),
      p:nth-child(21) {
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
    margin-bottom: 2.5%;
    opacity: 0;
    transform: translateY(20vh);
    transition: all 1.6s cubic-bezier(0.19, 1, 0.22, 1);

    &.is-inview {
      opacity: 1;
      transform: translateY(0);
    }
  }

  p {
    position: relative;
    padding-left: 1.4vw;
    margin-right: 2vw;
    padding-bottom: 1%;
    overflow: hidden;

    :before {
      position: absolute;
      content: '';
      top: 1.3vw;
      left: 0;
      height: 0.4vw;
      width: 0.4vw;
      background-color: ${({ theme }) => theme.textPrimary};
    }

    :after {
      position: absolute;
      content: '';
      left: 1.3vw;
      bottom: 12%;
      height: 0.08em;
      width: 100%;
      background-color: ${({ theme }) => theme.textHighlight};
      opacity: 0;
      visibility: hidden;
      transform: scaleX(0);
      transform-origin: left;
    }

    svg {
      position: absolute;
      left: 1.3vw;
      bottom: 0;
      min-width: 100%;
      height: 1vw;
      opacity: 0;
      visibility: hidden;
      will-change: opacity, visibility;
      transition: all 0.1s;
    }

    &:nth-child(2),
    &:nth-child(12),
    &:nth-child(19),
    &:nth-child(21) {
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
  margin-bottom: 12%;
  color: ${({ theme }) => theme.textPrimary};

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
    margin-bottom: 5%;
    opacity: 0;
    transform: translateY(20vh);
    transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);

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
    transform: translateY(20vh);
    will-change: opacity, transform;
    transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);
  }

  h1 {
    line-height: 0.8;
    margin-left: 4vw;
    margin-bottom: 8%;
    opacity: 0;
    transform: translateY(20vh);
    will-change: opacity, transform;
    transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);
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
      &:nth-child(5) h1,
      &:nth-child(5) p {
        transition-delay: 0.5s;
      }
    }
  }
`

const SectionFour = styled(Container)`
  padding: 0 5vw 16%;
  color: ${({ theme }) => theme.textPrimary};

  .section-title {
    margin-bottom: 2.5%;
  }

  .content {
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    min-width: 100%;

    &:hover .marquee {
      animation-play-state: paused;
    }
  }

  .marquee {
    display: flex;
    animation: ${listMarquee} 45s linear infinite;
  }

  h2 {
    position: relative;
    padding-left: 3vw;
    padding-right: 5vw;

    &:before {
      position: absolute;
      content: '';
      top: calc(50% - 0.4vw);
      left: 0;
      height: 0.8vw;
      width: 0.8vw;
      background-color: ${({ theme }) => theme.textPrimary};
    }
  }
`

const SectionFive = styled(Container)`
  padding: 0 5vw 8%;
  color: ${({ theme }) => theme.textPrimary};

  .content {
    width: 40%;
  }

  .section-title {
    margin-bottom: 6%;
    opacity: 0;
    transform: translateY(20vh);
    transition: all 1.6s cubic-bezier(0.19, 1, 0.22, 1);

    &.is-inview {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .link-item {
    opacity: 0;
    transform: translateY(16vh);
    will-change: opacity, transform;
    transition: all 1.8s cubic-bezier(0.19, 1, 0.22, 1);
    margin-bottom: 1.5%;
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
      &:nth-child(5) {
        transition-delay: 0.5s;
      }
    }
  }
`

const SectionSix = styled(Container)`
  padding: 8% 5vw 16%;
  color: ${({ theme }) => theme.textPrimary};

  .video-wrapper {
    position: relative;

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

  .video {
    position: relative;
    display: contents;
    width: 100%;
    height: 100%;
    max-height: 80vh;
  }

  video {
    display: flex;
    height: 100%;
    width: 100%;
    opacity: 0;
    transform: scale(0.9);
    transition: all 1s ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundDark};
    opacity: 0;
    transform: scale(0.9);
    transition: all 1s ease;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 9.5% 6.5vw 0 12vw;

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
    transform: translateY(-20vh);
    transition: all 1s ease 0.1s;

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
    margin-bottom: 6%;
    opacity: 0;
    transform: translateY(20vh);
    will-change: opacity, transform;
    transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);
    white-space: nowrap;
  }

  h3 {
    opacity: 0;
    transform: translateY(20vh);
    will-change: opacity, transform;
    transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1) 0.2s;
  }
`

const SectionSeven = styled(Container)`
  padding: 0 5vw;
  margin-bottom: 13%;
  color: ${({ theme }) => theme.textPrimary};

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
    transition: all 1.8s cubic-bezier(0.19, 1, 0.22, 1);
  }

  a {
    position: relative;

    &:after {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.02em;
      background-color: ${({ theme }) => theme.textPrimary};
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 1.8s cubic-bezier(0.19, 1, 0.22, 1) 0.4s;
    }
  }

  h2 {
    margin-bottom: 1.5%;
  }

  p {
    opacity: 0;
    transform: scale(1.2);
    transform-origin: bottom;
    transition: all 1.8s cubic-bezier(0.19, 1, 0.22, 1);
  }
`

export {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  SectionSix,
  SectionSeven,
}
