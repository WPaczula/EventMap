import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet'
import Helmet from 'react-helmet'
import { MapContainer } from '../style'
import './style.css'

class MapComponent extends Component {
  componentDidMount() {
    const { position, loading } = this.props

    if (!loading) {
      const MapContent = () => (
        <Map center={position} zoom={18}>
          <TileLayer
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>
        </Map>
      )

      render(<MapContent />, document.getElementById('map'))
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
        <MapContainer id="map" loading={loading} />
      </>
    )
  }
}

MapComponent.propTypes = {
  position: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ),
  loading: PropTypes.bool,
}

export default MapComponent
