import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { MapContainer } from './style'

class MapController extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    loading: PropTypes.bool,
    position: PropTypes.objectOf(PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    })),
  }

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
    const { position } = this.props

    if (prevProps.position
      && (position.lat !== prevProps.position.lat
      || position.lng !== prevProps.position.lng)) {
      this.loadMap()
    }
  }

  loadMap = () => {
    const { loading } = this.props

    if (typeof window !== 'undefined' && !loading) {
      const MapComponent = require('./component').default
      const { onChange, position } = this.props

      this.setState({
        renderMap: () => <MapComponent onChange={onChange} position={position} />,
      })
    }
  }

  render() {
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
        <MapContainer id="map">
          {renderMap()}
        </MapContainer>
      </>
    )
  }
}

export default MapController
