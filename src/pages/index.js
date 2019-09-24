import React from 'react'
import { Global, css } from '@emotion/core'
import SEO from '../components/seo'
import Landing from '../components/Landing'

const IndexPage = () => (
  <>
    <div>
      <Global
        styles={css`
          html,
          body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }
          * {
            margin: 0;
            padding: 0;
            font-family: 'Raleway', sans-serif;
            box-sizing: border-box;
          }
          @import url('https://fonts.googleapis.com/css?family=Bitter:700|Raleway:300,700,800,800i&display=swap');
        `}
      />
      <>
        <SEO
          title="Nathaniel Collins Portfolio"
          keywords={[
            'gatsby',
            'gatsby js',
            'portfolio',
            'javascript',
            'node',
            'css',
            'react',
            'full stack',
            'web developer',
            'front end',
            'software engineer',
            'nathaniel collins',
            'nathaniel collins leon',
            'nathancleon',
          ]}
        />
        <Landing />
      </>
    </div>
  </>
)

export default IndexPage
