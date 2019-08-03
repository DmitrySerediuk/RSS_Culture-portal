import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import { Link } from '@wapps/gatsby-plugin-lingui';
import Architect from './architect/architect';
import TimeLine from './timeline/timeline';
import Works from './works/works';
import Video from './video/videoContainer';
import Gallery from './gallery/slider';
import Map from './map';
import Navigation from './pageNavigation/NavigationComponent';
import { withI18n } from '@lingui/react';

const Content = (props) => {
    const { photo, name, birthDate, description, works, video, timeline, map, gallery } = props.data;
    const { i18n } = props;

    return (
            <Navigation />
            <Architect
                src={photo.file.url}
                initials={name}
                yearsOfLife={birthDate}
                desc={description}
            />
            <TimeLine timeline={JSON.parse(timeline.timeline)} />
            <Works works={JSON.parse(works.works)} />
            <Video url={video} />
            <Gallery data = {gallery}/>
            <Map data={JSON.parse(map.map)}/>
            <Button variant="contained" color="default" style={{ margin: '30px auto', display: 'block' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#222222' }}>
                    {i18n.t`USER__BUTTON--GO-HOME`}
                </Link>
            </Button>
        </Fragment>
    )
}
export default withI18n()(Content);