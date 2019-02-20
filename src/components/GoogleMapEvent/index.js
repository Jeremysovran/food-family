import React from 'react';
import GoogleMapReact from 'google-map-react';
import './style.scss';

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

const GoogleMapEvent = ({ cookingWorkshops }) => (

  //  cookingWorkshop ?
  <span className="googleMap">
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAI_oYKuyqtTQ0msVU23_WiFj-YM_xCC3A' }}
      defaultCenter={{
        lat: 0,
        lng: 0,
      }
      }
      center={{
        lat: typeof cookingWorkshops[0] !== 'undefined' ? cookingWorkshops[0].latitude : '',
        lng: typeof cookingWorkshops[0] !== 'undefined' ? cookingWorkshops[0].longitude : '' ,
      }
          }
      defaultZoom={13}
    >
      {cookingWorkshops.map(item => (
        <AnyReactComponent
          key={item.id}
          lat={item.latitude}
          lng={item.longitude}
          text={item.id}
        />
      ))}
    </GoogleMapReact>
  </span>
// : false
);


export default GoogleMapEvent;
