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
  min-width: 80%;
  height: 80%;
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
    max-width: 80%;
    max-height: 80%;
  }
  h1 {
    position: absolute;
    top: -7.9vw;
    font-size: 8.48vw;
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
