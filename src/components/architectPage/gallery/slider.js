import React from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';


const useStyles = makeStyles({
    container: {
        padding: '50px 0',
        textAlign: 'center'
    },
    title: {
        color: '#2F9DFF',
        fontSize: '3em',
        fontWeight: 'bold', 
        margin: 'auto',
        padding: '20px 0'
    },
    containerTwo: {
        width: '70%',
        margin: '0 auto',
        boxShadow: '5px 8px 10px #000000'
    }
   
});

const Gallery = () => {
    const classes = useStyles();
    const images = [
            {
                original: 'https://cdn12.img.sputnik.by/images//103970/31/1039703179.jpg',
                thumbnail: 'https://cdn12.img.sputnik.by/images//103970/31/1039703179.jpg',
            },
            {
                original: 'https://img-fotki.yandex.ru/get/5504/101499463.aa/0_e2cce_fdf18de7_XL.jpg',
                thumbnail: 'https://img-fotki.yandex.ru/get/5504/101499463.aa/0_e2cce_fdf18de7_XL.jpg',
            },
            {
                original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjEkOrGJNVZbHw47eGU645I9gEgs4gaue32ui9MnYmtZ9BSjC',
                thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjEkOrGJNVZbHw47eGU645I9gEgs4gaue32ui9MnYmtZ9BSjC',
            },
            {
                original: 'https://minsktourism.by/wp-content/uploads/16-nats.hud.muzey-2.jpg',
                thumbnail: 'https://minsktourism.by/wp-content/uploads/16-nats.hud.muzey-2.jpg',
            },
            {
                original: 'https://www.kv.by/sites/default/files/pictures/mainimage/2016/08/1151226-201420-14x124316.jpg',
                thumbnail: 'https://www.kv.by/sites/default/files/pictures/mainimage/2016/08/1151226-201420-14x124316.jpg',
            },
        ]
       
        return (
            <Container maxWidth="md" className={classes.container}>
                <Container className={classes.containerTwo}>
                    <Typography variant="h3" gutterBottom className={classes.title}>
                        Gallery
                    </Typography>
                     <ImageGallery  items={images} showBullets={true} /> 
                </Container>      
            </Container>
        )
}
export default Gallery