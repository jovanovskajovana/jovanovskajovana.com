import React from 'react'

import video from '../assets/images/video.mp4'

import Social from '../components/Social'
import IntroGroup from '../components/IntroGroup'
import ListWithImage from '../components/ListWithImage'
import ListMarquee from '../components/ListMarquee'
import Line from '../components/figures/Line'

import { skills, hobby, writing } from '../constants/content'

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
  TextXS,
} from '../styles/Typography'

const HomePage = () => (
  <>
    <SectionOne justifyContent="flex-start" alignItems="flex-end">
      <IntroGroup />
    </SectionOne>

    <SectionTwo column alignItems="flex-start">
      <div className="section-title" data-scroll data-scroll-offset="30%">
        <TextXS>Skills & Tools</TextXS>
      </div>

      <div className="content" data-scroll data-scroll-offset="25%">
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
        <div className="section-title" data-scroll data-scroll-offset="30%">
          <TextXS>Hobby Projects</TextXS>
        </div>

        <div className="links" data-scroll data-scroll-offset="25%">
          {hobby.map((item, index) => (
            <ListWithImage key={index} item={item} />
          ))}
        </div>
      </div>
    </SectionThree>

    <SectionFour column alignItems="flex-start">
      <div className="section-title">
        <TextXS>What Did I Work On</TextXS>
      </div>

      <div className="content">
        <ListMarquee />
        <ListMarquee />
      </div>
    </SectionFour>

    <SectionFive column alignItems="flex-end">
      <div className="content">
        <div className="section-title" data-scroll data-scroll-offset="30%">
          <TextXS>Plus Some Writing</TextXS>
        </div>

        <div className="links" data-scroll data-scroll-offset="30%">
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
      </div>
    </SectionFive>

    <SectionSix alignItems="space-between" justifyContent="flex-start">
      <div className="video-wrapper" data-scroll data-scroll-offset="45%">
        <TitleXXL>Who</TitleXXL>
        <TitleXXL>Am I</TitleXXL>
        <div className="video">
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
      </div>
      <div className="content" data-scroll data-scroll-offset="45%">
        <div className="info">
          <TitleXL>Jovanovska Jovana</TitleXL>
          <TitleL>Frontend Engineer</TitleL>
          <TitleL>UI Designer</TitleL>
          <TitleL>Visual Storyteller</TitleL>
          <TitleL>Traveler</TitleL>
          <TitleL>Dreamer</TitleL>
        </div>
        <Social />
      </div>
    </SectionSix>

    <SectionSeven column data-scroll data-scroll-offset="20%">
      <TitleXL>
        Say <a href="mailto:hello@jovanovskajovana.com">Hello</a>
      </TitleXL>
      <TextL>Question or new idea? Let's talk!</TextL>
    </SectionSeven>
  </>
)

export default HomePage
