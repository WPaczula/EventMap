import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  CategoryPageContainer,
  Event,
} from './style'
import EventTile from '../../blocks/event-tile'

class CategoryPage extends Component {
  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired, // TODO change to eventId
        title: PropTypes.string.isRequired,
        ownerId: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        photoUrl: PropTypes.string.isRequired,
        ownerName: PropTypes.string.isRequired,
      }),
    ),
    loadCategoryEvents: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    const { events, loadCategoryEvents, categoryId } = this.props

    if (!events) {
      loadCategoryEvents(categoryId)
    }
  }

  render() {
    const { events } = this.props

    return (
      <CategoryPageContainer>
        {
          events
            ? events.map(e => <EventTile {...e} />)
            : new Array(10).fill().map(e => <EventTile.Loading {...e} />)
        }
      </CategoryPageContainer>
    )
  }
}

export default CategoryPage
