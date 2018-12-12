import React from 'react'
import img from '../images/renly-color.png'
import SEO from '../components/seo'
import styled from '@emotion/styled'
import Landing1 from '../components/Landing1'

const ContentWrapper = styled.div`
  {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: blue;
  }
  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }
`;

const IndexPage = () => (
  <ContentWrapper>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Landing1 />
  </ContentWrapper>
)

export default IndexPage
