import React from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';
import { withI18n } from '@lingui/react';

const useStyles = makeStyles({
    containerMain: {
        padding: '50px 0',
        textAlign: 'center'
    },
    title: {
        color: '#4A90E2',
        fontSize: '3em',
        fontWeight: 'bold',
        margin: 'auto',
        padding: '20px 0'
    },
    containerNested: {
        width: '70%',
        borderRadius: '10px',
        margin: '0 auto',
        boxShadow: '0px 0px 30px #000000',
        ['@media (max-width: 490px)']: {
            width: '85%'
        }
    }

});

const Gallery = ({ data, i18n }) => {
    const images = [];
    data.forEach(img => {
        images.push({
            original: img.file.url,
            thumbnail: img.file.url,
        });
    });

    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.containerMain}  id={'gallery'}>
            <Container className={classes.containerNested}>
                <Typography variant="h3" gutterBottom className={classes.title}>
                    {i18n.t`USER__YOUTUBE--GALLERY`}
                </Typography>
                <ImageGallery items={images} showBullets={true} />
            </Container>
        </Container>
    )
}
export default withI18n()(Gallery);