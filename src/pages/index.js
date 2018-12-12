import React from 'react'
import img from '../images/renly-color.png'
import SEO from '../components/seo'
import styled from '@emotion/styled'
import MyselfLanding from '../components/MyselfLanding'
import RenlyLanding from '../components/RenlyLanding'

const ContentWrapper = styled.div`
  {
    display: flex;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  html, body, *{
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }
`;

const IndexPage = () => (
  <ContentWrapper>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <MyselfLanding />
    <RenlyLanding />
  </ContentWrapper>
)

export default IndexPage
