import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import imgOfRenly from '../../../images/renly-edit-gray.png'
import ContactContent from './ContactContent'

const Contact = () => (
  <Wrapper>
    <ContactContent />
    <LandingImageContainer>
      <ImageOfRenly src={imgOfRenly} />
    </LandingImageContainer>
  </Wrapper>
)

export default Contact

const fadeIn = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`

const moveUp = keyframes`
  0% { 
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
`

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  z-index: 1;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-around;
  }
`

const LandingImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 45%;
  z-index: -10;
  @media only screen and (max-width: 1024px) {
    order: 1;
    min-width: 100%;
  }

  @media only screen and (max-width: 768px) {
    height: 75vh;
    margin-top: 10px;
  }
`

const ImageOfRenly = styled.img`
  animation: ${fadeIn} 3s;
  max-height: 75vh;
  position: absolute;
  bottom: 0;
  z-index: -2;
  @media only screen and (max-width: 1024px) {
    max-height: 40vh;
    margin-left: 2.5vw;
  }
`
