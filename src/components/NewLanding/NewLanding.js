import React from 'react'
import styled from '@emotion/styled'
import pawSvg from '../../images/paw.svg'
import imgOfMyself from '../../images/me-with-computer.png'

export default class NewLanding extends React.Component {
  render() {
    return (
      <LandingWrapper>
        <ContentWrapper>
          <PawTopLeft src={pawSvg} />
          <PawBottomRight src={pawSvg} />
          <Navigation>
            <ul>
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </Navigation>
          <BioContent>
            <BioTextHi>Hi,</BioTextHi>
            <BioTextLarge>
              My name is <Name>Nathan</Name>
            </BioTextLarge>
            <BioTextSmall>
              I'm a fullstack developer based in Washington, D.C.
            </BioTextSmall>
          </BioContent>
          <ImageOfMyself src={imgOfMyself} />
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
  overflow-x: hidden;
`

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  max-width: 90%;
  min-width: 90%;
  height: 75%;
  border: 3px solid #fff;
  z-index: 1;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    height: 85%;
    min-width: 80%;
    max-width: 80%;
  }
`

const PawTopLeft = styled.img`
  height: 85px;
  position: absolute;
  top: -50px;
  left: -40px;
  z-index: 2;
  transform: rotate(-36deg);
`

const PawBottomRight = styled.img`
  height: 85px;
  position: absolute;
  bottom: -50px;
  right: -40px;
  z-index: 2;
  transform: rotate(-216deg);
  z-index: 20;
`

const Navigation = styled.nav`
  position: absolute;
  top: -45px;
  right: 80px;
  width: 350px;

  ul {
    display: flex;
    justify-content: space-around;
    li {
      font-family: 'Merriweather', serif;
      list-style: none;
      font-size: 2rem;
      font-weight: normal;
      color: #fff;
      cursor: pointer;
      padding-right: 40px;
      &:hover {
        transform: scale(1.25);
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    top: 30%;
    right: -100px;
    width: auto;
    max-height: 60%;
    ul {
      flex-direction: column;
      height: 350px;
      li {
        transform: rotate(90deg);
        &:hover {
          transform: rotate(90deg);
          margin: 0;
        }
      }
    }
  }
`

const BioContent = styled.div`
  /*TODO: Add container div for text*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  min-width: 50%;
  height: 100%;
  padding: 80px;
  z-index: 20;

  @media only screen and (max-width: 1024px) {
    min-width: 100%;
    border: 1px solid red;
    height: 40%;
    left: 0;
    h1,
    h2,
    span {
      margin: 0 auto;
    }
  }
`

const BioTextHi = styled.h1`
  font-size: 8vw;
  color: #fff;
`

const BioTextLarge = styled.h2`
  font-family: 'Merriweather', serif;
  font-size: 4vw;
  color: #fff;
`

const BioTextSmall = styled.h2`
  font-family: 'Merriweather', serif;
  font-size: 3vw;
  color: #fff;
  margin-top: 15px;
  width: 80%;
`
const Name = styled.span`
  position: relative;
  font-family: 'Merriweather', serif;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.5vw;
    border-radius: 8px;
    background-color: #fff;
    bottom: -4px;
    left: 0;
  }
`

const ImageOfMyself = styled.img`
  /*TODO: Put into separate div*/
  position: absolute;
  bottom: 0;
  right: -15%;
  max-height: 45vw;
  min-height: 80%;
  z-index: -1;
  @media only screen and (max-width: 1024px) {
    max-height: 55vw;
    min-height: 60%;
    right: 0;
    left: 0;
    margin: 0 auto;
  }
`
