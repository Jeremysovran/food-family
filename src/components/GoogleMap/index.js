import React from 'react';
import GoogleMapReact from 'google-map-react';
import './style.scss';

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

class GoogleMap extends React.Component {


  
  
  render() {
    const {longitude, latitude} = this.props;
    
    console.log('test',longitude);

    return(
      longitude && latitude ?
      <span className="googleMap">
<GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAI_oYKuyqtTQ0msVU23_WiFj-YM_xCC3A' }}
          defaultCenter={{
           lat: 0,
           lng: 0,
          }
          }
		  center={{
           lat: latitude,
           lng: longitude,
          }
          }
          defaultZoom={11}
        >

          <AnyReactComponent
            lat={latitude}
            lng={longitude}
            text="1"
          />
        </GoogleMapReact>
        </span>
: false
    );
  }
}


export default GoogleMap;

