import React from 'react'

import WavesLeft from '../components/figures/WavesLeft'
import WavesRight from '../components/figures/WavesRight'
import Sun from '../components/figures/Sun'

import { TitleXXL, TextS } from '../styles/Typography'

const IntroGroup = () => (
  <>
    <div className="sun">
      <Sun />
    </div>

    <div className="waves-left">
      <div data-scroll data-scroll-speed="3" data-scroll-position="top">
        <WavesLeft />
      </div>
    </div>

    <div className="waves-right">
      <div data-scroll data-scroll-speed="2" data-scroll-position="top">
        <WavesRight />
      </div>
    </div>

    <div className="intro">
      <div className="title">
        <TitleXXL data-scroll data-scroll-speed="3" data-scroll-position="top">
          I believe
        </TitleXXL>
      </div>

      <div className="text" data-scroll data-scroll-speed="3" data-scroll-position="top">
        <div className="subtitle" data-scroll data-scroll-offset="25%">
          <TextS italic>
            in ideas and the art of software development to bring them to fruition. Love solving
            problems with family and friends, and teammates who can be both.
          </TextS>
        </div>
        <div className="subtitle" data-scroll data-scroll-offset="25%">
          <TextS>
            With around 7 years of practical experience and five years full-time member of a
            brilliant team, developing projects for clients around the world, and Silicon Valley
            tech companies. Working with colors and making pixel perfect UI is my biggest love, as
            long as the code is clean and well structured.
          </TextS>
        </div>
      </div>
    </div>
  </>
)

export default IntroGroup
