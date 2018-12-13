import React from 'react'
import Helmet from 'react-helmet'
import SEO from '../components/seo'
import styled from '@emotion/styled'
import MyselfLanding from '../components/MyselfLanding'
import RenlyLanding from '../components/RenlyLanding'

const ContentWrapper = styled.div`
  {
    display: flex;
    height: 100vh;
    width: 100vw;
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
  <>
    <Helmet
      meta={[
        { name: 'description', content: 'Sample' },
      ]}
    >
      <link href="https://fonts.googleapis.com/css?family=Dancing+Script:700|Merriweather:700i|Open+Sans:400,700" rel="stylesheet" />
      <html lang="en" />
    </Helmet>
    <ContentWrapper>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <MyselfLanding />
      <RenlyLanding />
    </ContentWrapper>
  </>
)

export default IndexPage
