import {
  Map, Marker, TileLayer,
} from 'react-leaflet'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MapSearcher extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    position: PropTypes.objectOf(PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    })),
  }

  constructor(props) {
    super(props)

    const lat = (props.position && props.position.lat) || 0
    const lng = (props.position && props.position.lng) || 0

    this.state = {
      position: [lat, lng],
    }

    props.onChange({ lat, lng })
  }


  componentDidMount() {
    const { position: propsPosition } = this.props

    if (propsPosition) {
      return
    }

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

  /* eslint-disable */
  componentDidUpdate(prevProps) {
    const { position } = this.props

    if(!prevProps.position && position) {
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
