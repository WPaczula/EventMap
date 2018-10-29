import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../app'
import routes from '../app/routes'

const AppWrapper = () => (
  <Router>
    <App routes={routes} />
  </Router>
)

render(<AppWrapper />, document.getElementById('root'))
