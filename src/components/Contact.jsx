import React from 'react'
import styled from '@emotion/styled'
import RenlyWithBlankets from '../images/renly-blankets.png'
import Resume from '../images/NathanielCollinsLeonResume.pdf'
import Twitter from '../images/icons/twitter-square.svg'
import LinkedIn from '../images/icons/linkedin.svg'
import GitHub from '../images/icons/github-square.svg'

const Contact = () => (
  <Wrapper>
    <ContentWrapper>
      <HeaderText id="contact">Contact</HeaderText>
      <InnerContentWrapper>
        <InnerContentText>
          <h2>
            <a href={Resume} target="_blank">
              Here's my resumé
            </a>
          </h2>
          <p>I work hard so my dog Renly can live a good (and cozy) life.</p>
        </InnerContentText>
        <ImgOfRenly src={RenlyWithBlankets} alt="" />
        <ContactText>
          <h3>Contact</h3>
          <h3>Contact</h3>
          <h3>Contact</h3>
        </ContactText>
      </InnerContentWrapper>
      <ContactIcons>
        <a href="https://www.twitter.com/nathancleon" target="_blank">
          <img src={Twitter} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/nathancleon" target="_blank">
          <img src={LinkedIn} alt="" />
        </a>
        <a href="https://www.github.com/nathancleon" target="_blank">
          <img src={GitHub} alt="" />
        </a>
      </ContactIcons>
    </ContentWrapper>
  </Wrapper>
)

export default Contact

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 110vh;
  background-color: #a20505;
  margin-top: 20vh;
  padding-top: 20vh;
  &:before {
    content: '';
    position: absolute;
    top: -20vh;
    border-left: 100vw solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 20vh solid #a20505;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  width: 85%;
  height: 70%;
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
  width: 50%;
  h2 {
    margin-bottom: 2vmin;
    a {
      font-size: 4.5vw;
      font-style: italic;
      color: #fff;
    }
  }
  h3 {
    font-size: 2.5vw;
    font-style: italic;
    font-weight: 300;
    color: #fff;
  }
  p {
    font-size: 2.5vw;
    font-weight: 300;
    color: #fff;
    margin-top: 5px;
  }
`

const ImgOfRenly = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 33vw;
  min-width: 50vmin;
  filter: drop-shadow(10px 0px 10px rgba(0, 0, 0, 0.4));
  z-index: 100;
`

const ContactText = styled.div`
  position: absolute;
  right: -10.5vw;
  bottom: 0;
  top: 0;
  margin: auto 0;
  height: 8vw;
  max-width: 40vw;
  transform: rotate(-90deg);
  h3 {
    position: relative;
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
      z-index: 4;
    }

    &:last-of-type {
      -webkit-text-fill-color: #a20505;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #fff;
      z-index: 3;
    }
  }
`

const ContactIcons = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: 20vh;
  left: -1vw;
  a {
    margin-bottom: 2vw;
    text-decoration: none;
    color: #fff;
    img {
      background-color: #a20505;
      width: 2vw;
    }
  }
`
