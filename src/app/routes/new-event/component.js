import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { Redirect as RouterRedirect } from 'react-router'
import Input from '../../blocks/input'
import Label from '../../blocks/label'
import Form from '../../blocks/form'
import DateTimePicker from '../../blocks/date-time-picker'
import Map from '../../blocks/map'
import MessagePopup from '../../blocks/message-popup'
import {
  CreateEventLayout,
  Title,
  TitleContainer,
  SubmitButton,
} from './style'

export default class CreateEvent extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })),
    createNewEvent: PropTypes.func.isRequired,
    id: PropTypes.string,
    clearNewEvent: PropTypes.func.isRequired,
    didNewEventFail: PropTypes.bool,
  }

  state = {
    name: '',
    description: '',
    latitude: null,
    longitude: null,
    startDate: new Date(),
    endDate: new Date(),
    externalUrl: '',
    category: null,
    cost: 0,
    photoUrl: '',
    hasError: false,
    Redirect: () => null,
  }

  componentDidMount() {
    const { clearNewEvent } = this.props

    clearNewEvent()
  }

  /* eslint-disable */
  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props

    if (!prevProps.id && typeof id === 'string') {
      this.setState({ Redirect: () => <RouterRedirect to={`/events/${id}`} /> })
    }
  }
  /* eslint-enable */

  changeCategory = (category) => {
    this.setState({ category })
  }

  changeInstantValue = name => (value) => {
    this.setState({ [name]: value })
  }

  changeValue = name => (e) => {
    this.setState({
      [name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    const {
      name,
      description,
      latitude,
      longitude,
      startDate,
      endDate,
      externalUrl,
      category,
      cost,
      photoUrl,
    } = this.state
    const { createNewEvent } = this.props

    e.preventDefault()

    if (
      !name
      || !description
      || !latitude
      || !longitude
      || !startDate
      || !endDate
      || !externalUrl
      || !category
      || typeof cost === 'undefined'
      || !photoUrl
    ) {
      this.setState({ hasError: true })
      return
    }

    createNewEvent(
      name,
      description,
      startDate.getTime(),
      endDate.getTime(),
      latitude,
      longitude,
      externalUrl,
      Number(cost),
      photoUrl,
      Number(category.value),
    )
  }

  render() {
    const {
      name,
      description,
      startDate,
      endDate,
      externalUrl,
      category,
      cost,
      photoUrl,
      hasError,
      Redirect,
    } = this.state
    const { categories, didNewEventFail, clearNewEvent } = this.props

    return (
      <CreateEventLayout>
        <TitleContainer>
          <Title>
            Create your event
          </Title>
        </TitleContainer>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            Name
            <Input type="text" value={name} onChange={this.changeValue('name')} />
          </Label>

          <Label>
            Description
            <Input type="text" value={description} onChange={this.changeValue('description')} />
          </Label>

          <Label>
            Start date
            <DateTimePicker value={startDate} onChange={this.changeInstantValue('startDate')} />
          </Label>

          <Label>
            End date
            <DateTimePicker value={endDate} onChange={this.changeInstantValue('endDate')} />
          </Label>

          <Label>
            Place
            <Map onChange={({ lat, lng }) => {
              this.changeInstantValue('latitude')(lat)
              this.changeInstantValue('longitude')(lng)
            }}
            />
          </Label>

          <Label>
            External url
            <Input type="text" value={externalUrl} onChange={this.changeValue('externalUrl')} />
          </Label>

          <Label>
            Cost
            <Input type="number" value={cost} onChange={this.changeValue('cost')} />
          </Label>

          <Label>
            Photo url
            <Input type="text" value={photoUrl} onChange={this.changeValue('photoUrl')} />
          </Label>

          <Label>
            Category
            <Select
              value={category}
              onChange={this.changeCategory}
              options={categories}
            />
          </Label>
          <SubmitButton type="submit">
            Submit
          </SubmitButton>
        </Form>
        { (hasError || didNewEventFail)
        && (
        <MessagePopup
          error
          unMount={() => {
            this.setState({ hasError: false })
            clearNewEvent()
          }}
        >
          {didNewEventFail ? 'Can\'t create new event' : 'You need to fill all fields'}
        </MessagePopup>
        )}
        {!hasError && !didNewEventFail && <Redirect />}
      </CreateEventLayout>
    )
  }
}
