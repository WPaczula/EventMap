import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EventTile from '../../blocks/event-tile'
import {
  UserPageLayout,
  UserName,
  EventsSection,
  EventsTitle,
} from './style'

class UserPage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    userData: PropTypes.object,
    loadUsersData: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      visibleId: null,
    }
  }

  componentDidMount() {
    const {
      id,
      userData,
      loadUsersData,
    } = this.props

    if (!userData) {
      loadUsersData(id)
    }
  }

  navigate = () => {
    const { visibleId } = this.state
    const { history } = this.props

    history.push(`/event/${visibleId}`)
  }

  setVisible = (id) => {
    this.setState({ visibleId: id })
  }

  render() {
    const { userData } = this.props
    const { visibleId } = this.state

    return userData ? (
      <UserPageLayout>
        <UserName>
          { userData.nickname }
        </UserName>
        {
          userData && userData.upcommingEvents && (
            <>
              <EventsTitle>
                {'Upcomming events'}
              </EventsTitle>
              <EventsSection>
                {
                userData.upcommingEvents.map(e => (
                  <EventTile
                    {...e}
                    key={e.id}
                    isVisible={visibleId === e.id}
                    navigate={this.navigate}
                    setVisible={this.setVisible}
                  />
                ))
                }
              </EventsSection>
          </>
          )
        }
        {
          userData && userData.createdEvents
          && (<>
            <EventsTitle>
              {'Created events'}
            </EventsTitle>
            <EventsSection>
              {
               userData.createdEvents.map(e => (
                 <EventTile
                   {...e}
                   key={e.id}
                   isVisible={visibleId === e.id}
                   navigate={this.navigate}
                   setVisible={this.setVisible}
                 />
               ))
            }
            </EventsSection>
          </>
          )
      }
      </UserPageLayout>
    ) : (
      <UserPageLayout>
        <UserName loading />
        <EventsTitle>
          {'Upcomming events'}
        </EventsTitle>
        <EventsSection>
          {
            new Array(5).fill().map(() => <EventTile.Loading />)
          }
        </EventsSection>
        <EventsTitle>
          {'Created events'}
        </EventsTitle>
        <EventsSection>
          {
            new Array(5).fill().map(() => <EventTile.Loading />)
          }
        </EventsSection>
      </UserPageLayout>
    )
  }
}

export default UserPage
