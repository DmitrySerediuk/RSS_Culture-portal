import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';

import MapMarker from './MapMarker'

export default function MapComponent(){
    const [state,setState]=useState({
        markers:[
            {
                lat:53.89833,
                lon:27.56056,
                imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/%D0%A5%D1%83%D0%B4_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9_%D0%A0%D0%91.jpg/250px-%D0%A5%D1%83%D0%B4_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9_%D0%A0%D0%91.jpg'
            }
        ]
    })
    const {markers} = state;
    const markerList = markers.map((marker,index)=>{
        return <MapMarker marker={marker} key={index} />
    })
    const center = [markers[0].lat,markers[0].lon]
      return (
        <Map 
        style={{ height: '100vh', width: '100%' }}
        center={center} 
        zoom={14}>
            {markerList}
        </Map>
    );
}