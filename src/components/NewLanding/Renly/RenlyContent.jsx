import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const RenlyContent = () => (
  <RenlyContentWrapper>
    <RenlyContentText>
      <RenlyTextMain>This is my dog, Renly.</RenlyTextMain>
      <RenlyTextSmall>
        I work hard so that he can live a good (and cozy) life.
      </RenlyTextSmall>
    </RenlyContentText>
  </RenlyContentWrapper>
)

export default RenlyContent

const fadeIn = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`

const moveUp = keyframes`
  0% { 
    margin-bottom: -50px
  }
  75% {
    margin-bottom: 0px
  }
`

const RenlyContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  min-width: 50%;
  height: 100%;
  z-index: 20;

  @media only screen and (max-width: 1024px) {
    min-width: 100%;
    height: 60%;
    left: 0;
    justify-content: center;
    align-items: center;
  }
`

const RenlyContentText = styled.div`
  animation: ${fadeIn} 3s, ${moveUp} 2s;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px;
  @media only screen and (max-width: 1024px) {
    max-width: 100%;
    padding: 0 22.5%;
  }
  @media only screen and (max-width: 768px) {
    max-width: 80%;
    padding: 0;
  }
`
const RenlyTextMain = styled.h1`
  font-size: 5.5vw;
  width: 100%;
  color: #fff;
  @media only screen and (max-width: 1024px) {
    font-size: 3.5rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
`

const RenlyTextSmall = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 2.8vw;
  color: #fff;
  margin-top: 15px;
  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`
