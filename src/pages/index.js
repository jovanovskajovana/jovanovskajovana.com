import React from 'react'

import SEO from '../components/SEO'
import WavesLeft from '../components/figures/WavesLeft'
import WavesRight from '../components/figures/WavesRight'
import Sun from '../components/figures/Sun'

import { skills } from '../constants/content'

import { SectionOne, SectionTwo } from '../styles/ContentLayout'
import { TextXXL, TextM, TextS, TextXS } from '../styles/Typography'

const HomePage = () => (
  <>
    <SEO title="Home" />
    <SectionOne justifyContent="flex-start" alignItems="flex-end">
      <Sun top="10vh" right="15vw" />
      <WavesLeft top="20vh" left="-4vw" />
      <WavesRight top="35vh" right="-4vw" />

      <div className="intro">
        <TextXXL>I believe</TextXXL>
        <div className="text">
          <TextS italic>
            in ideas and the art of software development to bring them to fruition. Love solving
            problems with family and friends, and teammates who can be both.
          </TextS>
          <TextS>
            With around 7 years of practical experience and five years full-time member of a
            brilliant team, developing projects for clients around the world, and Silicon Valley
            tech companies. Working with colors and making pixel perfect UI is my biggest love, as
            long as the code is clean and well structured.
          </TextS>
        </div>
      </div>
    </SectionOne>
    <SectionTwo column alignItems="flex-start">
      <TextXS>Skills & Tools</TextXS>

      <div className="content">
        {skills.map((item, index) => (
          <TextM key={index}>{item}</TextM>
        ))}
      </div>
    </SectionTwo>
  </>
)

export default HomePage
