import React from 'react'
import { Helmet } from 'react-helmet'
import GlobalStyle from './style'
import Header from './blocks/header'
import Footer from './blocks/footer'
import Page from './blocks/page'

const defaultTitle = 'EventMap'

const App = () => (
  <Page>
    <GlobalStyle />
    <Helmet titleTemplate={`%s - ${defaultTitle}`} defaultTitle={defaultTitle} />
    <Header />
    <Page.Content>
    </Page.Content>
    <Footer />
  </Page>
)

export default App
