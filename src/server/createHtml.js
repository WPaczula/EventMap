import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import App from '../app'
import withTemplate from './withTemplate'

const createHtml = () => {
  const sheet = new ServerStyleSheet()

  const AppWrapper = (
    <StyleSheetManager sheet={sheet.instance}>
      <App />
    </StyleSheetManager>
  )

  const html = renderToString(AppWrapper)
  const styles = sheet.getStyleTags()

  return withTemplate(html, styles)
}

export default createHtml
