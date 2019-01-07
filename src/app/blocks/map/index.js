import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import Helmet from 'react-helmet'
import { MapContainer } from './style'

class MapController extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
  }

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
    const { loading } = this.props

    if (typeof window !== 'undefined' && !loading) {
      const MapComponent = require('./component').default
      const { onChange } = this.props

      setTimeout(() => render(<MapComponent onChange={onChange} />, document.getElementById('map')))
    }
  }

  render() {
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
        <MapContainer id="map" />
      </>
    )
  }
}

export default MapController
