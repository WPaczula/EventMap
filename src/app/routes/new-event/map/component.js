import {
  Map, Marker, TileLayer,
} from 'react-leaflet'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MapSearcher extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      position: [0, 0],
    }

    props.onChange({ lat: 0, lng: 0 })
  }

  componentDidMount() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { onChange } = this.props
        const lat = position.coords.latitude
        const lng = position.coords.longitude

        onChange({ lat, lng })
        this.setState({ position: [lat, lng] })
      })
    }
  }

  render() {
    const {
      position,
    } = this.state
    const { onChange } = this.props

    return (
      <Map
        ref={this.map}
        center={position}
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
