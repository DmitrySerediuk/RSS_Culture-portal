import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';

export default function MapComponent(){
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    return(
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyBAw16oVHPCI33-zwVfhySzWVPk3YXO2Vg' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
        </GoogleMapReact>
        </div>
    )
}