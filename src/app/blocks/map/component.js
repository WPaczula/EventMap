import {
  Map, Marker, TileLayer,
} from 'react-leaflet'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MapSearcher extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    position: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
  }

  constructor(props) {
    super(props)

    this.state = {
      position: null,
    }
  }


  componentDidMount() {
    const { position } = this.props

    if (position) {
      return
    }

    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((p) => {
        const { onChange } = this.props
        const lat = p.coords.latitude
        const lng = p.coords.longitude

        onChange({ lat, lng })
        this.setState({ position: [lat, lng] })
      })
    }
  }

  /* eslint-disable */
  componentDidUpdate(prevProps) {
    const { position } = this.props
    const { position: prevPosition } = prevProps

    if(
      (prevPosition && !prevPosition.lat && !prevPosition.lng) 
      && (position && position.lat && position.lng)) {
      this.setState({ position: [position.lat, position.lng] })
    }
  }
  /* eslint-enable */

  render() {
    const {
      position,
    } = this.state
    const { onChange } = this.props

    return (
      <Map
        ref={this.map}
        center={position || [50.2945, 18.6714]}
        zoom={18}
        onclick={(e) => {
          this.setState({ position: e.latlng })
          onChange(e.latlng)
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {
          position
            && (
            <Marker
              position={position}
            />
            )
        }
      </Map>
    )
  }
}

export default MapSearcher
