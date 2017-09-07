import React from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;
const KEY = 'AIzaSyCs-Fh8l8K1IXdlcO7yBygraYfgES7VjHc';

const GoogleMapConfig = {
  key: KEY,
  libraries: 'places',
};

export default class geolocationPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      mapRegion: null,
      lastLat: null,
      lastLong: null,
    };
  }
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      };
      this.onRegionChange(region, region.latitude, region.longitude);
    });
  }
  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }

  _onClick(obj) {
    console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);
  }

  render() {
    return (
      <div className="geolocation-page">
        <GoogleMapReact
          onClick={this._onClick}
          bootstrapURLKeys={GoogleMapConfig}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom} >
          <AnyReactComponent
            lat={this.state.lastLat}
            lng={this.state.lastLong}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    )
  }
}