import React from 'react'
import styled from '@emotion/styled'
import MyselfWithComputer from '../images/me-with-computer-edited.png'
import MentalNoteImg from '../images/mentalnotemockup.png'

const Experience = () => (
  <Wrapper>
    <ContentWrapper id="about">
      <HeaderText>Experience</HeaderText>
      <InnerContentWrapper>
        <InnerContentText>
          <InnerContentHeader>
            <h3>MentalNote</h3>
          </InnerContentHeader>
          <p>
            Mental Note is an online mental health tracker. The intention is to
            log how you’re doing every day. You can track your progress over
            time on the dashboard and view analytics on your mental health over
            the course of weeks, months, and years.
          </p>
        </InnerContentText>
        <ProjectImg src={MentalNoteImg} alt="" />
        <ExperienceText>
          <h3>Experience</h3>
          <h3>Experience</h3>
          <h3>Experience</h3>
        </ExperienceText>
      </InnerContentWrapper>
    </ContentWrapper>
  </Wrapper>
)

export default Experience

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 130vh;
  background-color: #fff;
  margin-top: 20vh;
  padding: 10vh 0;
`

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  width: 85vw;
  max-width: 85vw;
  height: 70vh;
  max-height: 70vh;
  border: 1px solid #444;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    height: 89%;
    min-width: 85%;
    max-width: 85%;
  }
`

const HeaderText = styled.h1`
  position: absolute;
  top: -10vmin;
  left: 8vmin;
  font-size: 14vmin;
  font-style: italic;
  color: #444;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #a20505;
  background-color: #fff;
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
  p {
    font-size: 1.25vw;
    font-weight: 300;
    line-height: 2vw;
    color: #444;
    margin-top: 15px;
    width: 80%;
  }
`

const InnerContentHeader = styled.div`
  height: 18vmin;
  width: 50vw;
  display: flex;
  align-items: center;
  margin-left: -7vw;
  background-color: #a20505;
  h3 {
    font-size: 3vw;
    font-family: 'Bitter', serif;
    color: #fff;
    margin-left: 7vw;
  }
`

const ProjectImg = styled.img`
  position: absolute;
  bottom: 0;
  top: 0;
  margin: auto 0;
  right: -0.5vw;
  width: 55vw;
  min-width: 50vmin;
  filter: drop-shadow(20px 12px 20px rgba(0, 0, 0, 0.6));
  z-index: 100;
`

const ExperienceText = styled.div`
  position: absolute;
  right: -15.5vw;
  bottom: 30vh;
  height: 8vw;
  max-width: 40vw;
  transform: rotate(-90deg);
  z-index: 1;

  h3 {
    position: relative;
    font-size: 10vh;
    font-weight: 800;
    color: #a20505;

    &:first-of-type {
      z-index: 50;
    }

    &:nth-of-type(2),
    &:last-of-type {
      margin-top: -3.4vw;
    }

    &:nth-of-type(2) {
      -webkit-text-fill-color: #fff;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #a20505;
      margin-left: 1px;
      z-index: 4;
    }

    &:last-of-type {
      -webkit-text-fill-color: #fff;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #a20505;
      margin-left: 1px;
      z-index: 3;
    }
  }
`
