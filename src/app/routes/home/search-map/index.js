import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { MapContainer } from '../../event/style'
import { fetchMapEvents } from '../../../data/event/actions'
import { selectMapEvents } from '../../../data/event/selectors'
import { MapTitle, MapTitleContainer } from './style'

class MapController extends Component {
  constructor(props) {
    super(props)

    this.state = {
      renderMap: () => null,
    }
  }

  componentDidMount() {
    this.loadMap()
  }

  componentDidUpdate(prevProps) {
    const { events } = this.props

    if (prevProps.events && prevProps.events !== events) {
      this.loadMap()
    }
  }

  loadMap = () => {
    if (typeof window !== 'undefined') {
      const MapComponent = require('./component').default
      const { events, loadEvents } = this.props

      this.setState({
        renderMap: () => <MapComponent loadEvents={loadEvents} events={events} />,
      })
    }
  }

  render() {
    const { loading } = this.props
    const { renderMap } = this.state

    return (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"
            integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
            crossOrigin=""
          />
        </Helmet>
        <style>
          {
            `.leaflet-container {
            height: 100%;
            width: 100%;
            z-index: 0;            
            }`
            }
        </style>
        <MapTitleContainer>
          <MapTitle>Events nearby</MapTitle>
        </MapTitleContainer>
        <MapContainer id="map" loading={loading}>
          {renderMap()}
        </MapContainer>
      </>
    )
  }
}

MapController.propTypes = {
  loading: PropTypes.bool,
  loadEvents: PropTypes.func.isRequired,
  events: PropTypes.array,
}

const mapStateToProps = createSelector(
  selectMapEvents,
  events => ({ events }),
)

const mapDispatchToProps = dispatch => bindActionCreators({
  loadEvents: fetchMapEvents,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MapController)
