import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';


export default function MapComponent(){
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
      return (
        <Map style={{ height: '100vh', width: '100%' }}center={[55.754734, 37.583314]} zoom={10}>
            <Marker lat={55.754734} lon={37.583314} />
        </Map>
    );
    // return(
    //     <div style={{ height: '100vh', width: '100%' }}>
    //     <GoogleMapReact
    //       bootstrapURLKeys={{ key:'AIzaSyBAw16oVHPCI33-zwVfhySzWVPk3YXO2Vg' }}
    //       defaultCenter={defaultProps.center}
    //       defaultZoom={defaultProps.zoom}
    //     >
    //     </GoogleMapReact>
    //     </div>
    // )
}