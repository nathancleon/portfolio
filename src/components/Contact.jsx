import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { keyframes } from '@emotion/core'
import RenlyWithBlankets from '../images/renly-blankets-compressed.png'
import Resume from '../images/NathanCollinsLeonResume.pdf'
import Twitter from '../images/icons/twitter-square.svg'
import LinkedIn from '../images/icons/linkedin.svg'
import GitHub from '../images/icons/github-square.svg'

const Contact = ({ inView }) => {
  const data = useStaticQuery(graphql`
    query {
      imageOfRenly: file(
        relativePath: { eq: "renly-blankets-compressed.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper id="contact">
      {inView ? (
        <ContentWrapper>
          <HeaderText>Contact</HeaderText>
          <InnerContentWrapper>
            <InnerContentText>
              <h2>
                <a href={Resume} target="_blank">
                  Here's my resumé
                </a>
              </h2>
              <p>
                I work hard so my dog Renly can live a good (and cozy) life.
              </p>
            </InnerContentText>
            <ImgOfRenly
              fluid={data.imageOfRenly.childImageSharp.fluid}
              alt="my dog renly covered in blankets"
            />
            <ContactText>
              <h3>Contact</h3>
              <h3>Contact</h3>
              <h3>Contact</h3>
            </ContactText>
          </InnerContentWrapper>
          <ContactIcons>
            <a
              href="https://www.twitter.com/nathanleoncodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/nathancleon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="linked in" />
            </a>
            <a
              href="https://www.github.com/nathancleon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHub} alt="git hub" />
            </a>
          </ContactIcons>
        </ContentWrapper>
      ) : null}
    </Wrapper>
  )
}

export default Contact

const skewUp = keyframes`
from {
  transform: translate3d(0, 10px, 0) skewY(3deg);
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
  height: 100vh;
  background-color: #a20505;
  margin-top: 20vh;
  padding-top: 20vh;
  &:before {
    content: '';
    position: absolute;
    top: -19.7vh;
    border-left: 103vw solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 19.9vh solid #a20505;
  }
  @media only screen and (max-width: 1024px) {
    margin-top: 10vh;
    padding-top: 0;
    &:before {
      top: -9.8vh;
      border-bottom: 10vh solid #a20505;
    }
  }
`

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  height: 75%;
  border: 1px solid #fff;
  animation: ${fadeIn} 2s, ${skewUp} 1s;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    height: 70%;
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
  @media only screen and (max-width: 1024px) {
    font-size: 12vmin;
    left: 0;
    right: 0;
    top: -8vmin;
    max-width: 60%;
    text-align: center;
    margin: 0 auto;
    -webkit-text-stroke-width: 2px;
  }
`

const InnerContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

const InnerContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  position: relative;
  width: 60%;
  padding: 5vw;
  margin-left: 2vw;
  z-index: 0;
  h2 {
    margin-bottom: 2vmin;
    a {
      font-size: 4vw;
      font-style: italic;
      color: #fff;
    }
  }
  p {
    font-size: 2.5vw;
    font-weight: 300;
    color: #fff;
    margin-top: 5px;
  }
  @media only screen and (max-width: 1024px) {
    align-self: flex-start;
    width: 100%;
    max-height: 10%;
    margin-top: 6vh;
    h2 {
      text-align: center;
      a {
        font-size: 6vmin;
      }
    }
    p {
      font-size: 4vmin;
    }
  }
`

const ImgOfRenly = styled(Img)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 25vw;
  min-width: 40vmin;
  filter: drop-shadow(10px 0px 10px rgba(0, 0, 0, 0.4));
  z-index: 100;
  @media only screen and (max-width: 1024px) {
    min-width: 40vmin;
  }
  @media only screen and (max-width: 600px) {
    min-width: 70vmin;
  }
`

const ContactText = styled.div`
  position: absolute;
  right: -8.5vw;
  bottom: 0;
  top: 0;
  margin: auto 0;
  height: 8vw;
  max-width: 40vw;
  transform: rotate(-90deg);
  h3 {
    position: relative;
    font-size: 8vh;
    font-weight: 800;
    color: #fff;

    &:first-of-type {
      z-index: 5;
    }

    &:nth-of-type(2),
    &:last-of-type {
      margin-top: -4.5vmin;
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
    display: none;
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
  @media only screen and (max-width: 1024px) {
    left: -3.5vw;
    a {
      margin-bottom: 4vh;
      img {
        width: 7vmin;
      }
    }
  }
`
