import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { withRouter } from 'react-router-dom'
import Input from '../../blocks/form-input'
import Label from '../../blocks/label'
import DateTime from '../../blocks/date-time-picker'
import EventTile from '../../blocks/event-tile'
import Form from '../../blocks/form'
import {
  SearchPageLayout,
  SearchButton,
  EventsSection,
  Title,
  TitleContainer,
} from './style'

class SearchPage extends Component {
  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.object),
    searchEvents: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object),
    history: PropTypes.object,
  }

  constructor(props) {
    super(props)

    this.state = {
      startDate: null,
      endDate: null,
      city: '',
      category: null,
      maxPrice: '',
      visibleId: null,
    }
  }

  componentDidMount() {
    this.search()
  }

	navigate = () => {
	  const { visibleId } = this.state
	  const { history } = this.props

	  history.push(`/events/${visibleId}`)
	}

	setVisible = (id) => {
	  this.setState({ visibleId: id })
	}

	search = (reset = false) => {
	  const { searchEvents } = this.props

	  if (reset) {
	    searchEvents()
	    return
	  }

	  const {
	    startDate, endDate, city, category, maxPrice,
	  } = this.state

	  searchEvents(
	    startDate && startDate.getTime(),
	    endDate && endDate.getTime(),
	    city === '' ? null : city,
	    category && Number(category.value),
	    maxPrice !== '' && Number(maxPrice) === 0 ? true : null,
	    maxPrice === '' || Number(maxPrice) === 0 ? null : Number(maxPrice),
	  )
	}

	reset = () => {
	  this.setState({
	    startDate: null,
	    endDate: null,
	    city: '',
	    category: null,
	    maxPrice: '',
	    visibleId: null,
	  })

	  this.search(true)
	}

	render() {
	  const { events, categories } = this.props
	  const {
	    startDate, endDate, city, category, maxPrice, visibleId,
	  } = this.state

	  return (
  <SearchPageLayout>
    <TitleContainer>
      <Title>
							Find your event
      </Title>
    </TitleContainer>
    <Form>
      <Label>
						Category
        <Select
          value={category}
          onChange={c => this.setState({ category: c })}
          options={categories}
        />
      </Label>
      <Label>
						Start date
        <DateTime
          value={startDate}
          onChange={start => this.setState({ startDate: start })}
        />
      </Label>
      <Label>
						End date
        <DateTime
          value={endDate}
          onChange={end => this.setState({ endDate: end })}
        />
      </Label>
      <Label>
						City
        <Input value={city} onChange={e => this.setState({ city: e.target.value })} />
      </Label>
      <Label>
						Max price
        <Input value={maxPrice} onChange={e => this.setState({ maxPrice: e.target.value })} />
      </Label>
    </Form>
    <SearchButton onClick={() => this.search()}>
			Search
    </SearchButton>
    <SearchButton onClick={() => this.reset()}>
			Reset
    </SearchButton>
    <EventsSection>
      {
			events
			  ? events.map(e => (
  <EventTile
    key={e.id}
    navigate={this.navigate}
    setVisible={this.setVisible}
    isVisible={visibleId === e.id}
    {...e}
  />
						  ))
			  : new Array(10).fill().map((e, i) => <EventTile.Loading key={`loading-event-tile-${i}`} />)
		}
    </EventsSection>
  </SearchPageLayout>
	  )
	}
}

export default withRouter(SearchPage)
