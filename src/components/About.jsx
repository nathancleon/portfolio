import React from 'react'
import styled from '@emotion/styled'
import MyselfWithComputer from '../images/me-with-computer-edited.png'

const About = () => (
  <Wrapper>
    <ContentWrapper id="about">
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
        <ImgOfMyself src={MyselfWithComputer} alt="" />
        <AboutText>
          <h3>About</h3>
          <h3>About</h3>
          <h3>About</h3>
        </AboutText>
      </InnerContentWrapper>
    </ContentWrapper>
  </Wrapper>
)

export default About

const Wrapper = styled.div`
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
    top: -20vh;
    border-left: 100vw solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 20vh solid #a20505;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -20vh;
    border-left: 0 solid transparent;
    border-right: 100vw solid transparent;
    border-top: 20vh solid #a20505;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  width: 85vw;
  max-width: 85vw;
  height: 70vh;
  max-height: 70vh;
  border: 1px solid #fff;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    height: 89%;
    min-width: 85%;
    max-width: 85%;
  }
`

const HeaderText = styled.h1`
  position: absolute;
  top: -12vmin;
  left: 8vmin;
  font-size: 18vmin;
  font-style: italic;
  color: #fff;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #fff;
  background-color: #a20505;
  padding: 0 10px;
`

const InnerContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5vw;
`

const InnerContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 45%;
  h3 {
    font-size: 2vw;
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
`

const ImgOfMyself = styled.img`
  position: absolute;
  bottom: 0;
  right: -2vw;
  width: 40vw;
  min-width: 50vmin;
  filter: drop-shadow(20px 12px 20px rgba(0, 0, 0, 0.6));
  z-index: 100;
`

const AboutText = styled.div`
  position: absolute;
  right: -7.5vw;
  bottom: 30vh;
  height: 8vw;
  max-width: 40vw;
  transform: rotate(-90deg);
  z-index: 2;
  h3 {
    font-size: 12vh;
    font-weight: 800;
    color: #fff;

    &:first-of-type {
      z-index: 5;
    }

    &:nth-of-type(2),
    &:last-of-type {
      margin-top: -4.5vw;
    }

    &:nth-of-type(2) {
      -webkit-text-fill-color: #a20505;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #fff;
      margin-left: 1px;
      z-index: 4;
    }

    &:last-of-type {
      -webkit-text-fill-color: #a20505;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #fff;
      margin-left: 1px;
      z-index: 3;
    }
  }
`
