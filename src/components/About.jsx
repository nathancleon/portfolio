import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import MyselfWithComputer from '../images/me-with-computer-edited-compressed.png'

const About = ({ inView }) => (
  <Wrapper id="about">
    {inView ? (
      <ContentWrapper>
        <HeaderText>About</HeaderText>
        <InnerContentWrapper>
          <InnerContentText>
            <h3>My name is Nathan Collins León</h3>
            <p>
              I’m a fullstack developer with a passion for design and
              accessibility. I grew up in Puerto Rico, and currently reside in
              Washington, D.C.
            </p>
            <p>
              Things I love: national parks, traveling, UI/UX, dogs, and autumn
              (best season).
            </p>
            <p>
              Things I know: react, redux, mobX, vue, node, mongoDB, jQuery,
              javaScript, emotion, sass, css, html.
            </p>
          </InnerContentText>
          <ImgOfMyself
            src={MyselfWithComputer}
            alt="Nathan Collins Leon with a computer"
          />
          <AboutText>
            <h3>About</h3>
            <h3>About</h3>
            <h3>About</h3>
          </AboutText>
        </InnerContentWrapper>
      </ContentWrapper>
    ) : null}
  </Wrapper>
)

export default About

const skewUp = keyframes`
from {
  transform: translate3d(0, 100px, 0) skewY(6deg);
}
to {
  transform: translate3d(0) skewY(0deg);
}
`

const fadeIn = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 130vh;
  background-color: #a20505;
  margin-top: 20vh;
  padding: 10vh 0;
  &:before {
    content: '';
    position: absolute;
    top: -19.9vh;
    border-left: 100vw solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 20vh solid #a20505;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -19.9vh;
    border-left: 0 solid transparent;
    border-right: 100vw solid transparent;
    border-top: 20vh solid #a20505;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  height: 60%;
  border: 1px solid #fff;
  animation: ${fadeIn} 2s, ${skewUp} 1s;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    height: 70%;
    min-width: 75%;
  }
`

const HeaderText = styled.h1`
  position: absolute;
  top: -12vmin;
  left: 8vmin;
  font-size: 18vmin;
  font-style: italic;
  color: #fff;
  max-width: 50vw;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #fff;
  background-color: #a20505;
  padding: 0 10px;
  @media only screen and (max-width: 1024px) {
    font-size: 12vmin;
    left: 0;
    right: 0;
    top: -8vmin;
    margin: 0 auto;
    max-width: 38vmin;
    -webkit-text-stroke-width: 2px;
  }
`

const InnerContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 5vw;
  @media only screen and (max-width: 1024px) {
    width: 80%;
    height: 50%;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
  }
`

const InnerContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 45%;
  h3 {
    font-size: 3vmin;
    font-family: 'Bitter', serif;
    color: #fff;
  }
  p {
    font-size: 1.5vw;
    font-weight: 300;
    line-height: 2vw;
    color: #fff;
    margin-top: 15px;
  }
  @media only screen and (max-width: 1024px) {
    width: 95%;
    h3 {
      font-size: 20px;
      margin-top: 2vmin;
    }
    p {
      font-size: 12px;
      line-height: 20px;
      margin-top: 5px;
    }
  }
`

const ImgOfMyself = styled.img`
  position: absolute;
  bottom: 0;
  right: -4vw;
  width: 38vw;
  min-width: 50vmin;
  filter: drop-shadow(10px 0px 10px rgba(0, 0, 0, 0.4));
  z-index: 100;
  @media only screen and (max-width: 1024px) {
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 100%;
    width: 40vh;
    min-width: 30vmin;
  }
`

const AboutText = styled.div`
  position: absolute;
  right: -7.5vw;
  bottom: 0;
  top: 0;
  margin: auto 0;
  height: 8vw;
  max-width: 40vw;
  transform: rotate(-90deg);
  h3 {
    position: relative;
    font-size: 10vh;
    font-weight: 800;
    color: #fff;

    &:first-of-type {
      z-index: 5;
    }

    &:nth-of-type(2),
    &:last-of-type {
      margin-top: -6.5vmin;
    }

    &:nth-of-type(2) {
      -webkit-text-fill-color: #a20505;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #fff;
      z-index: 4;
    }

    &:last-of-type {
      -webkit-text-fill-color: #a20505;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #fff;
      z-index: 3;
    }
  }

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    right: 0;
    left: 0;
    min-width: 100%;
    top: 94%;
    transform: rotate(0deg);
    z-index: 500;
    h3 {
      font-size: 8vh;
      &:nth-of-type(2),
      &:last-of-type {
        margin-top: -4.5vmin;
      }
    }
  }
`
