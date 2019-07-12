import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
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

const fadeIn = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`

const moveUp = keyframes`
  0% { 
    margin-bottom: -20px
  }
  75% {
    margin-bottom: 0px
  }
`

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
  animation: ${fadeIn} 3s, ${moveUp} 2s;
  max-height: 65vh;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -2;
  @media only screen and (max-width: 1024px) {
    max-height: 50vh;
    max-width: 75vw;
    right: 0;
  }
`
