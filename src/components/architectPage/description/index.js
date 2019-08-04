import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  bigAvatar: {
    margin: 'auto',
    width: 200,
    height: 200,
  },
});

export default function Architector(props) {
    const { fullName, yearsOfLife, imageUrl, description } = props.data;
    
    const classes = useStyles();
    return (
      <Container maxWidth="md" id={'description'}>
        <Avatar alt={fullName} src={imageUrl} className={classes.bigAvatar} />
        <Typography align='center' variant='h4'>{fullName}</Typography>
        <Typography align='center' variant='h5'>({yearsOfLife})</Typography>
        <Typography align='justify' variant='subtitle1'>{description}</Typography>
      </Container>
      
    );  
}