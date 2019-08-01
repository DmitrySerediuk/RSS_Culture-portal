import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Map } from 'yandex-map-react';

import MapMarker from './MapMarker'

const useStyles = makeStyles(theme => ({
    mapTitle: {
        width: '100%',
        textAlign: 'center',
        padding: theme.spacing(3, 2),
        backgroundColor: 'white',
        color: 'black',
        position: 'absolute',
        // right: 0
    },
    mapContainer: {
        width: '90%',
        maxWidth: 1000,
        margin: 'auto',
        position: 'relative'
    },
    title: {
        width: 'fit-content',
        padding: theme.spacing(3, 2),
        margin: '0 auto 20px'
    },
    // tooltip: {
    //     position: 'relative',
    //     width: 100,
    //     height: 20%,
    // }
}));

export default function MapComponent() {
    const classes = useStyles();
    const [state, setState] = useState({
        marker: {
            lat: 53.89833,
            lon: 27.56056,
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/%D0%A5%D1%83%D0%B4_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9_%D0%A0%D0%91.jpg/250px-%D0%A5%D1%83%D0%B4_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9_%D0%A0%D0%91.jpg',
            title: 'Национальный Художественный музей',
            toolTip: {
                balloonContentHeader: 'Национальный Художественный музей',
                balloonContentBody: 'Адрес: улица Ленина 20',
                balloonContentFooter: 'Минск, Беларусь'
            }
        },
        center: [53.89833, 27.56056],
    })

    const { marker } = state;

    return (
        <Box>
            <Box>
                <Paper className={classes.title}>
                    <Typography variant="h5" component="h3">
                        {marker.title}
                    </Typography>
                </Paper>
            </Box>
            <Box className={classes.mapContainer}>
                <Map
                    className={classes.map}
                    width={'100%'}
                    height={300}
                    center={state.center}
                    zoom={14}>
                    <MapMarker marker={marker} />
                </Map>
            </Box>
        </Box>

    );
}