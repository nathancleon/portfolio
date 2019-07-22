import React from 'react'
import styled from '@emotion/styled'
import ImgOfMyself from '../images/me-cropped-grainy.png'
import LocationIcon from '../images/icons/map-marker-alt.svg'

export default class NewLanding extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <LandingWrapper>
        <ContentWrapper>
          <NameLarge>Nathan Collins León</NameLarge>
          <NameSmall>Nathan Collins León</NameSmall>
          <ImageOfMyself src={ImgOfMyself} alt="" />
          <HeroTextContainer>
            <HeroText>
              <li>Fullstack</li>
              <li />
              <li>Frontend</li>
              <li />
              <li>
                <img src={LocationIcon} alt="" />
                D.C.
              </li>
            </HeroText>
            <Navigation>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li />
                <li>
                  <a href="#work">Work</a>
                </li>
                <li />
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </Navigation>
          </HeroTextContainer>
          <DeveloperTextContainer>
            <h2>Developer</h2>
            <h2>Developer</h2>
            <h2>Developer</h2>
          </DeveloperTextContainer>
        </ContentWrapper>
      </LandingWrapper>
    )
  }
}

const LandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  min-width: 75%;
  height: 75%;
  margin-top: 5%;
  background-color: #eee;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    height: 89%;
    min-width: 85%;
    max-width: 85%;
  }
`

const ImageOfMyself = styled.img`
  position: absolute;
  bottom: 0;
  right: 5%;
  max-width: 85%;
  max-height: 85%;
  z-index: 10;
`

const NameLarge = styled.h1`
  position: absolute;
  top: -7.4vw;
  font-size: 7.96vw;
  font-weight: 800;
  font-style: italic;
  color: #eee;
  width: 110%;
`

const NameSmall = styled.h2`
  position: absolute;
  top: -3.5vw;
  font-size: 5vw;
  font-weight: 800;
  font-style: italic;
  color: #444;
  width: 100%;
  text-align: center;
`

const HeroTextContainer = styled.div`
  position: absolute;
  left: -6%;
  top: 34%;
  width: 58vw;
  height: 42%;
  background-color: #a20505;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1200px) {
    left: -12%;
  }
`

const HeroText = styled.ul`
  display: flex;
  justify-content: space-around;
  min-width: 60%;
  margin-right: 15vw;
  li {
    position: relative;
    font-size: 1.25rem;
    font-family: 'Bitter', serif;
    color: #fff;
    list-style: none;
    &:nth-of-type(2),
    &:nth-of-type(4) {
      background-color: #fff;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin: auto 0;
    }
    &:last-of-type img {
      width: 0.7rem;
      margin-right: 10px;
    }
  }
  @media only screen and (max-width: 1200px) {
    margin-right: 20vw;
  }
`

const Navigation = styled.nav`
  position: absolute;
  min-width: 250px;
  max-width: 34vw;
  height: 62vw;
  transform: rotate(-90deg);
  ul {
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    li {
      a {
        text-decoration: none;
        font-size: 1rem;
        font-weight: 700;
        color: #444;
      }
      list-style: none;
      &:nth-of-type(2),
      &:nth-of-type(4) {
        display: inline-block;
        background-color: #444;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: auto 0;
      }
    }
  }
`

const DeveloperTextContainer = styled.div`
  position: absolute;
  right: -14vw;
  bottom: 30vh;
  height: 8vw;
  max-width: 40vw;
  transform: rotate(-90deg);
  h2 {
    font-size: 12vh;
    font-weight: 800;
    color: #a20505;
    &:nth-of-type(2),
    &:last-of-type {
      margin-top: -3.5vw;
    }

    &:nth-of-type(2) {
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #a20505;
      margin-left: 1px;
    }

    &:last-of-type {
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #a20505;
      margin-left: 1px;
    }
  }
`
