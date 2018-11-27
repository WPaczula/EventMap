import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  CategoryPageContainer,
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
    history: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      visibleId: null,
    }
  }

  componentDidMount() {
    const { events, loadCategoryEvents, categoryId } = this.props

    if (!events) {
      loadCategoryEvents(categoryId)
    }
  }

  componentDidUpdate() {
    const { loadCategoryEvents, events, categoryId } = this.props

    if (!events) {
      loadCategoryEvents(categoryId)
    }
  }


  setVisible = (id) => {
    this.setState({ visibleId: id })
  }

  navigate = (id) => {
    const { history } = this.props

    history.push(`/events/${id}`)
  }

  render() {
    const { events } = this.props
    const { visibleId } = this.state

    return (
      <CategoryPageContainer>
        {
          events
            ? events.map(e => (
              <EventTile
                {...e}
                isVisible={visibleId === e.id}
                navigate={this.navigate}
                setVisible={this.setVisible}
              />
            ))
            : new Array(10).fill().map(e => <EventTile.Loading {...e} />)
        }
      </CategoryPageContainer>
    )
  }
}

export default CategoryPage
