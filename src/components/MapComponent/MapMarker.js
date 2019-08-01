import React from "react";
import { Marker, MarkerLayout } from 'yandex-map-react';

export default function MapMarker(props) {
    const { lat, lon, imgUrl } = props.marker;
    const imgStyle = {
        width: 30,
        height: 30,
        backgroundImage:`url(${imgUrl})`,
        backgroundSize:'cover',
        border:'blue solid 2px',
        borderRadius: '50%',
        overflow: 'hidden'
    }
    return (<div>
        <Marker lat={lat} lon={lon}>
            <MarkerLayout>
            <div style={imgStyle}>
                </div>
            </MarkerLayout>
        </Marker>
    </div>
    )
}