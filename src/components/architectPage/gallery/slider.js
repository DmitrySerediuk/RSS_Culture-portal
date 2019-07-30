import React from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import '../gallery/style.css';


export default class Gallery extends React.Component {

    render() {

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

  
        const style = {
            conteinerOne: {
            width: '65%',
            height: '50%',
            margin: '10% auto',
            boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
            background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.77) 61%, rgba(244,251,254,0.75) 65%, rgba(143,218,250,0.75) 100%)',
        },
        conteinerTwo: {
            width: '70%',
            height: '50%',
        }
        }

        //    const image = document.querySelector('.image-gallery-slide img');
        //    image.style.height = '100px';
        // [].map.call(image, (img) =>{
        //     img.style.height = '100px';
        // });

       
        return (
            <Container style={style.conteinerOne}>
                <Container style={style.conteinerTwo}>
                   <Typography variant="h3" align='center' gutterBottom>
                    Галерея
                </Typography>
                <ImageGallery  items={images} showBullets={true} /> 
                </Container>
                
            </Container>

        )
    }

}