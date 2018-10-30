import { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

class ScrollToTop extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props
    if (location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return null
  }
}

export default withRouter(ScrollToTop)
