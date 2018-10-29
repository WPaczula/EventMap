import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import App from '../app'
import withTemplate from './withTemplate'

const createHtml = () => {
  const sheet = new ServerStyleSheet()

  const html = renderToString(sheet.collectStyles(App))
  const styles = sheet.getStyleTags()

  return withTemplate(html, styles)
}

export default createHtml
