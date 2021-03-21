import React from 'react'

import video from '../assets/images/video.mp4'

import Social from '../components/Social'
import IntroGroup from '../components/IntroGroup'
import ListWithImage from '../components/ListWithImage'

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
import { TitleXXL, TitleXL, TitleL, TitleM, TextL, TextXS } from '../styles/Typography'

const HomePage = () => (
  <>
    <SectionOne justifyContent="flex-start" alignItems="flex-end">
      <IntroGroup />
    </SectionOne>

    <SectionTwo column alignItems="flex-start">
      <TextXS data-scroll data-scroll-offset="25%">
        Skills & Tools
      </TextXS>

      <div className="content" data-scroll data-scroll-offset="30%">
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
          <ListWithImage key={index} item={item} />
        ))}
      </div>
    </SectionThree>

    <SectionFour column alignItems="flex-start">
      <TextXS>What Did I Work On</TextXS>

      <div className="content">
        {work.map((item, index) => (
          <div key={index} className="link-item">
            <TitleXL>
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
      <TextL>Question or new idea? Let's talk!</TextL>
    </SectionSeven>
  </>
)

export default HomePage
