import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../app'
import createStore from '../app/data/store'
import withTemplate from './withTemplate'
import routes from '../app/routes'
import { isProd } from '../../config'

const createHtml = (url) => {
  const sheet = new ServerStyleSheet()
  const store = createStore({ isSSR: true })

  const AppWrapper = (
    <Provider store={store}>
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={url} context={{}}>
          <App routes={routes} />
        </StaticRouter>
      </StyleSheetManager>
    </Provider>
  )

  const html = renderToString(AppWrapper)
  const styles = sheet.getStyleTags()
  const state = store.getState()

  return withTemplate(html, styles, state, isProd)
}

export default createHtml
