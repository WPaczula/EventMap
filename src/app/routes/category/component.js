import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CategoryPage extends Component {
  static propTypes = {
    events: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        ownerId: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        photoUrl: PropTypes.string.isRequired,
      }),
    ),
  }

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { events } = this.props
    console.log(events)

    return <div>CategoryPage</div>
  }
}

export default CategoryPage
