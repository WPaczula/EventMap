import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import DateTimePicker from 'react-datetime-picker'
import Select from 'react-select'
import { Redirect as RouterRedirect } from 'react-router'
import Map from './map'
import { secondaryColor } from '../../style/colors'
import Button from '../../blocks/button'
import MessagePopup from '../../blocks/message-popup'

const CreateEventLayout = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  position: absolute;
  top: 0;
  width: 100vw;
  background-color: ${secondaryColor};
  color: white;
  font-size: 2rem;
  left: -50vw;
  margin-left: 50%;
  padding: 1.5rem;
`

const TitleContainer = styled.div`
  position: relative;
  height: 3rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`

const Label = styled.label`
  display: block;
  width: 100vw;
  margin-bottom: 0.5rem;
  padding: 0 2rem;

  & > div {
    display: block !important;
  }

  & > div >.react-datetime-picker__wrapper {
    border-radius: 4px;
    border-color: hsl(0,0%,80%);
  }
`

const Input = styled.input`
  margin-top: 0.25rem;
  display: block;
  height: 2rem;
  width: 100%;
  border: thin solid hsl(0,0%,80%);  
  border-radius: 4px;
  padding-left: 0.5rem;
`

const SubmitButton = styled(Button)`
  margin: 2rem auto;
  width: 13rem;
`

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
            Start date
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
