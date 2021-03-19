import React from 'react'

import WavesLeft from '../components/figures/WavesLeft'
import WavesRight from '../components/figures/WavesRight'
import Sun from '../components/figures/Sun'

import { TitleXXL, TextS } from '../styles/Typography'

const IntroGroup = () => (
  <>
    <Sun top="10vh" right="15vw" />
    <WavesLeft top="20vh" left="-4vw" />
    <WavesRight top="35vh" right="-4vw" />

    <div className="intro">
      <TitleXXL>I believe</TitleXXL>

      <div className="text">
        <TextS italic>
          in ideas and the art of software development to bring them to fruition. Love solving
          problems with family and friends, and teammates who can be both.
        </TextS>
        <TextS>
          With around 7 years of practical experience and five years full-time member of a brilliant
          team, developing projects for clients around the world, and Silicon Valley tech companies.
          Working with colors and making pixel perfect UI is my biggest love, as long as the code is
          clean and well structured.
        </TextS>
      </div>
    </div>
  </>
)

export default IntroGroup
