import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router'
import PropTypes from 'prop-types'
import GlobalStyle from './style'
import Header from './blocks/header'
import Footer from './blocks/footer'
import Page from './blocks/page'
import ScrollToTop from './blocks/scroll-to-top'

const defaultTitle = 'EventMap'

const App = ({ routes }) => (
  <Page>
    <GlobalStyle />
    <ScrollToTop />
    <Helmet titleTemplate={`%s - ${defaultTitle}`} defaultTitle={defaultTitle} />
    <Header routes={routes} />
    <Page.Content>
      <Switch>
        {routes.map(r => <Route {...r} />)}
      </Switch>
    </Page.Content>
    <Footer />
  </Page>
)

App.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
  })),
}

export default App
