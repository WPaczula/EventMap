import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import EventTile from '../../blocks/event-tile'
import {
  UserPageLayout,
  UserName,
  EventsSection,
  EventsTitle,
  DeleteButton,
} from './style'
import MessagePopup from '../../blocks/message-popup'
import Scroller from '../../blocks/scroller'
import OfflinePage from '../../../static/error-message'

class UserPage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    userData: PropTypes.object,
    loadUsersData: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    isOwnPage: PropTypes.bool,
    deleteAccount: PropTypes.func.isRequired,
    isAccountDeleted: PropTypes.bool,
    didAccountDeletionFail: PropTypes.bool,
  }

  constructor(props) {
    super(props)

    this.state = {
      createdVisibleId: null,
      upcomingVisibleId: null,
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

  navigateUpcoming = () => {
    const { upcomingVisibleId } = this.state
    const { history } = this.props

    history.push(`/events/${upcomingVisibleId}`)
  }

  navigateCreated = () => {
    const { createdVisibleId } = this.state
    const { history } = this.props

    history.push(`/events/${createdVisibleId}`)
  }

  setVisibleCreated = (id) => {
    this.setState({ createdVisibleId: id })
  }

  setVisibleUpcoming = (id) => {
    this.setState({ upcomingVisibleId: id })
  }

  handleDelete = () => {
    const { deleteAccount } = this.props

    deleteAccount()
  }

  render() {
    const {
      userData,
      isOwnPage,
      isAccountDeleted,
      didAccountDeletionFail,
      clearAccountDeletionFailed,
    } = this.props
    const { upcomingVisibleId, createdVisibleId } = this.state

    if (userData && userData.offline) {
      return <OfflinePage />
    }

    if (userData && userData.error) {
      return (
        <UserPageLayout>
          <UserName>
            {`${userData.error.message} 🙈`}
          </UserName>
        </UserPageLayout>
      )
    }

    return userData ? (
      <UserPageLayout>
        <UserName>
          { userData.nickname }
          {isOwnPage && <DeleteButton onClick={this.handleDelete}>Delete account</DeleteButton>}
        </UserName>
        {
          userData && userData.upcomingEvents && (
            <>
              <EventsTitle>
                {'Upcomming events'}
              </EventsTitle>
              <Scroller>
                <EventsSection>
                  {
                userData.upcomingEvents.map(e => (
                  <EventTile
                    {...e}
                    key={e.id}
                    isVisible={upcomingVisibleId === e.id}
                    navigate={this.navigateUpcoming}
                    setVisible={this.setVisibleUpcoming}
                  />
                ))
                }
                </EventsSection>
              </Scroller>
          </>
          )
        }
        {
          userData && userData.createdEvents
          && (<>
            <EventsTitle>
              {'Created events'}
            </EventsTitle>
            <Scroller>
              <EventsSection>
                {
               userData.createdEvents.map(e => (
                 <EventTile
                   {...e}
                   key={e.id}
                   isVisible={createdVisibleId === e.id}
                   navigate={this.navigateCreated}
                   setVisible={this.setVisibleCreated}
                 />
               ))
            }
              </EventsSection>
            </Scroller>
          </>
          )
      }
        { isAccountDeleted && <Redirect to="/" />}
        { didAccountDeletionFail && (
        <MessagePopup error unMount={clearAccountDeletionFailed}>
          Error during deleting the account
        </MessagePopup>
        )}
      </UserPageLayout>
    ) : (
      <UserPageLayout>
        <UserName loading />
        <EventsTitle>
          {'Upcomming events'}
        </EventsTitle>
        <EventsSection>
          {
            new Array(5).fill().map((e, i) => <EventTile.Loading key={`loading-upcomming-tile${i}`} />)
          }
        </EventsSection>
        <EventsTitle>
          {'Created events'}
        </EventsTitle>
        <EventsSection>
          {
            new Array(5).fill().map((e, i) => <EventTile.Loading key={`loading-created-tile${i}`} />)
          }
        </EventsSection>
        { isAccountDeleted && <Redirect to="/" />}
      </UserPageLayout>
    )
  }
}

export default UserPage
