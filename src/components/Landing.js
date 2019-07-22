import React from 'react'
import styled from '@emotion/styled'
import ImgOfMyself from '../images/me-cropped-grainy.png'

export default class NewLanding extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <LandingWrapper>
        <ContentWrapper>
          <h1>Nathan Collins León</h1>
          <h2>Nathan Collins León</h2>
          <img src={ImgOfMyself} alt="" />
          <HeroTextContainer>
            <HeroText>
              <li>Fullstack</li>
              <li />
              <li>Frontend</li>
              <li />
              <li>D.C.</li>
            </HeroText>
          </HeroTextContainer>
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
  img {
    position: absolute;
    bottom: 0;
    right: 5%;
    max-width: 85%;
    max-height: 85%;
    z-index: 10;
  }
  h1 {
    position: absolute;
    top: -7.4vw;
    font-size: 7.96vw;
    font-weight: 800;
    font-style: italic;
    color: #eee;
    width: 110%;
  }
  h2 {
    position: absolute;
    top: -3.5vw;
    font-size: 5vw;
    font-weight: 800;
    font-style: italic;
    color: #444;
    width: 100%;
    text-align: center;
  }
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
  }
  @media only screen and (max-width: 1200px) {
    margin-right: 20vw;
  }
`
