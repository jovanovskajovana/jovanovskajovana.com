import React from 'react'

import { SocialWrapper } from '../styles/PageLayout'

const Social = () => (
  <SocialWrapper>
    <a
      className="link"
      href="https://github.com/jovanovskajovana"
      target="_blank"
    >
      <span>Gh</span>
    </a>
    <a
      className="link"
      href="https://www.linkedin.com/in/jovanovskajovana"
      target="_blank"
    >
      <span>In</span>
    </a>
    <a
      className="link"
      href="https://www.instagram.com/jovanovskajovana/"
      target="_blank"
    >
      <span>Ig</span>
    </a>
    <a className="link" href="https://twitter.com/jovanovska__" target="_blank">
      <span>Tw</span>
    </a>
    <a
      className="link"
      href="https://discordapp.com/users/jovana#3516"
      target="_blank"
    >
      <span>Ds</span>
    </a>
  </SocialWrapper>
)

export default Social
