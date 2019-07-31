import React, { Fragment } from 'react';
import { Container, Typography } from '@material-ui/core';
import { withI18n } from '@lingui/react';
import { useStaticQuery, graphql } from 'gatsby';

import dataFilter from '../../dataFilter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    title: {
        padding: '2rem',
        textAlign: 'center',
        fontSize: '1.5rem'
    },
    paragraph: {
        margin: '1rem 0',
        textIndent: '2rem',
        textAlign: 'justify'
    },
}));

const Description = ({ i18n }) => {
    const classes = useStyles();
    const query = graphql`
    query {
        allContentfulMainPage {
            nodes {
              lang
              title
              text {
                text
              }
              multiText {
                multiText
              }
            }
          }
    }
    `;
    const mainDataFull = useStaticQuery(query);
    const mainDataFiltered = new dataFilter(mainDataFull.allContentfulMainPage.nodes)
        .filterByLang({ lang: i18n._language })
        .unique('title');

    return (
        <Fragment>
            <Container maxWidth='md'>
                <Typography variant="h5" color="inherit" className={classes.title}>
                    {mainDataFiltered.data[0].title}
                </Typography>
                <Typography variant="body1" color="inherit" component="p" className={classes.paragraph}>
                    {mainDataFiltered.data[0].text.text}
                    {/* {mainDataFiltered.data[0].multiText.multiText} */}
                    {/* The Belarusian Union of Architects is 70 years old. Its history is a part of the history of the country and the people,its creative activity. A long and complex path is passed - the path of search and embodiment, mistakes and achievements. And today's Belarus shows the world its beautiful renewed face thanks to the talent and skill, professional skill of the Architects, whose tireless work over the years has increased the treasury of Belarusian architecture. */}
                </Typography>
                {/* <Typography variant="body1" color="inherit" component="p" className={classes.paragraph}>
                    The face of the earth is changing. And only the pen of the chronicler is daring to keep on the old pages of t0he charters the signs of a flowing vortex, disappearing into nothingness. Work hard, chronicler! The wind of time flips through the pages of fate", — wrote Dmitry Balashov, reconstructed the history of not one people according to scattered annalistic, archival sources.
                    </Typography>
                <Typography variant="body1" color="inherit" component="p" className={classes.paragraph}>
                    How did it all begin with us, who stood at the origins of a creative union, who directed and implemented the tasks set by life?
                    </Typography>
                <Typography variant="body1" color="inherit" component="p" className={classes.paragraph}>
                    The historical chronicle, captured in documents, resolutions, resolutions, opens the curtain of time for us, conveys the style of creativity and leadership, the mood and aspirations of several generations of architects. All this is read between the lines of documents and in the author's works. In them - the spirit of the era, complex and ambiguous, life and creative impulses of people who devoted themselves to architecture. In them - the history of the creative community of people. And above all this is the breath of Eternity.
                    </Typography>
                <Typography variant="body1" color="inherit" component="p" className={classes.paragraph}>
                    We turned the last page of the chronicle of the Belarusian Union of Architects. But not the last in his work. Time will enter new names, new ideas, new objects. But it is in the future. And today we bring sincere thanks to all the architects for their work.
                    </Typography> */}
            </Container>
        </ Fragment>
    )
}

// export default Description;
export default withI18n()(Description);