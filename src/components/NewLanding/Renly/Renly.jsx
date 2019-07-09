import React from 'react'
import styled from '@emotion/styled'
import RenlyContent from './RenlyContent'
import imgOfRenly from '../../../images/renly-blankets.png'

const Renly = () => (
  <>
    <RenlyContent />
    <LandingImageContainer>
      <ImageOfRenly src={imgOfRenly} />
    </LandingImageContainer>
  </>
)

export default Renly

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
const ImageOfRenly = styled.img`
  max-height: 80vh;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -2;
  @media only screen and (max-width: 1024px) {
    max-height: 50vh;
    right: 0;
  }
`
