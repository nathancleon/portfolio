import React from 'react'
import styled from '@emotion/styled'
import BioContent from './BioContent'
import imgOfMyself from '../../../images/me-with-computer-edited.png'

const Bio = () => (
  <>
    <BioContent />
    <LandingImageContainer>
      <ImageOfMyself src={imgOfMyself} />
    </LandingImageContainer>
  </>
)

export default Bio

const LandingImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  z-index: -1;
  @media only screen and (max-width: 1024px) {
    min-width: 100%;
  }
`

const ImageOfMyself = styled.img`
  max-height: 70vh;
  position: absolute;
  bottom: 0;
  right: -3vw;
  z-index: -2;
  @media only screen and (max-width: 1024px) {
    max-height: 50vh;
    left: 0;
    margin: 0 auto;
  }
`
