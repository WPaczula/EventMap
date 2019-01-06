import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
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

    this.map = React.createRef()
  }

  componentWillMount() {
    this.loadMap()
  }

  componentDidUpdate() {
    this.loadMap()
  }

  loadMap = () => {
    if (typeof window !== 'undefined') {
      const MapComponent = require('./component').default
      const { events, loadEvents } = this.props

      setTimeout(() => render(<MapComponent loadEvents={loadEvents} events={events} />, document.getElementById('map')))
    }
  }

  render() {
    const { loading } = this.props

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
        <MapContainer id="map" loading={loading} />
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
