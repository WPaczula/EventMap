import {
  Map, Marker, TileLayer, Popup,
} from 'react-leaflet'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from '../../../blocks/link'

class MapSearcher extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    events: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        longitude: PropTypes.number.isRequired,
        latitude: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
    loadEvents: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      position: [0, 0],
      radius: 100,
      zoom: 18,
      notSupported: false,
    }
  }

  componentDidMount() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { radius } = this.state
        const { loadEvents } = this.props
        const lat = position.coords.latitude
        const lng = position.coords.longitude

        this.setState({ position: [lat, lng] })
        loadEvents(lat, lng, radius)
      })
    } else {
      this.setState({ notSupported: true })
    }
  }

  updateMarkers = (lat, lng, radius) => {
    const { loadEvents } = this.props

    loadEvents(lat, lng, radius)
  }

  changeViewPort = (viewport) => {
    const { zoom, center } = viewport
    const { zoom: previousZoom, radius } = this.state

    const diff = previousZoom - zoom
    const newRadius = diff > 0
      ? radius * (2 ** diff)
      : radius / (2 ** -diff)

    this.setState({
      zoom,
      radius: newRadius,
      position: center,
    })
    this.updateMarkers(center[0], center[1], newRadius)
  }

  render() {
    const {
      position, notSupported, zoom,
    } = this.state
    const { events, loading } = this.props

    if (notSupported || loading) { return null }

    return (
      <Map
        ref={this.map}
        center={position}
        zoom={zoom}
        onViewportChanged={this.changeViewPort}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {
          events && events.map(e => (
            <Marker
              position={[
                e.latitude,
                e.longitude,
              ]}
            >
              <Popup>
                <Link to={`/event/${e.id}`}>e.name</Link>
              </Popup>
            </Marker>
          ))
        }
      </Map>
    )
  }
}

export default MapSearcher
