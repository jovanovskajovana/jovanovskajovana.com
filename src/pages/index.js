import React from 'react'

import video from '../assets/images/video.mp4'

import Social from '../components/Social'
import WavesLeft from '../components/figures/WavesLeft'
import WavesRight from '../components/figures/WavesRight'
import Sun from '../components/figures/Sun'
import Line from '../components/figures/Line'

import { skills, hobby, work, writing } from '../constants/content'

import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  SectionSix,
  SectionSeven,
} from '../styles/ContentLayout'
import {
  TitleXXL,
  TitleXL,
  TitleL,
  TitleM,
  TextL,
  TextM,
  TextS,
  TextXS,
} from '../styles/Typography'

const HomePage = () => (
  <>
    <SectionOne justifyContent="flex-start" alignItems="flex-end">
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
          <TextL key={index}>
            {item}
            <Line />
          </TextL>
        ))}
      </div>
    </SectionTwo>
    <SectionThree column alignItems="flex-start">
      <div className="content">
        <TextXS>Hobby Projects</TextXS>

        {hobby.map((item, index) => (
          <div key={index} className="link-item">
            <TextM>{item.id}</TextM>
            <TitleXXL key={index}>
              <a href={item.url} target="_blank">
                {item.title}
              </a>
            </TitleXXL>
          </div>
        ))}
      </div>
    </SectionThree>
    <SectionFour column alignItems="flex-start">
      <TextXS>What Did I Work On</TextXS>

      <div className="content">
        {work.map((item, index) => (
          <div key={index} className="link-item">
            <TitleXL key={index}>
              <a href={item.url} target="_blank">
                {item.title}
              </a>
            </TitleXL>
          </div>
        ))}
      </div>
    </SectionFour>
    <SectionFive column alignItems="flex-end">
      <div className="content">
        <TextXS>Plus Some Writing</TextXS>

        {writing.map((item, index) => (
          <div key={index} className="link-item">
            <TitleM key={index}>
              <a href={item.url} target="_blank">
                {item.title}
              </a>
            </TitleM>
          </div>
        ))}
      </div>
    </SectionFive>
    <SectionSix alignItems="flex-start" justifyContent="flex-start">
      <div className="video">
        <TitleXXL>Who</TitleXXL>
        <TitleXXL>Am I</TitleXXL>
        <video
          autoPlay="autoplay"
          playsInline
          loop="loop"
          muted="muted"
          preload="auto"
          crossOrigin="anonymous"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>
      <div className="content">
        <TitleXL>Jovanovska Jovana</TitleXL>
        <TitleL>Frontend Engineer</TitleL>
        <TitleL>UI Designer</TitleL>
        <TitleL>Visual Storyteller</TitleL>
        <TitleL>Traveler</TitleL>
        <TitleL>Dreamer</TitleL>
        <Social />
      </div>
    </SectionSix>
    <SectionSeven column>
      <TitleXL>
        Say <a href="mailto:hello@jovanovskajovana.com">Hello</a>
      </TitleXL>
      <TextL>Question, or a new idea? Let's talk!</TextL>
    </SectionSeven>
  </>
)

export default HomePage
