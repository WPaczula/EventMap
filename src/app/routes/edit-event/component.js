import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { Redirect } from 'react-router'
import { isNullOrUndefined } from 'util'
import DateTimePicker from '../../blocks/date-time-picker'
import Label from '../../blocks/label'
import Input from '../../blocks/form-input'
import Checkbox from '../../blocks/checkbox'
import Form from '../../blocks/form'
import Map from '../../blocks/map'
import MessagePopup from '../../blocks/message-popup'
import TagsInput from '../../blocks/tags-input'
import {
  EditEventLayout,
  Title,
  TitleContainer,
  SubmitButton,
} from './style'

export default class EditEvent extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })),
    updateEvent: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    clearUpdateEventFlag: PropTypes.func.isRequired,
    didUpdateFail: PropTypes.bool,
    successfulyEdited: PropTypes.bool,
    loadEvent: PropTypes.func.isRequired,
    updateLoadedEvent: PropTypes.func.isRequired,
    event: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      startDate: PropTypes.number.isRequired,
      endDate: PropTypes.number.isRequired,
      externalUrl: PropTypes.string.isRequired,
      categoryId: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
      photoUrl: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      showGuestList: PropTypes.bool.isRequired,
    }),
  }

  state = {
    title: '',
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
    tags: [],
    showGuestList: false,
  }

  componentDidMount() {
    const {
      clearUpdateEventFlag, event, categories, loadEvent, id,
    } = this.props

    if (!event) {
      loadEvent(id)
    } else {
      this.setState({
        ...event,
        startDate: new Date(event.startDate),
        endDate: new Date(event.endDate),
        category: categories.find(c => c.value === event.categoryId),
      })
      clearUpdateEventFlag()
    }
  }

  /* eslint-disable */
  componentDidUpdate(prevProps, prevState) {
    const { id, event, categories, clearUpdateEventFlag, updateLoadedEvent, successfulyEdited } = this.props

    if (!prevProps.event && !isNullOrUndefined(event)) {
      this.setState({
        ...event,
        tags: event.tags.asMutable(),
        startDate: new Date(event.startDate),
        endDate: new Date(event.endDate),
        category: categories.find(c => c.value === event.categoryId),
      })
      clearUpdateEventFlag()
    } else if(successfulyEdited) {
      const {
        title,
        description,
        latitude,
        longitude,
        startDate,
        endDate,
        externalUrl,
        category,
        cost,
        photoUrl,
        tags,
        showGuestList,
      } = this.state
      const { id, eventLoaded } = this.props
      
      clearUpdateEventFlag()
      
      const event = {
        id,
        title,
        description,
        latitude: Number(latitude),
        longitude: Number(longitude),
        startDate: startDate.getTime(),
        endDate: endDate.getTime(),
        externalUrl,
        categoryId: category.value,
        cost: Number(cost),
        photoUrl,
        tags,
        showGuestList,
      }
      updateLoadedEvent(id, event)
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
      title,
      description,
      latitude,
      longitude,
      startDate,
      endDate,
      externalUrl,
      category,
      cost,
      photoUrl,
      tags,
      showGuestList,
    } = this.state
    const { updateEvent, id } = this.props

    e.preventDefault()

    if (
      !title
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

    updateEvent(
      id,
      title,
      description,
      startDate.getTime(),
      endDate.getTime(),
      latitude,
      longitude,
      externalUrl,
      Number(cost),
      photoUrl,
      Number(category.value),
      tags,
      showGuestList,
    )
  }

  render() {
    const {
      title,
      description,
      startDate,
      endDate,
      latitude,
      longitude,
      externalUrl,
      category,
      cost,
      photoUrl,
      tags,
      hasError,
      showGuestList,
    } = this.state
    const {
      event,
      id,
      categories,
      didUpdateFail,
      clearUpdateEventFlag,
      successfulyEdited,
    } = this.props

    const position = { lat: latitude, lng: longitude }

    return event ? (
      <EditEventLayout>
        <TitleContainer>
          <Title>
            Edit your event
          </Title>
        </TitleContainer>
        <Form onSubmit={(e) => { e.preventDefault() }}>
          <Label>
            Name
            <Input type="text" value={title} onChange={this.changeValue('title')} />
          </Label>

          <Label>
            Description
            <Input type="text" value={description} onChange={this.changeValue('description')} />
          </Label>

          <Label>
            Show participants
            <Checkbox type="checkbox" checked={showGuestList} onChange={this.changeInstantValue('showGuestList')} />
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
            <Map
              position={position}
              onChange={({ lat, lng }) => {
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

          <Label>
              Tags
            <TagsInput tags={tags} onChange={(newTags) => { this.setState({ tags: newTags }) }} />
          </Label>

          <SubmitButton type="submit" onClick={this.handleSubmit}>
            Submit
          </SubmitButton>
        </Form>
        { (hasError || didUpdateFail)
        && (
        <MessagePopup
          error
          unMount={() => {
            this.setState({ hasError: false })
            clearUpdateEventFlag()
          }}
        >
          {didUpdateFail ? 'Can\'t update event' : 'You need to fill all fields'}
        </MessagePopup>
        )}
        {successfulyEdited && <Redirect to={`/events/${id}`} />}
      </EditEventLayout>
    ) : (
      <EditEventLayout>
        <TitleContainer>
          <Title>
            {'  '}
          </Title>
        </TitleContainer>
        <Form>
          <Label loading />
          <Label loading />
          <Label loading />
          <Label loading />
          <Label>
            <Map loading />
          </Label>
          <Label loading />
          <Label loading />
          <Label loading />
          <Label loading />
          <SubmitButton />
        </Form>
      </EditEventLayout>
    )
  }
}
