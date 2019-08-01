import React from 'react';
import { Link } from '@wapps/gatsby-plugin-lingui';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { withI18n } from '@lingui/react';
import { useStaticQuery, graphql } from 'gatsby';

import dataFilter from '../../dataFilter';

import './authorOfTheDay.css';


const authorOfTheDay = ({ i18n }) => {

    const linkStyle = {
        textDecoration: 'none',
        color: '#222222',
    };

    const query = graphql`
       query {
           allContentfulArchitects {
                nodes {
                  birthDate
                  birthPlace
                  description
                  lang
                  name
                  path
                  timeline {
                    timeline
                  }
                  mapData {
                    map
                  }
                  video
                  tmp {
                    file {
                      url
                    }
                  }
                }
              }
            }
        `;
    const architectDataFull = useStaticQuery(query);
    const architectDataFiltered = new dataFilter(architectDataFull.allContentfulArchitects.nodes)
        .filterByLang({ lang: i18n._language })
        .unique('name')
        .randomData('name');

    console.log(architectDataFiltered);


    return (
        <Container>
            <div className="authorOfTheDay">
                <Typography variant="h5" className="authorOfTheDay-title">
                    {i18n.t`MAIN__AUTOR-OF-THE-DAY--TITLE`}
                </Typography>
                <div className="authorOfTheDay-block">
                    <Typography variant="h6" className='authorOfTheDay-initials'>
                        {architectDataFiltered.name}
                    </Typography>
                    <Typography variant="body1" className='authorOfTheDay-years'>
                        {architectDataFiltered.birthDate}
                    </Typography>
                    <Typography variant="body2" className="authorOfTheDay-desc">
                        {architectDataFiltered.description}
                    </Typography>
                    <Typography variant="body2" className="authorOfTheDay-btn">
                        <Button variant="contained" color="default">
                            <Link to={'/user/' + architectDataFiltered.path} style={linkStyle}>
                                {i18n.t`MAIN__AUTOR-OF-THE-DAY--BUTTON`}
                            </Link>
                        </Button>
                    </Typography>
                    <img alt={architectDataFiltered.name} src={architectDataFiltered.tmp.file.url} className="authorOfTheDay-portrait" />
                </div>
            </div>
        </Container>
    )
}

export default withI18n()(authorOfTheDay);