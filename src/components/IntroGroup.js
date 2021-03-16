import React from 'react'
import { motion } from 'framer-motion'

import WavesLeft from '../components/figures/WavesLeft'
import WavesRight from '../components/figures/WavesRight'
import Sun from '../components/figures/Sun'

import { TitleXXL, TextS } from '../styles/Typography'

const transition = { duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }

const IntroGroup = () => (
  <>
    <Sun top="10vh" right="15vw" />
    <WavesLeft top="20vh" left="-4vw" />
    <WavesRight top="35vh" right="-4vw" />

    <div className="intro">
      <TitleXXL>
        <motion.div initial={{ y: 200 }} animate={{ y: 0 }} transition={transition}>
          I believe
        </motion.div>
      </TitleXXL>

      <div className="text">
        <TextS italic>
          <motion.div initial={{ y: 200 }} animate={{ y: 0 }} transition={transition}>
            in ideas and the art of software development to bring them to fruition. Love solving
            problems with family and friends, and teammates who can be both.
          </motion.div>
        </TextS>
        <TextS>
          <motion.div initial={{ y: 200 }} animate={{ y: 0 }} transition={transition}>
            With around 7 years of practical experience and five years full-time member of a
            brilliant team, developing projects for clients around the world, and Silicon Valley
            tech companies. Working with colors and making pixel perfect UI is my biggest love, as
            long as the code is clean and well structured.
          </motion.div>
        </TextS>
      </div>
    </div>
  </>
)

export default IntroGroup
