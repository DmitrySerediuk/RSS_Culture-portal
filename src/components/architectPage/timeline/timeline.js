import React from 'react';
import {Container, Typography} from '@material-ui/core';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        padding: '50px 0',
        textAlign: 'center'
    },
    title: {
        textAlign: 'center',
        color: '#2F9DFF',
        fontWeight: 'bold'
    },
    yearTitle: {
        color: '#2F9DFF',
        fontWeight: 'bold'
    }
    
}));

const TimeLine = (props) => {
    const classes = useStyles();
    const { timeline } = props;
    const biography = timeline.map((activity, index) => {
        const { year, desc } = activity;
        return (
            <TimelineItem 
                key={index}
                dateText={year}
                dateInnerStyle={{ 
                    background: '#2F9DFF',
                    fontSize: '1.25rem',
                    fontFamily: 'Roboto',
                    color: '#000000'
                }}
                bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <Typography variant="h5" component="h5" className={classes.yearTitle}> 
                    {year}
                </Typography>
                <Typography variant="body1" component="p">
                    {desc}
                </Typography>
            </TimelineItem>
        )
    });
    return (
        <Container maxWidth="md" className={classes.container}>
            <Typography variant="h3" className={classes.title}>
               Timeline
            </Typography>
            <Timeline lineColor={'#ddd'}>
                {biography}
            </Timeline>
        </Container>
    )
}
export default TimeLine;